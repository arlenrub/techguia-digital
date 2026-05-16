'use client'

import { useState, useEffect } from 'react'
import { BarChart3 } from 'lucide-react'

const cases = [
  {
    id: 1,
    service: 'Tráfego Pago',
    result: '4x mais vendas em 3 meses',
    quote:
      'Antes mal conseguia 2 clientes por semana. Hoje recebo mais de 15 leads qualificados por dia graças ao tráfego pago que a TechGuia configurou pra mim.',
    author: 'Pedro Alves',
    role: 'Empreendedor Autônomo',
    initials: 'PA',
  },
  {
    id: 2,
    service: 'Automação com IA',
    result: '40h/mês economizadas',
    quote:
      'A TechGuia criou um fluxo que responde clientes no WhatsApp e agenda consultas automaticamente. Reduzi o estresse e aumentei a satisfação dos clientes.',
    author: 'Marina Costa',
    role: 'Proprietária — Clínica Estética',
    initials: 'MC',
  },
  {
    id: 3,
    service: 'Design & Branding',
    result: 'Rebranding completo',
    quote:
      'Meu site e Instagram pareciam amadores. Com o novo branding e design da TechGuia, consegui dobrar o valor do meu ticket médio pois agora passo autoridade real.',
    author: 'Lucas Mendes',
    role: 'Consultor Financeiro',
    initials: 'LM',
  },
  {
    id: 4,
    service: 'Micro SaaS',
    result: 'Nova fonte de renda',
    quote:
      'Eles desenvolveram uma ferramenta simples que meus próprios clientes pagam R$49/mês para usar. Uma nova fonte de renda recorrente que eu não tinha antes.',
    author: 'Juliana Rocha',
    role: 'Especialista em Logística',
    initials: 'JR',
  },
]

function CaseCard({ c }: { c: (typeof cases)[0] }) {
  return (
    <div
      style={{
        background: 'var(--bg-surface)',
        border: '1px solid rgba(255,255,255,0.07)',
        borderLeft: '4px solid var(--accent)',
        borderRadius: 16,
        padding: '28px 24px',
        display: 'flex',
        flexDirection: 'column',
        gap: 18,
        height: '100%',
      }}
    >
      {/* Top row */}
      <div className="case-card-header">
        <span style={{
          display: 'inline-flex', alignItems: 'center', gap: 6,
          background: 'rgba(255,140,0,0.1)', border: '1px solid rgba(255,140,0,0.22)',
          color: 'var(--accent)', fontSize: 11, fontWeight: 700,
          letterSpacing: '0.06em', textTransform: 'uppercase' as const,
          padding: '3px 12px', borderRadius: 99,
          fontFamily: 'var(--font-inter)',
        }}>
          <span style={{ width: 5, height: 5, borderRadius: 9999, background: 'var(--accent)', display: 'inline-block' }} />
          {c.service}
        </span>
        <span style={{
          display: 'inline-flex', alignItems: 'center', gap: 7,
          background: 'rgba(255,140,0,0.08)', border: '1px solid rgba(255,140,0,0.18)',
          borderRadius: 10, padding: '6px 12px',
        }}>
          <BarChart3 size={14} color="var(--accent)" strokeWidth={1.5} />
          <span style={{
            fontFamily: 'var(--font-league-spartan), sans-serif',
            fontSize: 13, fontWeight: 700, color: 'var(--accent)',
          }}>
            {c.result}
          </span>
        </span>
      </div>

      {/* Quote */}
      <p style={{
        fontFamily: 'var(--font-inter), sans-serif',
        fontSize: 15, lineHeight: 1.75,
        color: '#E8E8E8',
        flexGrow: 1,
      }}>
        &ldquo;{c.quote}&rdquo;
      </p>

      {/* Client */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginTop: 4 }}>
        <div style={{
          width: 40, height: 40, borderRadius: '50%',
          background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: 'var(--accent)', fontFamily: 'var(--font-bebas-neue)', fontSize: 16,
        }}>
          {c.initials}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <span style={{ fontFamily: 'var(--font-inter)', fontSize: 14, fontWeight: 600, color: '#FFF' }}>
            {c.author}
          </span>
          <span style={{ fontFamily: 'var(--font-inter)', fontSize: 12, color: 'var(--text-muted)' }}>
            {c.role}
          </span>
        </div>
      </div>
    </div>
  )
}

export default function Cases() {
  const [page, setPage] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const perPage = 2

  useEffect(() => {
    const update = () => {
      setIsMobile(window.innerWidth < 768)
    }
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  const totalPages = Math.ceil(cases.length / perPage)
  const visible = isMobile ? cases : cases.slice(page * perPage, page * perPage + perPage)

  const go = (dir: 1 | -1) => {
    setPage((prev) => (prev + dir + totalPages) % totalPages)
  }

  return (
    <section id="cases" className="section-padding" style={{ background: '#0F0F0F' }}>
      <div className="container-brand">

        {/* ── Header ── */}
        <div style={{ marginBottom: 36 }}>
          <span className="badge-brand" style={{ marginBottom: 14, display: 'inline-flex', gap: 8 }}>
            <span style={{ width: 6, height: 6, borderRadius: 9999, background: 'var(--accent)', display: 'inline-block' }} />
            Cases de Sucesso
          </span>
          <h2 className="text-display-md" style={{ color: '#FFF', textTransform: 'uppercase' }}>
            Clientes que <span style={{ color: 'var(--accent)' }}>Cresceram</span>
          </h2>
          <p className="text-body-md" style={{ color: 'var(--text-muted)', marginTop: 10, maxWidth: 500 }}>
            Resultados reais de quem apostou em tecnologia para escalar o negócio.
          </p>
        </div>

        {/* ── Cards grid ── */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: 16,
            alignItems: 'stretch',
          }}
          className="cases-grid"
        >
          {visible.map((c) => (
            <CaseCard key={c.id} c={c} />
          ))}
        </div>

        {/* ── Controls (Only on Desktop) ── */}
        {!isMobile && (
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginTop: 24 }}>
            <button
              onClick={() => go(-1)}
              style={{
                width: 40, height: 40, borderRadius: '50%',
                background: 'var(--bg-surface)', border: '1px solid rgba(255,255,255,0.1)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: '#fff', cursor: 'pointer', flexShrink: 0,
              }}
              aria-label="Anterior"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Dots */}
            <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setPage(i)}
                  style={{
                    width: i === page ? 28 : 8, height: 8, borderRadius: 4,
                    background: i === page ? 'var(--accent)' : 'rgba(255,255,255,0.15)',
                    border: 'none', cursor: 'pointer',
                    transition: 'all 0.3s ease',
                  }}
                  aria-label={`Página ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={() => go(1)}
              style={{
                width: 40, height: 40, borderRadius: '50%',
                background: 'var(--bg-surface)', border: '1px solid rgba(255,255,255,0.1)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: '#fff', cursor: 'pointer', flexShrink: 0,
              }}
              aria-label="Próximo"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>

            <span style={{
              fontFamily: 'var(--font-inter), sans-serif',
              fontSize: 13, color: 'var(--text-muted)', marginLeft: 'auto',
            }}>
              {page + 1} / {totalPages}
            </span>
          </div>
        )}
      </div>

      <style>{`
        .case-card-header {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 12px;
        }

        @media (min-width: 640px) {
          .case-card-header {
            flex-direction: row;
            justify-content: space-between;
          }
          .cases-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 20px;
          }
        }
      `}</style>
    </section>
  )
}
