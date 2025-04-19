import React from 'react';
import Layout from '@theme/Layout';

export default function NotFound() {
  return (
    <Layout title="Not Found">
      <div style={{
        padding: '5rem',
        textAlign: 'center',
        fontFamily: 'Inter, sans-serif'
      }}>
        <h1>404 – Page Not Found</h1>
        <p>The page you are looking for does not exist.</p>
        <a href="/" style={{ color: '#e63946', textDecoration: 'underline' }}>
          Go back to homepage
        </a>
      </div>
    </Layout>
  );
}
