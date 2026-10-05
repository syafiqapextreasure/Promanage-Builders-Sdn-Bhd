import React from 'react';

interface LogoProps {
  variant?: 'light' | 'dark';
  showRegistration?: boolean;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const LogoEmblem: React.FC<{ className?: string; size?: number }> = ({
  className = '',
  size = 48
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 ${className}`}
      aria-hidden="true"
    >
      {/* Outer House Roof and Shield Profile in Muted Brass Gold */}
      {/* Roof Gable with Chimney on Right Slope */}
      <path
        d="M60 10 L15 50 L15 88 C15 102 36 112 60 112 C84 112 105 102 105 88 L105 50 Z"
        stroke="#B89047"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      {/* Chimney on the right roof pitch */}
      <path
        d="M82 30 L82 18 L94 18 L94 40"
        stroke="#B89047"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      {/* 4-Pane Square Window in Muted Brass Gold */}
      <rect x="42" y="38" width="10" height="10" rx="1" fill="#B89047" />
      <rect x="56" y="38" width="10" height="10" rx="1" fill="#B89047" />
      <rect x="42" y="52" width="10" height="10" rx="1" fill="#B89047" />
      <rect x="56" y="52" width="10" height="10" rx="1" fill="#B89047" />
      {/* Stylized P in Deep Olive Forest Green */}
      <path
        d="M44 68 V100 H55 V84 H68 C78 84 85 78 85 70 C85 62 78 56 68 56 H44 V68 Z M55 65 H67 C71 65 74 67 74 70 C74 73 71 75 67 75 H55 V65 Z"
        fill="#2A482E"
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

export const Logo: React.FC<LogoProps> = ({
  variant = 'dark',
  showRegistration = true,
  className = '',
  size = 'md'
}) => {
  const isLight = variant === 'light';
  const iconSize = size === 'sm' ? 38 : size === 'lg' ? 56 : 46;

  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      <LogoEmblem size={iconSize} />
      <div className="flex flex-col">
        <div className="flex flex-wrap items-baseline gap-x-1.5">
          <span
            className={`font-bold tracking-tight font-sans text-lg sm:text-xl lg:text-2xl leading-none ${
              isLight ? 'text-white' : 'text-stone-900'
            }`}
          >
            PROMANAGE BUILDERS
          </span>
          <span
            className={`text-xs sm:text-sm font-semibold tracking-wider uppercase ${
              isLight ? 'text-amber-200' : 'text-[#8A6A2C]'
            }`}
          >
            SDN BHD
          </span>
        </div>
        {showRegistration && (
          <span
            className={`text-[12px] sm:text-[13px] font-medium tracking-normal mt-0.5 ${
              isLight ? 'text-stone-300' : 'text-stone-600'
            }`}
          >
            202401013030 (1558880-H)
          </span>
        )}
      </div>
    </div>
  );
};

export default Logo;
