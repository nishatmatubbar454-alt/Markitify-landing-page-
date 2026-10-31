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
  Sparkles, 
  Lock, 
  KeyRound, 
  Headphones, 
  MessageSquare 
} from 'lucide-react';

interface InstallStepsTimelineProps {
  onContactClick?: () => void;
}

export const InstallStepsTimeline: React.FC<InstallStepsTimelineProps> = ({ onContactClick }) => {
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

      {/* 3. App Features, Security & Password Recovery Card (ব্যবহার ও অ্যাপ পরিচিতি) */}
      <div className="bg-white rounded-3xl p-5 sm:p-6 shadow-xs border border-gray-100/90 space-y-3.5">
        <h4 className="font-bold text-gray-900 text-sm sm:text-base flex items-center gap-2 border-b border-gray-100 pb-2.5">
          <PlayCircle className="w-5 h-5 text-red-500" />
          Marketify অ্যাপ সম্পর্কিত তথ্য ও নিয়ম
        </h4>

        <div className="space-y-3 text-xs sm:text-[13px]">
          {/* Item 1: Video Platform & Viral Links */}
          <div className="flex items-start space-x-3 p-3 rounded-2xl bg-rose-50/60 border border-rose-100/80">
            <div className="w-8 h-8 rounded-xl bg-rose-500 text-white flex items-center justify-center shrink-0 shadow-xs mt-0.5">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <p className="font-bold text-gray-900 text-[13px] sm:text-sm">
                ভাইরাল ভিডিও প্ল্যাটফর্ম
              </p>
              <p className="text-gray-700 text-[12px] sm:text-xs mt-0.5 leading-relaxed">
                এটা একটা ভিডিও প্ল্যাটফর্ম। যেখানে বাংলাদেশের সকল টিকটকার দের ভাইরাল লিংক ভিডিও পাওয়া যায়।
              </p>
            </div>
          </div>

          {/* Item 2: Full Security System & App Lock */}
          <div className="flex items-start space-x-3 p-3 rounded-2xl bg-emerald-50/60 border border-emerald-100/80">
            <div className="w-8 h-8 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-xs mt-0.5">
              <Lock className="w-4 h-4" />
            </div>
            <div>
              <p className="font-bold text-gray-900 text-[13px] sm:text-sm">
                ফুল সিকিউরিটি ও অ্যাপ লক
              </p>
              <p className="text-gray-700 text-[12px] sm:text-xs mt-0.5 leading-relaxed">
                অ্যাপস এর মধ্যে ফুল সিকিউরিটি সিস্টেম আছে। অ্যাপ আপনি নিজস্ব পাসওয়ার্ড দিয়ে লক করে রাখতে পারবেন।
              </p>
            </div>
          </div>

          {/* Item 3: Password Recovery / 8888 Code */}
          <div className="flex items-start space-x-3 p-3 rounded-2xl bg-amber-50/70 border border-amber-200/80">
            <div className="w-8 h-8 rounded-xl bg-amber-500 text-white flex items-center justify-center shrink-0 shadow-xs mt-0.5">
              <KeyRound className="w-4 h-4" />
            </div>
            <div>
              <p className="font-bold text-gray-900 text-[13px] sm:text-sm flex items-center gap-2">
                পাসওয়ার্ড ভুলে গেলে রিকভারি
                <span className="text-[10px] bg-amber-200/80 text-amber-950 font-black px-1.5 py-0.5 rounded-md font-mono">
                  কোড: 8888
                </span>
              </p>
              <p className="text-gray-700 text-[12px] sm:text-xs mt-0.5 leading-relaxed">
                অ্যাপের পাসওয়ার্ড কখনো ভুলে গেলে <strong className="text-gray-900 font-semibold">forget password</strong> ওইখানে গিয়ে <span className="font-bold text-red-600 bg-white px-1.5 py-0.5 rounded border border-amber-200 font-mono">8888</span> টাইপ করলেই আপনার বর্তমান পাসওয়ার্ড দেখতে পারবেন।
              </p>
            </div>
          </div>

          {/* Item 4: Contact Support */}
          <div className="p-3 rounded-2xl bg-blue-50/70 border border-blue-100 flex items-center justify-between gap-3">
            <div className="flex items-center space-x-2.5">
              <div className="w-8 h-8 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-xs">
                <Headphones className="w-4 h-4" />
              </div>
              <div>
                <p className="font-bold text-gray-900 text-[12.5px] sm:text-xs">
                  যোগাযোগ ও সহায়তা
                </p>
                <p className="text-gray-600 text-[11px] sm:text-[11.5px] leading-tight">
                  যে কোন সমস্যা আমাদের সাথে যোগাযোগ করুন।
                </p>
              </div>
            </div>

            {onContactClick && (
              <button
                type="button"
                onClick={onContactClick}
                className="py-1.5 px-3.5 rounded-xl bg-blue-600 text-white text-xs font-bold hover:bg-blue-700 active:scale-95 transition-all shadow-xs shrink-0 cursor-pointer flex items-center gap-1.5"
              >
                <span>যোগাযোগ</span>
                <MessageSquare className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
