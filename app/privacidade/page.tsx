import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import Navbar from '@/components/layout/Navbar'

export const metadata = {
  title: 'Política de Privacidade | TechGuia Digital',
  description: 'Nossa política de privacidade e como tratamos seus dados.',
}

export default function PrivacidadePage() {
  return (
    <>
      <Navbar />
      
      <main
        style={{
          background: '#0F0F0F',
          minHeight: '100vh',
          paddingTop: 'calc(var(--section-padding, 80px) + 72px)',
        }}
      >
        <div style={{ maxWidth: 768, margin: '0 auto', padding: '0 24px 80px' }}>
          
          <h1
            style={{
              fontFamily: 'var(--font-bebas-neue), sans-serif',
              fontSize: 'clamp(36px, 5vw, 48px)',
              color: '#FFFFFF',
              marginBottom: 8,
              letterSpacing: 1,
            }}
          >
            Política de Privacidade
          </h1>
          
          <p
            style={{
              fontFamily: 'var(--font-inter), sans-serif',
              color: 'var(--text-muted)',
              fontSize: 14,
              marginBottom: 48,
            }}
          >
            Última atualização: maio de 2025
          </p>

          <Link href="/">
            <button
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                color: 'var(--accent)',
                fontSize: 14,
                fontWeight: 600,
                marginBottom: 40,
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                fontFamily: 'var(--font-inter), sans-serif',
              }}
              className="hover:opacity-80 transition-opacity"
            >
              <ArrowLeft size={16} /> Voltar para o site
            </button>
          </Link>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 32,
            }}
          >
            <section style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.08)', paddingBottom: 24 }}>
              <h2
                style={{
                  fontFamily: 'var(--font-league-spartan), sans-serif',
                  fontWeight: 700,
                  fontSize: 20,
                  color: '#FFFFFF',
                  marginBottom: 12,
                }}
              >
                1. Quem somos
              </h2>
              <p
                style={{
                  fontFamily: 'var(--font-inter), sans-serif',
                  fontSize: 14,
                  color: 'var(--text-muted)',
                  lineHeight: 1.8,
                }}
              >
                TechGuia Digital, CNPJ 14.881.070/0001-00, agência especializada em
                tráfego pago, automação com IA, design e micro SaaS.<br />
                Site: techguiadigital.com
              </p>
            </section>

            <section style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.08)', paddingBottom: 24 }}>
              <h2
                style={{
                  fontFamily: 'var(--font-league-spartan), sans-serif',
                  fontWeight: 700,
                  fontSize: 20,
                  color: '#FFFFFF',
                  marginBottom: 12,
                }}
              >
                2. Quais dados coletamos
              </h2>
              <ul
                style={{
                  fontFamily: 'var(--font-inter), sans-serif',
                  fontSize: 14,
                  color: 'var(--text-muted)',
                  lineHeight: 1.8,
                  paddingLeft: 20,
                  margin: 0,
                }}
              >
                <li>Nome, e-mail e telefone via formulários de contato</li>
                <li>Dados de navegação (IP, navegador) para segurança e analytics</li>
                <li>Cookies de sessão e preferências</li>
              </ul>
            </section>

            <section style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.08)', paddingBottom: 24 }}>
              <h2
                style={{
                  fontFamily: 'var(--font-league-spartan), sans-serif',
                  fontWeight: 700,
                  fontSize: 20,
                  color: '#FFFFFF',
                  marginBottom: 12,
                }}
              >
                3. Para que usamos seus dados
              </h2>
              <ul
                style={{
                  fontFamily: 'var(--font-inter), sans-serif',
                  fontSize: 14,
                  color: 'var(--text-muted)',
                  lineHeight: 1.8,
                  paddingLeft: 20,
                  margin: 0,
                }}
              >
                <li>Responder solicitações de contato e consultoria</li>
                <li>Melhorar a experiência no site</li>
                <li>Enviar comunicações relevantes (somente com seu consentimento)</li>
                <li>Cumprir obrigações legais</li>
              </ul>
            </section>

            <section style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.08)', paddingBottom: 24 }}>
              <h2
                style={{
                  fontFamily: 'var(--font-league-spartan), sans-serif',
                  fontWeight: 700,
                  fontSize: 20,
                  color: '#FFFFFF',
                  marginBottom: 12,
                }}
              >
                4. Base legal (LGPD)
              </h2>
              <p
                style={{
                  fontFamily: 'var(--font-inter), sans-serif',
                  fontSize: 14,
                  color: 'var(--text-muted)',
                  lineHeight: 1.8,
                }}
              >
                Tratamos seus dados com base no legítimo interesse, consentimento
                e cumprimento de obrigação legal, conforme Art. 7º da LGPD.
              </p>
            </section>

            <section style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.08)', paddingBottom: 24 }}>
              <h2
                style={{
                  fontFamily: 'var(--font-league-spartan), sans-serif',
                  fontWeight: 700,
                  fontSize: 20,
                  color: '#FFFFFF',
                  marginBottom: 12,
                }}
              >
                5. Cookies
              </h2>
              <p
                style={{
                  fontFamily: 'var(--font-inter), sans-serif',
                  fontSize: 14,
                  color: 'var(--text-muted)',
                  lineHeight: 1.8,
                }}
              >
                Usamos cookies essenciais para funcionamento do site e cookies de
                analytics (Google Analytics) para entender como os visitantes
                navegam. Você pode desativar cookies nas configurações do seu
                navegador.
              </p>
            </section>

            <section style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.08)', paddingBottom: 24 }}>
              <h2
                style={{
                  fontFamily: 'var(--font-league-spartan), sans-serif',
                  fontWeight: 700,
                  fontSize: 20,
                  color: '#FFFFFF',
                  marginBottom: 12,
                }}
              >
                6. Compartilhamento de dados
              </h2>
              <p
                style={{
                  fontFamily: 'var(--font-inter), sans-serif',
                  fontSize: 14,
                  color: 'var(--text-muted)',
                  lineHeight: 1.8,
                }}
              >
                Não vendemos seus dados. Podemos compartilhar com ferramentas de
                analytics (Google) e automação, sempre com fins operacionais.
              </p>
            </section>

            <section style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.08)', paddingBottom: 24 }}>
              <h2
                style={{
                  fontFamily: 'var(--font-league-spartan), sans-serif',
                  fontWeight: 700,
                  fontSize: 20,
                  color: '#FFFFFF',
                  marginBottom: 12,
                }}
              >
                7. Seus direitos (LGPD Art. 18)
              </h2>
              <p
                style={{
                  fontFamily: 'var(--font-inter), sans-serif',
                  fontSize: 14,
                  color: 'var(--text-muted)',
                  lineHeight: 1.8,
                }}
              >
                Você tem direito a: acessar, corrigir, excluir, portar e revogar
                consentimento sobre seus dados. Entre em contato pelo site.
              </p>
            </section>

            <section style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.08)', paddingBottom: 24 }}>
              <h2
                style={{
                  fontFamily: 'var(--font-league-spartan), sans-serif',
                  fontWeight: 700,
                  fontSize: 20,
                  color: '#FFFFFF',
                  marginBottom: 12,
                }}
              >
                8. Por quanto tempo guardamos
              </h2>
              <p
                style={{
                  fontFamily: 'var(--font-inter), sans-serif',
                  fontSize: 14,
                  color: 'var(--text-muted)',
                  lineHeight: 1.8,
                }}
              >
                Dados de contato: até 5 anos ou enquanto necessário.<br />
                Dados de navegação: conforme política do Google Analytics.
              </p>
            </section>

            <section style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.08)', paddingBottom: 24 }}>
              <h2
                style={{
                  fontFamily: 'var(--font-league-spartan), sans-serif',
                  fontWeight: 700,
                  fontSize: 20,
                  color: '#FFFFFF',
                  marginBottom: 12,
                }}
              >
                9. Segurança
              </h2>
              <p
                style={{
                  fontFamily: 'var(--font-inter), sans-serif',
                  fontSize: 14,
                  color: 'var(--text-muted)',
                  lineHeight: 1.8,
                }}
              >
                Adotamos medidas técnicas e organizacionais para proteger seus dados
                contra acesso não autorizado.
              </p>
            </section>

            <section style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.08)', paddingBottom: 24 }}>
              <h2
                style={{
                  fontFamily: 'var(--font-league-spartan), sans-serif',
                  fontWeight: 700,
                  fontSize: 20,
                  color: '#FFFFFF',
                  marginBottom: 12,
                }}
              >
                10. Contato e DPO
              </h2>
              <p
                style={{
                  fontFamily: 'var(--font-inter), sans-serif',
                  fontSize: 14,
                  color: 'var(--text-muted)',
                  lineHeight: 1.8,
                }}
              >
                Para exercer seus direitos ou tirar dúvidas:<br />
                techguiadigital.com (formulário de contato)
              </p>
            </section>

            <section style={{ paddingBottom: 24 }}>
              <h2
                style={{
                  fontFamily: 'var(--font-league-spartan), sans-serif',
                  fontWeight: 700,
                  fontSize: 20,
                  color: '#FFFFFF',
                  marginBottom: 12,
                }}
              >
                11. Atualizações
              </h2>
              <p
                style={{
                  fontFamily: 'var(--font-inter), sans-serif',
                  fontSize: 14,
                  color: 'var(--text-muted)',
                  lineHeight: 1.8,
                }}
              >
                Esta política pode ser atualizada. A data da última revisão
                será sempre indicada no topo da página.
              </p>
            </section>
          </div>
          
          {/* Simple Footer for this page */}
          <div
            style={{
              textAlign: 'center',
              color: 'rgba(255, 255, 255, 0.4)',
              fontSize: 12,
              paddingTop: 32,
              marginTop: 64,
              borderTop: '1px solid rgba(255, 255, 255, 0.08)',
              fontFamily: 'var(--font-inter), sans-serif',
            }}
          >
            © 2025 TechGuia Digital. CNPJ 14.881.070/0001-00. 
            Todos os direitos reservados.
          </div>

        </div>
      </main>
    </>
  )
}
