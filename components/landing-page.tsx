"use client"

import { useI18n } from "@/lib/i18n"
import { LanguageSwitcher } from "@/components/language-switcher"
import { Button } from "@/components/ui/button"
import dynamic from "next/dynamic"
import { ArrowRight, Fingerprint } from "lucide-react"

const PulsingBorderShader = dynamic(() => import("@/components/pulsing-border-shader"), { ssr: false })

export function LandingPage() {
  const { t } = useI18n()

  return (
    <div className="h-screen bg-[#050505] text-white flex flex-col">
        {/* Header */}
        <header className="flex items-center justify-between px-10 py-8 border-b border-white/10 backdrop-blur-sm bg-[#050505/80]">
          <div className="flex items-center gap-5">
            <Fingerprint className="w-10 h-10 text-emerald-400 drop-shadow-[0_0_12px_rgb(59_130_246_0.5)]" />
            <span className="font-semibold text-2xl bg-gradient-to-r from-emerald-400 to-sky-400 bg-clip-text text-transparent">Identia</span>
          </div>
          <div className="flex items-center gap-6">
            <div className="bg-[#ffffff/0.1] px-5 py-2.5 rounded-full hover:bg-[#ffffff/0.2] transition-colors">
              <LanguageSwitcher />
            </div>
            <Button size="lg" className="rounded-full bg-gradient-to-r from-emerald-500 to-sky-500 hover:from-emerald-600 hover:to-sky-600 text-white px-8 py-4 hover:shadow-lg hover:shadow-emerald-500/50 transition-all duration-300">
              {t("nav.getStarted")}
            </Button>
          </div>
        </header>

      {/* Main - Flexbox Left/Right */}
      <main className="flex-1 flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 px-8 py-12">
        {/* LEFT - Text */}
        <div className="flex-1 max-w-lg space-y-10 md:pl-12">
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
        </div>

        {/* RIGHT - Animation */}
        <div className="flex-1 flex items-center justify-center">
          <PulsingBorderShader />
        </div>
      </main>

      {/* Footer */}
      <footer className="flex items-center justify-center px-6 py-3 border-t border-white/10 text-xs text-white/40">
        <span>&copy; {new Date().getFullYear()} Identia</span>
      </footer>
    </div>
  )
}
