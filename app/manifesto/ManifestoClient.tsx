'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { localeNames, translations, type Locale } from './content'

const localeOptions: Locale[] = ['en', 'es', 'pt']

export default function ManifestoClient({
  initialLocale,
}: {
  initialLocale: Locale
}) {
  const [locale, setLocale] = useState<Locale>(initialLocale)
  const t = translations[locale]

  return (
    <main className="min-h-screen flex items-center justify-center py-12">
      <label className="fixed right-4 top-4 z-50">
        <span className="sr-only">Language</span>
        <select
          value={locale}
          onChange={(event) => setLocale(event.target.value as Locale)}
          aria-label="Language"
          className="rounded-md border border-zinc-800 bg-black/80 px-3 py-2 text-sm text-zinc-100 shadow-lg backdrop-blur-sm outline-none transition-colors hover:border-zinc-600 focus:border-zinc-400"
        >
          {localeOptions.map((option) => (
            <option key={option} value={option} className="bg-black text-zinc-100">
              {localeNames[option]}
            </option>
          ))}
        </select>
      </label>

      <div className="w-full max-w-3xl bg-[#000]/60 backdrop-blur-sm rounded-2xl p-6 sm:p-10">
        <header className="mb-6">
          <Link href="/">
            <h1 className="text-2xl sm:text-3xl font-bold">manifesto</h1>
          </Link>
          <p className="text-sm text-zinc-400 mt-1">{t.organization}</p>
        </header>

        <section className="text-lg leading-relaxed text-zinc-200 space-y-4">
          <p>
            {t.introBeforeUni}
            <a
              href="https://www.uni.edu.pe/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline font-semibold"
            >
              UNI
            </a>
            {t.introAfterUni}
          </p>

          <p>
            {t.missionBeforeIt}
            <strong>TI</strong>
            {t.missionAfterIt}
          </p>
        </section>

        <nav className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex flex-col gap-3">
            <a
              href="https://github.com/zuyux"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-zinc-300 hover:underline"
            >
              {t.github}
            </a>
            <a
              href="https://x.com/zuyuxxyz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-zinc-300 hover:underline"
            >
              {t.x}
            </a>
          </div>

          <div className="text-sm text-zinc-400">
            <p>{t.collaborate}</p>
          </div>
        </nav>

        <section className="mt-10 space-y-4 text-lg leading-relaxed text-zinc-200">
          <h2 className="text-2xl font-bold">{t.title}</h2>
          {t.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </section>

        {locale !== 'en' ? (
          <p className="mt-6 text-sm text-zinc-600">
            Translation based on the original in English:{' '}
            <a
              href="https://www.activism.net/cypherpunk/manifesto.html"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Cypherpunk Manifesto
            </a>
          </p>
        ) : null}

        <Image
          src="/zuyux-meeting-2025-1.png"
          alt={t.meetingAlt}
          width={600}
          height={300}
          loading="lazy"
          className="w-full my-9 rounded-xl mx-auto"
        />
      </div>
    </main>
  )
}
