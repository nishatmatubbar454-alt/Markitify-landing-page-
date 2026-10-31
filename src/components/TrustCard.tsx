import React from 'react';
import { ShieldCheck, Check } from 'lucide-react';
import { CMSecurityLogo, LookoutLogo, McAfeeLogo } from './Logos';

interface TrustCardProps {
  title?: string;
  cmSecurityLabel?: string;
  lookoutLabel?: string;
  mcafeeLabel?: string;
  onSecurityClick?: (authority: string) => void;
}

export const TrustCard: React.FC<TrustCardProps> = ({
  title = 'Trusted & Safe',
  cmSecurityLabel = 'CM Security',
  lookoutLabel = 'Lookout',
  mcafeeLabel = 'McAfee',
  onSecurityClick,
}) => {
  return (
    <div className="w-full bg-white/85 backdrop-blur-md rounded-3xl border border-gray-100/90 shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-6 sm:p-7 my-5 transition-all">
      {/* Title with green shield checkmark */}
      <div className="flex items-center justify-center space-x-2.5 mb-5 sm:mb-6">
        <div className="w-6 h-6 rounded-lg bg-[#22c55e] flex items-center justify-center text-white shadow-xs">
          <Check className="w-4 h-4 stroke-[3]" />
        </div>
        <h3 className="text-lg sm:text-xl font-bold text-gray-800 tracking-tight">
          {title}
        </h3>
      </div>

      {/* Security authorities row */}
      <div className="flex items-center justify-between sm:justify-around px-2 sm:px-6 pt-1">
        {/* CM Security */}
        <button
          type="button"
          onClick={() => onSecurityClick?.('CM Security')}
          className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors group cursor-pointer"
        >
          <CMSecurityLogo className="w-5 h-5 group-hover:scale-110 transition-transform" />
          <span className="text-xs sm:text-sm font-semibold tracking-tight">
            {cmSecurityLabel}
          </span>
        </button>

        {/* Lookout */}
        <button
          type="button"
          onClick={() => onSecurityClick?.('Lookout')}
          className="flex items-center space-x-2 text-gray-700 hover:text-green-600 transition-colors group cursor-pointer"
        >
          <LookoutLogo className="w-5 h-5 group-hover:scale-110 transition-transform" />
          <span className="text-xs sm:text-sm font-semibold tracking-tight">
            {lookoutLabel}
          </span>
        </button>

        {/* McAfee */}
        <button
          type="button"
          onClick={() => onSecurityClick?.('McAfee')}
          className="flex items-center space-x-2 text-gray-700 hover:text-red-600 transition-colors group cursor-pointer"
        >
          <McAfeeLogo className="w-5 h-5 group-hover:scale-110 transition-transform" />
          <span className="text-xs sm:text-sm font-semibold tracking-tight">
            {mcafeeLabel}
          </span>
        </button>
      </div>
    </div>
  );
};
