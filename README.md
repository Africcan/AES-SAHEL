# AES SAHEL COIN

A full-featured cryptocurrency website for AES SAHEL COIN with airdrop functionality, wallet integration, and token management.

## Features

- 🪙 **Cryptocurrency Website** - Professional landing page
- 💰 **Airdrop System** - Claim airdrop tokens
- 🔗 **Wallet Integration** - MetaMask and Web3 support
- 📊 **Token Dashboard** - Real-time token information
- 💹 **Trading Interface** - Token trading and exchange
- 🎨 **Modern UI** - Dark theme with gold accents
- 📱 **Responsive Design** - Works on all devices

## Tech Stack

- **Frontend**: Next.js 14 + React 18 + TypeScript
- **Styling**: Tailwind CSS
- **Blockchain**: Web3.js + Ethers.js
- **State Management**: Zustand
- **Animations**: Framer Motion

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/Africcan/AES-SAHEL.git
cd AES-SAHEL

# Install dependencies
npm install

# Create .env.local file
cp .env.local.example .env.local

# Update environment variables with your blockchain details
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
npm start
```

## Environment Variables

Create a `.env.local` file with:

```
NEXT_PUBLIC_COIN_ADDRESS=0x...
NEXT_PUBLIC_AIRDROP_ADDRESS=0x...
NEXT_PUBLIC_RPC_URL=https://rpc.mainnet.com
NEXT_PUBLIC_CHAIN_ID=1
```

## Project Structure

```
src/
├── components/      # React components
├── pages/          # Next.js pages
├── styles/         # Global styles
├── utils/          # Helper functions
├── hooks/          # Custom React hooks
├── contexts/       # React contexts
└── types/          # TypeScript types
```

## Features in Detail

### Airdrop System
- User-friendly airdrop claim interface
- Wallet integration for verification
- Real-time eligibility checking
- Transaction history tracking

### Token Dashboard
- Live token price display
- Trading volume information
- Holder statistics
- Market cap tracking

### Wallet Integration
- MetaMask connection
- Multi-network support
- Balance display
- Transaction management

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT License - See LICENSE file for details

## Support

For support, email support@aessahelcoin.com or open an issue on GitHub.

---

**Website**: www.aessahelcoin.com
