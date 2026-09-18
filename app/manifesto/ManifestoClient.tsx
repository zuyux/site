'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Earth } from 'lucide-react'

import { localeNames, translations, type Locale } from './content'
import { members, memberTranslations } from './members'

const localeOptions: Locale[] = ['en', 'es', 'pt']

export default function ManifestoClient({
  initialLocale,
}: {
  initialLocale: Locale
}) {
  const [locale, setLocale] = useState<Locale>(initialLocale)
  const t = translations[locale]
  const memberText = memberTranslations[locale]

  return (
    <main lang={locale} className="flex min-h-screen items-center justify-center px-4 py-16 sm:px-6 sm:py-12">
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

      <div className="w-full max-w-3xl rounded-xl bg-[#000]/60 p-5 backdrop-blur-sm sm:rounded-2xl sm:p-10">
        <header className="mb-6">
          <Link href="/">
            <h1 className="text-2xl font-bold sm:text-3xl">manifesto</h1>
          </Link>
          <p className="text-sm text-zinc-400 mt-1">{t.organization}</p>
        </header>

        <section className="space-y-4 text-base leading-7 text-zinc-200 sm:text-lg sm:leading-relaxed">
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
            <strong>{locale === 'en' ? 'IT' : 'TI'}</strong>
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

        <section aria-labelledby="members-title" className="mt-10 border-t border-zinc-800 pt-8">
          <h2 id="members-title" className="text-2xl font-bold">{memberText.title}</h2>
          <p className="mt-2 text-sm text-zinc-400">{memberText.intro}</p>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2">
            {members.map((member) => (
              <li key={member.handle} className="overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950/50">
                <div className="relative aspect-square w-full bg-zinc-950">
                  <Image
                    src={`/members/${member.handle}.png`}
                    alt={`@${member.handle}`}
                    fill
                    sizes="(max-width: 639px) calc(100vw - 74px), (max-width: 767px) calc((100vw - 146px) / 2), 335px"
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold">@{member.handle}</h3>
                  <p className="mt-2 text-sm leading-6 text-zinc-400">{member.description[locale]}</p>
                  <div className="mt-4 flex flex-wrap gap-x-4 gap-y-3">
                    {member.links.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`@${member.handle} — ${memberText[link.label]}`}
                        title={memberText[link.label]}
                        className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-zinc-800 text-zinc-200 transition-colors hover:border-zinc-600 hover:bg-zinc-800 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-zinc-400"
                      >
                        {link.label === 'website' ? (
                          <Earth aria-hidden="true" className="h-5 w-5" />
                        ) : (
                          <Image
                            src={`/icons/${link.label}.svg`}
                            alt=""
                            aria-hidden="true"
                            width={20}
                            height={20}
                            className="h-5 w-5 invert"
                          />
                        )}
                      </a>
                    ))}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-10 space-y-4 text-base leading-7 text-zinc-200 sm:text-lg sm:leading-relaxed">
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
      </div>
    </main>
  )
}
