'use client'

import { useState } from 'react'
import toast from 'react-hot-toast'

const Form = () => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const [loading, setLoading] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setValues(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const { name, email, phone, message } = values
    if (!name || !email || !message || !phone) {
      toast.error('Please fill in all fields.')
      return
    }

    setLoading(true)
    try {
      const response = await fetch('https://formspree.io/f/mrbqvdzj', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(values)
      })

      const data = await response.json()

      if (data.ok) {
        toast.success('Message sent successfully!')
        setValues({ name: '', email: '', phone: '', message: '' })
      } else {
        throw new Error()
      }
    } catch (err) {
      console.error('Form error:', err)
      toast.error('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className='grid grid-cols-1 gap-x-5 gap-y-4 sm:grid-cols-2'>
        <div>
          <div className='relative'>
            <input
              id='name'
              type='text'
              name='name'
              value={values.name}
              onChange={handleChange}
              placeholder='Enter full name'
              className='focus:border-b-primary caret-primary block w-full rounded-md border-b border-b-gray-200 bg-white px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 focus:outline-none'
              required
            />
          </div>
        </div>

        <div>
          <div className='relative'>
            <input
              id='phone'
              type='tel'
              name='phone'
              value={values.phone}
              onChange={handleChange}
              placeholder='Enter phone number'
              className='focus:border-b-primary caret-primary dark: block w-full rounded-md border-b border-b-gray-200 bg-white px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 focus:outline-none'
              required
            />
          </div>
        </div>

        <div className='sm:col-span-2'>
          <div className='relative'>
            <input
              id='email'
              type='email'
              name='email'
              value={values.email}
              onChange={handleChange}
              placeholder='Enter email address'
              className='focus:border-b-primary caret-primary dark: block w-full rounded-md border-b border-b-gray-200 bg-white px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 focus:outline-none'
              required
            />
          </div>
        </div>

        <div className='sm:col-span-2'>
          <div className='relative'>
            <textarea
              id='message'
              name='message'
              value={values.message}
              onChange={handleChange}
              placeholder='State Message'
              required
              className='focus:border-b-primary caret-primary dark: block w-full resize-y rounded-md border-b border-b-gray-200 bg-white px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 focus:outline-none'
            ></textarea>
          </div>
        </div>

        <div className='sm:col-span-2'>
          <button
            type='submit'
            disabled={loading}
            className={`w-full rounded-3xl border border-black py-4 text-xl font-bold text-black transition hover:bg-black hover:text-white ${
              loading ? 'cursor-not-allowed opacity-50' : ''
            }`}
          >
            {loading ? 'Sending...' : 'Send Message'}
          </button>
        </div>
      </div>
    </form>
  )
}

export default Form
