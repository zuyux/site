'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'

type BtcGuiGalleryProps = {
  images: string[]
}

export function BtcGuiGallery({ images }: BtcGuiGalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const isOpen = activeIndex !== null
  const activeImage = activeIndex === null ? null : images[activeIndex]

  const close = () => setActiveIndex(null)
  const showPrevious = () => {
    setActiveIndex((current) => {
      if (current === null) return current
      return current === 0 ? images.length - 1 : current - 1
    })
  }
  const showNext = () => {
    setActiveIndex((current) => {
      if (current === null) return current
      return current === images.length - 1 ? 0 : current + 1
    })
  }

  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') close()
      if (event.key === 'ArrowLeft') showPrevious()
      if (event.key === 'ArrowRight') showNext()
    }

    document.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [isOpen])

  return (
    <>
      <div className="mt-6 flex flex-col gap-8">
        {images.map((src, idx) => (
          <button
            key={src}
            type="button"
            onClick={() => setActiveIndex(idx)}
            className="group w-full overflow-hidden border border-zinc-900 bg-black/20 text-left transition hover:border-zinc-600 focus:outline-none focus-visible:border-white"
            aria-label={`Open Bitcoin Core GUI screen ${idx + 1}`}
          >
            <span className="relative block h-[42vh] w-full sm:h-[60vh] md:h-[70vh]">
              <Image
                src={src}
                alt={`Bitcoin Core GUI screen ${idx + 1}`}
                fill
                className="object-contain transition duration-300 group-hover:scale-[1.01]"
              />
            </span>
          </button>
        ))}
      </div>

      {isOpen && activeImage ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 px-3 py-16 sm:px-4 sm:py-6"
          role="dialog"
          aria-modal="true"
          aria-label="Bitcoin Core GUI image viewer"
          onClick={close}
        >
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation()
              close()
            }}
            className="absolute right-3 top-3 inline-flex h-10 w-10 items-center justify-center border border-zinc-700 bg-black/70 text-zinc-100 transition hover:border-zinc-300 focus:outline-none focus-visible:border-white sm:right-4 sm:top-4"
            aria-label="Close image viewer"
          >
            <X size={20} aria-hidden="true" />
          </button>

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation()
              showPrevious()
            }}
            className="absolute bottom-4 left-4 inline-flex h-11 w-11 items-center justify-center border border-zinc-700 bg-black/70 text-zinc-100 transition hover:border-zinc-300 focus:outline-none focus-visible:border-white sm:top-1/2 sm:-translate-y-1/2"
            aria-label="Previous image"
          >
            <ChevronLeft size={24} aria-hidden="true" />
          </button>

          <div className="relative h-[72vh] w-full max-w-6xl sm:h-[84vh]" onClick={(event) => event.stopPropagation()}>
            <Image
              src={activeImage}
              alt={`Bitcoin Core GUI screen ${activeIndex + 1}`}
              fill
              priority
              className="object-contain"
            />
          </div>

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation()
              showNext()
            }}
            className="absolute bottom-4 right-4 inline-flex h-11 w-11 items-center justify-center border border-zinc-700 bg-black/70 text-zinc-100 transition hover:border-zinc-300 focus:outline-none focus-visible:border-white sm:top-1/2 sm:-translate-y-1/2"
            aria-label="Next image"
          >
            <ChevronRight size={24} aria-hidden="true" />
          </button>

          <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-sm text-zinc-400">
            {activeIndex + 1} / {images.length}
          </p>
        </div>
      ) : null}
    </>
  )
}
