// Server Component — sem 'use client'
// Accordion usa <details>/<summary> nativo do HTML (zero JS)
import AnimateIn from '@/components/ui/AnimateIn'

const faqs = [
  {
    q: 'Quanto tempo para ver resultados?',
    a: 'Tráfego pago gera resultados a partir da primeira semana de campanha ativa. Automações reduzem tempo operacional já no primeiro mês. Para Micro SaaS, entregamos o MVP em 3 a 6 semanas.',
  },
  {
    q: 'Preciso ter um negócio grande para contratar?',
    a: 'Não. Atendemos desde autônomos e pequenas empresas até negócios em expansão. Nossos planos são escaláveis — você começa com o que faz sentido agora e cresce conforme os resultados.',
  },
  {
    q: 'Como funciona o processo de trabalho?',
    a: 'Começa com uma consultoria gratuita para entender seu negócio e identificar as maiores oportunidades. Em seguida, montamos um plano personalizado e iniciamos a execução. Você acompanha tudo com relatórios semanais.',
  },
  {
    q: 'Vocês têm contrato de fidelidade?',
    a: 'Trabalhamos com contratos mensais renováveis. Acreditamos que o cliente deve ficar pelos resultados, não por cláusula contratual.',
  },
  {
    q: 'Posso contratar só um serviço?',
    a: 'Sim. Você pode começar com tráfego pago, só automação, ou só o Micro SaaS. Muitos clientes começam com um serviço e expandem conforme os resultados aparecem.',
  },
  {
    q: 'Trabalham com qual nicho?',
    a: 'Atendemos negócios locais, prestadores de serviço, clínicas, e-commerce e empresas B2B. Se você vende algo e quer vender mais com menos esforço manual, podemos ajudar.',
  },
]

export default function FAQ() {
  return (
    <section
      id="faq"
      className="section-padding"
      style={{ background: '#0F0F0F' }}
    >
      <div className="container-brand">
        {/* ── Header ── */}
        <AnimateIn>
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <span
            className="badge-brand"
            style={{ marginBottom: 16, display: 'inline-flex', gap: 8 }}
          >
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: 9999,
                background: 'var(--accent)',
                display: 'inline-block',
              }}
            />
            Dúvidas Frequentes
          </span>

          <h2
            style={{
              fontFamily: 'var(--font-bebas-neue), sans-serif',
              fontSize: 'clamp(36px, 5vw, 56px)',
              lineHeight: 1.05,
              color: '#FFFFFF',
              marginBottom: 16,
            }}
          >
            Ainda tem dúvidas?
          </h2>

          <p
            className="text-body-md"
            style={{
              color: 'var(--text-muted)',
              maxWidth: 520,
              margin: '0 auto',
              lineHeight: 1.8,
            }}
          >
            Respondemos as perguntas mais comuns de quem está pensando em
            trabalhar com a gente.
          </p>
        </div>
        </AnimateIn>

        {/* ── Accordion ── */}
        <div
          style={{
            maxWidth: 768,
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {faqs.map((faq, i) => (
            <details key={i} className="faq-item">
              <summary className="faq-summary">
                <span
                  style={{
                    fontFamily: 'var(--font-league-spartan), sans-serif',
                    fontSize: 'clamp(15px, 2vw, 17px)',
                    fontWeight: 600,
                    color: '#FFFFFF',
                    lineHeight: 1.4,
                    paddingRight: 16,
                  }}
                >
                  {faq.q}
                </span>
                <span className="faq-icon" aria-hidden="true">
                  {/* Plus icon via SVG — rotates to × on open */}
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="var(--accent)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ flexShrink: 0, display: 'block' }}
                  >
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <line x1="5" y1="12" x2="19" y2="12" />
                  </svg>
                </span>
              </summary>

              <p
                style={{
                  fontFamily: 'var(--font-inter), sans-serif',
                  fontSize: 14,
                  color: 'var(--text-muted)',
                  lineHeight: 1.8,
                  paddingTop: 12,
                  paddingBottom: 4,
                  maxWidth: 680,
                }}
              >
                {faq.a}
              </p>
            </details>
          ))}
        </div>
      </div>

      {/* ── Scoped styles for details/summary accordion ── */}
      <style>{`
        .faq-item {
          border-bottom: 1px solid rgba(255, 255, 255, 0.07);
          padding-block: 22px;
        }

        .faq-item:first-child {
          border-top: 1px solid rgba(255, 255, 255, 0.07);
        }

        .faq-summary {
          display: flex;
          justify-content: space-between;
          align-items: center;
          cursor: pointer;
          list-style: none;
          outline: none;
        }

        /* Remove default triangle in all browsers */
        .faq-summary::-webkit-details-marker { display: none; }
        .faq-summary::marker { display: none; }

        /* Rotate the plus icon to × when open */
        .faq-item[open] .faq-icon {
          transform: rotate(45deg);
        }

        .faq-icon {
          transition: transform 0.25s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        /* Orange glow on open question */
        .faq-item[open] > summary span:first-child {
          color: var(--accent);
        }
      `}</style>
    </section>
  )
}
