'use client'

import { useState } from 'react'
import { useWallet } from '@/hooks/useStore'
import { FaGift } from 'react-icons/fa'

export default function AirdropSection() {
  const { address } = useWallet()
  const [loading, setLoading] = useState(false)
  const [claimed, setClaimed] = useState(false)
  const [error, setError] = useState('')

  const handleClaimAirdrop = async () => {
    if (!address) {
      setError('Please connect your wallet first')
      return
    }

    setLoading(true)
    setError('')

    try {
      // TODO: Implement airdrop claim logic
      // This will call your airdrop smart contract
      console.log('Claiming airdrop for address:', address)
      setClaimed(true)
    } catch (err) {
      setError('Failed to claim airdrop. Please try again.')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="airdrop" className="py-20 px-4 bg-gradient-to-b from-secondary to-accent">
      <div className="max-w-4xl mx-auto">
        <div className="card-gradient p-8 md:p-12 rounded-2xl">
          {/* Header */}
          <div className="text-center mb-12">
            <FaGift className="text-4xl gradient-text mx-auto mb-4" />
            <h2 className="text-4xl font-bold mb-2">AES SAHEL Airdrop</h2>
            <p className="text-gray-300 text-lg">
              Claim your free tokens from our airdrop campaign
            </p>
          </div>

          {/* Airdrop Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="card-dark p-6 text-center">
              <p className="text-gray-400 mb-2">Claim Amount</p>
              <p className="text-3xl font-bold gradient-text">1,000 ASC</p>
            </div>
            <div className="card-dark p-6 text-center">
              <p className="text-gray-400 mb-2">Status</p>
              <p className="text-3xl font-bold text-success">Active</p>
            </div>
            <div className="card-dark p-6 text-center">
              <p className="text-gray-400 mb-2">Ends In</p>
              <p className="text-3xl font-bold text-warning">45 Days</p>
            </div>
          </div>

          {/* Claim Button */}
          <div className="space-y-4">
            {address ? (
              <>
                {!claimed ? (
                  <button
                    onClick={handleClaimAirdrop}
                    disabled={loading}
                    className="w-full gradient-btn py-4 rounded-lg font-bold text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? 'Claiming...' : 'Claim Airdrop Now'}
                  </button>
                ) : (
                  <div className="w-full bg-success/20 border border-success rounded-lg py-4 text-center text-success font-bold">
                    ✓ Airdrop Claimed Successfully!
                  </div>
                )}
              </>
            ) : (
              <p className="text-center text-warning">
                Connect your wallet to claim the airdrop
              </p>
            )}

            {error && (
              <p className="text-center text-danger font-semibold">{error}</p>
            )}
          </div>

          {/* Terms */}
          <p className="text-center text-gray-400 text-sm mt-6">
            By claiming, you agree to our terms and conditions. Only one claim per address.
          </p>
        </div>
      </div>
    </section>
  )
}
