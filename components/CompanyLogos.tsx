import Image from "next/image";

// Official Y Combinator SVG Logo
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

// Official Clinikally Icon / Logo from clinikally.com
export function ClinikallyLogo({ size = 36, className = "" }: { size?: number; className?: string }) {
  return (
    <div
      className={`relative flex items-center justify-center rounded-xl bg-zinc-900 border border-zinc-800 p-1.5 shadow-[0_0_15px_rgba(16,185,129,0.15)] shrink-0 overflow-hidden ${className}`}
      style={{ width: size, height: size }}
    >
      <Image
        src="/logos/clinikally.png"
        alt="Clinikally official logo"
        width={size}
        height={size}
        className="object-contain w-full h-full"
        unoptimized
      />
    </div>
  );
}

// Official MeraDoc Logo from meradoc.com
export function MeradocLogo({ size = 36, className = "" }: { size?: number; className?: string }) {
  return (
    <div
      className={`relative flex items-center justify-center rounded-xl bg-zinc-900 border border-zinc-800 p-1.5 shadow-[0_0_15px_rgba(59,130,246,0.15)] shrink-0 overflow-hidden ${className}`}
      style={{ width: size, height: size }}
    >
      <Image
        src="/logos/meradoc-icon.svg"
        alt="MeraDoc official logo"
        width={size}
        height={size}
        className="object-contain w-full h-full"
        unoptimized
      />
    </div>
  );
}

// Official Asteride Logo from asteride.co
export function AsterideLogo({ size = 36, className = "" }: { size?: number; className?: string }) {
  return (
    <div
      className={`relative flex items-center justify-center rounded-xl bg-zinc-900 border border-zinc-800 p-1.5 shadow-[0_0_15px_rgba(168,85,247,0.15)] shrink-0 overflow-hidden ${className}`}
      style={{ width: size, height: size }}
    >
      <Image
        src="/logos/asteride-icon.png"
        alt="Asteride official logo"
        width={size}
        height={size}
        className="object-contain w-full h-full"
        unoptimized
      />
    </div>
  );
}
