export type Locale = 'en' | 'pt' | 'es'

export const localeNames: Record<Locale, string> = {
  en: 'English',
  pt: 'Português',
  es: 'Español',
}

export const translations: Record<
  Locale,
  {
    metaDescription: string
    organization: string
    introBeforeUni: string
    introAfterUni: string
    missionBeforeIt: string
    missionAfterIt: string
    github: string
    x: string
    collaborate: string
    title: string
    paragraphs: string[]
    source: string
    sourceLink: string
    meetingAlt: string
  }
> = {
  en: {
    metaDescription:
      'ZUYUX manifesto: cypherpunk vision, privacy by design, P2P spaces, and technological autonomy.',
    organization:
      'Decentralized Autonomous Organization for IT Research and Development - P2P · Privacy · Autonomy',
    introBeforeUni:
      'We began as a Smart Cities research project in the Information Technology Office at ',
    introAfterUni:
      ' in Peru. Since then, we have expanded beyond campus to experiment with Bitcoin, L2s, Nostr, ZKPs, and tools that return control and privacy to people.',
    missionBeforeIt: 'We promote research and development in ',
    missionAfterIt:
      ' with a cypherpunk focus: P2P systems, privacy by design, and technological autonomy. We organize workshops, events, and open, auditable experimental projects - minimal, reusable, censorship-resistant software - to offer concrete alternatives to the growing centralized control of nation-states and corporations.',
    github: 'Visit our GitHub',
    x: 'Follow us on X',
    collaborate: 'Want to collaborate? Join our community.',
    title: 'Cypherpunk Manifesto',
    paragraphs: [
      'We, the cypherpunks, believe privacy is necessary for an open society in the twenty-first century. People must be able to communicate and transact without surveillance, and without fear that their activities will be recorded and stored forever.',
      'Communication surveillance and transaction control are tools of oppression. If we do not protect individual privacy, we lose the freedom to act, think, and associate freely.',
      'True anonymous privacy is a social imperative, not only an individual right. It must be available to everyone, and it must be built into cryptographic systems, free software, and distributed protocols.',
      'Governments and corporations should not have unlimited power to read, alter, or block our communications. Secure media and anonymous money are tools that balance power and protect people from censorship, harassment, and discrimination.',
      'Anonymity is not a mask for crime; it is essential protection for dissent, creativity, and free expression. People who want to keep their affairs private are not suspicious simply because they value privacy.',
      'The best way to defend privacy is to build robust systems: strong cryptography, auditable implementations, peer-to-peer networks, and a culture that values freedom and the right to remain silent.',
      'Our duty is to write code, share knowledge, and deploy the tools people need to communicate and transfer value securely. Strong cryptography is not a privilege; it is infrastructure for freedom.',
      'When people use cryptographic tools, they protect their privacy and autonomy. When people protect their privacy, they force the powerful to be accountable. This makes genuine social change possible.',
      'We are cypherpunks. We build systems that respect privacy and challenge mass surveillance. Our work is an act of resistance and a commitment to a future where technology serves people, not centralized control.',
    ],
    source: 'Translation based on the original in English:',
    sourceLink: 'Cypherpunk Manifesto',
    meetingAlt: 'zuyux meeting 2025',
  },
  pt: {
    metaDescription:
      'Manifesto da ZUYUX: visão cypherpunk, privacidade por design, espaços P2P e autonomia tecnológica.',
    organization:
      'Organização Autônoma Descentralizada de Pesquisa e Desenvolvimento em TI - P2P · Privacidade · Autonomia',
    introBeforeUni:
      'Nascemos como um projeto de pesquisa sobre Cidades Inteligentes no Escritório de Tecnologias da Informação da ',
    introAfterUni:
      ', no Peru. Desde então, fomos além do campus para experimentar com Bitcoin, L2s, Nostr, ZKPs e ferramentas que devolvem controle e privacidade às pessoas.',
    missionBeforeIt: 'Promovemos pesquisa e desenvolvimento em ',
    missionAfterIt:
      ' com uma abordagem cypherpunk: sistemas P2P, privacidade por design e autonomia tecnológica. Organizamos oficinas, eventos e projetos experimentais abertos e auditáveis - software mínimo, reutilizável e resistente à censura - para oferecer alternativas concretas ao crescente controle centralizado de Estados-nação e corporações.',
    github: 'Visite nosso GitHub',
    x: 'Siga-nos no X',
    collaborate: 'Quer colaborar? Entre na nossa comunidade.',
    title: 'Manifesto Cypherpunk',
    paragraphs: [
      'Nós, cypherpunks, acreditamos que a privacidade é necessária para uma sociedade aberta no século XXI. As pessoas devem poder se comunicar e fazer transações sem vigilância, sem medo de que suas atividades sejam gravadas e armazenadas para sempre.',
      'A vigilância das comunicações e o controle das transações são ferramentas de opressão. Se não protegermos a privacidade individual, perdemos a liberdade de agir, pensar e nos associar livremente.',
      'A verdadeira privacidade anônima é um imperativo social, não apenas um direito individual. Ela deve estar disponível para todos e deve ser construída no desenho de sistemas criptográficos, software livre e protocolos distribuídos.',
      'Governos e corporações não devem ter poderes ilimitados para ler, alterar ou bloquear nossas comunicações. Meios de comunicação seguros e dinheiro anônimo são ferramentas para equilibrar poder e proteger pessoas contra censura, assédio e discriminação.',
      'O anonimato não é uma máscara para o crime; é uma proteção indispensável para a dissidência, a criatividade e a liberdade de expressão. Pessoas que desejam manter seus assuntos privados não são suspeitas apenas por valorizarem a privacidade.',
      'A melhor forma de defender a privacidade é construir sistemas robustos: criptografia forte, implementações auditáveis, redes peer-to-peer e uma cultura que valorize a liberdade e o direito de permanecer em silêncio.',
      'Nosso dever é escrever código, compartilhar conhecimento e implantar as ferramentas necessárias para que qualquer pessoa possa se comunicar e transferir valor com segurança. Criptografia forte não é um privilégio; é infraestrutura de liberdade.',
      'Quando as pessoas usam ferramentas criptográficas, protegem sua privacidade e sua autonomia. Quando protegem sua privacidade, obrigam os poderosos a prestar contas. Isso torna possíveis mudanças sociais genuínas.',
      'Somos cypherpunks. Construímos sistemas que respeitam a privacidade e desafiam a vigilância em massa. Nosso trabalho é um ato de resistência e uma aposta em um futuro no qual a tecnologia sirva às pessoas, não ao controle centralizado.',
    ],
    source: 'Tradução baseada no original em inglês:',
    sourceLink: 'Cypherpunk Manifesto',
    meetingAlt: 'reunião zuyux 2025',
  },
  es: {
    metaDescription:
      'Manifiesto de ZUYUX: visión cypherpunk, privacidad por diseño, espacios P2P y autonomía tecnológica.',
    organization:
      'Organización Autónoma Descentralizada de Investigación y Desarrollo en TI - P2P · Privacidad · Autonomía',
    introBeforeUni:
      'Nacimos como un proyecto de investigación sobre Ciudades Inteligentes en la Oficina de Tecnologías de la Información de ',
    introAfterUni:
      ' en Perú. Desde entonces, nos expandimos más allá del campus para experimentar con Bitcoin, L2s, Nostr, ZKPs y herramientas que devuelvan control y privacidad a las personas.',
    missionBeforeIt: 'Promovemos la Investigación y Desarrollo en ',
    missionAfterIt:
      ' con un enfoque cypherpunk: sistemas P2P, privacidad por diseño y autonomía tecnológica. Organizamos talleres, eventos y proyectos experimentales abiertos y auditables - software mínimo, reutilizable y resistente a la censura - para ofrecer alternativas concretas frente al creciente control centralizado de los estados-nación y corporaciones.',
    github: 'Visita nuestro GitHub',
    x: 'Síguenos en X',
    collaborate: '¿Quieres colaborar? Únete a nuestra comunidad.',
    title: 'Manifiesto Cypherpunk',
    paragraphs: [
      'Nosotros, los cypherpunks, creemos que la privacidad es necesaria para una sociedad abierta en el siglo XXI. La gente debe poder comunicarse y hacer transacciones sin vigilancia, sin temor a que sus actividades sean grabadas y almacenadas para siempre.',
      'La vigilancia de las comunicaciones y el control de las transacciones son herramientas de opresión. Si no protegemos la privacidad del individuo, perdemos la libertad de actuar, pensar y asociarnos libremente.',
      'La verdadera privacidad anónima es un imperativo social, no solo un derecho individual. Debe ser accesible a todos, y debe construirse en el diseño de sistemas criptográficos, software libre y protocolos distribuidos.',
      'Los gobiernos y las corporaciones no deben tener poderes ilimitados para leer, modificar o bloquear nuestras comunicaciones. Los medios de comunicación seguros y la moneda anónima son herramientas para equilibrar el poder y proteger a las personas de la censura, el acoso y la discriminación.',
      'El anonimato no es una fachada para el crimen; es la protección indispensable de la disidencia, la creatividad y la libertad de expresión. Las personas que desean mantener sus asuntos privados no son sospechosas por el solo hecho de querer privacidad.',
      'La mejor forma de defender la privacidad es construir sistemas robustos: criptografía fuerte, implementaciones auditables, redes peer-to-peer y una cultura que aprecie la libertad y el derecho a permanecer en silencio.',
      'Nuestro deber es escribir el código, compartir el conocimiento y desplegar las herramientas necesarias para que cualquiera pueda comunicarse y transferir valor con seguridad. La criptografía fuerte no es un privilegio, sino una infraestructura de libertad.',
      'Cuando las personas usan herramientas criptográficas, protegen su privacidad y su autonomía. Cuando las personas protegen su privacidad, obligan a los poderosos a rendir cuentas. Esto hace posibles los cambios sociales genuinos.',
      'Somos cypherpunks. Construimos sistemas que respetan la privacidad y desafían la vigilancia masiva. Nuestro trabajo es un acto de resistencia y una apuesta por un futuro donde la tecnología sirva a las personas, no al control centralizado.',
    ],
    source: 'Traducción basada en el original en inglés:',
    sourceLink: 'Cypherpunk Manifesto',
    meetingAlt: 'reunion zuyux 2025',
  },
}
