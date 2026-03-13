// ========================================
// 服务配置文件
// ========================================
// 修改这些值以更新网站上的服务内容

export const AIR_FREIGHT_SERVICES = {
  title: 'Air Freight Services',
  description: 'When time is critical, our air freight solutions deliver speed and reliability.',
  features: [
    'Direct and consolidated shipments',
    'Door-to-door and airport-to-airport options',
    'Temperature-controlled cargo handling',
    'Perishable goods handling',
    'Real-time shipment tracking',
    'Charter services for urgent needs',
  ],
  routes: [
    { from: 'Shenzhen (SZX)', to: 'Dhaka (DAC)', time: '3-5 days' },
    { from: 'Guangzhou (CAN)', to: 'Tel Aviv (TLV)', time: '4-6 days' },
    { from: 'Shanghai (PVG)', to: 'Lagos (LOS)', time: '5-7 days' },
    { from: 'Hong Kong (HKG)', to: 'Nairobi (NBO)', time: '5-7 days' },
  ],
}

export const SEA_FREIGHT_SERVICES = {
  title: 'Sea Freight Services',
  description: 'Our ocean freight services offer the most cost-effective solution for large-volume shipments.',
  features: [
    'Port-to-port and door-to-door services',
    'FCL and LCL options available',
    'Refrigerated container services',
    'Project cargo and heavy lift',
    'Customs clearance included',
    'Warehousing and distribution',
  ],
  fclFeatures: [
    '20ft and 40ft containers',
    'Exclusive use of container',
    'Ideal for large shipments',
    'More secure handling',
  ],
  lclFeatures: [
    'Share container space',
    'Pay only for space used',
    'Ideal for smaller shipments',
    'Regular departures',
  ],
}

export const ADDITIONAL_SERVICES = [
  {
    icon: '📋',
    title: 'Customs Clearance',
    description: 'Expert customs brokerage ensuring smooth clearance and compliance with all regulations.',
    features: ['Documentation', 'Duty Calculation', 'Regulatory Compliance'],
  },
  {
    icon: '🏭',
    title: 'Warehousing',
    description: 'Secure storage solutions with inventory management and pick-and-pack services.',
    features: ['Short & Long Term', 'Temperature Controlled', 'Inventory Tracking'],
  },
  {
    icon: '📦',
    title: 'Packaging Services',
    description: 'Professional packaging to protect your goods during transit.',
    features: ['Custom Crating', 'Protective Packaging', 'Labeling'],
  },
  {
    icon: '🚛',
    title: 'Inland Transportation',
    description: 'Reliable trucking and rail services for domestic and cross-border transport.',
    features: ['Door-to-Door', 'Fleet Management', 'Route Optimization'],
  },
  {
    icon: '🔍',
    title: 'Cargo Insurance',
    description: 'Comprehensive insurance coverage for your peace of mind.',
    features: ['All-Risk Coverage', 'Competitive Premiums', 'Fast Claims'],
  },
  {
    icon: '📊',
    title: 'Supply Chain Management',
    description: 'End-to-end supply chain solutions tailored to your business needs.',
    features: ['Strategy Planning', 'Cost Optimization', 'Performance Analytics'],
  },
]

export const INDUSTRIES = [
  { icon: '👗', industry: 'Textiles & Apparel' },
  { icon: '📱', industry: 'Electronics' },
  { icon: '🧴', industry: 'Chemicals' },
  { icon: '🔧', industry: 'Machinery & Equipment' },
  { icon: '🍎', industry: 'Food & Beverage' },
  { icon: '💊', industry: 'Pharmaceuticals' },
  { icon: '🚗', industry: 'Automotive' },
  { icon: '🏗️', industry: 'Construction Materials' },
]
