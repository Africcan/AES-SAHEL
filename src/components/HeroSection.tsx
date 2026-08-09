'use client'

import { FaArrowRight, FaLock, FaChartLine, FaUsers } from 'react-icons/fa'

export default function HeroSection() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-secondary via-accent to-secondary flex items-center px-4 pt-20">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fadeInUp">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
                The Future of <span className="gradient-text">West African</span> Finance
              </h1>
              <p className="text-xl text-gray-300">
                AES SAHEL COIN is a revolutionary cryptocurrency platform designed for the financial empowerment of West Africa.
              </p>
            </div>

            {/* Features */}
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <FaLock className="text-primary text-2xl mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-lg">Secure & Decentralized</h3>
                  <p className="text-gray-400">Built on blockchain technology for maximum security</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <FaChartLine className="text-primary text-2xl mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-lg">High Yield Returns</h3>
                  <p className="text-gray-400">Earn rewards through staking and liquidity pools</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <FaUsers className="text-primary text-2xl mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-lg">Community Driven</h3>
                  <p className="text-gray-400">Join thousands of traders in our ecosystem</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="gradient-btn px-8 py-4 rounded-lg font-bold text-lg flex items-center justify-center space-x-2">
                <span>Get Started</span>
                <FaArrowRight />
              </button>
              <button className="px-8 py-4 rounded-lg font-bold text-lg border-2 border-primary/50 hover:border-primary transition">
                Learn More
              </button>
            </div>
          </div>

          {/* Right Side - Stats */}
          <div className="hidden md:grid grid-cols-2 gap-4">
            <div className="card-dark p-6 rounded-2xl">
              <p className="text-gray-400 text-sm">Market Cap</p>
              <p className="text-3xl font-bold gradient-text mt-2">$50M+</p>
            </div>
            <div className="card-dark p-6 rounded-2xl">
              <p className="text-gray-400 text-sm">Total Supply</p>
              <p className="text-3xl font-bold text-primary mt-2">1B ASC</p>
            </div>
            <div className="card-dark p-6 rounded-2xl">
              <p className="text-gray-400 text-sm">Active Users</p>
              <p className="text-3xl font-bold text-success mt-2">50K+</p>
            </div>
            <div className="card-dark p-6 rounded-2xl">
              <p className="text-gray-400 text-sm">Trading Volume</p>
              <p className="text-3xl font-bold text-warning mt-2">$10M+</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
