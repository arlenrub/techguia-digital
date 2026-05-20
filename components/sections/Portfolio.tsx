import { LayoutGrid, ArrowUpRight, FolderGit2, Shield, Calendar, Sparkles } from 'lucide-react'
import Link from 'next/link'
import AnimateIn from '@/components/ui/AnimateIn'

const projects = [
  {
    name: "GestorTech",
    description: "Sistema de gestão para pequenas empresas. Controle financeiro, clientes e relatórios automatizados com IA.",
    tag: "Micro SaaS",
    url: "https://gestortech.vercel.app",
    stack: ["Next.js", "Supabase", "Tailwind"],
    status: "Ao vivo"
  },
  {
    name: "FaxinaTech",
    description: "Agenda inteligente para faxineiras autônomas. Gestão de clientes, horários e cobranças em um só lugar.",
    tag: "Micro SaaS",
    url: "https://faxinatech.figma.site",
    stack: ["Figma Sites", "Design System"],
    status: "Ao vivo"
  },
  {
    name: "Seu app aqui",
    description: "Desenvolvemos sistemas personalizados para automatizar processos e criar novas fontes de receita no seu negócio.",
    tag: "Em breve",
    url: null,
    stack: [],
    status: "Disponível"
  }
]

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="section-padding"
      style={{
        background: '#0F0F0F',
        position: 'relative'
      }}
    >
      <div className="container-brand">
        {/* ── Header ── */}
        <AnimateIn>
          <div style={{ marginBottom: 48, maxWidth: 640 }}>
            <span className="badge-brand" style={{ marginBottom: 16, display: 'inline-flex', gap: 8 }}>
              <LayoutGrid size={14} color="var(--accent)" strokeWidth={1.5} />
              Nosso Portfólio
            </span>
            <h2 className="text-display-md" style={{ color: '#FFFFFF', marginTop: 12 }}>
              Projetos de <span style={{ color: 'var(--accent)' }}>Micro SaaS</span>
            </h2>
            <p className="text-body-md" style={{ color: 'var(--text-muted)', marginTop: 12 }}>
              Soluções completas e prontas que geram receita e otimizam processos.
            </p>
          </div>
        </AnimateIn>

        {/* ── Grid ── */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 24,
          }}
        >
          {projects.map((p, index) => {
            const hasUrl = !!p.url
            return (
              <AnimateIn key={p.name} delay={0.1 * index}>
                <div
                  className="card-brand"
                  style={{
                    padding: 28,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    minHeight: 320,
                    height: '100%',
                    background: 'var(--bg-surface)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: 'var(--radius-xl)',
                    transition: 'border-color 0.2s',
                    position: 'relative'
                  }}
                >
                <div>
                  {/* Top Badges */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: 20
                    }}
                  >
                    <span
                      style={{
                        background: p.url ? 'rgba(255, 140, 0, 0.1)' : 'rgba(255, 255, 255, 0.05)',
                        border: p.url ? '1px solid rgba(255, 140, 0, 0.25)' : '1px solid rgba(255, 255, 255, 0.1)',
                        color: p.url ? 'var(--accent)' : 'var(--text-muted)',
                        fontSize: 10,
                        fontWeight: 700,
                        letterSpacing: '0.06em',
                        textTransform: 'uppercase',
                        padding: '3px 10px',
                        borderRadius: 99,
                        fontFamily: 'var(--font-inter)'
                      }}
                    >
                      {p.tag}
                    </span>
                    <span
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: 6,
                        fontFamily: 'var(--font-inter)',
                        fontSize: 12,
                        color: p.url ? '#4ADE80' : 'var(--accent)'
                      }}
                    >
                      <span
                        style={{
                          width: 6,
                          height: 6,
                          borderRadius: '50%',
                          background: p.url ? '#4ADE80' : 'var(--accent)',
                          display: 'inline-block'
                        }}
                      />
                      {p.status}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3
                    className="text-h3"
                    style={{
                      color: '#FFFFFF',
                      marginBottom: 10,
                      fontFamily: 'var(--font-league-spartan)'
                    }}
                  >
                    {p.name}
                  </h3>
                  <p
                    className="text-body-sm"
                    style={{
                      color: 'var(--text-muted)',
                      marginBottom: 20,
                      lineHeight: 1.6
                    }}
                  >
                    {p.description}
                  </p>

                  {/* Stacks */}
                  {p.stack.length > 0 && (
                    <div
                      style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: 6,
                        marginBottom: 24
                      }}
                    >
                      {p.stack.map((s) => (
                        <span
                          key={s}
                          style={{
                            background: 'rgba(255, 255, 255, 0.04)',
                            border: '1px solid rgba(255, 255, 255, 0.06)',
                            borderRadius: 6,
                            padding: '3px 8px',
                            fontSize: 11,
                            fontFamily: 'var(--font-inter)',
                            color: 'rgba(255, 255, 255, 0.7)'
                          }}
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* CTA Button */}
                <div style={{ marginTop: 'auto' }}>
                  {hasUrl ? (
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-ghost"
                      style={{
                        width: '100%',
                        justifyContent: 'center',
                        padding: '10px 16px',
                        fontSize: 14
                      }}
                    >
                      Acessar Projeto
                      <ArrowUpRight size={14} style={{ marginLeft: 4 }} />
                    </a>
                  ) : (
                    <a
                      href="#cta"
                      className="btn-primary"
                      style={{
                        width: '100%',
                        justifyContent: 'center',
                        padding: '10px 16px',
                        fontSize: 14
                      }}
                    >
                      Quero um assim →
                    </a>
                  )}
                </div>
              </div>
             </AnimateIn>
            )
          })}
        </div>
      </div>
    </section>
  )
}
