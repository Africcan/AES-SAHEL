'use client'

import HeroSection from '@/components/HeroSection'
import AirdropSection from '@/components/AirdropSection'

export default function Home() {
  return (
    <>
      <HeroSection />
      <AirdropSection />
      
      {/* Dashboard Section */}
      <section id="dashboard" className="py-20 px-4 bg-secondary">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Token Dashboard</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Token Price */}
            <div className="card-dark p-8 rounded-2xl">
              <p className="text-gray-400 mb-2">Current Price</p>
              <p className="text-4xl font-bold gradient-text mb-4">$0.25</p>
              <p className="text-green-400">+15.3% (24h)</p>
            </div>

            {/* Trading Volume */}
            <div className="card-dark p-8 rounded-2xl">
              <p className="text-gray-400 mb-2">24h Volume</p>
              <p className="text-4xl font-bold text-primary mb-4">$12.5M</p>
              <p className="text-gray-300">All time high: $0.50</p>
            </div>

            {/* Holders */}
            <div className="card-dark p-8 rounded-2xl">
              <p className="text-gray-400 mb-2">Token Holders</p>
              <p className="text-4xl font-bold text-success mb-4">150K+</p>
              <p className="text-gray-300">Growing community</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-accent">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Why Choose AES SAHEL?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card-gradient p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4">🚀 Fast Transactions</h3>
              <p className="text-gray-300">Process transactions in seconds with minimal fees</p>
            </div>

            <div className="card-gradient p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4">💰 High APY</h3>
              <p className="text-gray-300">Earn up to 20% APY through staking and farming</p>
            </div>

            <div className="card-gradient p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4">🔒 Secure</h3>
              <p className="text-gray-300">Smart contracts audited by leading security firms</p>
            </div>

            <div className="card-gradient p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4">🌍 Global Access</h3>
              <p className="text-gray-300">Trade 24/7 from anywhere in the world</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-secondary">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">About AES SAHEL COIN</h2>
          
          <div className="card-dark p-8 rounded-2xl max-w-3xl mx-auto">
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              AES SAHEL COIN is more than just a cryptocurrency—it's a movement. Born from the vision of empowering West African communities, AES SAHEL combines cutting-edge blockchain technology with financial inclusion principles.
            </p>
            
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Our mission is to provide fast, secure, and affordable financial services to the millions of unbanked and underbanked individuals across West Africa. Through our innovative platform, we're bridging the gap between traditional finance and the digital economy.
            </p>

            <p className="text-gray-300 text-lg leading-relaxed">
              Join us in building the future of African finance. Together, we're creating a more inclusive, transparent, and prosperous financial ecosystem.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
