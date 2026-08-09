// Web3 Configuration
export const BLOCKCHAIN_CONFIG = {
  chainId: parseInt(process.env.NEXT_PUBLIC_CHAIN_ID || '1'),
  rpcUrl: process.env.NEXT_PUBLIC_RPC_URL || '',
  coinAddress: process.env.NEXT_PUBLIC_COIN_ADDRESS || '',
  airdropAddress: process.env.NEXT_PUBLIC_AIRDROP_ADDRESS || '',
}

// Airdrop Configuration
export const AIRDROP_CONFIG = {
  amount: parseInt(process.env.NEXT_PUBLIC_AIRDROP_AMOUNT || '1000'),
  startDate: new Date(process.env.NEXT_PUBLIC_AIRDROP_START_DATE || '2024-01-01'),
  endDate: new Date(process.env.NEXT_PUBLIC_AIRDROP_END_DATE || '2024-12-31'),
  status: process.env.NEXT_PUBLIC_AIRDROP_STATUS || 'active',
}

// Coin Information
export const COIN_INFO = {
  name: 'AES SAHEL COIN',
  symbol: 'ASC',
  decimals: 18,
  totalSupply: '1000000000', // 1 billion tokens
  description: 'AES SAHEL COIN - A revolutionary cryptocurrency for West Africa',
  logo: '/logo.png',
}

// Social Links
export const SOCIAL_LINKS = {
  twitter: 'https://twitter.com/aessahelcoin',
  telegram: 'https://t.me/aessahelcoin',
  discord: 'https://discord.gg/aessahelcoin',
  github: 'https://github.com/aessahelcoin',
  website: 'https://aessahelcoin.com',
}

// Network Configuration
export const NETWORKS = {
  ethereum: {
    chainId: 1,
    name: 'Ethereum Mainnet',
    rpcUrl: 'https://eth-mainnet.g.alchemy.com/v2/',
  },
  polygon: {
    chainId: 137,
    name: 'Polygon Mainnet',
    rpcUrl: 'https://polygon-rpc.com',
  },
  binance: {
    chainId: 56,
    name: 'BSC Mainnet',
    rpcUrl: 'https://bsc-dataseed.binance.org',
  },
}
