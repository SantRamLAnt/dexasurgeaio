import { Check } from 'lucide-react';

export default function PricingSection() {
  const tiers = [
    {
      name: "Starter",
      subtitle: "(After-Hours Capture)",
      price: "$1,500",
      period: "/month",
      setup: "+$2,500 Setup",
      features: [
        "After-hours / weekends / holidays coverage",
        "Caller intake",
        "Urgency triage",
        "SMS/email notifications"
      ]
    },
    {
      name: "Growth",
      subtitle: "(24/7 Coverage)",
      price: "$2,500",
      period: "/month",
      setup: "+$2,500 Setup",
      popular: true,
      features: [
        "Everything in Starter",
        "Daytime overflow",
        "Full missed-call coverage",
        "Monthly workflow review"
      ]
    },
    {
      name: "Pro",
      subtitle: "(Advanced)",
      price: "$3,565",
      period: "/month",
      setup: "+$3,500 Setup",
      features: [
        "Everything in Growth",
        "Bilingual support (English/Spanish)",
        "CRM / Zapier integrations",
        "Custom escalation paths"
      ]
    },
    {
      name: "Enterprise",
      subtitle: "(Custom Volume & Multi-Location)",
      price: "Custom",
      period: "",
      setup: "",
      ctaText: "Email for Enterprise",
      ctaLink: "mailto:luis.ramirez@dexasurgeai.org?subject=Enterprise%20Inquiry",
      features: [
        "Dedicated Multi-Location Routing",
        "Advanced Custom API Integrations",
        "Priority 24/7 Account Rep",
        "Custom Compliance Logging"
      ]
    }
  ];

  return (
    <section id="pricing" className="section" style={{ backgroundColor: 'var(--secondary)', borderTop: '1px solid var(--border)', position: 'relative' }}>
       <div style={{
        position: 'absolute',
        top: '20%',
        right: '-10%',
        width: '40vw',
        height: '40vw',
        background: 'radial-gradient(circle, var(--glow-cyan) 0%, transparent 70%)',
        filter: 'blur(100px)',
        zIndex: -1,
        opacity: 0.3
      }} />

      <div className="container" style={{ maxWidth: '1400px' }}>
        <div className="text-center mb-8" style={{ marginBottom: '64px' }}>
          <h2 style={{ fontSize: '3rem', marginBottom: '16px', color: 'var(--foreground)' }}>Straightforward Pricing</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
            Pay a fraction of what an after-hours answering service costs, with none of the hassle.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '24px',
          alignItems: 'stretch'
        }}>
          {tiers.map((tier, i) => (
            <div key={i} style={{
              backgroundColor: 'rgba(2, 6, 23, 0.7)',
              color: 'var(--foreground)',
              border: tier.popular ? '1px solid var(--primary)' : '1px solid var(--border)',
              borderRadius: '16px',
              padding: '40px 32px',
              position: 'relative',
              boxShadow: tier.popular ? '0 30px 60px -12px rgba(0,0,0,0.8), 0 0 40px rgba(14, 165, 233, 0.2)' : '0 10px 30px rgba(0,0,0,0.5)',
              transform: tier.popular ? 'scale(1.02)' : 'scale(1)',
              zIndex: tier.popular ? 10 : 1,
              backdropFilter: 'blur(10px)',
              display: 'flex',
              flexDirection: 'column'
            }}>
              {tier.popular && (
                <div style={{
                  position: 'absolute',
                  top: '-16px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  backgroundColor: 'var(--primary)',
                  color: 'white',
                  padding: '6px 20px',
                  borderRadius: '100px',
                  fontSize: '0.85rem',
                  fontWeight: 800,
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  boxShadow: '0 0 20px var(--glow-cyan)'
                }}>Most Popular</div>
              )}
              
              <h3 style={{ fontSize: '1.75rem', marginBottom: '4px', color: tier.popular ? 'var(--primary)' : 'var(--foreground)', textShadow: tier.popular ? '0 0 10px var(--glow-cyan)' : 'none' }}>{tier.name}</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '24px', fontWeight: 600 }}>{tier.subtitle}</p>
              
              <div style={{ marginBottom: '8px' }}>
                <span style={{ fontSize: tier.price === 'Custom' ? '2.5rem' : '3rem', fontWeight: 800 }}>{tier.price}</span>
                <span style={{ color: 'var(--text-muted)', fontWeight: 600 }}>{tier.period}</span>
              </div>
              <div style={{ color: 'var(--accent)', fontWeight: 700, fontSize: '1rem', marginBottom: '32px', minHeight: '24px' }}>
                {tier.setup}
              </div>
              
              <a href={tier.ctaLink || "https://calendly.com/luis-ramirez-dexasurgeai/30min"} 
                 target={tier.ctaLink ? "_self" : "_blank"} 
                 rel="noopener noreferrer"
                 style={{
                display: 'block',
                width: '100%',
                textAlign: 'center',
                backgroundColor: tier.popular ? 'var(--accent)' : 'rgba(255,255,255,0.05)',
                color: 'white',
                border: tier.popular ? 'none' : '1px solid rgba(255,255,255,0.1)',
                padding: '16px',
                borderRadius: '8px',
                fontSize: '1.1rem',
                fontWeight: 700,
                marginBottom: '40px',
                transition: 'all 0.2s',
                textDecoration: 'none',
                boxShadow: tier.popular ? '0 0 20px var(--glow-orange)' : 'none'
              }}>
                {tier.ctaText || "Get Started"}
              </a>
              
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '16px', flex: 1 }}>
                {tier.features.map((feature, j) => (
                  <li key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <Check size={20} color={tier.popular ? "var(--primary)" : "var(--accent)"} style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span style={{ color: 'var(--text-muted)', fontSize: '0.95rem', fontWeight: 500, lineHeight: 1.5 }}>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
