import React from 'react';
import { 
  DownloadCloud, 
  Smartphone, 
  ShieldCheck, 
  PlayCircle, 
  Share2, 
  FolderDown, 
  HelpCircle, 
  ChevronDown,
  Sparkles,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';

interface MoreDetailsProps {
  isExpanded: boolean;
  onToggle: () => void;
  lang: string;
}

export const MoreDetails: React.FC<MoreDetailsProps> = ({ isExpanded, onToggle, lang }) => {
  return (
    <div className="w-full transition-all duration-300">
      {isExpanded && (
        <div className="mt-4 pt-4 border-t border-dashed border-gray-200 text-left space-y-6 animate-in fade-in slide-in-from-top-2 duration-300">
          
          {/* Bengali Intro Header */}
          <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl p-3.5 border border-red-100 text-gray-800">
            <h4 className="font-bold text-xs sm:text-sm text-red-600 flex items-center gap-1.5 mb-1">
              <Sparkles className="w-4 h-4 text-red-500" />
              Marketify - ফ্রি ভিডিও ওয়াচিং ও ভাইরাল লিংক শেয়ারিং
            </h4>
            <p className="text-[12px] sm:text-xs text-gray-600 leading-relaxed">
              এখানে বাংলাদেশী জনপ্রিয় টিকটকারদের সব ভাইরাল ভিডিও লিংক সহজেই শেয়ার করা হয়, সরাসরি দেখা যায় এবং ফোনে ডাউনলোড করে চিরতরে সেভ রাখা যায়।
            </p>
          </div>

          {/* Section 1: বাংলায় অ্যাপ ইন্সটল করার নিয়মাবলী */}
          <div className="space-y-3">
            <h4 className="text-xs sm:text-sm font-extrabold text-gray-900 uppercase tracking-wide flex items-center gap-1.5 border-b border-gray-100 pb-1.5">
              <Smartphone className="w-4 h-4 text-red-500" />
              ১. অ্যাপ কিভাবে ইন্সটল করবেন (ইনস্টলেশন নিয়ম)
            </h4>

            <div className="space-y-2.5">
              {/* Step 1 */}
              <div className="p-3 rounded-2xl bg-white border border-gray-100 shadow-xs flex items-start space-x-3">
                <span className="w-6 h-6 rounded-full bg-red-500 text-white font-bold flex items-center justify-center shrink-0 text-xs shadow-xs">
                  ১
                </span>
                <div className="text-xs">
                  <p className="font-bold text-gray-900 text-[13px]">
                    এপিকে ফাইল ডাউনলোড করুন
                  </p>
                  <p className="text-gray-600 text-[11px] sm:text-xs mt-0.5 leading-relaxed">
                    উপরে থাকা লাল রঙের <strong className="text-red-600 font-semibold">"FREE DOWNLOAD MARKETIFY APK"</strong> বাটনে ক্লিক করে ফাইলটি নামিয়ে নিন। ব্রাউজারে ওয়ার্নিং আসলে <span className="font-semibold text-gray-800">"Download anyway"</span> চাপুন (অ্যাপটি সম্পূর্ণ নিরাপদ)।
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="p-3 rounded-2xl bg-white border border-gray-100 shadow-xs flex items-start space-x-3">
                <span className="w-6 h-6 rounded-full bg-red-500 text-white font-bold flex items-center justify-center shrink-0 text-xs shadow-xs">
                  ২
                </span>
                <div className="text-xs">
                  <p className="font-bold text-gray-900 text-[13px]">
                    Unknown Apps পারমিশন অন করুন
                  </p>
                  <p className="text-gray-600 text-[11px] sm:text-xs mt-0.5 leading-relaxed">
                    আপনার ফোনের <span className="font-semibold text-gray-800">Settings</span> &gt; <span className="font-semibold text-gray-800">Security</span> অথবা <span className="font-semibold text-gray-800">Apps</span> এ যান। যে ব্রাউজার থেকে ডাউনলোড করেছেন (যেমন Chrome) সেটির জন্য <strong className="text-gray-800">"Allow from this source"</strong> অপশন চালু করুন।
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="p-3 rounded-2xl bg-white border border-gray-100 shadow-xs flex items-start space-x-3">
                <span className="w-6 h-6 rounded-full bg-red-500 text-white font-bold flex items-center justify-center shrink-0 text-xs shadow-xs">
                  ৩
                </span>
                <div className="text-xs">
                  <p className="font-bold text-gray-900 text-[13px]">
                    ইন্সটল সম্পন্ন করে ওপেন করুন
                  </p>
                  <p className="text-gray-600 text-[11px] sm:text-xs mt-0.5 leading-relaxed">
                    ফোনের নোটিফিকেশন বার অথবা 'Downloads' ফোল্ডার থেকে <span className="font-semibold text-gray-800">Marketify.apk</span> ফাইলে ট্যাপ করে <span className="font-semibold text-emerald-600">"Install"</span> চাপুন। কিছুক্ষণের মধ্যে অ্যাপটি প্রস্তুত হয়ে যাবে!
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Section 2: অ্যাপ ব্যবহার করার নিয়ম ও ভিডিও ডাউনলোড করে রাখার নিয়ম */}
          <div className="space-y-3">
            <h4 className="text-xs sm:text-sm font-extrabold text-gray-900 uppercase tracking-wide flex items-center gap-1.5 border-b border-gray-100 pb-1.5">
              <PlayCircle className="w-4 h-4 text-orange-500" />
              ২. অ্যাপ ব্যবহার ও ভিডিও ডাউনলোড করে রাখার নিয়ম
            </h4>

            <div className="space-y-2.5">
              {/* Usage 1 */}
              <div className="p-3 rounded-2xl bg-gray-50/80 border border-gray-100 text-xs">
                <div className="flex items-center space-x-2 text-gray-900 font-bold mb-1">
                  <Share2 className="w-4 h-4 text-red-500" />
                  <span>ভাইরাল লিংক কপি ও পেস্ট:</span>
                </div>
                <p className="text-gray-600 text-[11px] sm:text-xs leading-relaxed">
                  TikTok, Facebook বা YouTube-এ গিয়ে পছন্দের ভাইরাল ভিডিওর <strong>'Share'</strong> অপশন থেকে <strong>'Copy Link'</strong> করুন। এরপর Marketify অ্যাপে এসে সার্চ বারে লিংকটি পেস্ট করুন।
                </p>
              </div>

              {/* Usage 2 */}
              <div className="p-3 rounded-2xl bg-gray-50/80 border border-gray-100 text-xs">
                <div className="flex items-center space-x-2 text-gray-900 font-bold mb-1">
                  <FolderDown className="w-4 h-4 text-orange-500" />
                  <span>গ্যালারিতে ডাউনলোড করে রাখা (No Watermark):</span>
                </div>
                <p className="text-gray-600 text-[11px] sm:text-xs leading-relaxed">
                  ভিডিও পেজে থাকা <strong className="text-red-600">Download</strong> বাটনে ক্লিক করে <strong>'HD (No Watermark)'</strong> সিলেক্ট করুন। ভিডিওটি স্বয়ংক্রিয়ভাবে আপনার ফোনের গ্যালারিতে সেভ হয়ে যাবে।
                </p>
              </div>

              {/* Usage 3 */}
              <div className="p-3 rounded-2xl bg-gray-50/80 border border-gray-100 text-xs">
                <div className="flex items-center space-x-2 text-gray-900 font-bold mb-1">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span>ইন্টারনেট ছাড়া অফলাইন ওয়াচিং:</span>
                </div>
                <p className="text-gray-600 text-[11px] sm:text-xs leading-relaxed">
                  একবার ডাউনলোড হয়ে গেলে কোনো ইন্টারনেট সংযোগ বা মেগাবাইট (MB) খরচ ছাড়াই যখন খুশি যতবার ইচ্ছা ভিডিওগুলো উপভোগ করতে পারবেন।
                </p>
              </div>
            </div>
          </div>

          {/* Section 3: নিরাপত্তা ও ভেরিফিকেশন সনদ */}
          <div className="bg-emerald-50/60 rounded-2xl p-3 border border-emerald-100 text-[11px] text-gray-700">
            <div className="flex items-center space-x-2 font-bold text-emerald-800 mb-1">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>১০০% নিরাপদ ও সুরক্ষিত গ্যারান্টি</span>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Marketify এপিকে সম্পূর্ণ ভাইরাস-মুক্ত এবং CM Security, Lookout Mobile ও McAfee Antivirus দ্বারা সার্টিফাইড।
            </p>
          </div>

        </div>
      )}
    </div>
  );
};
