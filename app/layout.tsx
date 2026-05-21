import type { Metadata } from 'next'
import { Bebas_Neue, League_Spartan, Inter } from 'next/font/google'
import Script from 'next/script'
import SmoothScroll from '@/components/providers/SmoothScroll'
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
  title: 'Techguia Digital | Tráfego Pago, Automação com IA e Micro SaaS em Recife',
  description: 'Agência em Recife especializada em tráfego pago, automação com IA, design e criação de micro SaaS. Mais de 100 negócios atendidos. Consultoria gratuita.',
  metadataBase: new URL('https://www.techguiadigital.com'),
  openGraph: {
    title: 'Techguia Digital | Tráfego Pago e Automação com IA',
    description: 'Escale seu negócio com tráfego pago, automação com IA e sistemas personalizados. Consultoria gratuita.',
    url: 'https://www.techguiadigital.com',
    siteName: 'Techguia Digital',
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Techguia Digital',
    description: 'Tráfego pago, automação com IA e Micro SaaS em Recife.',
  },
  alternates: {
    canonical: 'https://www.techguiadigital.com',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
}

/* ─────────────────────────────────────────────
   ROOT LAYOUT
   ───────────────────────────────────────────── */
const GA_ID = process.env.NEXT_PUBLIC_GA_ID
const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID

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
        <SmoothScroll>
          {children}
        </SmoothScroll>

        {/* ── Google Analytics 4 ── */}
        {GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}', { page_path: window.location.pathname });
              `}
            </Script>
          </>
        )}

        {/* ── Meta Pixel ── */}
        {META_PIXEL_ID && (
          <Script id="meta-pixel" strategy="afterInteractive">
            {`
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '${META_PIXEL_ID}');
              fbq('track', 'PageView');
            `}
          </Script>
        )}
      </body>
    </html>
  )
}
