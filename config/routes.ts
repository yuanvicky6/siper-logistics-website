// ========================================
// 航线配置文件
// ========================================
// 修改这些值以更新网站上的航线信息

export const ROUTES = {
  bangladesh: {
    title: 'Bangladesh Routes',
    description: 'Primary destination for textile and ready-made garment industry',
    flag: '🇧🇩',
    routes: [
      {
        from: 'Shenzhen (SZX)',
        to: 'Dhaka (DAC)',
        airTime: '3-5 days',
        seaTime: '15-20 days',
        frequency: 'Daily/Weekly',
      },
      {
        from: 'Guangzhou (CAN)',
        to: 'Dhaka (DAC)',
        airTime: '3-5 days',
        seaTime: '15-20 days',
        frequency: 'Daily/Weekly',
      },
      {
        from: 'Shanghai (PVG)',
        to: 'Dhaka (DAC)',
        airTime: '4-6 days',
        seaTime: '18-25 days',
        frequency: 'Daily/Weekly',
      },
      {
        from: 'Hong Kong (HKG)',
        to: 'Chittagong (CGP)',
        airTime: '3-5 days',
        seaTime: '14-18 days',
        frequency: 'Daily/Weekly',
      },
    ],
    specialNotes: [
      'Strong network in Dhaka and Chittagong ports',
      'Expertise in textile and garment shipments',
      'Fast customs clearance due to established partnerships',
      'Door-to-door delivery available nationwide',
    ],
  },

  israel: {
    title: 'Israel Routes',
    description: 'Direct connections to the Middle East\'s tech hub',
    flag: '🇮🇱',
    routes: [
      {
        from: 'Shenzhen (SZX)',
        to: 'Tel Aviv (TLV)',
        airTime: '4-6 days',
        seaTime: '20-25 days',
        frequency: 'Weekly',
      },
      {
        from: 'Guangzhou (CAN)',
        to: 'Tel Aviv (TLV)',
        airTime: '4-6 days',
        seaTime: '20-25 days',
        frequency: 'Weekly',
      },
      {
        from: 'Shanghai (PVG)',
        to: 'Tel Aviv (TLV)',
        airTime: '5-7 days',
        seaTime: '22-28 days',
        frequency: 'Weekly',
      },
      {
        from: 'Hong Kong (HKG)',
        to: 'Haifa (HFA)',
        airTime: '4-6 days',
        seaTime: '20-25 days',
        frequency: 'Weekly',
      },
    ],
    specialNotes: [
      'Direct flights to Tel Aviv for fast delivery',
      'Expertise in electronics and tech shipments',
      'Comprehensive customs clearance support',
      'Warehousing options available',
    ],
  },

  africa: {
    title: 'African Routes',
    description: 'Extensive coverage across major African markets',
    flag: '🌍',
    routes: [
      {
        from: 'Shenzhen (SZX)',
        to: 'Lagos (LOS)',
        airTime: '5-7 days',
        seaTime: '25-30 days',
        frequency: 'Weekly/Bi-weekly',
      },
      {
        from: 'Guangzhou (CAN)',
        to: 'Lagos (LOS)',
        airTime: '5-7 days',
        seaTime: '25-30 days',
        frequency: 'Weekly/Bi-weekly',
      },
      {
        from: 'Shanghai (PVG)',
        to: 'Nairobi (NBO)',
        airTime: '5-7 days',
        seaTime: '28-35 days',
        frequency: 'Weekly/Bi-weekly',
      },
      {
        from: 'Shenzhen (SZX)',
        to: 'Cape Town (CPT)',
        airTime: '6-8 days',
        seaTime: '30-40 days',
        frequency: 'Weekly/Bi-weekly',
      },
      {
        from: 'Guangzhou (CAN)',
        to: 'Accra (ACC)',
        airTime: '5-7 days',
        seaTime: '25-35 days',
        frequency: 'Weekly/Bi-weekly',
      },
      {
        from: 'Shanghai (PVG)',
        to: 'Dar es Salaam (DAR)',
        airTime: '6-8 days',
        seaTime: '30-35 days',
        frequency: 'Weekly/Bi-weekly',
      },
      {
        from: 'Hong Kong (HKG)',
        to: 'Johannesburg (JNB)',
        airTime: '6-8 days',
        seaTime: '32-42 days',
        frequency: 'Weekly/Bi-weekly',
      },
      {
        from: 'Shenzhen (SZX)',
        to: 'Abidjan (ABJ)',
        airTime: '6-8 days',
        seaTime: '28-38 days',
        frequency: 'Weekly/Bi-weekly',
      },
    ],
    regions: {
      westAfrica: ['Nigeria (Lagos)', 'Ghana (Accra)', 'Côte d\'Ivoire (Abidjan)'],
      eastAfrica: ['Kenya (Nairobi, Mombasa)', 'Tanzania (Dar es Salaam)', 'Ethiopia (Addis Ababa)'],
      southernAfrica: ['South Africa (Johannesburg, Cape Town)', 'Zimbabwe (Harare)', 'Zambia (Lusaka)'],
    },
  },
}
