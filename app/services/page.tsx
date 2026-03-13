'use client'

import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function ServicesPage() {
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
              Our Services
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Comprehensive logistics solutions for all your shipping needs
            </p>
          </motion.div>
        </div>
      </section>

      {/* Air Freight */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="text-6xl mb-6">✈️</div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Air Freight Services
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  When time is critical, our air freight solutions deliver speed and reliability. We offer competitive rates and flexible schedules to destinations worldwide, with special expertise in China to Bangladesh, Israel, and African routes.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    'Direct and consolidated shipments',
                    'Door-to-door and airport-to-airport options',
                    'Temperature-controlled cargo handling',
                    'Perishable goods handling',
                    'Real-time shipment tracking',
                    'Charter services for urgent needs'
                  ].map((item, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <svg className="w-6 h-6 mr-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl">
                  Get Air Freight Quote
                </button>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Popular Air Routes</h3>
                <div className="space-y-4">
                  {[
                    { from: 'Shenzhen (SZX)', to: 'Dhaka (DAC)', time: '3-5 days' },
                    { from: 'Guangzhou (CAN)', to: 'Tel Aviv (TLV)', time: '4-6 days' },
                    { from: 'Shanghai (PVG)', to: 'Lagos (LOS)', time: '5-7 days' },
                    { from: 'Hong Kong (HKG)', to: 'Nairobi (NBO)', time: '5-7 days' },
                  ].map((route, index) => (
                    <div key={index} className="bg-white rounded-xl p-4 shadow-sm">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-semibold text-gray-900">{route.from}</span>
                        <span className="text-blue-600">→</span>
                        <span className="font-semibold text-gray-900">{route.to}</span>
                      </div>
                      <div className="text-sm text-gray-600">Transit Time: {route.time}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Sea Freight */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Sea Freight Options</h3>
                  <div className="space-y-6">
                    <div className="bg-white rounded-xl p-6 shadow-sm">
                      <h4 className="text-xl font-bold text-blue-600 mb-3">FCL - Full Container Load</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li>• 20ft and 40ft containers</li>
                        <li>• Exclusive use of container</li>
                        <li>• Ideal for large shipments</li>
                        <li>• More secure handling</li>
                      </ul>
                    </div>
                    <div className="bg-white rounded-xl p-6 shadow-sm">
                      <h4 className="text-xl font-bold text-blue-600 mb-3">LCL - Less than Container Load</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Share container space</li>
                        <li>• Pay only for space used</li>
                        <li>• Ideal for smaller shipments</li>
                        <li>• Regular departures</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="order-1 lg:order-2">
                <div className="text-6xl mb-6">🚢</div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Sea Freight Services
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Our ocean freight services offer the most cost-effective solution for large-volume shipments. With extensive partnerships with major shipping lines, we provide reliable and affordable sea freight to destinations across the globe.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    'Port-to-port and door-to-door services',
                    'FCL and LCL options available',
                    'Refrigerated container services',
                    'Project cargo and heavy lift',
                    'Customs clearance included',
                    'Warehousing and distribution'
                  ].map((item, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <svg className="w-6 h-6 mr-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl">
                  Get Sea Freight Quote
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Additional Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Complete logistics solutions beyond shipping
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: '📋',
                title: 'Customs Clearance',
                description: 'Expert customs brokerage ensuring smooth clearance and compliance with all regulations.',
                features: ['Documentation', 'Duty Calculation', 'Regulatory Compliance']
              },
              {
                icon: '🏭',
                title: 'Warehousing',
                description: 'Secure storage solutions with inventory management and pick-and-pack services.',
                features: ['Short & Long Term', 'Temperature Controlled', 'Inventory Tracking']
              },
              {
                icon: '📦',
                title: 'Packaging Services',
                description: 'Professional packaging to protect your goods during transit.',
                features: ['Custom Crating', 'Protective Packaging', 'Labeling']
              },
              {
                icon: '🚛',
                title: 'Inland Transportation',
                description: 'Reliable trucking and rail services for domestic and cross-border transport.',
                features: ['Door-to-Door', 'Fleet Management', 'Route Optimization']
              },
              {
                icon: '🔍',
                title: 'Cargo Insurance',
                description: 'Comprehensive insurance coverage for your peace of mind.',
                features: ['All-Risk Coverage', 'Competitive Premiums', 'Fast Claims']
              },
              {
                icon: '📊',
                title: 'Supply Chain Management',
                description: 'End-to-end supply chain solutions tailored to your business needs.',
                features: ['Strategy Planning', 'Cost Optimization', 'Performance Analytics']
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700 text-sm">
                      <svg className="w-4 h-4 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Expertise */}
      <section className="py-24 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Industry Expertise
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Specialized logistics solutions for various industries
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: '👗', industry: 'Textiles & Apparel' },
              { icon: '📱', industry: 'Electronics' },
              { icon: '🧴', industry: 'Chemicals' },
              { icon: '🔧', industry: 'Machinery & Equipment' },
              { icon: '🍎', industry: 'Food & Beverage' },
              { icon: '💊', industry: 'Pharmaceuticals' },
              { icon: '🚗', industry: 'Automotive' },
              { icon: '🏗️', industry: 'Construction Materials' }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="text-center bg-gray-800 rounded-2xl p-6 hover:bg-gray-700 transition-all duration-300"
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-semibold">{item.industry}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Need a Custom Solution?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Contact us today to discuss your specific logistics requirements
          </p>
          <a href="/contact">
            <button className="bg-white text-blue-900 px-10 py-4 rounded-full font-semibold text-lg hover:bg-blue-50 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
              Get in Touch
            </button>
          </a>
        </div>
      </section>

      <Footer />
    </div>
  )
}
