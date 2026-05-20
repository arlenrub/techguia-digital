import { BarChart3 } from 'lucide-react'

const metrics = [
  { value: '100K+', label: 'Leads Gerados', detail: 'em campanhas ativas' },
  { value: '20+', label: 'Clientes Ativos', detail: 'em diversas áreas' },
  { value: '4×', label: 'Crescimento Médio', detail: 'em 90 dias' },
  { value: '5', label: 'Anos de Experiência', detail: 'entregando resultados' },
]

export default function Results() {
  return (
    <section
      id="resultados"
      className="section-padding"
      style={{ background: 'var(--bg-surface)' }}
    >
      <div className="container-brand">

        {/* ── Header ── */}
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <span className="badge-brand" style={{ marginBottom: 16, display: 'inline-flex', gap: 8 }}>
            <BarChart3 size={14} color="var(--accent)" strokeWidth={1.5} />
            Resultados Reais
          </span>
          <h2 className="text-display-md" style={{ color: '#FFFFFF', marginTop: 12 }}>
            Números que{' '}
            <span style={{ color: 'var(--accent)' }}>provam</span>
          </h2>
          <p
            className="text-body-md"
            style={{ color: 'var(--text-muted)', marginTop: 12, maxWidth: 480, margin: '12px auto 0' }}
          >
            Dados reais dos nossos clientes nos últimos 5 anos de operação.
          </p>
        </div>

        {/* ── Metric cards ── */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: 2,
            background: 'rgba(255,255,255,0.05)',
            borderRadius: 'var(--radius-xl)',
            overflow: 'hidden',
            border: '1px solid rgba(255,255,255,0.08)',
          }}
          className="results-grid"
        >
          {metrics.map((m, i) => (
            <div
              key={m.label}
              style={{
                textAlign: 'center',
                padding: 'clamp(32px, 5vw, 56px) 24px',
                background: 'var(--bg-surface)',
                position: 'relative',
              }}
            >
              {/* Orange top bar on first card */}
              {i === 0 && (
                <div
                  style={{
                    position: 'absolute',
                    top: 0, left: '25%', right: '25%',
                    height: 3,
                    background: 'linear-gradient(90deg, #FF8C00, #FF4500)',
                    borderRadius: '0 0 4px 4px',
                  }}
                />
              )}

              {/* Number */}
              <p
                style={{
                  fontFamily: 'var(--font-bebas-neue), sans-serif',
                  fontSize: 'clamp(64px, 8vw, 96px)',
                  lineHeight: 1,
                  color: 'var(--accent)',
                  letterSpacing: '-1px',
                }}
              >
                {m.value}
              </p>

              {/* Label */}
              <p
                style={{
                  fontFamily: 'var(--font-league-spartan), sans-serif',
                  fontSize: 16,
                  fontWeight: 700,
                  color: '#FFFFFF',
                  marginTop: 8,
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                }}
              >
                {m.label}
              </p>

              {/* Detail */}
              <p
                style={{
                  fontFamily: 'var(--font-inter), sans-serif',
                  fontSize: 13,
                  color: 'var(--text-muted)',
                  marginTop: 6,
                }}
              >
                {m.detail}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .results-grid {
            grid-template-columns: repeat(4, 1fr) !important;
          }
        }
      `}</style>
    </section>
  )
}
