import React from 'react';
import { CategoryType } from './CategoryBadges';
import { Sparkles, Check, Download } from 'lucide-react';

interface FormatDetailPreviewProps {
  category: CategoryType;
  lang: string;
  onDownloadClick: () => void;
}

export const FormatDetailPreview: React.FC<FormatDetailPreviewProps> = ({
  category,
  lang,
  onDownloadClick,
}) => {
  return (
    <div className="w-full bg-white/70 backdrop-blur-xs rounded-2xl border border-gray-100 p-3.5 mb-4 text-xs transition-all animate-in fade-in duration-200">
      {category === 'video' && (
        <div>
          <div className="flex items-center justify-between font-semibold text-gray-700 mb-2">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-red-500"></span>
              {lang === 'bn' ? 'সমর্থিত ভিডিও রেজোলিউশন' : 'Video Download Resolutions'}
            </span>
            <span className="text-[11px] text-red-500 font-bold">Ultra HD 60fps</span>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {['4K UHD', '2K QHD', '1080p FHD', '720p HD', '480p SD'].map((res, i) => (
              <span
                key={i}
                className="px-2.5 py-1 bg-white border border-gray-200 rounded-lg text-gray-700 font-medium text-[11px] shadow-2xs"
              >
                {res}
              </span>
            ))}
          </div>
        </div>
      )}

      {category === 'music' && (
        <div>
          <div className="flex items-center justify-between font-semibold text-gray-700 mb-2">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-orange-500"></span>
              {lang === 'bn' ? 'সমর্থিত অডিও ফরম্যাট' : 'Audio Extraction Formats'}
            </span>
            <span className="text-[11px] text-orange-500 font-bold">Studio Quality</span>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {['MP3 320kbps', 'MP3 256kbps', 'MP3 128kbps', 'M4A High-Res', 'AAC'].map((fmt, i) => (
              <span
                key={i}
                className="px-2.5 py-1 bg-white border border-gray-200 rounded-lg text-gray-700 font-medium text-[11px] shadow-2xs"
              >
                {fmt}
              </span>
            ))}
          </div>
        </div>
      )}

      {category === 'image' && (
        <div>
          <div className="flex items-center justify-between font-semibold text-gray-700 mb-2">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-amber-500"></span>
              {lang === 'bn' ? 'স্ট্যাটাস ও ইমেজ সেভার' : 'Status & Image Formats'}
            </span>
            <span className="text-[11px] text-amber-500 font-bold">Original Quality</span>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {['WhatsApp Status', 'Instagram Reels', 'HD Wallpapers', 'Original PNG/JPG'].map((img, i) => (
              <span
                key={i}
                className="px-2.5 py-1 bg-white border border-gray-200 rounded-lg text-gray-700 font-medium text-[11px] shadow-2xs"
              >
                {img}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
