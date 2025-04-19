import React from 'react';
import Layout from '@theme/Layout';

export default function Home() {
  return (
    <Layout title="Pentora Docs" description="Documentation for Pentora vulnerability scanner.">
      <main style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '4rem 1rem',
        fontFamily: 'Inter, sans-serif'
      }}>
        <h1>Welcome to Pentora</h1>
        <p style={{ fontSize: '1.2rem', maxWidth: 600, textAlign: 'center' }}>
          Scan your local network for vulnerabilities in minutes.
          Read the docs below to get started.
        </p>
        <a href="/docs/getting-started" style={{
          marginTop: '2rem',
          padding: '0.75rem 1.5rem',
          backgroundColor: '#e63946',
          color: '#fff',
          textDecoration: 'none',
          borderRadius: '8px'
        }}>
          Get Started
        </a>
      </main>
    </Layout>
  );
}
