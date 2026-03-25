import { Contact2, CalendarCheck, ShieldCheck, Zap } from 'lucide-react';

export default function SolutionSection() {
  const features = [
    {
      icon: <Contact2 size={24} />,
      title: "Natural UI Voice Model",
      description: "Sounds exactly like a highly-trained, polite dispatcher. Powered by advanced AI inference to handle complex customer emotions instantly."
    },
    {
      icon: <CalendarCheck size={24} />,
      title: "Direct API Calendar Booking",
      description: "It securely checks your dispatch software live via API, books the job onto your calendar, and texts the customer a confirmation link."
    },
    {
      icon: <Zap size={24} />,
      title: "Sub-500ms Human Latency",
      description: "Stop missing weekend emergencies. The neural network answers in milliseconds, capturing high-value jobs on nights and holidays."
    },
    {
      icon: <ShieldCheck size={24} />,
      title: "Enterprise Grade Infrastructure",
      description: "Built on a 99.99% uptime architecture. Call recordings, transcripts, and dispatch payloads are securely encrypted and stored."
    }
  ];

  return (
    <section id="solution" className="section" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Background glow */}
      <div style={{
        position: 'absolute',
        bottom: '-20%',
        right: '-10%',
        width: '50vw',
        height: '50vw',
        background: 'radial-gradient(circle, var(--glow-orange) 0%, transparent 70%)',
        filter: 'blur(120px)',
        zIndex: -1,
        opacity: 0.5
      }} />

      <div className="container">
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '64px', alignItems: 'center' }}>
          
          <div style={{ flex: '1 1 400px' }}>
             <h2 style={{ fontSize: '3rem', marginBottom: '24px', lineHeight: 1.1, color: 'var(--foreground)' }}>
              The Ultimate Dispatcher <br />
              <span style={{ color: 'var(--primary)', textShadow: '0 0 15px var(--glow-cyan)' }}>That Never Sleeps</span>
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', marginBottom: '40px', lineHeight: 1.6 }}>
              DEXA Surge replaces the standard "leave a message" trap with an intelligent AI Voice Receptionist built specifically to book emergency jobs. Seamless API integration, encrypted security, and built for the trades.
            </p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {features.map((feature, i) => (
                <div key={i} style={{ display: 'flex', gap: '20px', padding: '24px', backgroundColor: 'rgba(255,255,255,0.02)', borderRadius: '12px', border: '1px solid var(--border)', backdropFilter: 'blur(10px)' }}>
                  <div style={{ 
                    color: 'var(--primary)', 
                    backgroundColor: 'rgba(14, 165, 233, 0.1)', 
                    padding: '16px', 
                    borderRadius: '8px',
                    height: 'fit-content',
                    border: '1px solid rgba(14, 165, 233, 0.2)'
                  }}>
                    {feature.icon}
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.25rem', marginBottom: '8px', fontWeight: 700, color: 'var(--foreground)' }}>{feature.title}</h4>
                    <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: 1.5 }}>{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ flex: '1 1 400px', position: 'relative' }}>
              <div style={{
                backgroundColor: 'rgba(2, 6, 23, 0.7)',
                border: '1px solid var(--border)',
                borderRadius: '16px',
                padding: '32px',
                backdropFilter: 'blur(20px)',
                boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5), inset 0 0 0 1px rgba(255,255,255,0.05)',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid var(--border)', paddingBottom: '16px', marginBottom: '24px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#ef4444', boxShadow: '0 0 10px #ef4444' }}></div>
                    <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#f59e0b', boxShadow: '0 0 10px #f59e0b' }}></div>
                    <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#10b981', boxShadow: '0 0 10px #10b981' }}></div>
                    <div style={{ marginLeft: '12px', fontSize: '0.85rem', color: 'var(--primary)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Terminal / Live Console</div>
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', fontSize: '0.95rem', fontWeight: 500, fontFamily: 'monospace' }}>
                  <div style={{ color: 'var(--text-muted)' }}>[11:02:45.312 PM] Webhook hit: Incoming SIP call (555) 792-1044...</div>
                  <div style={{ color: 'var(--primary)' }}>&gt; Model Output: "Precision Plumbing emergency line. How can I help?"</div>
                  <div style={{ color: 'var(--foreground)' }}>&gt; Deepgram Transcript: "My pipe burst and water is everywhere!"</div>
                  <div style={{ color: 'var(--primary)' }}>&gt; Model Output: "I'll dispatch an after-hours tech right away. Address?"</div>
                  <div style={{ color: 'var(--foreground)' }}>&gt; Deepgram Transcript: "742 Evergreen Terrace."</div>
                  <div style={{ color: 'var(--accent)', marginTop: '8px', padding: '16px', backgroundColor: 'rgba(249, 115, 22, 0.1)', borderRadius: '8px', border: '1px solid rgba(249, 115, 22, 0.2)', textShadow: '0 0 10px var(--glow-orange)' }}>
                    <span style={{ display: 'inline-block', marginBottom: '4px' }}>[SUCCESS] API POST /v1/jobs/calendar -- STATUS 201</span><br />
                    <span style={{ display: 'inline-block', marginBottom: '4px' }}>[SUCCESS] Twilio SMS dispatched to (555) 792-1044</span><br />
                    <span>[LOG] Estimated Job Value Captured: $850+</span>
                  </div>
                </div>
              </div>
          </div>

        </div>
      </div>
    </section>
  );
}
