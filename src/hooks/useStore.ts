import { create } from 'zustand'

interface WalletState {
  address: string | null
  isConnected: boolean
  balance: string
  chainId: number | null
  setAddress: (address: string | null) => void
  setConnected: (connected: boolean) => void
  setBalance: (balance: string) => void
  setChainId: (chainId: number) => void
  disconnect: () => void
}

export const useWallet = create<WalletState>((set) => ({
  address: null,
  isConnected: false,
  balance: '0',
  chainId: null,
  setAddress: (address) => set({ address }),
  setConnected: (isConnected) => set({ isConnected }),
  setBalance: (balance) => set({ balance }),
  setChainId: (chainId) => set({ chainId }),
  disconnect: () =>
    set({
      address: null,
      isConnected: false,
      balance: '0',
      chainId: null,
    }),
}))

interface AirdropState {
  claimed: boolean
  claimAmount: string
  claimedAmount: string
  nextClaimTime: Date | null
  setClaimed: (claimed: boolean) => void
  setClaimAmount: (amount: string) => void
  setClaimedAmount: (amount: string) => void
  setNextClaimTime: (time: Date | null) => void
  reset: () => void
}

export const useAirdrop = create<AirdropState>((set) => ({
  claimed: false,
  claimAmount: '0',
  claimedAmount: '0',
  nextClaimTime: null,
  setClaimed: (claimed) => set({ claimed }),
  setClaimAmount: (claimAmount) => set({ claimAmount }),
  setClaimedAmount: (claimedAmount) => set({ claimedAmount }),
  setNextClaimTime: (nextClaimTime) => set({ nextClaimTime }),
  reset: () =>
    set({
      claimed: false,
      claimAmount: '0',
      claimedAmount: '0',
      nextClaimTime: null,
    }),
}))
