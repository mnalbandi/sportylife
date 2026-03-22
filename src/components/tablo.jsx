const Tablo = (props) => {
 return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 800 500" 
      width="100%" 
      height="100%"
      {...props}
    >
      <defs>
        {/* Signboard Metallic Base Gradient */}
        <linearGradient id="metalGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#2a2a35" />
          <stop offset="100%" stopColor="#111118" />
        </linearGradient>

        {/* Neon Glow Filters */}
        <filter id="glowCyan" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur1" />
          <feGaussianBlur in="SourceGraphic" stdDeviation="12" result="blur2" />
          <feMerge>
            <feMergeNode in="blur2" />
            <feMergeNode in="blur1" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        <filter id="glowPink" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur1" />
          <feGaussianBlur in="SourceGraphic" stdDeviation="12" result="blur2" />
          <feMerge>
            <feMergeNode in="blur2" />
            <feMergeNode in="blur1" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Main Background Color #111214 */}
      <rect width="800" height="500" fill="#111214" />

      {/* Main Signboard Wrapper */}
      <g>
        {/* Main Signboard Base */}
        <polygon 
          points="120,80 680,80 740,140 740,360 680,420 120,420 60,360 60,140" 
          fill="url(#metalGrad)" 
          stroke="#1a1a20" 
          strokeWidth="2" 
        />
        
        {/* Inner Dark Area */}
        <polygon points="135,100 665,100 715,150 715,350 665,400 135,400 85,350 85,150" fill="#0c0c14" />

        {/* Neon Outer Frame */}
        <polygon 
          points="135,100 665,100 715,150 715,350 665,400 135,400 85,350 85,150" 
          fill="none" 
          stroke="#00f0ff" 
          strokeWidth="3" 
          filter="url(#glowCyan)" 
          opacity="0.8" 
        />

        {/* Decorative Corner Accents */}
        <polygon points="120,100 150,100 100,150 100,120" fill="#ff0055" filter="url(#glowPink)" />
        <polygon points="680,400 650,400 700,350 700,380" fill="#ff0055" filter="url(#glowPink)" />

        {/* Top Icon: Barbell */}
        <g transform="translate(400, 140)">
          <rect x="-120" y="-5" width="240" height="10" fill="#555" />
          <rect x="-120" y="-5" width="240" height="10" fill="none" stroke="#00f0ff" filter="url(#glowCyan)" strokeWidth="1" opacity="0.4"/>
          <rect x="-100" y="-20" width="12" height="40" rx="3" fill="#ff0055" filter="url(#glowPink)" />
          <rect x="-115" y="-15" width="10" height="30" rx="2" fill="#ff0055" filter="url(#glowPink)" />
          <rect x="88" y="-20" width="12" height="40" rx="3" fill="#ff0055" filter="url(#glowPink)" />
          <rect x="105" y="-15" width="10" height="30" rx="2" fill="#ff0055" filter="url(#glowPink)" />
        </g>

        {/* Text: باشگاه (Centered Above) */}
        {/* Layer 1: Glow */}
        <text x="400" y="210" fontFamily="Tahoma, sans-serif" fontSize="36" fontWeight="bold" fill="#00f0ff" filter="url(#glowCyan)" textAnchor="middle">
          باشگاه
        </text>
        {/* Layer 2: Sharp Text */}
        <text x="400" y="210" fontFamily="Tahoma, sans-serif" fontSize="36" fontWeight="bold" fill="#ffffff" textAnchor="middle">
          باشگاه
        </text>

        {/* Text: SPORTYLIFE (Centered in the middle) */}
        {/* Layer 1: Glow Background */}
        <text x="400" y="295" fontFamily="Impact, sans-serif" fontSize="75" fontStyle="italic" fontWeight="900" textAnchor="middle" letterSpacing="3">
          <tspan fill="#00f0ff" filter="url(#glowCyan)">SPORTY</tspan>
          <tspan fill="#ff0055" filter="url(#glowPink)">LIFE</tspan>
        </text>
        {/* Layer 2: Sharp Foreground for Readability */}
        <text x="400" y="295" fontFamily="Impact, sans-serif" fontSize="75" fontStyle="italic" fontWeight="900" textAnchor="middle" letterSpacing="3">
          <tspan fill="#e6ffff">SPORTY</tspan>
          <tspan fill="#ffe6f0">LIFE</tspan>
        </text>

        {/* Heartbeat Line */}
        <polyline 
          points="150,350 300,350 330,310 370,390 410,290 440,360 470,350 650,350" 
          fill="none" 
          stroke="#00f0ff" 
          strokeWidth="6" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          filter="url(#glowCyan)" 
        />
      </g>
    </svg>
  );
};
export default Tablo