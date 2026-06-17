"use client"

import { Fragment } from "react"
import { useI18n } from "@/lib/i18n"
import { Globe } from "lucide-react"

const languages = [
  { code: "en" as const, label: "EN" },
  { code: "pt" as const, label: "PT" },
]

export function LanguageSwitcher() {
  const { locale, setLocale } = useI18n()

  return (
    <div className="flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 backdrop-blur-sm px-2.5 py-1">
      <Globe className="w-3.5 h-3.5 text-white/40 shrink-0" />
      <div className="flex items-center">
        {languages.map((lang, i) => (
          <Fragment key={lang.code}>
            {i > 0 && (
              <span className="text-white/20 text-xs select-none px-0.5">|</span>
            )}
            <button
              onClick={() => setLocale(lang.code)}
              className={`h-6 px-2 rounded-full text-xs font-semibold transition-all duration-200 ${
                locale === lang.code
                  ? "bg-gradient-to-r from-emerald-500 to-sky-500 text-white shadow-sm shadow-emerald-500/30"
                  : "text-white/50 hover:text-white/90"
              }`}
            >
              {lang.label}
            </button>
          </Fragment>
        ))}
      </div>
    </div>
  )
}
