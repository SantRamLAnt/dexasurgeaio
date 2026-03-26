// @ts-nocheck
"use client";

import { Activity, ShieldCheck } from 'lucide-react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'vapi-widget': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        'public-key'?: string;
        'assistant-id'?: string;
        mode?: string;
        theme?: string;
      };
    }
  }
}

export default function DemoSection() {
  return (
    <section id="demo" className="section" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Background Grid & Glow */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)',
        backgroundSize: '40px 40px',
        opacity: 0.2,
        zIndex: -2,
      }} />
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '80vw',
        height: '40vw',
        background: 'radial-gradient(circle, var(--glow-cyan) 0%, transparent 60%)',
        filter: 'blur(100px)',
        zIndex: -1,
        opacity: 0.3
      }} />

      <div className="container">
        <div className="text-center mb-8" style={{ marginBottom: '64px' }}>
          <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              backgroundColor: 'rgba(14, 165, 233, 0.1)',
              color: 'var(--primary)',
              padding: '6px 12px',
              borderRadius: '4px',
              marginBottom: '24px',
              fontWeight: 700,
              fontSize: '0.85rem',
               textTransform: 'uppercase',
               letterSpacing: '0.1em'
            }}>
              <Activity size={16} /> Live AI Integration
          </div>
          <h2 style={{ fontSize: '3rem', marginBottom: '16px', color: 'var(--foreground)' }}>Test Drive Your New <span style={{ color: 'var(--primary)', textShadow: '0 0 15px var(--glow-cyan)' }}>Dispatcher</span></h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto', lineHeight: 1.6 }}>
            Initiate a real-time voice call with the DEXA Surge AI. The widget below acts as your live dispatch switchboard. Talk naturally as if you had a plumbing emergency.
          </p>
        </div>

        <div style={{
          maxWidth: '800px',
          margin: '0 auto',
          position: 'relative'
        }}>
          {/* Glassmorphism Dashboard Frame */}
          <div style={{
            backgroundColor: 'rgba(15, 23, 42, 0.6)',
            borderRadius: '24px',
            border: '1px solid rgba(255,255,255,0.1)',
            overflow: 'hidden',
            boxShadow: '0 40px 100px -20px rgba(0,0,0,0.8), 0 0 40px rgba(14, 165, 233, 0.1)',
            backdropFilter: 'blur(24px)'
          }}>
            {/* Command Bar Header */}
            <div style={{
              padding: '20px 32px',
              borderBottom: '1px solid rgba(255,255,255,0.1)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              backgroundColor: 'rgba(0,0,0,0.2)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '12px',
                  backgroundColor: 'var(--primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 0 15px var(--glow-cyan)'
                }}>
                  <ShieldCheck size={20} color="white" />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.1rem', margin: 0, color: 'var(--foreground)', fontWeight: 700 }}>Dispatch Control Board</h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', margin: 0, fontFamily: 'monospace' }}>
                    NODE: us-east-1 // STATUS: SECURE
                  </p>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span className="pulse-dot" style={{ backgroundColor: '#10b981', width: '8px', height: '8px', borderRadius: '50%', boxShadow: '0 0 10px #10b981' }}></span>
                <span style={{ color: '#10b981', fontSize: '0.85rem', fontWeight: 600, letterSpacing: '0.05em' }}>SYSTEM ONLINE</span>
              </div>
            </div>

            {/* Vapi Widget Container */}
            <div style={{
              padding: '40px 16px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              width: '100%'
            }}>
              <p style={{ color: 'var(--foreground)', fontSize: '1.2rem', fontWeight: 600, textAlign: 'center', maxWidth: '500px', marginBottom: '32px', zIndex: 20, textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}>
                Click the button below to connect to the live AI voice server. Accept microphone permissions when prompted.
              </p>

              {/* Strict Responsive Container for Vapi Widget */}
              <div style={{
                position: 'relative',
                width: '100%',
                maxWidth: '400px',
                margin: '0 auto',
                height: '450px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
                borderRadius: '16px',
                backgroundColor: '#0a0a0a',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                zIndex: 10,
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
              }}>
                {/* @ts-ignore */}
                <vapi-widget 
                  public-key="8c3a3c1c-48f1-4024-a0c0-0506271b463c" 
                  assistant-id="bd759a3e-1a1d-4658-aa46-f70fbf5c7dee" 
                  mode="voice" 
                  theme="dark"
                  style={{ width: '100%', height: '100%' }}
                ></vapi-widget>
              </div>

               {/* Decorative server scanning lines */}
               <div className="scanline"></div>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes pulse { 0%, 100% { opacity: 0.5; } 50% { opacity: 1; transform: scale(1.2); } }
        .pulse-dot { animation: pulse 2s infinite ease-in-out; }
        @keyframes scan { 0% { top: -10%; opacity: 0; } 10% { opacity: 1; } 90% { opacity: 1; } 100% { top: 110%; opacity: 0; } }
        .scanline {
          position: absolute;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(to right, transparent, var(--primary), transparent);
          box-shadow: 0 0 10px var(--primary);
          animation: scan 4s infinite linear;
          opacity: 0.5;
        }
      `}</style>
    </section>
  );
}
