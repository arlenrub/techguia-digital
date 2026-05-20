import Image from 'next/image'
import AnimateIn from '@/components/ui/AnimateIn'

export default function Hero() {
  return (
    <section
      id="hero"
      className="section-padding"
      style={{
        background: 'linear-gradient(180deg, #1A1A1A 0%, #0F0F0F 100%)',
        paddingTop: 'calc(48px + 72px)',
      }}
    >
      <div className="container-brand">
        {/* ── 2-column grid ── */}
        <div className="hero-grid">
          {/* ── LEFT — copy ── */}
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <AnimateIn delay={0}>
              <span
                className="badge-brand"
                style={{ marginBottom: 20, display: 'inline-flex', gap: 8, alignSelf: 'flex-start' }}
              >
                <span
                  style={{
                    width: 6, height: 6, borderRadius: 9999,
                    background: 'var(--accent)', display: 'inline-block', flexShrink: 0,
                  }}
                />
                Agência de Resultado — não de Promessa
              </span>
            </AnimateIn>

            <AnimateIn delay={0.1}>
              <h1
                className="text-display-xl"
                style={{ color: '#FFFFFF', marginBottom: 16 }}
              >
                Seu negócio{' '}
                <span style={{ color: 'var(--accent)' }}>crescendo</span>
                {' '}no automático
              </h1>
            </AnimateIn>

            <AnimateIn delay={0.2}>
              <p
                className="text-body-md"
                style={{ color: 'var(--text-muted)', maxWidth: 500, marginBottom: 32 }}
              >
                Enquanto você foca no seu negócio, a gente gera leads, automatiza seu
                atendimento e constrói os sistemas que fazem você vender mais — todo
                dia, sem depender de indicação.
              </p>
            </AnimateIn>

            <AnimateIn delay={0.3}>
              <div className="hero-buttons">
                <a href="#contato" className="btn-primary">
                  Quero escalar meu negócio →
                </a>
                <a href="#servicos" className="btn-ghost">
                  Ver como funciona
                </a>
              </div>
            </AnimateIn>
          </div>

          {/* ── RIGHT — hero image ── */}
          <div className="hero-image-wrap">
            <AnimateIn delay={0.2} direction="left">
              <Image
                src="/images/cards_hero_nobg.png"
                alt="Serviços TechGuia Digital — Automação com IA, Tráfego Pago, Micro SaaS, Design & Branding"
                width={800}
                height={434}
                priority
                style={{
                  width: '100%',
                  height: 'auto',
                  objectFit: 'contain',
                  filter: 'drop-shadow(0 20px 48px rgba(255,140,0,0.3))',
                }}
              />
            </AnimateIn>
          </div>
        </div>
      </div>

      <style>{`
        /* ── Mobile first ── */
        .hero-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 32px;
          align-items: center;
        }

        .hero-image-wrap {
          display: flex;
          align-items: center;
          justify-content: center;
          /* On mobile the image comes AFTER the text */
          order: 1;
        }

        .hero-buttons {
          display: flex;
          flex-direction: column;
          gap: 12px;
          width: 100%;
        }

        .hero-buttons .btn-primary,
        .hero-buttons .btn-ghost {
          width: 100%;
          justify-content: center;
        }

        /* ── Tablet+ ── */
        @media (min-width: 640px) {
          .hero-buttons {
            flex-direction: row;
            width: auto;
          }

          .hero-buttons .btn-primary,
          .hero-buttons .btn-ghost {
            width: auto;
          }
        }

        /* ── Desktop ── */
        @media (min-width: 900px) {
          .hero-grid {
            grid-template-columns: 0.9fr 1.1fr;
            gap: 48px;
          }

          .hero-image-wrap {
            order: 0; /* Right column, natural order */
            transform: scale(1.08);
            transform-origin: center center;
          }
        }
      `}</style>
    </section>
  )
}
