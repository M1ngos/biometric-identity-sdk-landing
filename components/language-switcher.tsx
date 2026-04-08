"use client"

import { useI18n } from "@/lib/i18n"
import { Button } from "@/components/ui/button"
import { Globe } from "lucide-react"

export function LanguageSwitcher() {
  const { locale, setLocale } = useI18n()

  return (
    <div className="flex items-center gap-1 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm p-1">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setLocale("en")}
        className={`h-7 px-2.5 rounded-full text-xs font-medium transition-colors ${
          locale === "en"
            ? "bg-emerald-500 text-white hover:bg-emerald-600"
            : "text-white/60 hover:text-white hover:bg-white/10"
        }`}
      >
        EN
      </Button>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setLocale("pt")}
        className={`h-7 px-2.5 rounded-full text-xs font-medium transition-colors ${
          locale === "pt"
            ? "bg-emerald-500 text-white hover:bg-emerald-600"
            : "text-white/60 hover:text-white hover:bg-white/10"
        }`}
      >
        PT
      </Button>
      <Globe className="w-3.5 h-3.5 text-white/60 ml-1 mr-1.5" />
    </div>
  )
}
