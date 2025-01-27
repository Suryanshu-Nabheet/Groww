export const mockStocks = [
  {
    id: 's1',
    name: 'Reliance Industries',
    symbol: 'RELIANCE',
    price: 2457.85,
    change: 1.5,
    marketCap: '16.8T',
    volume: '8.2M',
    category: 'Oil & Gas',
    risk: 'Moderate'
  },
  {
    id: 's2',
    name: 'HDFC Bank',
    symbol: 'HDFCBANK',
    price: 1678.45,
    change: -0.8,
    marketCap: '9.3T',
    volume: '5.1M',
    category: 'Banking',
    risk: 'Low'
  },
  {
    id: 's3',
    name: 'Tata Consultancy Services',
    symbol: 'TCS',
    price: 3456.70,
    change: 2.1,
    marketCap: '12.6T',
    volume: '2.8M',
    category: 'IT',
    risk: 'Low'
  },
  {
    id: 's4',
    name: 'Infosys',
    symbol: 'INFY',
    price: 1567.90,
    change: 1.2,
    marketCap: '6.5T',
    volume: '4.2M',
    category: 'IT',
    risk: 'Low'
  },
  {
    id: 's5',
    name: 'Bharti Airtel',
    symbol: 'BHARTIARTL',
    price: 876.30,
    change: 0.5,
    marketCap: '4.9T',
    volume: '3.1M',
    category: 'Telecom',
    risk: 'Moderate'
  },
  {
    id: 's6',
    name: 'ITC Limited',
    symbol: 'ITC',
    price: 432.15,
    change: -0.3,
    marketCap: '5.3T',
    volume: '9.7M',
    category: 'FMCG',
    risk: 'Low'
  },
  {
    id: 's7',
    name: 'State Bank of India',
    symbol: 'SBIN',
    price: 567.80,
    change: 1.8,
    marketCap: '5.1T',
    volume: '12.3M',
    category: 'Banking',
    risk: 'Moderate'
  },
  {
    id: 's8',
    name: 'Hindustan Unilever',
    symbol: 'HINDUNILVR',
    price: 2543.60,
    change: -0.6,
    marketCap: '5.9T',
    volume: '1.8M',
    category: 'FMCG',
    risk: 'Low'
  },
  {
    id: 's9',
    name: 'Axis Bank',
    symbol: 'AXISBANK',
    price: 987.45,
    change: 2.3,
    marketCap: '3.1T',
    volume: '6.4M',
    category: 'Banking',
    risk: 'Moderate'
  },
  {
    id: 's10',
    name: 'Larsen & Toubro',
    symbol: 'LT',
    price: 2876.90,
    change: 1.7,
    marketCap: '4.0T',
    volume: '2.1M',
    category: 'Construction',
    risk: 'Moderate'
  },
  {
    id: 's11',
    name: 'Asian Paints',
    symbol: 'ASIANPAINT',
    price: 3210.75,
    change: -0.9,
    marketCap: '3.1T',
    volume: '1.2M',
    category: 'Consumer Goods',
    risk: 'Low'
  },
  {
    id: 's12',
    name: 'Bajaj Finance',
    symbol: 'BAJFINANCE',
    price: 6789.30,
    change: 2.8,
    marketCap: '4.1T',
    volume: '1.5M',
    category: 'Finance',
    risk: 'High'
  },
  {
    id: 's13',
    name: 'Wipro',
    symbol: 'WIPRO',
    price: 432.60,
    change: 0.7,
    marketCap: '2.3T',
    volume: '5.6M',
    category: 'IT',
    risk: 'Moderate'
  },
  {
    id: 's14',
    name: 'ICICI Bank',
    symbol: 'ICICIBANK',
    price: 943.25,
    change: 1.4,
    marketCap: '6.6T',
    volume: '7.8M',
    category: 'Banking',
    risk: 'Moderate'
  },
  {
    id: 's15',
    name: 'Adani Ports',
    symbol: 'ADANIPORTS',
    price: 789.45,
    change: -1.2,
    marketCap: '1.7T',
    volume: '4.5M',
    category: 'Infrastructure',
    risk: 'High'
  },
  {
    id: 's16',
    name: 'Sun Pharma',
    symbol: 'SUNPHARMA',
    price: 1023.80,
    change: 0.9,
    marketCap: '2.5T',
    volume: '2.9M',
    category: 'Healthcare',
    risk: 'Moderate'
  },
  {
    id: 's17',
    name: 'Tata Motors',
    symbol: 'TATAMOTORS',
    price: 654.90,
    change: 3.2,
    marketCap: '2.2T',
    volume: '15.3M',
    category: 'Automobile',
    risk: 'High'
  },
  {
    id: 's18',
    name: 'Kotak Mahindra Bank',
    symbol: 'KOTAKBANK',
    price: 1876.35,
    change: -0.4,
    marketCap: '3.7T',
    volume: '2.4M',
    category: 'Banking',
    risk: 'Low'
  },
  {
    id: 's19',
    name: 'Maruti Suzuki',
    symbol: 'MARUTI',
    price: 9876.50,
    change: 1.6,
    marketCap: '2.9T',
    volume: '0.8M',
    category: 'Automobile',
    risk: 'Moderate'
  },
  {
    id: 's20',
    name: 'NTPC',
    symbol: 'NTPC',
    price: 234.60,
    change: 0.3,
    marketCap: '2.3T',
    volume: '11.2M',
    category: 'Power',
    risk: 'Low'
  }
];

export const mockMutualFunds = [
  {
    id: 'mf1',
    name: 'Quantum Growth Fund',
    nav: 45.75,
    category: 'Large Cap',
    risk: 'Moderate',
    returns: {
      oneYear: 12.5,
      threeYear: 15.2,
      fiveYear: 18.1
    },
    description: 'A large-cap fund focusing on stable, established companies',
    aum: '12,450 Cr',
    expenseRatio: '1.2%'
  },
  {
    id: 'mf2',
    name: 'Tech Momentum Fund',
    nav: 65.30,
    category: 'Sectoral',
    risk: 'High',
    returns: {
      oneYear: 22.8,
      threeYear: 25.4,
      fiveYear: 28.7
    },
    description: 'Focused on high-growth technology companies',
    aum: '8,750 Cr',
    expenseRatio: '1.8%'
  }
];

export const mockSIPs = [
  {
    id: 'sip1',
    name: 'Blue Chip SIP',
    minAmount: 1000,
    category: 'Large Cap',
    risk: 'Low',
    returns: {
      oneYear: 8.5,
      threeYear: 12.2,
      fiveYear: 14.1
    },
    description: 'Systematic investment in top 100 companies',
    recommendedTerm: '5+ years'
  },
  {
    id: 'sip2',
    name: 'Growth Champion SIP',
    minAmount: 2500,
    category: 'Multi Cap',
    risk: 'Moderate',
    returns: {
      oneYear: 15.7,
      threeYear: 18.9,
      fiveYear: 21.3
    },
    description: 'Balanced portfolio across market capitalizations',
    recommendedTerm: '3+ years'
  }
];