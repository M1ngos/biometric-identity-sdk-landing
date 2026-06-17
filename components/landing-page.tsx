"use client"

import { useI18n } from "@/lib/i18n"
import { LanguageSwitcher } from "@/components/language-switcher"
import { Button } from "@/components/ui/button"
import dynamic from "next/dynamic"
import { ArrowRight, Fingerprint, Github, Menu, X } from "lucide-react"
import { useState } from "react"

const PulsingBorderShader = dynamic(() => import("@/components/pulsing-border-shader"), { ssr: false })

export function LandingPage() {
  const { t } = useI18n()
  const [menuOpen, setMenuOpen] = useState(false)

  const navLinks = [
    { href: "#solutions", label: t("nav.solutions") },
    { href: "#security", label: t("nav.security") },
    { href: "#support", label: t("nav.support") },
    { href: "#pricing", label: t("nav.pricing") },
    { href: "#docs", label: t("nav.docs") },
  ]

  return (
    <div className="h-screen bg-[#050505] text-white flex flex-col select-none">
      {/* Dev Banner */}
      <div className="bg-gradient-to-r from-emerald-500/20 via-sky-500/20 to-indigo-500/20 border-b border-white/10 py-2 text-center text-xs text-white/60">
        {t("banner.dev")}
      </div>
      {/* Header */}
      <header className="relative flex items-center justify-between px-4 sm:px-10 py-8 border-b border-white/10 backdrop-blur-sm bg-[#050505/80]">
        <div className="flex items-center gap-3">
          <Fingerprint className="w-10 h-10 text-emerald-400 drop-shadow-[0_0_12px_rgb(59_130_246_0.5)]" />
          <span className="font-semibold text-2xl tracking-tight">
            <span className="bg-gradient-to-r from-emerald-400 to-sky-400 bg-clip-text text-transparent">Iden</span><span className="bg-gradient-to-r from-sky-400 to-indigo-400 bg-clip-text text-transparent font-extrabold">IA</span>
          </span>
          <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-white/10 text-white/50 border border-white/10">
            0.1.7-alpha.3
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 absolute left-1/2 -translate-x-1/2">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-sm text-white/60 hover:text-white transition-colors">{link.label}</a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a href="https://github.com/M1ngos/identia-landing" target="_blank" rel="noopener noreferrer" className="hidden sm:block text-white/40 hover:text-white/80 transition-colors" aria-label="GitHub">
            <Github className="w-4 h-4" />
          </a>
          {/* Mobile Menu Toggle */}
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-white/60 hover:text-white transition-colors" aria-label="Toggle menu">
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header >

      {/* Mobile Nav Overlay */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center gap-6 py-6 border-b border-white/10 bg-[#050505/95] backdrop-blur-sm">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)} className="text-sm text-white/60 hover:text-white transition-colors">{link.label}</a>
          ))}
          <div className="flex items-center gap-4 pt-2">
            <a href="https://github.com/M1ngos/identia-landing" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white/80 transition-colors" aria-label="GitHub">
              <Github className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}

      {/* Main - Flexbox Left/Right */}
      < main className="flex-1 flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 px-8 py-12" >
        {/* LEFT - Text */}
        < div className="flex-1 max-w-lg space-y-10 md:pl-12" >
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-sm text-emerald-400">
            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
            {t("hero.badge")}
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            {t("hero.title")}{" "}
            <span className="bg-gradient-to-r from-emerald-400 via-sky-400 to-indigo-400 bg-clip-text text-transparent">{t("hero.titleHighlight")}</span>
          </h1>

          <p className="text-white/60 text-base md:text-lg leading-relaxed">
            {t("hero.description")}
          </p>

          <div className="flex flex-wrap gap-4">
            <Button className="rounded-full bg-gradient-to-r from-emerald-500 to-sky-500 hover:from-emerald-600 hover:to-sky-600 text-white px-6 py-3">
              {t("hero.cta.primary")}
              <ArrowRight className="w-5 h-5 ml-3" />
            </Button>
            <Button variant="outline" className="rounded-full border-white/20 text-white hover:bg-white/10 px-6 py-3">
              {t("hero.cta.secondary")}
            </Button>
          </div>
        </div >

        {/* RIGHT - Animation */}
        < div className="flex-1 flex items-center justify-center" >
          <PulsingBorderShader />
        </div >
      </main >

      {/* Footer */}
      < footer className="flex items-center justify-center px-6 py-3 border-t border-white/10 text-xs text-white/40" >
        <span>&copy; {new Date().getFullYear()} IdenIA</span>
      </footer >
    </div >
  )
}
