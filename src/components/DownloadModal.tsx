import React, { useState, useEffect } from 'react';
import { X, ShieldCheck, Download } from 'lucide-react';

interface DownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: string;
}

export const DownloadModal: React.FC<DownloadModalProps> = ({ isOpen, onClose, lang }) => {
  const [progress, setProgress] = useState(0);
  const [downloadComplete, setDownloadComplete] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setProgress(0);
      setDownloadComplete(false);
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setDownloadComplete(true);
            return 100;
          }
          return prev + 12;
        });
      }, 140);
      return () => clearInterval(interval);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleDownloadFile = () => {
    const content = `Marketify Official APK Package (v5.2104)
========================================
Package: com.marketify.downloader
Version: 5.2104
Size: 21.8 MB
Build: Release-2026-Official
Verification: Passed CM Security, Lookout Mobile, McAfee Antivirus & Play Protect.

Installation Steps:
1. Tap 'Settings' -> 'Security' -> 'Install Unknown Apps'.
2. Enable 'Allow from this source' for your browser.
3. Open the downloaded APK and tap 'Install'.
4. Enjoy unlimited HD Video and Music downloads with Marketify!
`;
    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Marketify_v5.2104_official.apk.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header bar */}
        <div className="flex items-center justify-between px-6 pt-5 pb-3 border-b border-gray-100">
          <div className="flex items-center space-x-3">
            <img
              src="/assets/aistudio/BackgroundEraser_20261030_232320955_29556c33.png"
              alt="Marketify"
              className="h-9 w-auto object-contain"
            />
            <div>
              <h3 className="font-bold text-gray-900 text-base leading-tight">Marketify APK v5.2104</h3>
              <p className="text-xs text-green-600 font-medium flex items-center gap-1 mt-0.5">
                <ShieldCheck className="w-3.5 h-3.5" /> 100% Virus-Free & Safe
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-gray-400 hover:text-gray-700 hover:bg-gray-100 rounded-full transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-5">
          {/* Progress / Status banner */}
          <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl p-4 border border-red-100/70">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold text-gray-700 uppercase tracking-wider">
                {downloadComplete ? 'Download Completed' : 'Downloading APK Package...'}
              </span>
              <span className="text-xs font-bold text-red-600">{progress}%</span>
            </div>

            {/* Progress bar */}
            <div className="w-full h-2.5 bg-gray-200 rounded-full overflow-hidden relative">
              <div
                className="h-full bg-gradient-to-r from-red-500 to-orange-500 transition-all duration-150 rounded-full"
                style={{ width: `${progress}%` }}
              />
            </div>

            <div className="flex items-center justify-between mt-2.5 text-xs text-gray-500 font-mono">
              <span>Marketify_v5.2104.apk</span>
              <span>21.8 MB</span>
            </div>
          </div>

          {/* Quick info badges */}
          <div className="grid grid-cols-3 gap-2.5 text-center">
            <div className="bg-gray-50 border border-gray-100 rounded-xl p-2.5">
              <div className="text-[11px] text-gray-500">Android OS</div>
              <div className="text-xs font-bold text-gray-800 mt-0.5">4.4 or Higher</div>
            </div>
            <div className="bg-gray-50 border border-gray-100 rounded-xl p-2.5">
              <div className="text-[11px] text-gray-500">License</div>
              <div className="text-xs font-bold text-emerald-600 mt-0.5">100% Free</div>
            </div>
            <div className="bg-gray-50 border border-gray-100 rounded-xl p-2.5">
              <div className="text-[11px] text-gray-500">Downloads</div>
              <div className="text-xs font-bold text-gray-800 mt-0.5">500M+ Users</div>
            </div>
          </div>

          {/* Android Installation 3-Step Guide */}
          <div className="space-y-3 pt-1">
            <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider">
              {lang === 'bn' ? 'অ্যান্ড্রয়েডে যেভাবে ইনস্টল করবেন' : 'Easy 3-Step Installation Guide'}
            </h4>

            <div className="space-y-2.5 text-xs text-gray-700">
              <div className="flex items-start space-x-3 p-2.5 rounded-xl bg-gray-50/80 border border-gray-100">
                <span className="w-6 h-6 rounded-full bg-red-100 text-red-600 font-bold flex items-center justify-center shrink-0 text-xs">
                  1
                </span>
                <div>
                  <p className="font-semibold text-gray-900">
                    {lang === 'bn' ? 'ফাইল ডাউনলোড করুন' : 'Download APK file'}
                  </p>
                  <p className="text-gray-500 text-[11px] mt-0.5">
                    {lang === 'bn'
                      ? 'Download APK বাটনে ক্লিক করে ফাইলটি ফোনে নামিয়ে নিন।'
                      : 'Tap Download APK to get the official package.'}
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-2.5 rounded-xl bg-gray-50/80 border border-gray-100">
                <span className="w-6 h-6 rounded-full bg-red-100 text-red-600 font-bold flex items-center justify-center shrink-0 text-xs">
                  2
                </span>
                <div>
                  <p className="font-semibold text-gray-900">
                    {lang === 'bn' ? 'ডাউনলোড বা ফাইল ম্যানেজারে যান' : 'Open Downloads / File Manager'}
                  </p>
                  <p className="text-gray-500 text-[11px] mt-0.5">
                    {lang === 'bn'
                      ? 'ব্রাউজারের ডাউনলোড অথবা ফাইল ম্যানেজারের APK সেকশন খুলুন।'
                      : 'Go to your Downloads folder or APK section in File Manager.'}
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-2.5 rounded-xl bg-gray-50/80 border border-gray-100">
                <span className="w-6 h-6 rounded-full bg-red-100 text-red-600 font-bold flex items-center justify-center shrink-0 text-xs">
                  3
                </span>
                <div>
                  <p className="font-semibold text-gray-900">
                    {lang === 'bn' ? 'Marketify APK ইনস্টল করুন' : 'Tap & Install Marketify'}
                  </p>
                  <p className="text-gray-500 text-[11px] mt-0.5">
                    {lang === 'bn'
                      ? 'Marketify APK ফাইলে ক্লিক করে Install এ চাপুন (সতর্কতা আসলে More details > Allow install দিন)।'
                      : 'Tap Marketify APK and click Install. If prompted, select More details > Allow install.'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer CTA */}
        <div className="p-4 bg-gray-50 border-t border-gray-100 flex items-center space-x-3">
          <button
            onClick={handleDownloadFile}
            className="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-[#ff3838] to-[#e61616] text-white font-bold text-sm shadow-md shadow-red-500/25 hover:brightness-105 active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <Download className="w-4 h-4" />
            {lang === 'bn' ? 'সরাসরি এপিকে ফাইল নামান' : 'Save APK File (21.8 MB)'}
          </button>
          <button
            onClick={onClose}
            className="py-3 px-4 rounded-xl border border-gray-200 text-gray-700 font-semibold text-sm hover:bg-gray-100 transition-colors cursor-pointer"
          >
            {lang === 'bn' ? 'বন্ধ করুন' : 'Done'}
          </button>
        </div>
      </div>
    </div>
  );
};
