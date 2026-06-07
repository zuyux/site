import type { Metadata } from 'next'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Manifiesto',
  description: 'Manifiesto de ZUYUX: visión cypherpunk, privacidad por diseño, espacios P2P y autonomía tecnológica.',
}

export default function Info() {
  return (
    <main className="min-h-screen flex items-center justify-center py-12">
      <div className="w-full max-w-3xl bg-[#000]/60 backdrop-blur-sm rounded-2xl p-6 sm:p-10">
        <header className="mb-6">
          <Link href="/"><h1 className="text-2xl sm:text-3xl font-bold">zuyux</h1></Link>
          <p className="text-sm text-zinc-400 mt-1">Organización Autónoma Descentralizada de Investigación y Desarrollo en TI — P2P · Privacidad · Autonomía</p>
        </header>

        <section className="text-lg leading-relaxed text-zinc-200 space-y-4">
          <p>
            Nacimos como un proyecto de investigación sobre Ciudades Inteligentes en la Oficina de Tecnologías de la Información de <a href="https://www.uni.edu.pe/" target="_blank" rel="noopener noreferrer" className="underline font-semibold">UNI</a> en Perú. Desde entonces, nos expandimos más allá del campus para experimentar con Bitcoin, L2s, Nostr, ZKPs y herramientas que devuelvan control y privacidad a las personas.
          </p>

          <p>
            Promovemos la Investigación y Desarrollo en <strong>TI</strong> con un enfoque cypherpunk: sistemas P2P, privacidad por diseño y autonomía tecnológica. Organizamos talleres, eventos y proyectos experimentales abiertos y auditables —software mínimo, reutilizable y resistente a la censura— para ofrecer alternativas concretas frente al creciente control centralizado de los estados-nación y corporaciones.
          </p>
        </section>

        <nav className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex flex-col  gap-3">
            <a href="https://github.com/zuyux" target="_blank" rel="noopener noreferrer" className="text-sm text-zinc-300 hover:underline">Visita nuestro GitHub</a>
            <a href="https://x.com/zuyuxxyz" target="_blank" rel="noopener noreferrer" className="text-sm text-zinc-300 hover:underline">Síguenos en X</a>
          </div>

          <div className="text-sm text-zinc-400">
            <p>¿Quieres colaborar? Únete a nuestra comunidad.</p>
          </div>
        </nav>

        <section className="mt-10 space-y-4 text-lg leading-relaxed text-zinc-200">
          <h2 className="text-2xl font-bold">Manifiesto Cypherpunk</h2>
          <p>
            Nosotros, los cypherpunks, creemos que la privacidad es necesaria para una sociedad abierta en el siglo XXI.
            Creemos que la gente debe poder comunicarse y hacer transacciones sin vigilancia, sin temor a que sus actividades sean grabadas y almacenadas para siempre.
          </p>
          <p>
            La vigilancia de las comunicaciones y el control de las transacciones son herramientas de opresión. Si no protegemos la privacidad del individuo,
            perdemos la libertad de actuar, pensar y asociarnos libremente.
          </p>
          <p>
            La verdadera privacidad anónima es un imperativo social, no solo un derecho individual. Debe ser accesible a todos, y debe construirse en el diseño de sistemas criptográficos,
            software libre y protocolos distribuidos.
          </p>
          <p>
            Creemos que los gobiernos y las corporaciones no deben tener poderes ilimitados para leer, modificar o bloquear nuestras comunicaciones.
            Los medios de comunicación seguros y la moneda anónima son herramientas para equilibrar el poder y proteger a las personas de la censura, el acoso y la discriminación.
          </p>
          <p>
            El anonimato no es una fachada para el crimen; es la protección indispensable de la disidencia, la creatividad y la libertad de expresión.
            Las personas que desean mantener sus asuntos privados no son sospechosas por el solo hecho de querer privacidad.
          </p>
          <p>
            La mejor forma de defender la privacidad es construir sistemas robustos: criptografía fuerte, implementaciones auditables,
            redes peer-to-peer, y una cultura que aprecie la libertad y el derecho a permanecer en silencio.
          </p>
          <p>
            Nuestro deber es escribir el código, compartir el conocimiento y desplegar las herramientas necesarias para que cualquiera pueda comunicarse y transferir valor con seguridad.
            La criptografía fuerte no es un privilegio, sino una infraestructura de libertad.
          </p>
          <p>
            Cuando las personas usan armas criptográficas, protegen su privacidad y su autonomía. Cuando las personas protegen su privacidad, obligan a los poderosos a rendir cuentas.
            Esto hace posibles los cambios sociales genuinos.
          </p>
          <p>
            Somos cypherpunks. Construimos sistemas que respetan la privacidad y desafían la vigilancia masiva.
            Nuestro trabajo es un acto de resistencia y una apuesta por un futuro donde la tecnología sirva a las personas, no al control centralizado.
          </p>
        </section>
          <p className="text-sm text-zinc-600">
            Traducción basada en el original en inglés: <a href="https://www.activism.net/cypherpunk/manifesto.html" target="_blank" rel="noopener noreferrer" className="underline">Cypherpunk Manifesto</a>
          </p>
        <Image src="https://ipfs.io/ipfs/bafybeievyoqqbysmm6yppsfogdw7w2y6qq5pm4nbwq2x3smepjxftdlssi" alt="reunion-zuyux-2025-1" width={600} height={300} unoptimized loading="lazy" className="w-full my-9 rounded-xl mx-auto" />
        <Image src="https://ipfs.io/ipfs/bafkreicvqbpoepmfplzcevddlsey7sgzrj67bujnrffm55c5ul4gsgbnnq" alt="zuyux-dao" width={600} height={300} unoptimized loading="lazy" className="w-full my-9 rounded-xl mx-auto" />
      </div>
    </main>
  )
}
