export interface Market {
  name: string;
  price: string;
  icon: string;
  up: boolean;
  row?: number[];
}

export const marketConfig: Market[] = [
  {
    name: 'EV Commodity Index',
    price: '$94.21',
    icon: '/ev-market.png',
    up: false,
    row: [1],
  },
  {
    name: 'BTC Dominance',
    price: '54.53%',
    icon: '/btcd-market.png',
    up: true,
    row: [1, 2],
  },
  {
    name: 'CS 2 Skins Index',
    price: '$9.48M',
    icon: '/cs-skins-market.png',
    up: true,
    row: [2, 3],
  },
  {
    name: 'Bitcoin Frogs',
    price: '₿ 0.035',
    icon: '/cs-skins-market.png',
    up: false,
    // No row specified, will appear in all rows
  },
  {
    name: 'Bitcoin Frogs',
    price: '₿ 0.035',
    icon: '/cs-skins-market.png',
    up: false,
    // No row specified, will appear in all rows
  },
  {
    name: 'Bitcoin Frogs',
    price: '₿ 0.035',
    icon: '/cs-skins-market.png',
    up: false,
    // No row specified, will appear in all rows
  },
  {
    name: 'Bitcoin Frogs',
    price: '₿ 0.035',
    icon: '/cs-skins-market.png',
    up: false,
    // No row specified, will appear in all rows
  },
  {
    name: 'Bitcoin Frogs',
    price: '₿ 0.035',
    icon: '/cs-skins-market.png',
    up: false,
    // No row specified, will appear in all rows
  },
  {
    name: 'Bitcoin Frogs',
    price: '₿ 0.035',
    icon: '/cs-skins-market.png',
    up: false,
    // No row specified, will appear in all rows
  },
  // Add more markets as needed
];