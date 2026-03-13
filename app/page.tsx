'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { CONTACT_INFO } from '@/config/contact-info'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.4"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          }} />
        </div>

        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
              {CONTACT_INFO.company.name}
            </h1>
            <p className="text-xl sm:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Specializing in air and sea freight from China to Bangladesh, Israel, Africa, and beyond.
              Delivering excellence, connecting the world since {CONTACT_INFO.company.foundedYear}.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <button className="bg-white text-blue-900 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-50 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
                  Get Free Quote
                </button>
              </Link>
              <Link href="/services">
                <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-blue-900 transition-all duration-300">
                  Explore Services
                </button>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Stats Bar */}
        <div className="absolute bottom-0 left-0 right-0 bg-white/10 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl sm:text-4xl font-bold text-white">{CONTACT_INFO.statistics.years}</div>
                <div className="text-blue-200 text-sm">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-bold text-white">{CONTACT_INFO.statistics.countries}</div>
                <div className="text-blue-200 text-sm">Countries Served</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-bold text-white">{CONTACT_INFO.statistics.clients}</div>
                <div className="text-blue-200 text-sm">Happy Clients</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-bold text-white">{CONTACT_INFO.statistics.onTime}</div>
                <div className="text-blue-200 text-sm">On-Time Delivery</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Our Core Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive logistics solutions tailored to your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: '✈️',
                title: 'Air Freight',
                description: 'Fast and reliable air cargo services with global coverage. Perfect for time-sensitive shipments.',
                features: ['Express Delivery', 'Door-to-Door Service', 'Real-time Tracking']
              },
              {
                icon: '🚢',
                title: 'Sea Freight',
                description: 'Cost-effective ocean freight solutions for large volume shipments. FCL and LCL options available.',
                features: ['FCL & LCL', 'Port-to-Port', 'Flexible Schedules']
              },
              {
                icon: '📦',
                title: 'Customs Clearance',
                description: 'Expert customs brokerage services ensuring smooth and compliant international trade.',
                features: ['Documentation', 'Compliance', 'Fast Clearance']
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/services">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl">
                View All Services
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Key Routes */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Key Shipping Routes
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Specialized lanes connecting China to major global destinations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { from: 'China', to: 'Bangladesh', time: 'Air: 3-5 days', type: 'Primary Route' },
              { from: 'China', to: 'Israel', time: 'Air: 4-6 days', type: 'Primary Route' },
              { from: 'China', to: 'Nigeria', time: 'Sea: 25-30 days', type: 'Popular Route' },
              { from: 'China', to: 'Kenya', time: 'Sea: 28-35 days', type: 'Popular Route' },
              { from: 'China', to: 'South Africa', time: 'Sea: 30-40 days', type: 'Established Route' },
              { from: 'China', to: 'Ghana', time: 'Sea: 25-35 days', type: 'Popular Route' },
            ].map((route, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 border-2 border-blue-200 hover:border-blue-400 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-semibold text-blue-600 bg-blue-200 px-3 py-1 rounded-full">
                    {route.type}
                  </span>
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
                <div className="mb-4">
                  <div className="text-lg font-bold text-gray-900">{route.from}</div>
                  <div className="text-lg font-bold text-gray-900">{route.to}</div>
                </div>
                <div className="text-sm text-gray-600">
                  <span className="font-semibold text-blue-700">{route.time}</span>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/routes">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl">
                View All Routes
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Why Choose Spider Logistics?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              We go beyond shipping to provide complete logistics solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: '🌍',
                title: 'Global Network',
                description: 'Extensive network across 50+ countries with local expertise'
              },
              {
                icon: '⚡',
                title: 'Fast Delivery',
                description: 'Optimized routes and processes for speedy shipments'
              },
              {
                icon: '💰',
                title: 'Competitive Rates',
                description: 'Best-in-class pricing without compromising quality'
              },
              {
                icon: '📱',
                title: '24/7 Support',
                description: 'Round-the-clock customer service and tracking'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-6xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Ready to Ship?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Get a free quote today and discover how we can optimize your logistics
          </p>
          <Link href="/contact">
            <button className="bg-white text-blue-900 px-10 py-4 rounded-full font-semibold text-lg hover:bg-blue-50 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
              Get Started Now
            </button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
