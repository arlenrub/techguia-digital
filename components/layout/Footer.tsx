import Image from 'next/image'
import Link from 'next/link'

const footerLinks = [
  { href: '/#servicos', label: 'Serviços' },
  { href: '/#resultados', label: 'Resultados' },
  { href: '/#cases', label: 'Cases' },
  { href: '/#contato', label: 'Contato' },
]

function InstagramIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}
function WhatsAppIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
      <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
    </svg>
  )
}

const socials = [
  { href: 'https://instagram.com/techguiadigital', label: 'Instagram', icon: <InstagramIcon /> },
  { href: 'https://wa.me/5581992665890', label: 'WhatsApp', icon: <WhatsAppIcon /> },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer
      style={{
        background: 'var(--bg-surface)',
        borderTop: '1px solid rgba(255,255,255,0.06)',
        paddingBlock: 48,
      }}
    >
      <div className="container-brand">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: 40,
          }}
        >
          {/* Brand col */}
          <div>
            <div style={{ marginBottom: 12 }}>
              <Image
                src="/images/logo-semfundo.png"
                alt="TechGuia Digital"
                width={150}
                height={38}
                style={{ height: 34, width: 'auto', objectFit: 'contain' }}
              />
            </div>
            <p className="text-body-sm" style={{ color: 'var(--text-muted)', maxWidth: 280 }}>
              Agência especializada em tráfego pago, automação com IA, design e Micro SaaS.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <p
              className="text-body-sm"
              style={{ color: '#FFFFFF', fontWeight: 600, marginBottom: 16 }}
            >
              Links Rápidos
            </p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="footer-link text-body-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials */}
          <div>
            <p
              className="text-body-sm"
              style={{ color: '#FFFFFF', fontWeight: 600, marginBottom: 16 }}
            >
              Redes Sociais
            </p>
            <div style={{ display: 'flex', gap: 12 }}>
              {socials.map((s) => (
                <a
                  key={s.href}
                  href={s.href}
                  aria-label={s.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon-link"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider + copyright */}
        <div
          style={{
            marginTop: 40,
            paddingTop: 24,
            borderTop: '1px solid rgba(255,255,255,0.06)',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 12,
          }}
        >
          <p className="text-caption" style={{ color: 'var(--text-muted)' }}>
            © {year} TechGuia Digital. Todos os direitos reservados.
          </p>
          <p className="text-caption" style={{ color: 'var(--text-muted)', textAlign: 'center' }}>
            CNPJ: 14.881.070/0001-00
          </p>
          <Link
            href="/privacidade"
            className="text-caption footer-link"
            style={{ color: 'var(--text-muted)' }}
          >
            Política de Privacidade
          </Link>
        </div>
      </div>
    </footer>
  )
}
