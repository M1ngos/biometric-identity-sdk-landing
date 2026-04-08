"use client"

import { I18nProvider } from "@/lib/i18n"
import { LandingPage } from "@/components/landing-page"

export default function Page() {
  return (
    <I18nProvider>
      <LandingPage />
    </I18nProvider>
  )
}
