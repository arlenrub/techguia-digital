'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const NAV_LINKS = [
  { href: '/#servicos', label: 'Serviços' },
  { href: '/#resultados', label: 'Resultados' },
  { href: '/#cases', label: 'Cases' },
  { href: '/#sobre', label: 'Sobre' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: scrolled
          ? 'rgba(10, 10, 10, 0.85)'
          : 'transparent',
        backdropFilter: scrolled ? 'blur(20px) saturate(1.4)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(20px) saturate(1.4)' : 'none',
        borderBottom: scrolled
          ? '1px solid rgba(255, 255, 255, 0.07)'
          : '1px solid transparent',
        transition: 'background 0.4s ease, backdrop-filter 0.4s ease, border-color 0.4s ease',
      }}
    >
      <nav
        className="container-brand"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: scrolled ? 60 : 72,
          transition: 'height 0.4s ease',
        }}
        aria-label="Navegação principal"
      >
        {/* ── LOGO ── */}
        <Link
          href="/"
          aria-label="TechGuia Digital — Ir para o início"
          style={{ display: 'inline-flex', alignItems: 'center' }}
        >
          <Image
            src="/images/logo-semfundo.png"
            alt="TechGuia Digital"
            width={150}
            height={38}
            priority
            style={{
              height: scrolled ? 34 : 38,
              width: 'auto',
              objectFit: 'contain',
              display: 'block',
              transition: 'height 0.4s ease',
            }}
          />
        </Link>

        {/* ── DESKTOP LINKS ── */}
        <ul
          className="nav-desktop-only"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 32,
            listStyle: 'none',
          }}
          aria-label="Links de navegação"
        >
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                style={{
                  fontFamily: 'var(--font-inter), sans-serif',
                  fontSize: 14,
                  fontWeight: 500,
                  color: scrolled ? 'var(--text-muted)' : 'rgba(255,255,255,0.75)',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLAnchorElement).style.color = '#FFFFFF')
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLAnchorElement).style.color =
                    scrolled ? 'var(--text-muted)' : 'rgba(255,255,255,0.75)')
                }
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* ── DESKTOP CTA ── */}
        <div className="nav-desktop-only">
          <Link href="/#contato" className="btn-primary" id="navbar-cta-desktop">
            Consultoria Gratuita
          </Link>
        </div>

        {/* ── HAMBURGER (mobile) ── */}
        <button
          id="navbar-menu-toggle"
          className="nav-mobile-only"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-controls="navbar-mobile-menu"
          aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            gap: 5,
            width: 36,
            height: 36,
            padding: 6,
            borderRadius: 8,
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          <span
            style={{
              display: 'block',
              width: '100%',
              height: 2,
              background: isOpen ? 'var(--accent)' : '#FFFFFF',
              borderRadius: 2,
              transition: 'transform 0.25s, opacity 0.25s',
              transform: isOpen ? 'translateY(7px) rotate(45deg)' : 'none',
            }}
          />
          <span
            style={{
              display: 'block',
              width: '100%',
              height: 2,
              background: isOpen ? 'var(--accent)' : '#FFFFFF',
              borderRadius: 2,
              transition: 'opacity 0.25s',
              opacity: isOpen ? 0 : 1,
            }}
          />
          <span
            style={{
              display: 'block',
              width: '100%',
              height: 2,
              background: isOpen ? 'var(--accent)' : '#FFFFFF',
              borderRadius: 2,
              transition: 'transform 0.25s, opacity 0.25s',
              transform: isOpen ? 'translateY(-7px) rotate(-45deg)' : 'none',
            }}
          />
        </button>
      </nav>

      {/* ── MOBILE MENU ── */}
      <div
        id="navbar-mobile-menu"
        aria-hidden={!isOpen}
        style={{
          overflow: 'hidden',
          maxHeight: isOpen ? 400 : 0,
          transition: 'max-height 0.3s ease',
          background: 'rgba(10, 10, 10, 0.96)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderTop: isOpen ? '1px solid rgba(255,255,255,0.06)' : 'none',
        }}
      >
        <div className="container-brand" style={{ paddingBlock: isOpen ? 20 : 0 }}>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 4 }}>
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  style={{
                    display: 'block',
                    padding: '10px 0',
                    fontFamily: 'var(--font-inter), sans-serif',
                    fontSize: 15,
                    fontWeight: 500,
                    color: 'var(--text-muted)',
                    borderBottom: '1px solid rgba(255,255,255,0.04)',
                  }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div style={{ marginTop: 20, paddingBottom: 4 }}>
            <Link
              href="/#contato"
              className="btn-primary"
              id="navbar-cta-mobile"
              onClick={() => setIsOpen(false)}
              style={{ width: '100%', justifyContent: 'center' }}
            >
              Consultoria Gratuita
            </Link>
          </div>
        </div>
      </div>
      <style>{`
        .nav-desktop-only {
          display: none !important;
        }
        .nav-mobile-only {
          display: flex !important;
        }
        @media (min-width: 768px) {
          .nav-desktop-only {
            display: flex !important;
          }
          .nav-mobile-only {
            display: none !important;
          }
        }
      `}</style>
    </header>
  )
}
