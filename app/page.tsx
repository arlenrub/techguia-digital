import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import Services from '@/components/sections/Services'
import Portfolio from '@/components/sections/Portfolio'
import Results from '@/components/sections/Results'
import Cases from '@/components/sections/Cases'
import FAQ from '@/components/sections/FAQ'
import CTA from '@/components/sections/CTA'

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main id="main-content">
        {/* 1. Hero */}
        <Hero />

        {/* 2. Barra de parceiros premium */}
        <section
          id="parceiros"
          aria-label="Parceiros e ferramentas"
          style={{
            background: 'var(--bg-surface)',
            borderTop: '1px solid rgba(255,255,255,0.05)',
            borderBottom: '1px solid rgba(255,255,255,0.05)',
            paddingBlock: 22,
            overflow: 'hidden',
          }}
        >
          <div className="container-brand">
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 'clamp(16px, 4vw, 40px)',
                flexWrap: 'wrap',
              }}
            >
              {[
                { name: 'Google Partner', dot: true },
                { name: 'Meta Ads', dot: true },
                { name: 'n8n', dot: true },
                { name: 'Make', dot: true },
                { name: 'Claude AI', dot: false },
              ].map((p, i) => (
                <div key={p.name} style={{ display: 'flex', alignItems: 'center', gap: 'clamp(16px, 4vw, 40px)' }}>
                  <span
                    className="text-[rgba(255,255,255,0.35)] hover:text-[rgba(255,140,0,0.8)] transition-colors duration-300 cursor-default select-none"
                    style={{
                      fontFamily: 'var(--font-inter), sans-serif',
                      fontSize: 11,
                      fontWeight: 700,
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                    }}
                  >
                    {p.name}
                  </span>
                  {p.dot && (
                    <span
                      style={{
                        width: 3,
                        height: 3,
                        borderRadius: '50%',
                        background: 'rgba(255,140,0,0.3)',
                        flexShrink: 0,
                        display: 'inline-block',
                      }}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. Serviços */}
        <Services />

        {/* 3.5. Portfólio */}
        <Portfolio />

        {/* 4. Resultados */}
        <Results />

        {/* 5. Cases */}
        <Cases />

        {/* 6. FAQ */}
        <FAQ />

        {/* 7. CTA Final */}
        <CTA />
      </main>

      <Footer />
    </>
  )
}
