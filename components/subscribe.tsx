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
    <div id="modal-container" className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50" onClick={handleOutsideClick}>
      <div className="bg-black rounded-lg w-full max-w-md text-white relative p-4" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="absolute top-2 right-2 text-2xl text-white hover:text-gray-500">×</button>
        <form onSubmit={handleSub} className="bg-[#f5f5f5] p-6 rounded-lg">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="correo@electroni.co"
            className="w-full px-4 py-2 mb-4 rounded-lg text-[18px] text-gray-900 bg-transparent outline-none border-[1px] border-gray-300 focus:border-blue-500"
          />
          <button type="submit" className="border-[1px] border-white text-[18px] bg-[#f23e5a] text-white p-4 rounded-lg w-full hover:bg-white hover:text-black mt-4 backdrop-blur-5" disabled={loading}>
            {loading ? '...' : 'Suscribirme'}
          </button>
        </form>
      </div>
    </div>
  )
}

export default Subscribe
