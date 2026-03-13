'use client'

import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { CONTACT_INFO } from '@/config/contact-info'

export default function AboutPage() {
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
              About Us
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Connecting the world through reliable logistics solutions
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded in {CONTACT_INFO.company.foundedYear}, {CONTACT_INFO.company.name} has grown from a small forwarder to a leading international logistics provider. Our journey began with a simple mission: to make global shipping accessible, reliable, and efficient for businesses of all sizes.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Over the years, we've established strong partnerships with airlines, shipping lines, and customs authorities worldwide. This extensive network allows us to provide seamless logistics solutions from China to destinations across the globe.
              </p>
              <p className="text-lg text-gray-600">
                Today, we continue to expand our services while maintaining the personal touch and dedication that our clients have come to trust. Our expertise in the Asian to African, Israeli, and Bangladeshi markets makes us the preferred choice for businesses looking to ship from China.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-12"
            >
              <div className="grid grid-cols-2 gap-8">
                {[
                  { label: 'Years of Experience', value: CONTACT_INFO.statistics.years },
                  { label: 'Countries Served', value: CONTACT_INFO.statistics.countries },
                  { label: 'Team Members', value: CONTACT_INFO.statistics.team },
                  { label: 'Shipments Completed', value: CONTACT_INFO.statistics.shipments },
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-5xl font-bold text-blue-600 mb-2">
                      {stat.value}
                    </div>
                    <div className="text-gray-700 font-medium">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <div className="text-5xl mb-6">🎯</div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Our Mission
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                To provide world-class logistics solutions that empower businesses to grow globally. We are committed to delivering exceptional service, maintaining transparency, and building lasting partnerships with our clients. Through innovation and dedication, we strive to make international shipping simple, reliable, and cost-effective.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <div className="text-5xl mb-6">👁️</div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Our Vision
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                To be the most trusted and innovative logistics partner for businesses trading between China and emerging markets. We envision a world where geographical boundaries don't limit business opportunities, and every company, regardless of size, can access global markets with ease.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: '🤝',
                title: 'Integrity',
                description: 'We conduct business with honesty and transparency, building trust through ethical practices.'
              },
              {
                icon: '⚡',
                title: 'Excellence',
                description: 'We strive for excellence in every shipment, constantly improving our services to exceed expectations.'
              },
              {
                icon: '🌱',
                title: 'Innovation',
                description: 'We embrace technology and innovative solutions to stay ahead in the rapidly evolving logistics industry.'
              },
              {
                icon: '🤝',
                title: 'Partnership',
                description: 'We view our clients as partners, working collaboratively to achieve shared success.'
              },
              {
                icon: '🌍',
                title: 'Sustainability',
                description: 'We are committed to sustainable practices that minimize environmental impact.'
              },
              {
                icon: '💪',
                title: 'Reliability',
                description: 'Our clients can count on us to deliver, time after time, without compromise.'
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300"
              >
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Experienced professionals dedicated to your success
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'John Chen', position: 'Chief Executive Officer', expertise: 'Global Logistics Strategy' },
              { name: 'Sarah Wang', position: 'Operations Director', expertise: 'Air Freight Management' },
              { name: 'Michael Liu', position: 'Commercial Director', expertise: 'Sea Freight Solutions' },
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-800 rounded-2xl p-8 text-center"
              >
                <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full mx-auto mb-6 flex items-center justify-center text-3xl font-bold">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                <p className="text-blue-400 font-medium mb-3">{member.position}</p>
                <p className="text-gray-400">{member.expertise}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Work With Us?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of satisfied clients who trust Spider Logistics for their shipping needs
          </p>
          <a href="/contact">
            <button className="bg-white text-blue-900 px-10 py-4 rounded-full font-semibold text-lg hover:bg-blue-50 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
              Contact Us Today
            </button>
          </a>
        </div>
      </section>

      <Footer />
    </div>
  )
}
