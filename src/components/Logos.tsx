import React from 'react';

// Exact VidMate App Icon: Red rounded square with white stylized folding V film ribbon
export const VidMateLogo: React.FC<{ size?: number; className?: string }> = ({ size = 36, className = '' }) => {
  return (
    <div
      style={{ width: size, height: size }}
      className={`relative rounded-xl bg-gradient-to-b from-[#ff3838] to-[#e61616] p-1.5 flex items-center justify-center shadow-md shadow-red-500/20 overflow-hidden ${className}`}
    >
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-sm"
      >
        {/* Stylized Filmstrip / Ribbon V */}
        <path
          d="M18 20L50 82L82 20H63L50 50L37 20H18Z"
          fill="white"
        />
        {/* Subtle inner accent fold */}
        <path
          d="M40 20L50 42L60 20H40Z"
          fill="#ffdede"
          opacity="0.85"
        />
        {/* Film strip mini notches */}
        <rect x="22" y="24" width="4" height="6" rx="1" fill="#e61616" />
        <rect x="74" y="24" width="4" height="6" rx="1" fill="#e61616" />
      </svg>
    </div>
  );
};

// CM Security Shield Logo
export const CMSecurityLogo: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        {/* Blue Shield */}
        <path
          d="M16 2L4 6.5V14.5C4 22 9.2 28.5 16 30C22.8 28.5 28 22 28 14.5V6.5L16 2Z"
          fill="#3B82F6"
        />
        {/* Inner highlight */}
        <path
          d="M16 4.5L6.5 8V14.5C6.5 20.8 10.6 26.2 16 27.6V4.5Z"
          fill="#60A5FA"
        />
        {/* CM Lettering/Mark */}
        <path
          d="M12 13C10.9 13 10 13.9 10 15V17C10 18.1 10.9 19 12 19H13V17.5H12V14.5H13V13H12ZM19 13H16V19H17.5V14.5H18.5V17.5H20V14.5H21V19H22.5V13H19Z"
          fill="white"
        />
      </svg>
    </div>
  );
};

// Lookout Mobile Security Logo
export const LookoutLogo: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        {/* Green Shield / Wifi Waves */}
        <path
          d="M16 3C8.82 3 3 8.82 3 16C3 19.8 4.6 23.2 7.15 25.6L16 30L24.85 25.6C27.4 23.2 29 19.8 29 16C29 8.82 23.18 3 16 3Z"
          fill="#22C55E"
        />
        {/* Radar concentric arcs */}
        <path
          d="M10 13C11.6 11.2 13.7 10.2 16 10.2C18.3 10.2 20.4 11.2 22 13"
          stroke="white"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M12.5 16.5C13.4 15.5 14.6 15 16 15C17.4 15 18.6 15.5 19.5 16.5"
          stroke="white"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
        <circle cx="16" cy="20.5" r="1.8" fill="white" />
      </svg>
    </div>
  );
};

// McAfee Security Logo
export const McAfeeLogo: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        {/* McAfee Red Shield / Angle V */}
        <path
          d="M16 2.5L5 7.5V17C5 24 10 28.5 16 30.5C22 28.5 27 24 27 17V7.5L16 2.5Z"
          fill="#C5221F"
        />
        {/* McAfee White Ribbon M */}
        <path
          d="M9 10L16 16.5L23 10L24 12L16 24L8 12L9 10Z"
          fill="white"
        />
        <path
          d="M16 19.5L11.5 12.5H13.8L16 16L18.2 12.5H20.5L16 19.5Z"
          fill="#C5221F"
        />
      </svg>
    </div>
  );
};
