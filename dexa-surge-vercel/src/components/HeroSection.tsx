import { PhoneCall, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="section" style={{ 
      paddingTop: '160px',
      paddingBottom: '80px',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background Glows */}
      <div style={{
        position: 'absolute',
        top: '-10%',
        left: '20%',
        width: '60vw',
        height: '60vw',
        background: 'radial-gradient(circle, var(--glow-cyan) 0%, transparent 60%)',
        filter: 'blur(100px)',
        zIndex: -1,
        opacity: 0.6
      }} />

      <div className="container">
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', maxWidth: '900px', margin: '0 auto' }} className="animate-fade-in">
          
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            backgroundColor: 'rgba(14, 165, 233, 0.1)',
            color: 'var(--primary)',
            padding: '8px 16px',
            borderRadius: '100px',
            marginBottom: '32px',
            fontWeight: 700,
            fontSize: '0.9rem',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            border: '1px solid rgba(14, 165, 233, 0.2)',
            boxShadow: '0 0 20px rgba(14, 165, 233, 0.1)'
          }}>
            <span style={{ width: '8px', height: '8px', backgroundColor: 'var(--primary)', borderRadius: '50%', boxShadow: '0 0 10px var(--primary)' }}></span>
            AI Dispatch Command Center
          </div>
          
          <h1 style={{ 
            fontSize: 'clamp(3rem, 6vw, 5rem)', 
            marginBottom: '24px',
            lineHeight: 1.1,
            color: 'var(--foreground)',
            textShadow: '0 4px 20px rgba(0,0,0,0.5)'
          }}>
            Stop Losing $800 Weekend Jobs to the <span style={{ color: 'var(--accent)', textShadow: '0 0 20px var(--glow-orange)' }}>Guy Down the Street.</span>
          </h1>
          
          <p style={{
            fontSize: '1.25rem',
            color: 'var(--text-muted)',
            marginBottom: '48px',
            lineHeight: 1.6,
            maxWidth: '800px'
          }}>
            Capture every missed call, emergency leak, and late-night inquiry with a 24/7 AI Voice Receptionist that actually books the job directly into your calendar.
          </p>
          
          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '40px' }}>
            <a href="#demo" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              backgroundColor: 'var(--primary)',
              color: 'white',
              padding: '18px 36px',
              borderRadius: '8px',
              fontSize: '1.1rem',
              fontWeight: 700,
              transition: 'all 0.2s',
              boxShadow: '0 0 25px var(--glow-cyan)',
              textDecoration: 'none'
            }}>
              Test Drive Dispatcher <ArrowRight size={20} />
            </a>
            
            <a href="https://calendly.com/luis-ramirez-dexasurgeai/30min" 
               target="_blank" 
               rel="noopener noreferrer"
               style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255,255,255,0.1)',
              backdropFilter: 'blur(10px)',
              color: 'var(--foreground)',
              padding: '18px 36px',
              borderRadius: '8px',
              fontSize: '1.1rem',
              fontWeight: 700,
              transition: 'all 0.2s',
              textDecoration: 'none'
            }}>
               <PhoneCall size={20} /> Book a Consult
            </a>
          </div>
          
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '32px', color: 'var(--text-muted)', fontSize: '1rem', fontWeight: 600 }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><CheckCircle2 size={20} color="var(--primary)" /> 100% Uptime</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><CheckCircle2 size={20} color="var(--primary)" /> Instant Answering</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><CheckCircle2 size={20} color="var(--primary)" /> Direct Calendar Booking</span>
          </div>
        </div>
      </div>

      {/* Trust Logos Banner */}
      <div style={{
        marginTop: '100px',
        paddingTop: '40px',
        paddingBottom: '40px',
        borderTop: '1px solid var(--border)',
        borderBottom: '1px solid var(--border)',
        backgroundColor: 'rgba(2, 6, 23, 0.5)',
        backdropFilter: 'blur(10px)'
      }}>
        <div className="container text-center">
          <div style={{ marginTop: '48px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 700, marginBottom: '24px' }}>
              Trusted by Top Local Service Fleets
            </p>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 'clamp(32px, 6vw, 80px)', flexWrap: 'wrap', opacity: 0.5, filter: 'grayscale(100%)' }}>
            <div style={{ fontSize: '1.75rem', fontWeight: 800, fontFamily: 'serif', color: 'var(--foreground)' }}>Apex Plumbing</div>
            <div style={{ fontSize: '1.75rem', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--foreground)' }}><div style={{width:'24px', height:'24px', background:'currentColor', borderRadius:'4px'}}></div> Elite HVAC</div>
            <div style={{ fontSize: '1.75rem', fontWeight: 700, fontStyle: 'italic', color: 'var(--foreground)' }}>Precision AC</div>
            <div style={{ fontSize: '1.75rem', fontWeight: 800, letterSpacing: '-2px', color: 'var(--foreground)' }}>TRU-REPAIR</div>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}
