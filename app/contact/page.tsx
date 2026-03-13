'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { CONTACT_INFO } from '@/config/contact-info'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    origin: '',
    destination: '',
    serviceType: '',
    cargoDetails: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    alert('Thank you for your inquiry! We will get back to you within 24 hours.')
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      origin: '',
      destination: '',
      serviceType: '',
      cargoDetails: '',
      message: ''
    })
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900">
        <div className="text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Get in touch with our logistics experts today
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-white rounded-3xl p-8 shadow-xl">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Get a Free Quote</h2>
                <p className="text-gray-600 mb-8">Fill out the form and we'll get back to you within 24 hours</p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                        placeholder="Your Company"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                        placeholder="+86 123 4567 8900"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Origin
                      </label>
                      <input
                        type="text"
                        name="origin"
                        value={formData.origin}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                        placeholder="e.g., Shenzhen, China"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Destination
                      </label>
                      <input
                        type="text"
                        name="destination"
                        value={formData.destination}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                        placeholder="e.g., Dhaka, Bangladesh"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Service Type
                    </label>
                    <select
                      name="serviceType"
                      value={formData.serviceType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    >
                      <option value="">Select service type</option>
                      <option value="air-freight">Air Freight</option>
                      <option value="sea-freight">Sea Freight</option>
                      <option value="customs-clearance">Customs Clearance</option>
                      <option value="warehousing">Warehousing</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Cargo Details
                    </label>
                    <textarea
                      name="cargoDetails"
                      value={formData.cargoDetails}
                      onChange={handleChange}
                      rows={3}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
                      placeholder="Describe your cargo (weight, dimensions, type of goods, etc.)"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Additional Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
                      placeholder="Any additional information or questions..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  >
                    Submit Inquiry
                  </button>
                </form>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="bg-gradient-to-br from-blue-900 to-blue-800 text-white rounded-3xl p-8">
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-blue-700 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Shenzhen Office</h4>
                      <p className="text-blue-100 text-sm">{CONTACT_INFO.contact.shenzhenOffice}</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-blue-700 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Guangzhou Office</h4>
                      <p className="text-blue-100 text-sm">{CONTACT_INFO.contact.guangzhouOffice}</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-blue-700 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Warehouse</h4>
                      <p className="text-blue-100 text-sm">{CONTACT_INFO.contact.warehouse}</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-blue-700 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Phone</h4>
                      <p className="text-blue-100">{CONTACT_INFO.contact.phone}</p>
                      <p className="text-blue-100 text-sm mt-1">Mon-Fri: {CONTACT_INFO.workingHours.weekday}</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-blue-700 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Email</h4>
                      <p className="text-blue-100">{CONTACT_INFO.contact.email}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Working Hours */}
              <div className="bg-white rounded-3xl p-8 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Working Hours</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Monday - Friday</span>
                    <span className="font-semibold text-gray-900">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Saturday</span>
                    <span className="font-semibold text-gray-900">10:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Sunday</span>
                    <span className="font-semibold text-gray-900">Closed</span>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-blue-50 rounded-xl">
                  <p className="text-sm text-blue-700">
                    <span className="font-semibold">Note:</span> Emergency support available 24/7 for urgent shipments.
                  </p>
                </div>
              </div>

              {/* Quick Response */}
              <div className="bg-gradient-to-r from-green-500 to-green-600 text-white rounded-3xl p-8">
                <h3 className="text-xl font-bold mb-3">🚀 Quick Response</h3>
                <p className="text-green-100">
                  We guarantee a response to all inquiries within 24 hours during business days.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-600">
                Quick answers to common questions
              </p>
            </div>

            <div className="space-y-4">
              {[
                {
                  question: 'How do I get a shipping quote?',
                  answer: 'Simply fill out the contact form above with your shipment details, or call us directly. Our team will provide a detailed quote within 24 hours.'
                },
                {
                  question: 'What documents are required for international shipping?',
                  answer: 'Typically you\'ll need commercial invoice, packing list, bill of lading, and any necessary certificates depending on your cargo type. We can guide you through the entire documentation process.'
                },
                {
                  question: 'How long does customs clearance take?',
                  answer: 'Clearance time varies by country and cargo type. Generally, standard cargo clears within 1-3 business days. We work closely with customs authorities to expedite the process.'
                },
                {
                  question: 'Do you provide cargo insurance?',
                  answer: 'Yes, we offer comprehensive cargo insurance options to protect your shipment against loss or damage during transit. We can advise on the best coverage for your needs.'
                },
                {
                  question: 'Can you handle special cargo like hazardous materials?',
                  answer: 'Yes, we have experience handling various types of special cargo including hazardous materials, temperature-controlled goods, and oversize shipments. Please contact us for specific requirements.'
                }
              ].map((faq, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Still Have Questions?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Our team is ready to help with any logistics inquiries
          </p>
          <a href={`mailto:${CONTACT_INFO.contact.email}`} className="inline-block bg-white text-blue-900 px-10 py-4 rounded-full font-semibold text-lg hover:bg-blue-50 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
            Email Us Directly
          </a>
        </div>
      </section>

      <Footer />
    </div>
  )
}
