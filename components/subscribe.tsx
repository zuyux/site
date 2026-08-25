"use client"
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'

type SubscribeProps = {
  isOpen: boolean
  onClose: () => void
}

const Subscribe: React.FC<SubscribeProps> = ({ isOpen, onClose }) => {
  const router = useRouter()
  const [formData, setFormData] = useState({ email: '' })
  const [loading, setLoading] = useState(false)

  if (!isOpen) return null

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prevState) => ({ ...prevState, [name]: value }))
  }

  const handleSub = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      if (response.ok) {
        router.push('/done')
      } else {
        console.error('Failed to subscribe')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement
    if (target.id === 'modal-container') onClose()
  }

  return (
    <div id="modal-container" className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 px-4 py-6" onClick={handleOutsideClick}>
      <div className="relative w-full max-w-md rounded-lg bg-black p-3 text-white sm:p-4" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="absolute top-2 right-2 text-2xl text-white hover:text-gray-500">×</button>
        <form onSubmit={handleSub} className="rounded-lg bg-[#f5f5f5] p-4 sm:p-6">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="correo@electroni.co"
            className="mb-4 w-full rounded-lg border border-gray-300 bg-transparent px-4 py-2 text-base text-gray-900 outline-none focus:border-blue-500 sm:text-[18px]"
          />
          <button type="submit" className="mt-4 w-full rounded-lg border border-white bg-[#f23e5a] p-3 text-base text-white hover:bg-white hover:text-black sm:p-4 sm:text-[18px]" disabled={loading}>
            {loading ? '...' : 'Suscribirme'}
          </button>
        </form>
      </div>
    </div>
  )
}

export default Subscribe
