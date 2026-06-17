"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

type Locale = "en" | "pt"

interface I18nContextType {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: (key: string) => string
}

const translations = {
  en: {
    // Navigation
    "nav.features": "Features",
    "nav.developers": "Developers",
    "nav.pricing": "Pricing",
    "nav.docs": "Documentation",
    "nav.getStarted": "Get Started",

    // Hero
    "hero.badge": "Plug & Play Identity Verification",
    "hero.title": "Biometric Identity",
    "hero.titleHighlight": "Made Simple",
    "hero.description":
      "Integrate facial recognition, fingerprint scanning, and document validation into your applications with our simple APIs and SDKs. No biometric expertise required.",
    "hero.cta.primary": "Start Building",
    "hero.cta.secondary": "View API Docs",
    "hero.stat.integration": "5 min integration",
    "hero.stat.enterprise": "Enterprise ready",

    // Stats
    "stats.verifications": "Verifications",
    "stats.developers": "Developers",
    "stats.countries": "Countries",
    "stats.uptime": "Uptime",

    // Features
    "features.title": "Everything You Need",
    "features.subtitle": "Complete identity verification toolkit with simple integration.",

    "features.facial.title": "Facial Recognition",
    "features.facial.description":
      "Advanced liveness detection and face matching with anti-spoofing protection. Works across all lighting conditions.",

    "features.fingerprint.title": "Fingerprint Scanning",
    "features.fingerprint.description":
      "Cross-device fingerprint capture and matching with industry-leading accuracy rates.",

    "features.document.title": "Document Validation",
    "features.document.description":
      "Automatic extraction and verification of passports, national IDs, and driver licenses from 190+ countries.",

    "features.api.title": "Simple APIs",
    "features.api.description":
      "RESTful APIs with clear documentation. Get started with just a few lines of code.",

    "features.sdk.title": "Native SDKs",
    "features.sdk.description":
      "SDKs for iOS, Android, Web, and React Native with built-in UI components.",

    "features.security.title": "Enterprise Security",
    "features.security.description":
      "SOC 2 Type II certified. GDPR compliant. End-to-end encryption for all biometric data.",

    // Code Example
    "code.title": "Integration in Minutes",
    "code.subtitle": "Our APIs abstract the complexity of biometric processing.",
    "code.comment1": "// Enroll a new user with facial biometrics",
    "code.comment2": "// Verify user identity",

    // CTA Section
    "cta.title": "Ready to Get Started?",
    "cta.description":
      "Join thousands of developers building secure identity verification into their applications.",
    "cta.button": "Create Free Account",
    "cta.note": "No credit card required. Free tier includes 1,000 verifications/month.",

    // Footer
    "footer.product": "Product",
    "footer.company": "Company",
    "footer.resources": "Resources",
    "footer.legal": "Legal",
    "footer.about": "About",
    "footer.careers": "Careers",
    "footer.blog": "Blog",
    "footer.contact": "Contact",
    "footer.documentation": "Documentation",
    "footer.apiReference": "API Reference",
    "footer.sdks": "SDKs",
    "footer.status": "Status",
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms of Service",
    "footer.security": "Security",
    "footer.copyright": "All rights reserved.",
  },
  pt: {
    // Navigation
    "nav.features": "Recursos",
    "nav.developers": "Desenvolvedores",
    "nav.pricing": "Precos",
    "nav.docs": "Documentacao",
    "nav.getStarted": "Começar",

    // Hero
    "hero.badge": "Verificação de Identidade Plug & Play",
    "hero.title": "Identidade Biométrica",
    "hero.titleHighlight": "Simplificada",
    "hero.description":
      "Integre reconhecimento facial, leitura de impressão digital e validação de documentos em suas aplicações com nossas APIs e SDKs simples, sem necessidade de expertise em biometria.",
    "hero.cta.primary": "Começar a construir",
    "hero.cta.secondary": "Ver documentação",
    "hero.stat.integration": "Integracao em 5 min",
    "hero.stat.enterprise": "Pronto para empresas",

    // Stats
    "stats.verifications": "Verificacoes",
    "stats.developers": "Desenvolvedores",
    "stats.countries": "Paises",
    "stats.uptime": "Disponibilidade",

    // Features
    "features.title": "Tudo que Voce Precisa",
    "features.subtitle": "Kit completo de verificacao de identidade com integracao simples.",

    "features.facial.title": "Reconhecimento Facial",
    "features.facial.description":
      "Deteccao de vivacidade avancada e correspondencia facial com protecao anti-fraude. Funciona em todas as condicoes de iluminacao.",

    "features.fingerprint.title": "Leitura de Impressao Digital",
    "features.fingerprint.description":
      "Captura e correspondencia de impressao digital em varios dispositivos com taxas de precisao lideres do setor.",

    "features.document.title": "Validacao de Documentos",
    "features.document.description":
      "Extracao e verificacao automatica de passaportes, RGs e CNHs de mais de 190 paises.",

    "features.api.title": "APIs Simples",
    "features.api.description":
      "APIs RESTful com documentacao clara. Comece com apenas algumas linhas de codigo.",

    "features.sdk.title": "SDKs Nativos",
    "features.sdk.description":
      "SDKs para iOS, Android, Web e React Native com componentes de UI integrados.",

    "features.security.title": "Seguranca Empresarial",
    "features.security.description":
      "Certificado SOC 2 Tipo II. Conformidade com LGPD. Criptografia de ponta a ponta para todos os dados biometricos.",

    // Code Example
    "code.title": "Integracao em Minutos",
    "code.subtitle": "Nossas APIs abstraem a complexidade do processamento biometrico.",
    "code.comment1": "// Cadastrar novo usuario com biometria facial",
    "code.comment2": "// Verificar identidade do usuario",

    // CTA Section
    "cta.title": "Pronto para Começar?",
    "cta.description":
      "Junte-se a milhares de desenvolvedores construindo verificacao de identidade segura em suas aplicacoes.",
    "cta.button": "Criar Conta Gratuita",
    "cta.note": "Sem necessidade de cartao de credito. Plano gratuito inclui 1.000 verificacoes/mes.",

    // Footer
    "footer.product": "Produto",
    "footer.company": "Empresa",
    "footer.resources": "Recursos",
    "footer.legal": "Legal",
    "footer.about": "Sobre",
    "footer.careers": "Carreiras",
    "footer.blog": "Blog",
    "footer.contact": "Contato",
    "footer.documentation": "Documentacao",
    "footer.apiReference": "Referencia da API",
    "footer.sdks": "SDKs",
    "footer.status": "Status",
    "footer.privacy": "Politica de Privacidade",
    "footer.terms": "Termos de Servico",
    "footer.security": "Seguranca",
    "footer.copyright": "Todos os direitos reservados.",
  },
}

const I18nContext = createContext<I18nContextType | undefined>(undefined)

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("pt")

  const t = (key: string): string => {
    return translations[locale][key as keyof (typeof translations)["en"]] || key
  }

  return <I18nContext.Provider value={{ locale, setLocale, t }}>{children}</I18nContext.Provider>
}

export function useI18n() {
  const context = useContext(I18nContext)
  if (!context) {
    throw new Error("useI18n must be used within an I18nProvider")
  }
  return context
}
