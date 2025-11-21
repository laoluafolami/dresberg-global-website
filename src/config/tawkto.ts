// Tawk.to Configuration
export const TAWKTO_CONFIG = {
  // Your actual Tawk.to credentials
  PROPERTY_ID: '68f8b7a55507da195436611e', // Your Property ID from Tawk.to
  WIDGET_ID: '1j85oqonl',                  // Your Widget ID from Tawk.to
  
  // Customization options
  customization: {
    backgroundColor: '#1e40af', // Blue theme to match your site
    bubbleColor: '#3b82f6',
    position: 'bottom-right' as const,
    welcomeMessage: 'Welcome to Dresberg Global Limited! How can we help you explore global opportunities today?'
  },
  
  // Chat settings
  settings: {
    hideWhenOffline: false,
    showOnMobile: true,
    showOnDesktop: true,
    autoStart: false, // Don't auto-start chat
    soundEnabled: true,
    
    // Business hours (optional)
    businessHours: {
      enabled: true,
      timezone: 'Africa/Lagos', // Nigerian timezone
      schedule: {
        monday: { start: '09:00', end: '18:00' },
        tuesday: { start: '09:00', end: '18:00' },
        wednesday: { start: '09:00', end: '18:00' },
        thursday: { start: '09:00', end: '18:00' },
        friday: { start: '09:00', end: '18:00' },
        saturday: { start: '10:00', end: '16:00' },
        sunday: { start: 'closed', end: 'closed' }
      }
    }
  },
  
  // Pre-chat form fields
  preChatForm: {
    enabled: true,
    fields: [
      { name: 'name', required: true, label: 'Your Name' },
      { name: 'email', required: true, label: 'Email Address' },
      { name: 'company', required: false, label: 'Company Name' },
      { name: 'service', required: false, label: 'Service Interest', 
        options: ['E-Commerce', 'Travel & Global Mobility', 'Learning & Development', 'General Inquiry'] }
    ]
  },
  
  // Offline form
  offlineForm: {
    enabled: true,
    message: 'We\'re currently offline, but we\'d love to hear from you! Please leave a message and we\'ll get back to you within 24 hours.',
    fields: [
      { name: 'name', required: true },
      { name: 'email', required: true },
      { name: 'message', required: true }
    ]
  }
};

// Environment-specific settings
export const getTawkToConfig = () => {
  const isDevelopment = import.meta.env.DEV;
  
  return {
    ...TAWKTO_CONFIG,
    // Use different property for development if needed
    PROPERTY_ID: isDevelopment ? TAWKTO_CONFIG.PROPERTY_ID : TAWKTO_CONFIG.PROPERTY_ID,
    WIDGET_ID: isDevelopment ? TAWKTO_CONFIG.WIDGET_ID : TAWKTO_CONFIG.WIDGET_ID
  };
};