'use client'
import React, { useState } from 'react'

export default function ContactSection() {
  const [selectedInquiry, setSelectedInquiry] = useState('')
  const [selectedCountry, setSelectedCountry] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted')
    // Add form submission logic
  }

  return (
    <section className="bg-blue-100 py-20 px-4 text-center">
      {/* Heading */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-blue-900 mb-2">Do you have any question?</h2>
        <div className="w-20 h-1 bg-red-500 mx-auto rounded" />
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="max-w-3xl mx-auto space-y-6">
        {/* Name Input */}
        <input
          type="text"
          placeholder="Your Name"
          className="p-3 w-full border rounded-md bg-transparent font-semibold text-blue-900 placeholder-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-600"
          required
        />

        {/* Email Input */}
        <input
          type="email"
          placeholder="Your Email"
          className="p-3 w-full border rounded-md bg-transparent font-semibold text-blue-900 placeholder-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-600"
          required
        />

        {/* Phone Number Input */}
        <input
          type="text"
          placeholder="Your Phone Number"
          className="p-3 w-full border rounded-md bg-transparent font-semibold text-blue-900 placeholder-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-600"
          required
        />

       

        

       

        {/* Message Input */}
        <textarea
          placeholder="Your Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="p-3 w-full border rounded-md bg-transparent font-semibold text-blue-900 placeholder-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-600"
          rows="5"
          required
        />

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-blue-600 text-white py-3 px-8 rounded-md font-semibold transition-all duration-300 transform hover:bg-blue-700 hover:scale-105"
        >
          SUBMIT FORM
        </button>
      </form>
    </section>
  )
}
