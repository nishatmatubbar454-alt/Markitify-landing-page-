/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { CategoryBadges, CategoryType } from './components/CategoryBadges';
import { TrustCard } from './components/TrustCard';
import { InstallStepsTimeline } from './components/InstallStepsTimeline';
import { SupportChatModal } from './components/SupportChatModal';
import { LanguageModal } from './components/LanguageModal';
import { translations } from './data/translations';
import { MessageSquare, ShieldCheck, Download, X } from 'lucide-react';

export default function App() {
  const [lang, setLang] = useState<'en' | 'bn' | 'hi' | 'es'>('en');
  const [activeCategory, setActiveCategory] = useState<CategoryType>('video');
  const [isChatModalOpen, setIsChatModalOpen] = useState<boolean>(false);
  const [isLangModalOpen, setIsLangModalOpen] = useState<boolean>(false);
  const [securityModalTitle, setSecurityModalTitle] = useState<string | null>(null);
  
  // Direct APK download link
  const directDownloadUrl = '/downloads/Marketify_v5.2104.apk';
  const [showDownloadToast, setShowDownloadToast] = useState<boolean>(false);

  const t = translations[lang] || translations.en;

  const currentLanguageLabel = {
    en: 'English',
    bn: 'বাংলা',
    hi: 'हिन्दी',
    es: 'Español',
  }[lang] || 'English';

  const handleDownloadClick = () => {
    // 1. Direct download execution
    const link = document.createElement('a');
    link.href = directDownloadUrl;
    link.download = 'Marketify_v5.2104.apk';
    link.setAttribute('target', '_blank');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // 2. Trigger instant feedback toast
    setShowDownloadToast(true);
    setTimeout(() => {
      setShowDownloadToast(false);
    }, 4000);
  };

  const handleSecurityClick = (authority: string) => {
    setSecurityModalTitle(authority);
  };

  return (
    <div className="min-h-screen bg-[#f3f4f6] sm:py-6 flex flex-col items-center justify-start text-gray-900 selection:bg-red-500 selection:text-white relative">
      
      {/* Direct Download Toast Notification */}
      {showDownloadToast && (
        <div className="fixed top-4 inset-x-4 max-w-sm mx-auto z-50 bg-[#111827] text-white rounded-2xl p-4 shadow-2xl flex items-center space-x-3 border border-gray-700 animate-in fade-in slide-in-from-top-4 duration-250">
          <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
            <Download className="w-5 h-5 animate-bounce" />
          </div>
          <div className="flex-1 text-xs">
            <p className="font-bold text-sm text-white">সরাসরি ডাউনলোড শুরু হয়েছে!</p>
            <p className="text-gray-300 mt-0.5 leading-relaxed">
              আপনার ফোনের নোটিফিকেশন বার অথবা Downloads ফোল্ডার চেক করুন।
            </p>
          </div>
          <button 
            onClick={() => setShowDownloadToast(false)}
            className="text-gray-400 hover:text-white p-1 cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Main Mobile App Card Container */}
      <div className="relative w-full max-w-[430px] min-h-screen sm:min-h-0 sm:rounded-[36px] bg-gradient-to-b from-[#ffe7e7] via-[#fff5f5] via-25% to-[#f2f6fd] sm:shadow-[0_20px_50px_rgba(0,0,0,0.1)] sm:border border-gray-200/80 overflow-hidden flex flex-col justify-between">
        {/* Subtle Ambient Background Gradients */}
        <div className="absolute top-0 inset-x-0 h-64 bg-gradient-to-b from-rose-200/35 to-transparent pointer-events-none" />
        <div className="absolute bottom-10 left-0 w-60 h-60 bg-blue-100/35 rounded-full blur-3xl pointer-events-none" />

        {/* Top Header with Menu, Sized Marketify Logo on left, and Language button */}
        <Header
          onLanguageClick={() => setIsLangModalOpen(true)}
          onMenuClick={() => setIsChatModalOpen(true)}
          currentLanguageLabel={currentLanguageLabel}
        />

        {/* Hero Section */}
        <main className="flex-1 px-4 sm:px-6 pt-3 sm:pt-5 pb-8 flex flex-col justify-between relative z-10">
          <div>
            {/* Bold Centered Headline exactly as user requested */}
            <div className="text-center px-1 my-1">
              <h1 className="text-[22px] sm:text-[27px] font-black text-[#111827] leading-[1.3] tracking-tight">
                <span className="block">{t.titleLine1}</span>
                <span className="block text-red-600 font-extrabold">{t.titleLine2}</span>
                <span className="block">{t.titleLine3}</span>
              </h1>
            </div>

            {/* Category Badges in a single horizontal row without wrapping */}
            <CategoryBadges
              activeCategory={activeCategory}
              onSelectCategory={setActiveCategory}
              videoLabel={t.video}
              musicLabel={t.music}
              imageLabel={t.image}
            />

            {/* Primary CTA Button: Direct Download Link to APK */}
            <div className="mt-3 mb-4 sm:mt-3.5 sm:mb-4.5 w-full flex flex-col items-center px-1">
              <a
                href={directDownloadUrl}
                download="Marketify_v5.2104.apk"
                onClick={handleDownloadClick}
                className="w-full max-w-[340px] sm:max-w-[360px] py-3.5 px-6 rounded-full bg-gradient-to-r from-[#ff3838] via-[#ff2626] to-[#eb1b23] text-white font-black text-[15px] sm:text-[16px] tracking-wider uppercase shadow-[0_10px_24px_-4px_rgba(255,40,40,0.5)] hover:brightness-105 active:scale-[0.985] transition-all duration-150 cursor-pointer flex items-center justify-center gap-2 text-center"
              >
                <Download className="w-5 h-5 shrink-0 ml-[-4px]" />
                <span>DOWNLOAD APK</span>
              </a>
            </div>

            {/* Trust Card: Trusted & Safe with CM Security, Lookout, McAfee */}
            <TrustCard
              title={t.trustedSafe}
              cmSecurityLabel={t.cmSecurity}
              lookoutLabel={t.lookout}
              mcafeeLabel={t.mcafee}
              onSecurityClick={handleSecurityClick}
            />

            {/* Installation Steps Timeline & FAQ - directly visible */}
            <InstallStepsTimeline onContactClick={() => setIsChatModalOpen(true)} />
          </div>

          {/* Floating Support Button linking to @HalpLine_bot */}
          <div className="sticky bottom-4 flex justify-end z-30 pointer-events-none pr-1">
            <a
              href="https://t.me/HalpLine_bot"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contact @HalpLine_bot on Telegram"
              className="pointer-events-auto w-12 h-12 rounded-2xl bg-[#229ED9] text-white shadow-[0_6px_20px_rgba(34,158,217,0.4)] flex items-center justify-center hover:scale-110 active:scale-95 transition-all cursor-pointer group"
              title="যোগাযোগ করুন: @HalpLine_bot"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 ml-[-2px] mt-[-1px]">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/>
              </svg>
            </a>
          </div>
        </main>
      </div>

      {/* Security Authority Details Modal */}
      {securityModalTitle && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs"
          onClick={() => setSecurityModalTitle(null)}
        >
          <div 
            className="w-full max-w-sm bg-white rounded-2xl p-5 shadow-2xl border border-gray-100 text-center space-y-3"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <ShieldCheck className="w-7 h-7" />
            </div>
            <h3 className="font-bold text-gray-900 text-base">{securityModalTitle} Verified</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Marketify APK package is scanned and certified 100% clean and free of viruses, malware, trojans, or intrusive spyware by {securityModalTitle}.
            </p>
            <button
              onClick={() => setSecurityModalTitle(null)}
              className="w-full py-2.5 rounded-xl bg-gray-900 text-white text-xs font-semibold hover:bg-gray-800 transition-colors cursor-pointer"
            >
              OK, Got It
            </button>
          </div>
        </div>
      )}

      {/* Support Chat Modal */}
      <SupportChatModal
        isOpen={isChatModalOpen}
        onClose={() => setIsChatModalOpen(false)}
        lang={lang}
      />

      {/* Language Selector Modal */}
      <LanguageModal
        isOpen={isLangModalOpen}
        onClose={() => setIsLangModalOpen(false)}
        currentLang={lang}
        onSelectLang={(newLang) => setLang(newLang as any)}
      />
    </div>
  );
}
