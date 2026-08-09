'use client'

export default function MapBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Historical map texture background */}
      <div className="absolute inset-0 map-background"></div>
      
      {/* Vintage paper overlay */}
      <div className="absolute inset-0 opacity-30">
        <svg className="w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="none">
          <defs>
            <filter id="paper-texture">
              <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" result="noise" />
              <feDisplacementMap in="SourceGraphic" in2="noise" scale="2" />
            </filter>
          </defs>
          
          {/* Arabic text patterns on background */}
          <text x="10%" y="15%" fontSize="16" fill="rgba(139, 90, 43, 0.08)" opacity="0.5" transform="rotate(-15)">
            تاریخی خریطہ
          </text>
          <text x="85%" y="20%" fontSize="14" fill="rgba(139, 90, 43, 0.08)" opacity="0.5" transform="rotate(20)">
            AES SAHEL
          </text>
          <text x="15%" y="80%" fontSize="12" fill="rgba(139, 90, 43, 0.08)" opacity="0.5" transform="rotate(-25)">
            West Africa
          </text>
          <text x="75%" y="85%" fontSize="14" fill="rgba(139, 90, 43, 0.08)" opacity="0.5" transform="rotate(15)">
            2024
          </text>
          
          {/* Decorative lines */}
          <line x1="5%" y1="25%" x2="15%" y2="30%" stroke="rgba(255, 215, 0, 0.1)" strokeWidth="2" />
          <line x1="80%" y1="70%" x2="95%" y2="75%" stroke="rgba(255, 165, 0, 0.1)" strokeWidth="2" />
          
          {/* Compass rose elements */}
          <circle cx="50%" cy="50%" r="3" fill="rgba(255, 215, 0, 0.05)" />
        </svg>
      </div>
      
      {/* Map grid overlay */}
      <div className="absolute inset-0 map-grid opacity-5"></div>
      
      {/* Dark gradient overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/70 via-accent/70 to-secondary/70"></div>
      
      {/* Vintage age spots */}
      <div className="absolute top-10 left-20 w-32 h-32 rounded-full bg-yellow-800/5 blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-orange-800/5 blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 w-96 h-96 rounded-full bg-gradient-to-r from-primary/5 to-warning/5 blur-3xl"></div>
    </div>\n  )
}
