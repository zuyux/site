export type Project = {
  slug: string
  name: string
  eyebrow: string
  summary: string
  description: string[]
  highlights: string[]
  repo: string
  site: string
  alternateSites?: string[]
  language: string
  topics: string[]
  status: string
}

export const projects: Project[] = [
  {
    slug: 'utxo-lat',
    name: 'utxo.lat',
    eyebrow: 'Bitcoin explorer',
    summary: 'A lightweight watch-only Bitcoin UTXO tracker for addresses, confirmations, and spend status.',
    description: [
      'utxo.lat is an easy Bitcoin explorer built for precise watch-only monitoring. It focuses on tracking addresses and individual UTXOs without taking custody or asking for private keys.',
      'The project supports Legacy, SegWit, and Taproot addresses, with a minimal web interface, optional CLI workflow, and WebSocket-oriented real-time updates for confirmations and spends.',
    ],
    highlights: [
      'Tracks Bitcoin addresses and individual UTXOs',
      'Designed for cold storage, multisig, vaults, bots, and dashboards',
      'Built around Node.js, React, Tailwind, ElectrumX or Bitcoin Core RPC',
      'Public TypeScript repository forked from utxo.watch',
    ],
    repo: 'https://github.com/zuyux/utxo-lat',
    site: 'https://utxo.lat',
    language: 'TypeScript',
    topics: ['bitcoin', 'explorer'],
    status: 'Active public repo',
  },
  {
    slug: 'bboxx',
    name: 'bboxx',
    eyebrow: 'Open app registry',
    summary: 'A Bitcoin-anchored registry and funding layer for open-source software.',
    description: [
      'BBOXX is an open-source coordination layer for discovering, verifying, funding, and maintaining high-integrity software, with an initial focus on Bitcoin, Lightning, Nostr, wallets, privacy tooling, infrastructure, and public-good research.',
      'Its core idea is the Bitcoin App Registry, or BAR: publisher-controlled metadata for projects, maintainers, releases, funding links, milestones, and attestations, with canonical updates that can be anchored to Bitcoin L1.',
    ],
    highlights: [
      'Universal index for apps, protocols, CLI tools, wallets, and infrastructure',
      'Connects project metadata with funding milestones and developer proof-of-work',
      'Uses BAR metadata, IPFS, GitHub data, Hiro APIs, and Stacks contracts',
      'Public TypeScript repository by ZUYUX',
    ],
    repo: 'https://github.com/zuyux/bboxx',
    site: 'https://bboxx.app',
    alternateSites: ['https://bboxx.app'],
    language: 'TypeScript',
    topics: ['app-store', 'bitcoin', 'crowdfunding'],
    status: 'Active public repo',
  },
  {
    slug: 'cholo',
    name: 'cholo',
    eyebrow: 'LATAM memecoin',
    summary: 'A Peru-born community memecoin on Stacks, built around culture, humor, and Bitcoin ecosystem identity.',
    description: [
      'CHOLO is a fungible token deployed on Stacks mainnet. The project presents itself as a memecoin first: an experimental cultural asset whose energy comes from community participation rather than promised utility.',
      'The README frames CHOLO around Peruvian and Latin American identity, community creativity, and potential support for open-source, DeSci, research, and cultural initiatives. It also includes clear risk language for speculative token activity.',
    ],
    highlights: [
      'Stacks mainnet fungible token with 8 decimals',
      'Declared supply of 8,888,888,888 CHOLO',
      'Contract: SP193GXQTNHVV9WSAPHAB89M6R9QSEXZKS3774CMD.cholo'
    ],
    repo: 'https://github.com/zuyux/cholo',
    site: 'https://cholo.meme',
    language: 'TypeScript',
    topics: ['bitcoin', 'stacks', 'community'],
    status: 'Active public repo',
  },
  {
    slug: 'bitdevs-lima',
    name: 'bitdevs lima',
    eyebrow: 'Bitcoin community',
    summary: 'The Lima, Peru chapter of BitDevs for technical Bitcoin discussion, Socratic Seminars, and local meetups.',
    description: [
      'BitDevs Lima is a local community for people interested in discussing and learning about Bitcoin and related technologies. The site hosts links and materials for past and future meetups.',
      'The repository is a simple Zola site adapted from the wider BitDevs ecosystem, with content organized as Markdown posts for Socratic Seminars, technical topics, and local community notes.',
    ],
    highlights: [
      'Hosts Bitcoin Socratic Seminar and meetup materials',
      'Focuses on technical discussion and local connections in Lima',
      'Forked from BitDevs Buenos Aires'
    ],
    repo: 'https://github.com/bitdevsLIM/bitdevsLIM',
    site: 'https://bitdevslima.org',
    language: 'HTML',
    topics: ['bitcoin', 'lima', 'community'],
    status: 'Active public repo',
  },
]

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug)
}
