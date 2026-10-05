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
  return <img src="/images/promanage-logo-original.png" width={size} height={size} alt="" className={`shrink-0 rounded-sm bg-white object-contain ${className}`} style={{ width: size, height: size }} />;
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
    <div className={`inline-flex items-center gap-2 ${className}`}>
      <LogoEmblem size={iconSize} />
      <div className="flex flex-col">
        <div className="flex flex-wrap items-baseline gap-x-1.5">
          <span
            className={`font-bold tracking-tight font-sans text-base sm:text-lg xl:text-xl leading-none ${
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
