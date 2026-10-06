import React from 'react';
interface LogoProps {
  variant?: 'light' | 'dark';
  showRegistration?: boolean;
  showTagline?: boolean;
  secondaryName?: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}
export const LogoEmblem: React.FC<{ className?: string; size?: number }> = ({ className = '', size = 48 }) => (
  <img src="/images/promanage-logo-original.png" width={size} height={size} alt="" className={`brand-emblem ${className}`} />
);
export const Logo: React.FC<LogoProps> = ({ variant = 'dark', showRegistration = true, showTagline = true, secondaryName, className = '', size = 'md' }) => (
  <div className={`brand brand-${variant} brand-${size} ${className}`}>
    <LogoEmblem size={size === 'sm' ? 38 : size === 'lg' ? 56 : 46} />
    <div className="brand-text">
      <span className="brand-name">PROMANAGE BUILDERS <span className="brand-suffix">SDN BHD</span></span>
      {secondaryName && <span className="brand-name brand-secondary-name">{secondaryName}</span>}
      {showTagline && <span className="brand-tagline">Building spaces for a better tomorrow</span>}
      {showRegistration && <span className="brand-registration">202401013030 (1558880-H)</span>}
    </div>
  </div>
);
export default Logo;
