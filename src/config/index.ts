// Web3 Configuration for Solana
export const BLOCKCHAIN_CONFIG = {
  chainId: parseInt(process.env.NEXT_PUBLIC_CHAIN_ID || '101'), // Solana Mainnet
  rpcUrl: process.env.NEXT_PUBLIC_RPC_URL || 'https://api.mainnet-beta.solana.com',
  coinAddress: process.env.NEXT_PUBLIC_COIN_ADDRESS || 'F3cUHSYRnHkJweSCuacxCKaWkdCCKkqKU2kiFyhopump',
  airdropAddress: process.env.NEXT_PUBLIC_AIRDROP_ADDRESS || 'F3cUHSYRnHkJweSCuacxCKaWkdCCKkqKU2kiFyhopump',
}

// Airdrop Configuration
export const AIRDROP_CONFIG = {
  amount: parseInt(process.env.NEXT_PUBLIC_AIRDROP_AMOUNT || '500'),
  startDate: new Date(process.env.NEXT_PUBLIC_AIRDROP_START_DATE || '2024-01-01'),
  endDate: new Date(process.env.NEXT_PUBLIC_AIRDROP_END_DATE || '2024-12-31'),
  status: process.env.NEXT_PUBLIC_AIRDROP_STATUS || 'active',
}

// Coin Information
export const COIN_INFO = {
  name: 'AES SAHEL COIN',
  symbol: 'ASC',
  decimals: 6, // Solana token standard
  totalSupply: '1000000000', // 1 billion tokens
  description: 'AES SAHEL COIN - A revolutionary cryptocurrency for West Africa',
  logo: '/logo.png',
  contractAddress: 'F3cUHSYRnHkJweSCuacxCKaWkdCCKkqKU2kiFyhopump',
}

// Social Links
export const SOCIAL_LINKS = {
  twitter: 'https://twitter.com/aessahelcoin',
  telegram: 'https://t.me/aessahelcoin',
  discord: 'https://discord.gg/aessahelcoin',
  github: 'https://github.com/aessahelcoin',
  website: 'https://aessahelcoin.com',
}

// Network Configuration - Solana
export const NETWORKS = {
  solanaMainnet: {
    chainId: 101,
    name: 'Solana Mainnet',
    rpcUrl: 'https://api.mainnet-beta.solana.com',
    network: 'mainnet-beta',
  },
  solanaDevnet: {
    chainId: 103,
    name: 'Solana Devnet',
    rpcUrl: 'https://api.devnet.solana.com',
    network: 'devnet',
  },
  solanaTestnet: {
    chainId: 102,
    name: 'Solana Testnet',
    rpcUrl: 'https://api.testnet.solana.com',
    network: 'testnet',
  },
}

// Solana Token Details
export const SOLANA_TOKEN = {
  mint: 'F3cUHSYRnHkJweSCuacxCKaWkdCCKkqKU2kiFyhopump',
  name: 'AES SAHEL COIN',
  symbol: 'ASC',
  decimals: 6,
  imageUrl: '/logo.png',
  website: 'https://aessahelcoin.com',
}
