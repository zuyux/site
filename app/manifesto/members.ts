import type { Locale } from './content'

export const members = [
  {
    handle: 'tyffanyzg',
    // Bio source: https://github.com/tyffanyzg
    description: {
      en: "Interested in full-stack development, blockchain, and human–computer interaction.",
      es: "Interesada en desarrollo full-stack, blockchain, e interacción humano-computadora.",
      pt: "Interessada em desenvolvimento full-stack, blockchain, e interação humano-computador.",
    } satisfies Record<Locale, string>,
    links: [
      { label: 'linkedin', href: 'https://www.linkedin.com/in/tyffanyzg/' },
      { label: 'x', href: 'https://x.com/tyffanyzg' },
      { label: 'github', href: 'https://github.com/tyffanyzg' },
    ],
  },
  {
    handle: 'fabohax',
    // Bio source: https://hax.lat and https://github.com/fabohax
    description: {
      en: "Developer and Bitcoin researcher exploring open-source tools and zero-knowledge proofs.",
      es: "Desarrollador e investigador de Bitcoin que explora herramientas de código abierto y pruebas de conocimiento cero.",
      pt: "Desenvolvedor e pesquisador de Bitcoin que explora ferramentas de código aberto e provas de conhecimento zero.",
    } satisfies Record<Locale, string>,
    links: [
      { label: 'website', href: 'https://hax.lat' },
      { label: 'github', href: 'https://github.com/fabohax' },
      { label: 'x', href: 'https://x.com/fabohax' },
    ],
  },
  {
    handle: 'navynox',
    // Bio source: https://github.com/navy0110
    description: {
      en: "Engineer with a focus on product management.",
      es: "Ingeniera con enfoque en gestión de productos.",
      pt: "Engenheira com foco em gestão de produtos.",
    } satisfies Record<Locale, string>,
    links: [
      { label: 'website', href: 'https://v0-navytpm.vercel.app/' },
      { label: 'linkedin', href: 'https://www.linkedin.com/in/nataliagnz/' },
      { label: 'github', href: 'https://github.com/navy0110' },
    ],
  },
  {
    handle: 'pmarsetti',
    // Bio source: https://github.com/0xp3 (JobConnect and teacher-governance-dapp projects).
    description: {
      en: "Builds projects for decentralized governance and job platforms.",
      es: "Desarrolla proyectos de gobernanza descentralizada y plataformas de empleo.",
      pt: "Desenvolve projetos de governança descentralizada e plataformas de emprego.",
    } satisfies Record<Locale, string>,
    links: [
      { label: 'linkedin', href: 'https://www.linkedin.com/in/marsetti/' },
      { label: 'github', href: 'https://github.com/0xp3' },
    ],
  },
  {
    handle: 'sirohxi',
    // Bio source: https://pe.linkedin.com/in/jimmyriojasmarquez
    description: {
      en: "Engineer pursuing graduate research in digital transformation at UNI.",
      es: "Ingeniero y tesista de maestría en Transformación Digital en la UNI.",
      pt: "Engenheiro e mestrando em Transformação Digital na UNI.",
    } satisfies Record<Locale, string>,
    links: [
      { label: 'linkedin', href: 'https://www.linkedin.com/in/jimmyriojasmarquez/' },
      { label: 'x', href: 'https://x.com/IchibanRiojas' },
      { label: 'github', href: 'https://github.com/Sirohxi' },
    ],
  },
] as const

export const memberTranslations: Record<Locale, {
  title: string
  intro: string
  website: string
  linkedin: string
  x: string
  github: string
}> = {
  en: {
    title: 'Members',
    intro: 'Meet the people behind ZUYUX.',
    x: 'X',
    github: 'GitHub',
    website: 'Personal website',
    linkedin: 'LinkedIn profile',
  },
  es: {
    title: 'Miembros',
    intro: 'Conoce a las personas detrás de ZUYUX.',
    x: 'X',
    github: 'GitHub',
    website: 'Sitio web personal',
    linkedin: 'Perfil de LinkedIn',
  },
  pt: {
    title: 'Membros',
    intro: 'Conheça as pessoas por trás da ZUYUX.',
    x: 'X',
    github: 'GitHub',
    website: 'Site pessoal',
    linkedin: 'Perfil no LinkedIn',
  },
}
