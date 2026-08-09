'use client'

import { useState, useEffect } from 'react'
import { connectWallet, getAccount } from '@/utils/web3'
import { useWallet } from '@/hooks/useStore'

export default function Header() {
  const [mounted, setMounted] = useState(false)
  const { address, setAddress, setConnected, disconnect } = useWallet()

  useEffect(() => {
    setMounted(true)
    checkWallet()
  }, [])

  const checkWallet = async () => {
    const account = await getAccount()
    if (account) {
      setAddress(account)
      setConnected(true)
    }
  }

  const handleConnect = async () => {
    try {
      const account = await connectWallet()
      setAddress(account)
      setConnected(true)
    } catch (error) {
      console.error('Failed to connect wallet:', error)
    }
  }

  const handleDisconnect = () => {
    disconnect()
  }

  if (!mounted) return null

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-secondary/80 backdrop-blur-md border-b border-primary/10">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-primary to-warning flex items-center justify-center font-bold text-secondary">
              ASC
            </div>
            <span className="gradient-text font-bold text-xl hidden sm:inline">
              AES SAHEL COIN
            </span>
          </div>

          {/* Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="hover:text-primary transition">
              Home
            </a>
            <a href="#airdrop" className="hover:text-primary transition">
              Airdrop
            </a>
            <a href="#dashboard" className="hover:text-primary transition">
              Dashboard
            </a>
            <a href="#about" className="hover:text-primary transition">
              About
            </a>
          </div>

          {/* Wallet Button */}
          <div>
            {address ? (
              <div className="flex items-center space-x-4">
                <span className="text-sm text-primary">
                  {address.substring(0, 6)}...{address.substring(-4)}
                </span>
                <button
                  onClick={handleDisconnect}
                  className="px-4 py-2 rounded-lg bg-danger/20 border border-danger text-danger hover:bg-danger/30 transition"
                >
                  Disconnect
                </button>
              </div>
            ) : (
              <button
                onClick={handleConnect}
                className="gradient-btn px-6 py-2 rounded-lg font-semibold"
              >
                Connect Wallet
              </button>
            )}
          </div>
        </div>
      </nav>
    </header>
  )
}
