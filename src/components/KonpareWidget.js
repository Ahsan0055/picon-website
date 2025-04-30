'use client';

import { useEffect } from 'react';

export default function KonpareWidget() {
  useEffect(() => {
    const existingScript = document.getElementById('konpare-snippet');
    if (!existingScript) {
      const script = document.createElement('script');
      script.id = 'konpare-snippet';
      script.src = 'https://konpare.online/konpare-widget/js/konpare_widget.js?key=iF9NW0Rxz9M=';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div id="konpare-widget-root" style={{
      position: 'fixed',
      right: '10px',
      top: '50%',
      transform: 'translateY(-50%)',
      zIndex: 9999,
    }}></div>
  );
}
