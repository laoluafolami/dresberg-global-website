// Chat Storage Utilities for Dresbot
export interface Message {
  id: string;
  text: string;
  sender: 'bot' | 'user';
  timestamp: Date;
  options?: string[];
}

export interface UserData {
  name: string;
  email: string;
  confirmed: boolean;
}

export interface ChatSession {
  sessionId: string;
  userId: string;
  userData: UserData;
  messages: Message[];
  startTime: Date;
  lastActivity: Date;
  status: 'active' | 'ended';
}

export interface ChatAnalytics {
  totalSessions: number;
  totalMessages: number;
  averageSessionLength: number;
  mostActiveUsers: { email: string; sessionCount: number }[];
  commonQueries: string[];
}

export class ChatStorage {
  private static readonly USER_DATA_KEY = 'dresbot_user';
  private static readonly SESSIONS_KEY = 'dresbot_sessions';
  private static readonly ANALYTICS_KEY = 'dresbot_analytics';

  // User Data Management
  static saveUserData(userData: UserData): void {
    try {
      localStorage.setItem(this.USER_DATA_KEY, JSON.stringify(userData));
    } catch (error) {
      console.error('Failed to save user data:', error);
    }
  }

  static getUserData(): UserData | null {
    try {
      const data = localStorage.getItem(this.USER_DATA_KEY);
      return data ? JSON.parse(data) : null;
    } catch (error) {
      console.error('Failed to get user data:', error);
      return null;
    }
  }

  // Session Management
  static saveChatSession(session: ChatSession): void {
    try {
      const sessions = this.getAllSessions();
      const existingIndex = sessions.findIndex(s => s.sessionId === session.sessionId);
      
      if (existingIndex >= 0) {
        sessions[existingIndex] = session;
      } else {
        sessions.push(session);
      }
      
      // Keep only last 50 sessions to prevent storage bloat
      const recentSessions = sessions.slice(-50);
      localStorage.setItem(this.SESSIONS_KEY, JSON.stringify(recentSessions));
      
      // Update analytics
      this.updateAnalytics(session);
    } catch (error) {
      console.error('Failed to save chat session:', error);
    }
  }

  static getAllSessions(): ChatSession[] {
    try {
      const data = localStorage.getItem(this.SESSIONS_KEY);
      if (!data) return [];
      
      const sessions = JSON.parse(data);
      // Convert date strings back to Date objects
      return sessions.map((session: any) => ({
        ...session,
        startTime: new Date(session.startTime),
        lastActivity: new Date(session.lastActivity),
        messages: session.messages.map((msg: any) => ({
          ...msg,
          timestamp: new Date(msg.timestamp)
        }))
      }));
    } catch (error) {
      console.error('Failed to get sessions:', error);
      return [];
    }
  }

  static getSession(sessionId: string): ChatSession | null {
    const sessions = this.getAllSessions();
    return sessions.find(s => s.sessionId === sessionId) || null;
  }

  static getUserChatHistory(userEmail: string): ChatSession[] {
    const sessions = this.getAllSessions();
    return sessions.filter(s => s.userData.email === userEmail);
  }

  // Analytics
  private static updateAnalytics(session: ChatSession): void {
    try {
      const analytics = this.getAnalytics();
      
      // Update session count
      analytics.totalSessions = this.getAllSessions().length;
      
      // Update message count
      analytics.totalMessages = this.getAllSessions()
        .reduce((total, s) => total + s.messages.length, 0);
      
      // Update average session length
      const allSessions = this.getAllSessions();
      const sessionLengths = allSessions.map(s => 
        s.lastActivity.getTime() - s.startTime.getTime()
      );
      analytics.averageSessionLength = sessionLengths.length > 0 
        ? sessionLengths.reduce((a, b) => a + b, 0) / sessionLengths.length 
        : 0;
      
      // Update most active users
      const userSessionCounts = new Map<string, number>();
      allSessions.forEach(s => {
        if (s.userData.email) {
          userSessionCounts.set(
            s.userData.email, 
            (userSessionCounts.get(s.userData.email) || 0) + 1
          );
        }
      });
      
      analytics.mostActiveUsers = Array.from(userSessionCounts.entries())
        .map(([email, count]) => ({ email, sessionCount: count }))
        .sort((a, b) => b.sessionCount - a.sessionCount)
        .slice(0, 10);
      
      localStorage.setItem(this.ANALYTICS_KEY, JSON.stringify(analytics));
    } catch (error) {
      console.error('Failed to update analytics:', error);
    }
  }

  static getAnalytics(): ChatAnalytics {
    try {
      const data = localStorage.getItem(this.ANALYTICS_KEY);
      return data ? JSON.parse(data) : {
        totalSessions: 0,
        totalMessages: 0,
        averageSessionLength: 0,
        mostActiveUsers: [],
        commonQueries: []
      };
    } catch (error) {
      console.error('Failed to get analytics:', error);
      return {
        totalSessions: 0,
        totalMessages: 0,
        averageSessionLength: 0,
        mostActiveUsers: [],
        commonQueries: []
      };
    }
  }

  // Data Export/Import
  static exportChatData(): {
    userData: UserData | null;
    sessions: ChatSession[];
    analytics: ChatAnalytics;
    exportDate: string;
  } {
    return {
      userData: this.getUserData(),
      sessions: this.getAllSessions(),
      analytics: this.getAnalytics(),
      exportDate: new Date().toISOString()
    };
  }

  static exportAsJSON(): string {
    return JSON.stringify(this.exportChatData(), null, 2);
  }

  static exportAsCSV(): string {
    const sessions = this.getAllSessions();
    const headers = ['Session ID', 'User Email', 'User Name', 'Start Time', 'End Time', 'Message Count', 'Status'];
    
    const rows = sessions.map(session => [
      session.sessionId,
      session.userData.email || 'Anonymous',
      session.userData.name || 'Unknown',
      session.startTime.toISOString(),
      session.lastActivity.toISOString(),
      session.messages.length.toString(),
      session.status
    ]);
    
    return [headers, ...rows].map(row => row.join(',')).join('\n');
  }

  // Data Management
  static clearUserData(): void {
    localStorage.removeItem(this.USER_DATA_KEY);
  }

  static clearAllSessions(): void {
    localStorage.removeItem(this.SESSIONS_KEY);
  }

  static clearAnalytics(): void {
    localStorage.removeItem(this.ANALYTICS_KEY);
  }

  static clearAllData(): void {
    this.clearUserData();
    this.clearAllSessions();
    this.clearAnalytics();
  }

  // Search and Filter
  static searchSessions(query: string): ChatSession[] {
    const sessions = this.getAllSessions();
    const lowerQuery = query.toLowerCase();
    
    return sessions.filter(session => 
      session.userData.name?.toLowerCase().includes(lowerQuery) ||
      session.userData.email?.toLowerCase().includes(lowerQuery) ||
      session.messages.some(msg => 
        msg.text.toLowerCase().includes(lowerQuery)
      )
    );
  }

  static getSessionsByDateRange(startDate: Date, endDate: Date): ChatSession[] {
    const sessions = this.getAllSessions();
    return sessions.filter(session => 
      session.startTime >= startDate && session.startTime <= endDate
    );
  }

  static getActiveUsers(): UserData[] {
    const sessions = this.getAllSessions();
    const uniqueUsers = new Map<string, UserData>();
    
    sessions.forEach(session => {
      if (session.userData.email && session.userData.confirmed) {
        uniqueUsers.set(session.userData.email, session.userData);
      }
    });
    
    return Array.from(uniqueUsers.values());
  }
}

// Utility functions for easy access
export const chatStorage = {
  // Quick access methods
  saveUser: ChatStorage.saveUserData,
  getUser: ChatStorage.getUserData,
  saveSession: ChatStorage.saveChatSession,
  getSessions: ChatStorage.getAllSessions,
  getUserHistory: ChatStorage.getUserChatHistory,
  getAnalytics: ChatStorage.getAnalytics,
  exportData: ChatStorage.exportChatData,
  search: ChatStorage.searchSessions,
  clear: ChatStorage.clearAllData
};