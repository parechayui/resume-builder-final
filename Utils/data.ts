import { PortfolioData } from 'types/portfolio';

export const globalData: PortfolioData = {
  profile: {
    name: 'Alex Johnson',
    tag: 'Property Manager',
    desc: 'Dynamic Senior Property Manager with over 15 years of comprehensive experience in managing multifamily residential properties. Proven track record of enhancing property value through innovative cost-management, tenant satisfaction improvements, and effective leadership of property management teams.',
    image: '/profile.png',
    stat: [
      { value: '5', label: 'Years of Experience' },
      { value: '1000+', label: 'Doors Managed' },
      { value: '$10M', label: 'Rent Collected' },
    ],
  },

  workExperiences: [
    {
      title: 'Senior Property Manager',
      company: 'Luxe Residences',
      location: 'New York, NY',
      date: '2021 - Present',
      metrics: [
        {
          value: '30%',
          label: 'Increased Tenant Retention',
          button: 'See How',
        },
        { value: '20%', label: 'Improved Occupancy Rate', button: 'See How' },
        { value: '15%', label: 'Reduced Operating Costs', button: 'See How' },
        {
          value: '40%',
          label: 'Decreased Maintenance Costs',
          button: 'See How',
        },
        { value: '40%', label: 'Increased Revenue', button: 'See How' },
      ],
    },
    {
      title: 'Property Manager',
      company: 'Emerald Properties',
      location: 'Austin, TX',
      date: '2017 - 2020',
      metrics: [
        {
          value: '30%',
          label: 'Increased Tenant Retention',
          button: 'See How',
        },
        { value: '20%', label: 'Improved Occupancy Rate', button: 'See How' },
        {
          value: '25%',
          label: 'Increased Tenant Retention',
          button: 'See How',
        },
        {
          value: '40%',
          label: 'Decreased Maintenance Costs',
          button: 'See How',
        },
        { value: '30%', label: 'Increased Revenue', button: 'See How' },
      ],
    },
  ],
  education: [
    {
      degree: 'MBA, Real Estate Management',
      institution: 'Boston University',
      location: 'Boston, MA',
      date: '2015 – Present',
    },
    {
      degree: 'MBA, Real Estate Management',
      institution: 'Boston University',
      location: 'Boston, MA',
      date: '2015 – Present',
    },
  ],
  skills: [
    {
      id: 1,
      logo: '/mobile_logo.png',
      experience: 'Managed over 50 properties using AppFolio.',
      keyFeatures: [
        'Lease management',
        'maintenance requests',
        'online rent collection',
        'accounting',
      ],
      result:
        'Improved lease renewal rates by 15% and reduced rent collection time by 20%.',
    },
    {
      id: 2,
      logo: '/image 1.png',
      experience: "Screened over 100 potential tenants using Cozy's services.",
      keyFeatures: ['Background checks', 'credit reports', 'eviction history'],
      result:
        'Achieved a 95% tenant approval rate with a 0% eviction rate over two years.',
    },
    {
      id: 3,
      logo: '/Group 1.png',
      experience:
        'Managed financial accounts for a real estate portfolio valued at $10 million.',
      keyFeatures: [
        'Invoicing',
        'expense tracking',
        'rent collection',
        'financial reporting',
      ],
      result:
        'Achieved a 95% tenant approval rate with a 0% eviction rate over two years.',
    },
  ],
  testimonials: [
    {
      id: 1,
      image: '/profile.png',
      name: 'Saul Ramirez',
      country: 'Michigan, United States',
      desc: "I was on the lookout for my first apartment and I'm happy to say that it's with Sullivan. Michelle S made me feel at home the moment I walked into the leasing office to tour. I gave her my price range and she went over the top to find me units that would accommodate my price range, while keeping in mind that I wanted one that was renovated.",
    },
    {
      id: 2,
      image: '/profile.png',
      name: 'Saul Ramirez',
      country: 'Michigan, United States',
      desc: "I was on the lookout for my first apartment and I'm happy to say that it's with Sullivan. Michelle S made me feel at home the moment I walked into the leasing office to tour. I gave her my price range and she went over the top to find me units that would accommodate my price range, while keeping in mind that I wanted one that was renovated.",
    },
    {
      id: 3,
      image: '/profile.png',
      name: 'Saul Ramirez',
      country: 'Michigan, United States',
      desc: "I was on the lookout for my first apartment and I'm happy to say that it's with Sullivan. Michelle S made me feel at home the moment I walked into the leasing office to tour. I gave her my price range and she went over the top to find me units that would accommodate my price range, while keeping in mind that I wanted one that was renovated.",
    },
  ],
};
