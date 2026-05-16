import type { Metadata } from 'next'
import { Bebas_Neue, League_Spartan, Inter } from 'next/font/google'
import './globals.css'

/* ─────────────────────────────────────────────
   FONTS
   ───────────────────────────────────────────── */
const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas-neue',
  display: 'swap',
})

const leagueSpartan = League_Spartan({
  subsets: ['latin'],
  variable: '--font-league-spartan',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '500', '600'],
  display: 'swap',
})

/* ─────────────────────────────────────────────
   METADATA / SEO
   ───────────────────────────────────────────── */
export const metadata: Metadata = {
  title: 'TechGuia Digital | Tráfego Pago, Automação IA e Micro SaaS',
  description:
    'Agência especializada em tráfego pago, automação com IA, design e criação de micro SaaS. Escale seu negócio com tecnologia.',
  openGraph: {
    title: 'TechGuia Digital',
    description: 'Escale seu negócio com IA e tráfego pago.',
    url: 'https://techguiadigital.com',
    siteName: 'TechGuia Digital',
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
  },
  robots: {
    index: true,
    follow: true,
  },
}

/* ─────────────────────────────────────────────
   ROOT LAYOUT
   ───────────────────────────────────────────── */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="pt-BR"
      className={`${bebasNeue.variable} ${leagueSpartan.variable} ${inter.variable}`}
    >
      <body>
        {children}
      </body>
    </html>
  )
}
