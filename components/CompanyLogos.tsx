// SVG Company and Organization Logos
// Authentic vector representations for Y Combinator and featured employers

export function YCombinatorLogo({ size = 20, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-label="Y Combinator"
    >
      <rect width="24" height="24" rx="4" fill="#FF6600" />
      <path
        d="M6.5 6L11 13.2V18.5H13V13.2L17.5 6H15.2L12 11.2L8.8 6H6.5Z"
        fill="white"
      />
    </svg>
  );
}

export function ClinikallyLogo({ size = 28, className = "" }: { size?: number; className?: string }) {
  return (
    <div
      className={`flex items-center justify-center rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-500 text-white font-bold font-mono shadow-[0_0_15px_rgba(16,185,129,0.3)] shrink-0 ${className}`}
      style={{ width: size, height: size, fontSize: size * 0.46 }}
    >
      <svg width={size * 0.6} height={size * 0.6} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
        <path d="M12 2v20M2 12h20" strokeLinecap="round" />
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    </div>
  );
}

export function MeradocLogo({ size = 28, className = "" }: { size?: number; className?: string }) {
  return (
    <div
      className={`flex items-center justify-center rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-500 text-white font-bold font-mono shadow-[0_0_15px_rgba(59,130,246,0.3)] shrink-0 ${className}`}
      style={{ width: size, height: size, fontSize: size * 0.46 }}
    >
      <svg width={size * 0.6} height={size * 0.6} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
        <path d="M4 19V5l8 6 8-6v14" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

export function AsterideLogo({ size = 28, className = "" }: { size?: number; className?: string }) {
  return (
    <div
      className={`flex items-center justify-center rounded-xl bg-gradient-to-tr from-purple-600 to-indigo-500 text-white font-bold font-mono shadow-[0_0_15px_rgba(168,85,247,0.3)] shrink-0 ${className}`}
      style={{ width: size, height: size, fontSize: size * 0.46 }}
    >
      <svg width={size * 0.6} height={size * 0.6} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    </div>
  );
}
