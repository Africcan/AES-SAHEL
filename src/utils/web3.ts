import { ethers } from 'ethers'
import { BLOCKCHAIN_CONFIG } from '@/config'

// Simple ERC20 ABI
export const ERC20_ABI = [
  'function balanceOf(address owner) view returns (uint256)',
  'function approve(address spender, uint256 amount) returns (bool)',
  'function transfer(address to, uint256 amount) returns (bool)',
  'function allowance(address owner, address spender) view returns (uint256)',
  'function totalSupply() view returns (uint256)',
  'event Transfer(address indexed from, address indexed to, uint256 value)',
  'event Approval(address indexed owner, address indexed spender, uint256 value)',
]

// Get provider
export const getProvider = () => {
  return new ethers.JsonRpcProvider(BLOCKCHAIN_CONFIG.rpcUrl)
}

// Get signer from browser wallet
export const getSigner = async () => {
  if (!window.ethereum) {
    throw new Error('MetaMask not found')
  }
  const provider = new ethers.BrowserProvider(window.ethereum)
  return provider.getSigner()
}

// Get contract instance
export const getContract = (address: string, abi: any[], signer?: any) => {
  const provider = signer || getProvider()
  return new ethers.Contract(address, abi, provider)
}

// Format token amount
export const formatToken = (value: string, decimals: number = 18) => {
  return ethers.formatUnits(value, decimals)
}

// Parse token amount
export const parseToken = (value: string, decimals: number = 18) => {
  return ethers.parseUnits(value, decimals)
}

// Get token balance
export const getTokenBalance = async (tokenAddress: string, userAddress: string) => {
  const contract = getContract(tokenAddress, ERC20_ABI)
  const balance = await contract.balanceOf(userAddress)
  return formatToken(balance.toString())
}

// Connect wallet
export const connectWallet = async () => {
  if (!window.ethereum) {
    throw new Error('MetaMask not found. Please install it.')
  }

  const accounts = await window.ethereum.request({
    method: 'eth_requestAccounts',
  })

  return accounts[0]
}

// Get account
export const getAccount = async () => {
  if (!window.ethereum) return null
  const accounts = await window.ethereum.request({
    method: 'eth_accounts',
  })
  return accounts?.[0] || null
}
