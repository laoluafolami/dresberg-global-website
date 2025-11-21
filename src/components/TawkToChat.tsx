import { useEffect } from 'react';

interface TawkToChatProps {
  propertyId: string;
  widgetId: string;
}

export default function TawkToChat({ propertyId, widgetId }: TawkToChatProps) {
  useEffect(() => {
    // Tawk.to Live Chat Script
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://embed.tawk.to/${propertyId}/${widgetId}`;
    script.charset = 'UTF-8';
    script.setAttribute('crossorigin', '*');
    
    // Add script to document
    document.head.appendChild(script);

    // Initialize Tawk_API if it doesn't exist
    if (!window.Tawk_API) {
      window.Tawk_API = {};
      window.Tawk_LoadStart = new Date();
    }

    // Optional: Customize Tawk.to behavior
    window.Tawk_API.onLoad = function() {
      console.log('✅ Tawk.to chat loaded successfully');
    };

    // Optional: Hide chat initially and show after page loads
    window.Tawk_API.onChatMaximized = function() {
      console.log('💬 Chat maximized');
    };

    window.Tawk_API.onChatMinimized = function() {
      console.log('📱 Chat minimized');
    };

    // Cleanup function
    return () => {
      // Remove script when component unmounts
      const existingScript = document.querySelector(`script[src*="${propertyId}"]`);
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, [propertyId, widgetId]);

  return null; // This component doesn't render anything visible
}

// Extend Window interface for TypeScript
declare global {
  interface Window {
    Tawk_API: any;
    Tawk_LoadStart: Date;
  }
}