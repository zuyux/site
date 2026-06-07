"use client"

import { useRef } from 'react'

export default function MetauniClient() {
  const iframeRef = useRef<HTMLIFrameElement | null>(null)

  const enterFullscreen = async () => {
    try {
      const el = iframeRef.current ?? document.documentElement
      if (el && (el as any).requestFullscreen) {
        await (el as any).requestFullscreen()
      } else if (document.documentElement.requestFullscreen) {
        await document.documentElement.requestFullscreen()
      }
    } catch (err: any) {
      console.warn('Could not enter fullscreen:', err?.message ?? err)
      alert('Unable to enter fullscreen. This action may require a user gesture or browser permission.')
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-4">
      <div className="absolute left-4 top-4">
        <a href="/" aria-label="Go to homepage">
          <img src="/default.png" height={18} width={18} alt="zuyux logo" className="mx-auto" />
        </a>
      </div>

      <div className="flex w-full flex-col items-center gap-4">
        <div className="flex flex-col items-center gap-2 text-center sm:flex-row sm:text-left">
          <button onClick={enterFullscreen} className="rounded bg-white/5 px-4 py-2 hover:bg-white/10">Enter Fullscreen</button>
          <p className="text-sm text-zinc-400">If the embed requests permissions (camera/mic), please allow them in your browser.</p>
        </div>

        <div className="w-full max-w-5xl">
          <iframe
            ref={iframeRef}
            src="https://www.spatial.io/embed/META-UNI-6555c78d7891524361845463?share=2157973459901763422&autoplay=1&enableRtc=1"
            width="100%"
            height={720}
            allow="camera; fullscreen; autoplay; display-capture; microphone; clipboard-write"
            allowFullScreen
            loading="lazy"
            className="border-0 rounded"
          />
        </div>
      </div>

      <div>
        <a href="/info" aria-label="More info">
          <img src="/info.svg" height={21} width={21} alt="info" className="fixed bottom-4 right-4" />
        </a>
      </div>
    </main>
  )
}
