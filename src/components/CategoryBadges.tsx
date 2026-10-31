import React from 'react';
import { Play, Music } from 'lucide-react';

export type CategoryType = 'video' | 'music' | 'image';

interface CategoryBadgesProps {
  activeCategory: CategoryType;
  onSelectCategory: (category: CategoryType) => void;
  videoLabel?: string;
  musicLabel?: string;
  imageLabel?: string;
}

export const CategoryBadges: React.FC<CategoryBadgesProps> = ({
  activeCategory,
  onSelectCategory,
  videoLabel = 'Video',
  musicLabel = 'Music',
  imageLabel = 'Image',
}) => {
  return (
    <div className="flex items-center justify-center gap-2 sm:gap-3 my-5 sm:my-6 flex-nowrap w-full">
      {/* Video Pill */}
      <button
        type="button"
        onClick={() => onSelectCategory('video')}
        className={`flex items-center space-x-1.5 sm:space-x-2 px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full bg-white transition-all duration-200 cursor-pointer shadow-xs border ${
          activeCategory === 'video'
            ? 'border-red-400 ring-2 ring-red-100 shadow-sm scale-105'
            : 'border-gray-200/90 hover:border-gray-300 hover:shadow-sm'
        }`}
      >
        <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-lg bg-gradient-to-br from-[#ff5722] to-[#f44336] flex items-center justify-center text-white shadow-xs shrink-0">
          <Play className="w-3 h-3 fill-white ml-0.5" />
        </div>
        <span className="text-xs sm:text-sm font-semibold text-gray-800 whitespace-nowrap">
          {videoLabel}
        </span>
      </button>

      {/* Music Pill */}
      <button
        type="button"
        onClick={() => onSelectCategory('music')}
        className={`flex items-center space-x-1.5 sm:space-x-2 px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full bg-white transition-all duration-200 cursor-pointer shadow-xs border ${
          activeCategory === 'music'
            ? 'border-red-400 ring-2 ring-red-100 shadow-sm scale-105'
            : 'border-gray-200/90 hover:border-gray-300 hover:shadow-sm'
        }`}
      >
        <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-lg bg-gradient-to-br from-[#ff5722] to-[#f44336] flex items-center justify-center text-white shadow-xs shrink-0">
          <Music className="w-3 h-3 stroke-[2.5]" />
        </div>
        <span className="text-xs sm:text-sm font-semibold text-gray-800 whitespace-nowrap">
          {musicLabel}
        </span>
      </button>

      {/* Image Pill */}
      <button
        type="button"
        onClick={() => onSelectCategory('image')}
        className={`flex items-center space-x-1.5 sm:space-x-2 px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full bg-white transition-all duration-200 cursor-pointer shadow-xs border ${
          activeCategory === 'image'
            ? 'border-red-400 ring-2 ring-red-100 shadow-sm scale-105'
            : 'border-gray-200/90 hover:border-gray-300 hover:shadow-sm'
        }`}
      >
        <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-lg bg-gradient-to-br from-[#ff6e40] to-[#ff3d00] flex items-center justify-center text-white shadow-xs shrink-0">
          <svg viewBox="0 0 24 24" fill="none" className="w-3 h-3 stroke-white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <rect width="18" height="18" x="3" y="3" rx="2" ry="2"/>
            <circle cx="8.5" cy="8.5" r="1.5" fill="white"/>
            <path d="m21 15-5-5L5 21"/>
          </svg>
        </div>
        <span className="text-xs sm:text-sm font-semibold text-gray-800 whitespace-nowrap">
          {imageLabel}
        </span>
      </button>
    </div>
  );
};
