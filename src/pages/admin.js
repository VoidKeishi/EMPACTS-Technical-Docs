import React, { useEffect } from 'react';
import Layout from '@theme/Layout';

export default function Admin() {
  useEffect(() => {
    // Load Decap CMS
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/decap-cms@^3.0.0/dist/decap-cms.js';
    script.async = true;
    document.head.appendChild(script);

    return () => {
      // Cleanup script on unmount
      if (script.parentNode) script.parentNode.removeChild(script);
    };
  }, []);

  return (
    <Layout title="Admin" description="Content Management System">
      <div id="decap-cms" style={{ minHeight: '80vh' }}></div>
    </Layout>
  );
}
