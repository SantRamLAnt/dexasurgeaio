export default function ContactSection() {
  const inputStyle = {
    width: '100%',
    padding: '16px',
    backgroundColor: 'rgba(2, 6, 23, 0.8)',
    border: '1px solid var(--border)',
    borderRadius: '8px',
    color: 'var(--foreground)',
    fontSize: '1rem',
    outline: 'none',
    transition: 'border-color 0.2s, box-shadow 0.2s',
    fontFamily: 'inherit',
    fontWeight: 500
  };

  return (
    <section id="contact" className="section" style={{ position: 'relative', backgroundColor: 'var(--secondary)', borderTop: '1px solid var(--border)' }}>
      {/* Glow effect */}
      <div style={{
        position: 'absolute',
        bottom: '0',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '60vw',
        height: '30vw',
        background: 'radial-gradient(ellipse at bottom, var(--glow-orange) 0%, transparent 60%)',
        filter: 'blur(80px)',
        zIndex: 0,
        opacity: 0.2
      }} />

      <div className="container" style={{ maxWidth: '800px', position: 'relative', zIndex: 1 }}>
        <div className="text-center mb-8" style={{ marginBottom: '48px' }}>
          <h2 style={{ fontSize: '3rem', marginBottom: '16px', color: 'var(--foreground)' }}>Stop Missing <span style={{ color: 'var(--accent)', textShadow: '0 0 15px var(--glow-orange)' }}>Leads</span></h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', fontWeight: 500 }}>
            Fill out the form below to book a consult and get your AI dispatcher set up.
          </p>
        </div>

        <div style={{
          backgroundColor: 'rgba(255,255,255,0.02)',
          border: '1px solid var(--border)',
          borderRadius: '16px',
          padding: '48px',
          backdropFilter: 'blur(16px)',
          boxShadow: '0 25px 50px -12px rgba(0,0,0,0.8)'
        }}>
           <form action="https://formspree.io/f/xpqoarlg" method="POST" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
              <div style={{ flex: '1 1 200px' }}>
                <label htmlFor="name" style={{ display: 'block', marginBottom: '8px', color: 'var(--text-muted)', fontSize: '0.95rem', fontWeight: 700 }}>Full Name *</label>
                <input required type="text" id="name" name="name" style={inputStyle} placeholder="John Doe" />
              </div>
              <div style={{ flex: '1 1 200px' }}>
                <label htmlFor="phone" style={{ display: 'block', marginBottom: '8px', color: 'var(--text-muted)', fontSize: '0.95rem', fontWeight: 700 }}>Phone Number *</label>
                <input required type="tel" id="phone" name="phone" style={inputStyle} placeholder="(555) 000-0000" />
              </div>
            </div>

            <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
              <div style={{ flex: '1 1 200px' }}>
                <label htmlFor="email" style={{ display: 'block', marginBottom: '8px', color: 'var(--text-muted)', fontSize: '0.95rem', fontWeight: 700 }}>Email Address *</label>
                <input required type="email" id="email" name="email" style={inputStyle} placeholder="john@example.com" />
              </div>
              <div style={{ flex: '1 1 200px' }}>
                <label htmlFor="businessType" style={{ display: 'block', marginBottom: '8px', color: 'var(--text-muted)', fontSize: '0.95rem', fontWeight: 700 }}>Trade Type *</label>
                <select required id="businessType" name="businessType" defaultValue="" style={{ ...inputStyle, cursor: 'pointer', appearance: 'none' }}>
                  <option value="" disabled>Select your trade</option>
                  <option value="plumbing">Plumbing</option>
                  <option value="hvac">HVAC</option>
                  <option value="electrical">Electrical</option>
                  <option value="property_management">Property Management</option>
                  <option value="cleaning">Damage Restoration</option>
                  <option value="other">Other Service</option>
                </select>
              </div>
            </div>

            <button type="submit" style={{
              backgroundColor: 'var(--accent)',
              color: 'white',
              border: 'none',
              padding: '20px',
              borderRadius: '8px',
              fontSize: '1.25rem',
              fontWeight: 800,
              marginTop: '16px',
              cursor: 'pointer',
              transition: 'all 0.2s',
              boxShadow: '0 0 25px var(--glow-orange)'
            }}>
              Book A Consult
            </button>
          </form>
        </div>
      </div>
      <style>{`
        input:focus, select:focus {
          border-color: var(--primary) !important;
          box-shadow: 0 0 15px var(--glow-cyan) !important;
        }
      `}</style>
    </section>
  );
}
