import React, { useState } from 'react';
import { 
  Download, 
  FolderDown, 
  Smartphone, 
  HardDriveDownload, 
  ShieldAlert, 
  CheckCheck, 
  ChevronUp, 
  ChevronDown,
  PlayCircle,
  Share2,
  ShieldCheck
} from 'lucide-react';

export const InstallStepsTimeline: React.FC = () => {
  const [isFaqOpen, setIsFaqOpen] = useState(true);

  const steps = [
    {
      title: 'ধাপ ১',
      desc: 'Download APK ক্লিক করে ফাইলটাকে ডাউনলোড করুন।',
      icon: Download,
    },
    {
      title: 'ধাপ ২',
      desc: 'আপনার ফোনের ব্রাউজার এর ডাউনলোড সেকশনে যান / অথবা, ফাইল ম্যানেজারে APK সেকশনে যান',
      icon: FolderDown,
    },
    {
      title: 'ধাপ ৩',
      desc: 'আমাদের Marketify APK দেখতে পাবেন। ওইখানে ক্লিক করুন।',
      icon: Smartphone,
    },
    {
      title: 'ধাপ ৪',
      desc: 'তারপর install বাটন আসবে এইখানে ক্লিক করলে অ্যাপ install হতে থাকবে।',
      icon: HardDriveDownload,
    },
    {
      title: 'ধাপ ৫',
      desc: 'Play protect-এর জন্য অ্যাপ ডাউনলোড করতে কোন সমস্যা হয়, তাহলে more details ক্লিক করুন allow install ক্লিক করলেই ডাউনলোড শুরু হয়ে যাবে।',
      icon: ShieldAlert,
    },
    {
      title: 'ধাপ ৬',
      desc: 'তারপরে আপনার ফোনে দেখা যাবে হোম স্ক্রিনে অথবা অ্যাপ লিস্টে।',
      icon: CheckCheck,
    },
  ];

  return (
    <div className="w-full space-y-4 my-4 text-left">
      {/* 1. Main Stepper / Timeline Card with the 6 exact steps */}
      <div className="bg-white rounded-3xl p-5 sm:p-7 shadow-xs border border-gray-100/90">
        <div className="relative space-y-1">
          {steps.map((item, index) => {
            const IconComponent = item.icon;
            const isLast = index === steps.length - 1;

            return (
              <div key={index} className="relative flex items-start space-x-3.5 sm:space-x-4">
                {/* Icon Badge and Dynamic Vertical Connecting Line */}
                <div className="relative flex flex-col items-center self-stretch shrink-0">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-[#eef8f2] text-[#1b7a43] flex items-center justify-center shrink-0 shadow-2xs border border-[#d2edd9]">
                    <IconComponent className="w-5 h-5 stroke-[2.2]" />
                  </div>
                  {!isLast && (
                    <div className="w-[1.5px] bg-gray-200/90 flex-1 min-h-[30px] my-1" />
                  )}
                </div>

                {/* Step Content */}
                <div className="pt-0.5 pb-4">
                  <span className="text-[#1b7a43] font-bold text-xs sm:text-sm tracking-wide">
                    {item.title}
                  </span>
                  <p className="text-gray-700 font-medium text-xs sm:text-[13px] leading-relaxed mt-0.5">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 2. Security Warning Explanation Card */}
      <div className="bg-white rounded-3xl p-5 sm:p-6 shadow-xs border border-gray-100/90">
        <button
          type="button"
          onClick={() => setIsFaqOpen(!isFaqOpen)}
          className="w-full flex items-center justify-between text-left cursor-pointer group"
        >
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center shrink-0 border border-amber-200/60 font-bold">
              <span className="text-base font-serif leading-none">!</span>
            </div>
            <h4 className="font-bold text-gray-900 text-sm sm:text-base group-hover:text-amber-700 transition-colors">
              এই সতর্কতা কেন দেখায়?
            </h4>
          </div>
          <div className="text-gray-400 group-hover:text-gray-600 transition-colors p-1">
            {isFaqOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
          </div>
        </button>

        {isFaqOpen && (
          <div className="mt-3 pt-1 space-y-3 animate-in fade-in duration-200">
            <p className="text-xs sm:text-[13px] text-gray-600 leading-relaxed font-normal">
              Google Play-এর বাইরে থেকে APK এলে Android অজানা উৎসের সতর্কতা দেখায়। ডাউনলোডের উৎস যাচাই করুন।
            </p>

            <div className="bg-gray-50/90 rounded-2xl p-3.5 border border-gray-100 text-xs sm:text-[12.5px] text-gray-600 leading-relaxed">
              দ্রুত হালনাগাদের জন্য Marketify APK সরাসরি অফিশিয়াল মাধ্যমে দেওয়া হয়; এতে সতর্কতা দেখা যেতে পারে।
            </div>
          </div>
        )}
      </div>

      {/* 3. App Usage Guide Card (ব্যবহার করার নিয়ম ও ভিডিও ডাউনলোড করে গ্যালারিতে সেভ রাখার নিয়ম) */}
      <div className="bg-white rounded-3xl p-5 sm:p-6 shadow-xs border border-gray-100/90 space-y-3">
        <h4 className="font-bold text-gray-900 text-sm sm:text-base flex items-center gap-2 border-b border-gray-100 pb-2">
          <PlayCircle className="w-5 h-5 text-red-500" />
          Marketify অ্যাপ ব্যবহার করার নিয়ম
        </h4>

        <div className="space-y-2.5 text-xs sm:text-[13px]">
          <div className="flex items-start space-x-2.5 p-2.5 rounded-xl bg-gray-50/80 border border-gray-100">
            <Share2 className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-gray-900">১. লিংক কপি ও পেস্ট:</p>
              <p className="text-gray-600 text-[11px] sm:text-xs mt-0.5 leading-relaxed">
                TikTok, Facebook বা YouTube ভাইরাল ভিডিওর 'Share' থেকে 'Copy Link' করে Marketify অ্যাপে পেস্ট করুন।
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-2.5 p-2.5 rounded-xl bg-gray-50/80 border border-gray-100">
            <FolderDown className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-gray-900">২. গ্যালারিতে সেভ রাখুন (No Watermark):</p>
              <p className="text-gray-600 text-[11px] sm:text-xs mt-0.5 leading-relaxed">
                'Download' বাটনে ক্লিক করে ওয়াটারমার্ক ছাড়া সরাসরি ফোনের মেমোরি ও গ্যালারিতে সেভ করে রাখুন।
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-2.5 p-2.5 rounded-xl bg-gray-50/80 border border-gray-100">
            <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-gray-900">৩. ইন্টারনেট ছাড়া অফলাইনে দেখুন:</p>
              <p className="text-gray-600 text-[11px] sm:text-xs mt-0.5 leading-relaxed">
                একবার সেভ করে রাখলে কোনো এমবি বা ইন্টারনেট ছাড়াই যেকোনো সময় দেখতে ও শেয়ার করতে পারবেন।
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
