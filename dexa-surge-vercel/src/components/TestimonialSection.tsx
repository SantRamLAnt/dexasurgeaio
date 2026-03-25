import { Star } from 'lucide-react';

export default function TestimonialSection() {
  const testimonials = [
    {
      quote: "We used to miss about 30% of emergency calls on weekends because my guys were under a house or driving. Since we installed DEXA Surge AI, we haven't missed a single job. It paid for itself on the first Saturday.",
      author: "Mike Torres",
      role: "Owner, Prime HVAC & Plumbing",
      rating: 5
    },
    {
      quote: "I was skeptical about a voice AI answering our phones, but the customers don't even know it's not a real person. It books the job right into ServiceTitan while I'm sleeping. Absolute game changer.",
      author: "Sarah Lewis",
      role: "Operations Manager, Precision AC",
      rating: 5
    },
    {
      quote: "Setup took literally 48 hours. By Friday night we had our new AI dispatcher answering the emergency line. Our revenue has grown 15% just by capturing the leads we used to ignore.",
      author: "David Reed",
      role: "Director, Apex Property Services",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="section" style={{ backgroundColor: 'var(--background)' }}>
      <div className="container">
        <div className="text-center mb-8" style={{ marginBottom: '64px' }}>
          <h2 style={{ fontSize: '3rem', marginBottom: '16px', color: 'var(--foreground)' }}>Hear From The Trade</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
            Real plumbing and HVAC owners turning missed calls into booked jobs with our Agent.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '32px'
        }}>
          {testimonials.map((t, i) => (
            <div key={i} style={{
              backgroundColor: 'rgba(255,255,255,0.02)',
              border: '1px solid var(--border)',
              borderRadius: '16px',
              padding: '40px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              boxShadow: '0 4px 20px rgba(0,0,0,0.5)',
              backdropFilter: 'blur(10px)'
            }}>
              <div>
                <div style={{ display: 'flex', gap: '4px', marginBottom: '24px' }}>
                  {[...Array(t.rating)].map((_, j) => (
                    <Star key={j} size={20} color="var(--accent)" fill="var(--accent)" style={{ filter: 'drop-shadow(0 0 5px var(--glow-orange))' }} />
                  ))}
                </div>
                <p style={{ fontSize: '1.1rem', lineHeight: 1.6, marginBottom: '32px', fontStyle: 'italic', color: 'var(--text-muted)' }}>
                  "{t.quote}"
                </p>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(14, 165, 233, 0.1)',
                  border: '1px solid rgba(14, 165, 233, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 800,
                  fontSize: '1.5rem',
                  color: 'var(--primary)',
                  boxShadow: '0 0 15px var(--glow-cyan)'
                }}>
                  {t.author.charAt(0)}
                </div>
                <div>
                  <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--foreground)' }}>{t.author}</h4>
                  <p style={{ color: 'var(--primary)', fontSize: '0.95rem', fontWeight: 500 }}>{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
