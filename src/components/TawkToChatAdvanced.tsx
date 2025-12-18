import { useEffect, useState } from 'react';

interface TawkToChatAdvancedProps {
  propertyId: string;
  widgetId: string;
  customization?: {
    backgroundColor?: string;
    bubbleColor?: string;
    position?: 'bottom-right' | 'bottom-left';
    welcomeMessage?: string;
  };
}

export default function TawkToChatAdvanced({ 
  propertyId, 
  widgetId, 
  customization = {} 
}: TawkToChatAdvancedProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Initialize Tawk_API
    if (!window.Tawk_API) {
      window.Tawk_API = {};
      window.Tawk_LoadStart = new Date();
    }

    // Custom configuration for bottom-right positioning
    window.Tawk_API.customStyle = {
      visibility: {
        desktop: {
          position: 'bottom-right',
          xOffset: '20px',
          yOffset: '20px'
        },
        mobile: {
          position: 'bottom-right',
          xOffset: '15px',
          yOffset: '15px'
        }
      }
    };

    // Additional positioning configuration
    window.Tawk_API.embedded = 'tawk_chat_widget';
    
    // Ensure widget appears in bottom-right
    window.Tawk_API.onLoad = function() {
      console.log('✅ Tawk.to chat loaded successfully');
      setIsLoaded(true);
      
      // Force bottom-right positioning
      const chatWidget = document.getElementById('tawk-bubble');
      if (chatWidget) {
        chatWidget.style.position = 'fixed';
        chatWidget.style.bottom = '20px';
        chatWidget.style.right = '20px';
        chatWidget.style.zIndex = '9999';
      }
      
      // Set custom colors if provided
      if (customization.backgroundColor) {
        window.Tawk_API.setAttributes({
          'background-color': customization.backgroundColor
        });
      }
      
      // Set welcome message
      if (customization.welcomeMessage) {
        window.Tawk_API.addEvent('Welcome to Dresberg Global Limited!', {
          message: customization.welcomeMessage
        });
      }
    };

    // Event handlers
    window.Tawk_API.onLoad = function() {
      console.log('✅ Tawk.to chat loaded successfully');
      setIsLoaded(true);
      
      // Set custom colors if provided
      if (customization.backgroundColor) {
        window.Tawk_API.setAttributes({
          'background-color': customization.backgroundColor
        });
      }
      
      // Set welcome message
      if (customization.welcomeMessage) {
        window.Tawk_API.addEvent('Welcome to Dresberg Global Limited!', {
          message: customization.welcomeMessage
        });
      }
    };

    window.Tawk_API.onChatStarted = function() {
      console.log('💬 Chat conversation started');
      
      // Send visitor info to chat
      window.Tawk_API.setAttributes({
        'name': 'Website Visitor',
        'email': '',
        'hash': ''
      }, function(error) {
        if (error) {
          console.error('Error setting attributes:', error);
        }
      });
    };

    window.Tawk_API.onOfflineSubmit = function(data) {
      console.log('📧 Offline message submitted:', data);
      // You can handle offline messages here
    };

    window.Tawk_API.onChatMaximized = function() {
      console.log('📱 Chat maximized');
    };

    window.Tawk_API.onChatMinimized = function() {
      console.log('📱 Chat minimized');
    };

    // Load the script
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://embed.tawk.to/${propertyId}/${widgetId}`;
    script.charset = 'UTF-8';
    script.setAttribute('crossorigin', '*');
    
    document.head.appendChild(script);

    // Cleanup
    return () => {
      const existingScript = document.querySelector(`script[src*="${propertyId}"]`);
      if (existingScript) {
        existingScript.remove();
      }
      setIsLoaded(false);
    };
  }, [propertyId, widgetId, customization]);

  // Optional: Show loading indicator
  return (
    <>
      {!isLoaded && (
        <div className="fixed bottom-6 right-6 z-40">
          <div className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg text-sm">
            Loading chat...
          </div>
        </div>
      )}
    </>
  );
}

// Extend Window interface for TypeScript
declare global {
  interface Window {
    Tawk_API: any;
    Tawk_LoadStart: Date;
  }
}