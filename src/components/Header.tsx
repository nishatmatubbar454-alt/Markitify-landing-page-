import React from 'react';
import { ChevronDown } from 'lucide-react';

interface HeaderProps {
  onLanguageClick: () => void;
  onMenuClick: () => void;
  currentLanguageLabel: string;
}

export const Header: React.FC<HeaderProps> = ({
  onLanguageClick,
  onMenuClick,
  currentLanguageLabel,
}) => {
  return (
    <header className="w-full flex items-center justify-between py-2.5 sm:py-3.5 px-3 sm:px-5 relative z-20">
      {/* Left side: Frosted menu button + Marketify Logo positioned on the left */}
      <div className="flex items-center space-x-2 sm:space-x-3">
        <button
          type="button"
          onClick={onMenuClick}
          aria-label="App Menu"
          className="w-10 h-10 rounded-xl bg-white/80 backdrop-blur-md border border-white/90 shadow-xs flex items-center justify-center text-gray-500 hover:text-gray-800 hover:bg-white transition-all cursor-pointer group shrink-0"
        >
          <div className="grid grid-cols-2 gap-1 w-4 h-4 opacity-75 group-hover:opacity-100 transition-opacity">
            <div className="bg-gray-700 rounded-[2px]"></div>
            <div className="bg-gray-700 rounded-[2px]"></div>
            <div className="bg-gray-700 rounded-[2px]"></div>
            <div className="bg-gray-700 rounded-[2px]"></div>
          </div>
        </button>

        {/* Marketify Logo brought to the left */}
        <div className="flex items-center">
          <img
            src="/assets/aistudio/marketify_logo_cropped.png"
            alt="Markitify APK download"
            className="h-12 sm:h-14 w-auto max-h-14 max-w-[190px] sm:max-w-[230px] object-contain drop-shadow-md hover:scale-105 transition-all duration-200"
          />
        </div>
      </div>

      {/* Right side: Language selector pill */}
      <button
        type="button"
        onClick={onLanguageClick}
        className="h-10 px-3 sm:px-4 rounded-xl bg-white/80 backdrop-blur-md border border-white/90 shadow-xs flex items-center space-x-1.5 text-xs sm:text-sm font-semibold text-gray-700 hover:text-gray-900 hover:bg-white transition-all cursor-pointer shrink-0"
      >
        <span>{currentLanguageLabel}</span>
        <ChevronDown className="w-3.5 h-3.5 text-gray-400 stroke-[2.5]" />
      </button>
    </header>
  );
};
