import { Bot, TrendingUp, Palette, Smartphone, CheckCircle2, Clock, Zap, ArrowRight } from 'lucide-react'
import AnimateIn from '@/components/ui/AnimateInLazy'

const featured = {
  title: 'Automação com IA',
  description:
    'Automatize tarefas repetitivas com n8n, Make, Claude e GPT. Atendimento, cobranças, relatórios e muito mais funcionando 24h por dia — sem contratar mais pessoas.',
  highlights: [
    { icon: <Clock size={16} color="var(--accent)" strokeWidth={1.5} />, text: 'Atendimento automático 24h' },
    { icon: <CheckCircle2 size={16} color="var(--accent)" strokeWidth={1.5} />, text: 'Relatórios sem esforço' },
    { icon: <Zap size={16} color="var(--accent)" strokeWidth={1.5} />, text: 'Integração com qualquer sistema' },
    { icon: <CheckCircle2 size={16} color="var(--accent)" strokeWidth={1.5} />, text: 'n8n · Make · Claude · GPT' },
  ],
}

const others = [
  {
    id: 'trafego',
    icon: <TrendingUp size={28} color="var(--accent)" strokeWidth={1.5} />,
    title: 'Tráfego Pago',
    description:
      'Campanhas de Google Ads e Meta Ads otimizadas com dados reais para gerar leads qualificados e vendas consistentes.',
    whatsappText: 'Olá,%20tenho%20interesse%20em%20Tráfego%20Pago',
  },
  {
    id: 'design',
    icon: <Palette size={28} color="var(--accent)" strokeWidth={1.5} />,
    title: 'Design & Branding',
    description:
      'Identidade visual profissional, landing pages de alta conversão e materiais que posicionam sua marca acima da concorrência.',
    whatsappText: 'Olá,%20tenho%20interesse%20em%20Design%20e%20Branding',
  },
  {
    id: 'saas',
    icon: <Smartphone size={28} color="var(--accent)" strokeWidth={1.5} />,
    title: 'Micro SaaS',
    description:
      'Apps personalizados para automatizar processos internos, fidelizar clientes e criar novas fontes de receita recorrente.',
    badge: 'NOVO',
    whatsappText: 'Olá,%20tenho%20interesse%20em%20Micro%20SaaS',
  },
]

export default function Services() {
  return (
    <section id="servicos" className="section-padding" style={{ background: '#0F0F0F' }}>
      <div className="container-brand">

        {/* ── Section header ── */}
        <AnimateIn>
          <div style={{ marginBottom: 48, maxWidth: 640 }}>
            <span className="badge-brand" style={{ marginBottom: 16, display: 'inline-flex' }}>
              <span
                style={{
                  width: 6, height: 6, borderRadius: 9999,
                  background: 'var(--accent)', display: 'inline-block',
                }}
              />
              Nossos Serviços
            </span>
            <h2 className="text-display-md" style={{ color: '#FFFFFF', marginTop: 12 }}>
              Tudo que seu negócio precisa
            </h2>
            <p className="text-body-md" style={{ color: 'var(--text-muted)', marginTop: 12 }}>
              Uma agência completa para escalar do zero ao crescimento exponencial.
            </p>
          </div>
        </AnimateIn>

        {/* ── FEATURED card — full width ── */}
        <AnimateIn delay={0.1}>
          <div
            style={{
              background: 'linear-gradient(135deg, rgba(255,140,0,0.12) 0%, rgba(255,140,0,0.02) 100%)',
              border: '1px solid rgba(255,140,0,0.35)',
              borderRadius: 'var(--radius-xl)',
              padding: 'clamp(28px, 4vw, 48px)',
              marginBottom: 20,
              display: 'grid',
              gridTemplateColumns: '1fr',
              gap: 32,
            }}
            className="featured-service-grid"
          >
            {/* Left side */}
            <div>
              {/* Icon with glow — unique to featured card */}
              <div
                style={{
                  width: 60, height: 60, borderRadius: 16,
                  background: 'rgba(255,140,0,0.15)',
                  border: '1px solid rgba(255,140,0,0.3)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: 20,
                  filter: 'drop-shadow(0 0 8px rgba(255,140,0,0.6))',
                }}
              >
                <Bot size={28} color="var(--accent)" strokeWidth={1.5} />
              </div>

              <div
                style={{
                  display: 'inline-block',
                  background: 'rgba(255,140,0,0.15)',
                  border: '1px solid rgba(255,140,0,0.3)',
                  color: 'var(--accent)',
                  fontSize: 10, fontWeight: 700,
                  letterSpacing: '0.1em', textTransform: 'uppercase',
                  padding: '3px 10px', borderRadius: 99,
                  marginBottom: 12,
                  fontFamily: 'var(--font-inter)',
                }}
              >
                DESTAQUE
              </div>
              <h3
                style={{
                  fontFamily: 'var(--font-bebas-neue), sans-serif',
                  fontSize: 'clamp(32px, 4vw, 48px)',
                  color: '#FFFFFF',
                  lineHeight: 1.05,
                  marginBottom: 16,
                }}
              >
                {featured.title}
              </h3>
              <p className="text-body-lg" style={{ color: 'var(--text-muted)', maxWidth: 480 }}>
                {featured.description}
              </p>
              <a
                href="https://wa.me/5581992665890?text=Olá,%20tenho%20interesse%20em%20Automação%20com%20IA"
                target="_blank"
                className="inline-flex items-center gap-1 text-brand-orange text-sm font-semibold mt-4 hover:opacity-80 transition-opacity"
              >
                Quero esse serviço <ArrowRight size={14} />
              </a>
            </div>

            {/* Right side — highlights */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: 12,
                alignContent: 'center',
              }}
            >
              {featured.highlights.map((h) => (
                <div
                  key={h.text}
                  style={{
                    background: 'rgba(255,140,0,0.07)',
                    border: '1px solid rgba(255,140,0,0.18)',
                    borderRadius: 10,
                    padding: '14px 16px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 10,
                  }}
                >
                  {h.icon}
                  <span
                    style={{
                      fontFamily: 'var(--font-inter), sans-serif',
                      fontSize: 13, fontWeight: 500, color: '#FFFFFF',
                    }}
                  >
                    {h.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </AnimateIn>

        {/* ── Other 3 cards ── */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: 20,
          }}
        >
          {others.map((s, index) => (
            <AnimateIn key={s.id} delay={0.1 * index}>
              <div className="card-brand" style={{ padding: 28 }}>
                <div
                  style={{
                    width: 52, height: 52, borderRadius: 12,
                    background: 'rgba(255,140,0,0.08)',
                    border: '1px solid rgba(255,140,0,0.18)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    marginBottom: 18,
                  }}
                >
                  {s.icon}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
                  <h3 className="text-h3" style={{ color: '#FFFFFF' }}>{s.title}</h3>
                  {s.badge && (
                    <span
                      style={{
                        background: 'rgba(255,140,0,0.15)',
                        border: '1px solid rgba(255,140,0,0.3)',
                        color: 'var(--accent)',
                        fontSize: 9, fontWeight: 700,
                        letterSpacing: '0.1em', textTransform: 'uppercase',
                        padding: '2px 8px', borderRadius: 99,
                        fontFamily: 'var(--font-inter)',
                      }}
                    >
                      {s.badge}
                    </span>
                  )}
                </div>
                <p className="text-body-sm" style={{ color: 'var(--text-muted)' }}>
                  {s.description}
                </p>
                <a
                  href={`https://wa.me/5581992665890?text=${s.whatsappText}`}
                  target="_blank"
                  className="inline-flex items-center gap-1 text-brand-orange text-sm font-semibold mt-4 hover:opacity-80 transition-opacity"
                >
                  Quero esse serviço <ArrowRight size={14} />
                </a>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>

      <style>{`
        @media (min-width: 900px) {
          .featured-service-grid {
            grid-template-columns: 1.1fr 0.9fr !important;
          }
        }
      `}</style>
    </section>
  )
}
