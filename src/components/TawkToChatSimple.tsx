import { useEffect } from 'react';

interface TawkToChatSimpleProps {
  propertyId: string;
  widgetId: string;
}

export default function TawkToChatSimple({ propertyId, widgetId }: TawkToChatSimpleProps) {
  useEffect(() => {
    // Initialize Tawk_API
    if (!window.Tawk_API) {
      window.Tawk_API = {};
      window.Tawk_LoadStart = new Date();
    }

    // Configure for bottom-right positioning
    window.Tawk_API.onLoad = function() {
      console.log('✅ Tawk.to chat loaded - positioned bottom-right');
      
      // Ensure bottom-right positioning with custom CSS
      const style = document.createElement('style');
      style.textContent = `
        .tawk-widget, #tawk-bubble {
          position: fixed !important;
          bottom: 20px !important;
          right: 20px !important;
          z-index: 9999 !important;
        }
        
        @media (max-width: 768px) {
          .tawk-widget, #tawk-bubble {
            bottom: 15px !important;
            right: 15px !important;
          }
        }
      `;
      document.head.appendChild(style);
    };

    // Load Tawk.to script
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
    };
  }, [propertyId, widgetId]);

  return null;
}

// TypeScript declarations
declare global {
  interface Window {
    Tawk_API: any;
    Tawk_LoadStart: Date;
  }
}