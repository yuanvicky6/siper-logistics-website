'use client'

import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function RoutesPage() {
  const routeData = {
    bangladesh: [
      { from: 'Shenzhen (SZX)', to: 'Dhaka (DAC)', airTime: '3-5 days', seaTime: '15-20 days' },
      { from: 'Guangzhou (CAN)', to: 'Dhaka (DAC)', airTime: '3-5 days', seaTime: '15-20 days' },
      { from: 'Shanghai (PVG)', to: 'Dhaka (DAC)', airTime: '4-6 days', seaTime: '18-25 days' },
      { from: 'Hong Kong (HKG)', to: 'Chittagong (CGP)', airTime: '3-5 days', seaTime: '14-18 days' },
    ],
    israel: [
      { from: 'Shenzhen (SZX)', to: 'Tel Aviv (TLV)', airTime: '4-6 days', seaTime: '20-25 days' },
      { from: 'Guangzhou (CAN)', to: 'Tel Aviv (TLV)', airTime: '4-6 days', seaTime: '20-25 days' },
      { from: 'Shanghai (PVG)', to: 'Tel Aviv (TLV)', airTime: '5-7 days', seaTime: '22-28 days' },
      { from: 'Hong Kong (HKG)', to: 'Haifa (HFA)', airTime: '4-6 days', seaTime: '20-25 days' },
    ],
    africa: [
      { from: 'Shenzhen (SZX)', to: 'Lagos (LOS)', airTime: '5-7 days', seaTime: '25-30 days' },
      { from: 'Guangzhou (CAN)', to: 'Lagos (LOS)', airTime: '5-7 days', seaTime: '25-30 days' },
      { from: 'Shanghai (PVG)', to: 'Nairobi (NBO)', airTime: '5-7 days', seaTime: '28-35 days' },
      { from: 'Shenzhen (SZX)', to: 'Cape Town (CPT)', airTime: '6-8 days', seaTime: '30-40 days' },
      { from: 'Guangzhou (CAN)', to: 'Accra (ACC)', airTime: '5-7 days', seaTime: '25-35 days' },
      { from: 'Shanghai (PVG)', to: 'Dar es Salaam (DAR)', airTime: '6-8 days', seaTime: '30-35 days' },
      { from: 'Hong Kong (HKG)', to: 'Johannesburg (JNB)', airTime: '6-8 days', seaTime: '32-42 days' },
      { from: 'Shenzhen (SZX)', to: 'Abidjan (ABJ)', airTime: '6-8 days', seaTime: '28-38 days' },
    ]
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
              Shipping Routes
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Direct routes connecting China to major global destinations
            </p>
          </motion.div>
        </div>
      </section>

      {/* Bangladesh Routes */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center mb-12">
              <div className="text-5xl mr-4">🇧🇩</div>
              <div>
                <h2 className="text-4xl font-bold text-gray-900">Bangladesh Routes</h2>
                <p className="text-lg text-gray-600">Primary destination for textile and ready-made garment industry</p>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Origin</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Destination</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Air Freight</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Sea Freight</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Frequency</th>
                  </tr>
                </thead>
                <tbody>
                  {routeData.bangladesh.map((route, index) => (
                    <tr key={index} className="border-t border-gray-100 hover:bg-blue-50 transition-colors">
                      <td className="px-6 py-4 text-sm text-gray-900 font-medium">{route.from}</td>
                      <td className="px-6 py-4 text-sm text-gray-900 font-medium">{route.to}</td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold">
                          {route.airTime}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        <span className="inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">
                          {route.seaTime}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">Daily/Weekly</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-8 bg-blue-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Special Notes for Bangladesh Shipments</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Strong network in Dhaka and Chittagong ports</li>
                <li>• Expertise in textile and garment shipments</li>
                <li>• Fast customs clearance due to established partnerships</li>
                <li>• Door-to-door delivery available nationwide</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Israel Routes */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center mb-12">
              <div className="text-5xl mr-4">🇮🇱</div>
              <div>
                <h2 className="text-4xl font-bold text-gray-900">Israel Routes</h2>
                <p className="text-lg text-gray-600">Direct connections to the Middle East's tech hub</p>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-white">
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Origin</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Destination</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Air Freight</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Sea Freight</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Frequency</th>
                  </tr>
                </thead>
                <tbody>
                  {routeData.israel.map((route, index) => (
                    <tr key={index} className="border-t border-gray-200 hover:bg-blue-50 transition-colors bg-white">
                      <td className="px-6 py-4 text-sm text-gray-900 font-medium">{route.from}</td>
                      <td className="px-6 py-4 text-sm text-gray-900 font-medium">{route.to}</td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold">
                          {route.airTime}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        <span className="inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">
                          {route.seaTime}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">Weekly</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-8 bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Special Notes for Israel Shipments</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Direct flights to Tel Aviv for fast delivery</li>
                <li>• Expertise in electronics and tech shipments</li>
                <li>• Comprehensive customs clearance support</li>
                <li>• Warehousing options available</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Africa Routes */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center mb-12">
              <div className="text-5xl mr-4">🌍</div>
              <div>
                <h2 className="text-4xl font-bold text-gray-900">African Routes</h2>
                <p className="text-lg text-gray-600">Extensive coverage across major African markets</p>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Origin</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Destination</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Air Freight</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Sea Freight</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Frequency</th>
                  </tr>
                </thead>
                <tbody>
                  {routeData.africa.map((route, index) => (
                    <tr key={index} className="border-t border-gray-100 hover:bg-blue-50 transition-colors">
                      <td className="px-6 py-4 text-sm text-gray-900 font-medium">{route.from}</td>
                      <td className="px-6 py-4 text-sm text-gray-900 font-medium">{route.to}</td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold">
                          {route.airTime}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        <span className="inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">
                          {route.seaTime}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">Weekly/Bi-weekly</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-8 grid md:grid-cols-3 gap-6">
              <div className="bg-blue-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">West Africa</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Nigeria (Lagos)</li>
                  <li>• Ghana (Accra)</li>
                  <li>• Côte d'Ivoire (Abidjan)</li>
                </ul>
              </div>
              <div className="bg-blue-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">East Africa</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Kenya (Nairobi, Mombasa)</li>
                  <li>• Tanzania (Dar es Salaam)</li>
                  <li>• Ethiopia (Addis Ababa)</li>
                </ul>
              </div>
              <div className="bg-blue-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Southern Africa</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• South Africa (Johannesburg, Cape Town)</li>
                  <li>• Zimbabwe (Harare)</li>
                  <li>• Zambia (Lusaka)</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Route Highlights */}
      <section className="py-24 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Route Highlights
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Why choose our specialized routes
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: '⚡',
                title: 'Fast Transit Times',
                description: 'Optimized schedules and partnerships ensure the fastest delivery times on all our primary routes.'
              },
              {
                icon: '💰',
                title: 'Competitive Pricing',
                description: 'Volume-based pricing and direct carrier relationships give you the best rates in the market.'
              },
              {
                icon: '🛡️',
                title: 'Reliable Service',
                description: 'Consistent schedules and proven track record on all our established shipping lanes.'
              },
              {
                icon: '📦',
                title: 'Flexible Options',
                description: 'Multiple shipping options including air, sea, and combined modes to suit your needs.'
              },
              {
                icon: '🔍',
                title: 'Real-time Tracking',
                description: 'Track your shipments door-to-door with our advanced tracking system.'
              },
              {
                icon: '🤝',
                title: 'Local Expertise',
                description: 'In-depth knowledge of destination markets including customs procedures and regulations.'
              }
            ].map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-800 rounded-2xl p-8 text-center"
              >
                <div className="text-5xl mb-4">{highlight.icon}</div>
                <h3 className="text-xl font-bold mb-3">{highlight.title}</h3>
                <p className="text-gray-400">{highlight.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Ship?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Get a quote for your specific route and shipment requirements
          </p>
          <a href="/contact">
            <button className="bg-white text-blue-900 px-10 py-4 rounded-full font-semibold text-lg hover:bg-blue-50 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
              Request Quote
            </button>
          </a>
        </div>
      </section>

      <Footer />
    </div>
  )
}
