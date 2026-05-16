import { ArrowRight, CheckCircle2 } from 'lucide-react'

export default function CTA() {
  return (
    <section
      id="contato"
      className="section-padding"
      style={{
        background:
          'linear-gradient(135deg, rgba(255,140,0,0.12) 0%, rgba(255,140,0,0.03) 50%, #0F0F0F 100%)',
        borderTop: '1px solid rgba(255,140,0,0.2)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative glow */}
      <div
        style={{
          position: 'absolute',
          top: '-40%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: 600,
          height: 400,
          background: 'radial-gradient(ellipse, rgba(255,140,0,0.08) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div
        className="container-brand"
        style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}
      >
        {/* Badge */}
        <span
          className="badge-brand"
          style={{ marginBottom: 24, display: 'inline-flex' }}
        >
          <span
            style={{
              width: 6, height: 6, borderRadius: 9999,
              background: 'var(--accent)', display: 'inline-block',
            }}
          />
          Consultoria Gratuita
          
        </span>

        {/* Headline — Bebas Neue */}
        <h2
          style={{
            fontFamily: 'var(--font-bebas-neue), sans-serif',
            fontSize: 'clamp(48px, 7vw, 80px)',
            lineHeight: 1,
            color: '#FFFFFF',
            marginTop: 8,
            marginBottom: 12,
            letterSpacing: 1,
          }}
        >
          Pronto para parar de perder cliente{' '}
          <span style={{ color: 'var(--accent)' }}>para a concorrência?</span>
        </h2>

        {/* Subtitle */}
        <p
          className="text-body-lg"
          style={{
            color: 'var(--text-muted)',
            maxWidth: 560,
            margin: '0 auto',
            marginBottom: 48,
            lineHeight: 1.8,
          }}
        >
          Agende uma conversa gratuita. Em 30 minutos, mostramos
          exatamente o que está travando seu crescimento e como resolver.
        </p>

        {/* CTA Button */}
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <a
            href="https://wa.me/5581992665890"
            className="btn-primary cta-btn"
            style={{
              fontSize: 'clamp(15px, 4vw, 18px)',
              padding: 'clamp(14px, 3vw, 20px) clamp(24px, 6vw, 48px)',
              boxShadow: '0 8px 40px rgba(255,140,0,0.4)',
              letterSpacing: '0.02em',
            }}
            target="_blank"
            rel="noopener noreferrer"
          >
            Agendar Agora — É Gratuito →
            
          </a>
        </div>

        {/* Trust signals */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 'clamp(16px, 4vw, 40px)',
            marginTop: 32,
            flexWrap: 'wrap',
          }}
        >
          {[
            'Sem compromisso',
            'Resposta em até 2h',
            'Sem enrolação',
          ].map((t) => (
            <span
              key={t}
              style={{
                fontFamily: 'var(--font-inter), sans-serif',
                fontSize: 13,
                color: 'var(--text-muted)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: 6,
              }}
            >
              <CheckCircle2 size={14} color="var(--accent)" strokeWidth={1.5} />
              {t}
            </span>
          ))}
        </div>
      </div>
      <style>{`
        .cta-btn {
          width: 100%;
          max-width: 100%;
        }
        @media (min-width: 480px) {
          .cta-btn {
            width: auto;
          }
        }
      `}</style>
    </section>
  )
}
