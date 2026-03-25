import { AlertTriangle, DollarSign, Clock } from 'lucide-react';

export default function ProblemSection() {
  const problems = [
    {
      icon: <AlertTriangle size={32} color="var(--accent)" />,
      title: "Emergencies don't wait for the beep.",
      description: "When a customer has a burst pipe, they don't leave voicemails. They hang up and call the next plumber on Google. If you don't answer, you lose."
    },
    {
      icon: <DollarSign size={32} color="var(--accent)" />,
      title: "Leaking Revenue",
      description: "Every missed call during a busy weekend or after hours is an emergency job handed directly to your competition."
    },
    {
      icon: <Clock size={32} color="var(--accent)" />,
      title: "Wasted Dispatch Time",
      description: "Your team spends hours playing phone tag with cold leads instead of dispatching techs to actual paying jobs."
    }
  ];

  return (
    <section id="problem" className="section" style={{ backgroundColor: 'var(--secondary)' }}>
      <div className="container">
        
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              backgroundColor: 'rgba(239, 68, 68, 0.1)',
              color: '#ef4444',
              padding: '6px 12px',
              borderRadius: '4px',
              marginBottom: '24px',
              fontWeight: 700,
              fontSize: '0.85rem',
               textTransform: 'uppercase',
               letterSpacing: '0.1em'
            }}>
              <AlertTriangle size={16} /> The Reality
            </div>
            <h2 style={{ fontSize: '3rem', marginBottom: '24px', lineHeight: 1.1, color: 'var(--foreground)' }}>
              Missed Calls = <span style={{ color: '#ef4444', textShadow: '0 0 15px rgba(239,68,68,0.3)' }}>Lost Revenue</span>
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto', lineHeight: 1.6 }}>
              If your phone rings and nobody answers, that lead is dead. In the local service industry, the first company to answer the phone gets the job. Period.
            </p>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '32px'
        }}>
          {problems.map((problem, i) => (
            <div key={i} style={{
              backgroundColor: 'rgba(255,255,255,0.02)',
              border: '1px solid var(--border)',
              borderRadius: '16px',
              padding: '40px 32px',
              backdropFilter: 'blur(10px)',
              transition: 'transform 0.2s',
              cursor: 'default',
            }}
             className="premium-card">
              <div style={{ 
                width: '64px', 
                height: '64px', 
                borderRadius: '12px', 
                backgroundColor: 'rgba(249, 115, 22, 0.1)', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                marginBottom: '24px',
                border: '1px solid rgba(249, 115, 22, 0.2)'
              }}>
                {problem.icon}
              </div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '16px', color: 'var(--foreground)' }}>{problem.title}</h3>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.6, fontSize: '1.05rem' }}>{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        .premium-card:hover {
          transform: translateY(-5px);
          border-color: rgba(249, 115, 22, 0.3);
          box-shadow: 0 10px 30px rgba(0,0,0,0.5), inset 0 0 20px rgba(249, 115, 22, 0.05);
        }
      `}</style>
    </section>
  );
}
