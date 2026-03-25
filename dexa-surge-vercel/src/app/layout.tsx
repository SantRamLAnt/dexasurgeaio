import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], weight: ['400', '500', '600', '700', '800'] });

export const metadata: Metadata = {
  title: "DEXA Surge AI - Tactical Voice Dispatch",
  description: "24/7 AI Voice Receptionist for Plumbing and HVAC businesses to capture leads and book emergency dispatch.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        {/* Load Vapi widget script as requested */}
        <Script 
          src="https://unpkg.com/@vapi-ai/client-sdk-react/dist/embed/widget.umd.js" 
          strategy="lazyOnload" 
        />
      </body>
    </html>
  );
}

function Navbar() {
  return (
    <header style={{
      position: 'fixed',
      top: 0,
      width: '100%',
      backgroundColor: 'rgba(2, 6, 23, 0.8)',
      backdropFilter: 'blur(16px)',
      borderBottom: '1px solid var(--border)',
      zIndex: 100,
      padding: '16px 0',
      boxShadow: '0 4px 30px rgba(0, 0, 0, 0.5)'
    }}>
      <nav style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '0 5%', /* Adjusted padding to fit within header's 16px 0 */
          /* Removed position: 'absolute', top, left, right as header is already fixed */
          /* Removed borderBottom, backgroundColor, backdropFilter as header already has them */
          zIndex: 100, /* Keep zIndex if needed for nav specifically */
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <img src="/logo.png" alt="DEXA Surge AI Logo" style={{ width: '40px', height: '40px', objectFit: 'contain', borderRadius: '8px' }} />
            <div style={{ fontWeight: 800, fontSize: '1.25rem', letterSpacing: '-0.5px' }}>
              <span style={{ color: 'var(--foreground)' }}>DEXA </span>
              <span style={{ color: 'var(--primary)', textShadow: '0 0 10px var(--glow-cyan)' }}>Surge AI</span>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '24px' }} className="nav-links"> {/* Changed display: 'none' to 'flex' to show links */}
            <a href="#problem" style={{ color: 'var(--text-muted)', fontSize: '0.95rem', fontWeight: 500, transition: 'color 0.2s' }}>The Cost</a>
            <a href="#demo" style={{ color: 'var(--text-muted)', fontSize: '0.95rem', fontWeight: 500, transition: 'color 0.2s' }}>Test Drive</a>
            <a href="#pricing" style={{ color: 'var(--text-muted)', fontSize: '0.95rem', fontWeight: 500, transition: 'color 0.2s' }}>Pricing</a>
          </div>
        <a href="https://calendly.com/luis-ramirez-dexasurgeai/30min" 
           target="_blank" 
           rel="noopener noreferrer"
           style={{
          backgroundColor: 'var(--accent)',
          color: 'white',
          padding: '10px 20px',
          borderRadius: '4px',
          fontSize: '0.95rem',
          fontWeight: 700,
          transition: 'all 0.2s',
          boxShadow: '0 0 15px var(--glow-orange)'
        }}>
          Book Consult
        </a>
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer style={{ backgroundColor: 'var(--background)', color: 'var(--text-muted)', padding: '64px 0', marginTop: '64px', borderTop: '1px solid var(--border)' }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <div style={{ fontWeight: 800, fontSize: '1.5rem', marginBottom: '16px', color: 'white' }}>
          DEXA <span style={{ color: 'var(--primary)' }}>Surge AI</span>
        </div>
        <p style={{ fontSize: '1rem', marginBottom: '24px' }}>
          Delivering 24/7 AI Voice Receptionist services for top-tier Plumbing & HVAC fleets.
        </p>
        <p style={{ fontSize: '0.9rem' }}>
          &copy; {new Date().getFullYear()} DEXA Surge AI. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
