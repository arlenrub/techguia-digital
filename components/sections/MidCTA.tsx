import { ArrowRight } from 'lucide-react'

export default function MidCTA() {
  return (
    <section
      style={{
        background: 'rgba(255, 140, 0, 0.05)',
        borderTop: '1px solid rgba(255, 140, 0, 0.15)',
        borderBottom: '1px solid rgba(255, 140, 0, 0.15)',
        paddingBlock: '40px',
      }}
    >
      <div
        className="container-brand"
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '24px',
        }}
      >
        <div style={{ flex: '1 1 300px' }}>
          <p
            style={{
              fontFamily: 'var(--font-league-spartan), sans-serif',
              fontSize: '22px',
              fontWeight: 700,
              color: '#FFFFFF',
              margin: 0,
              lineHeight: 1.2,
            }}
          >
            Não sabe por onde começar?
          </p>
          <p
            style={{
              fontFamily: 'var(--font-inter), sans-serif',
              fontSize: '14px',
              color: 'var(--text-muted)',
              margin: '6px 0 0 0',
            }}
          >
            Em 30 minutos mostramos o que faz mais sentido pro seu negócio.
          </p>
        </div>

        <div style={{ flexShrink: 0 }}>
          <a
            href="https://wa.me/5581992665890?text=Quero%20uma%20consultoria%20gratuita"
            target="_blank"
            className="btn-primary"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              textDecoration: 'none',
            }}
          >
            Falar no WhatsApp <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  )
}
