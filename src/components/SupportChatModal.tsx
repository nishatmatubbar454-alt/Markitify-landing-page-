import React, { useState } from 'react';
import { X, Send } from 'lucide-react';

interface SupportChatModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: string;
}

export const SupportChatModal: React.FC<SupportChatModalProps> = ({ isOpen, onClose, lang }) => {
  const [messages, setMessages] = useState<Array<{ sender: 'bot' | 'user'; text: string }>>([
    {
      sender: 'bot',
      text:
        lang === 'bn'
          ? 'হ্যালো! Marketify সহায়তা কেন্দ্রে স্বাগতম। আপনি ভিডিও বা অডিও ডাউনলোড সংক্রান্ত কী জানতে চান?'
          : 'Hi there! Welcome to Marketify Support. How can we help you download videos or music today?',
    },
  ]);
  const [inputText, setInputText] = useState('');

  if (!isOpen) return null;

  const quickQuestions = [
    lang === 'bn' ? 'Marketify কি সম্পূর্ণ ফ্রি?' : 'Is Marketify completely free?',
    lang === 'bn' ? 'কিভাবে MP3 তে রূপান্তর করব?' : 'How to convert video to MP3?',
    lang === 'bn' ? 'প্লে স্টোরে কেন নেই?' : 'Why is it not on Google Play Store?',
    lang === 'bn' ? '৪কে ভিডিও ডাউনলোড কিভাবে করব?' : 'Can I download 4K & 1080p videos?',
  ];

  const handleSend = (textToSend?: string) => {
    const text = textToSend || inputText;
    if (!text.trim()) return;

    const newMessages = [...messages, { sender: 'user' as const, text }];
    setMessages(newMessages);
    setInputText('');

    setTimeout(() => {
      let botReply = '';
      if (text.toLowerCase().includes('free') || text.includes('ফ্রি')) {
        botReply =
          lang === 'bn'
            ? 'হ্যাঁ, Marketify ১০০% ফ্রি! কোন সাবস্ক্রিপশন বা ফি ছাড়াই আনলিমিটেড ভিডিও এবং গান ডাউনলোড করা যায়।'
            : 'Yes, Marketify is 100% free with unlimited high-speed downloads, 4K video support, and MP3 conversion.';
      } else if (text.toLowerCase().includes('mp3') || text.includes('গান')) {
        botReply =
          lang === 'bn'
            ? 'যেকোন ভিডিও লিঙ্কের পাশে ডাউনলোড বোতামে ক্লিক করে MP3 বা M4A অডিও ফরম্যাট বেছে নিন। এটি স্বয়ংক্রিয়ভাবে রূপান্তর হয়ে যাবে!'
            : 'Simply search or paste any video link, tap Download, and select MP3 (128kbps, 256kbps, or 320kbps HD) to extract pure audio directly!';
      } else if (text.toLowerCase().includes('play') || text.includes('প্লে স্টোর')) {
        botReply =
          lang === 'bn'
            ? 'গুগল তাদের নীতিমালার কারণে ইউটিউব ডাউনলোডার অ্যাপ্লিকেশন প্লে স্টোরে অনুমতি দেয় না। তাই অফিসিয়াল ওয়েবসাইট থেকে সরাসরি নিরাপদ এপিকে প্রদান করা হয়।'
            : 'Google Play Store policies do not permit YouTube downloaders. Marketify is distributed directly through its official APK, fully verified virus-free by McAfee, CM Security, and Lookout.';
      } else {
        botReply =
          lang === 'bn'
            ? 'ধন্যবাদ আপনার বার্তার জন্য! Marketify ব্যবহার করে আপনি ১০০০+ ওয়েবসাইট থেকে দ্রুততম গতিতে ফুল এইচডি ও ৪কে ভিডিও ডাউনলোড করতে পারবেন।'
            : 'Thank you for your inquiry! Marketify supports ultra-fast multithreaded downloads from 1,000+ sites with 4K video and lossless audio.';
      }

      setMessages((prev) => [...prev, { sender: 'bot', text: botReply }]);
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="w-full sm:max-w-md bg-white rounded-t-3xl sm:rounded-3xl shadow-2xl overflow-hidden border border-gray-100 flex flex-col h-[560px] max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-[#ff3838] to-[#e61616] p-4 text-white flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img
              src="/assets/aistudio/BackgroundEraser_20261030_232320955_29556c33.png"
              alt="Marketify"
              className="h-8 w-auto object-contain bg-white/10 rounded-lg p-0.5"
            />
            <div>
              <h3 className="font-bold text-sm leading-tight">Marketify Support Assistant</h3>
              <p className="text-[11px] text-red-100 flex items-center gap-1 mt-0.5">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block animate-pulse"></span>
                Online | Instant Answers
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-white/80 hover:text-white hover:bg-white/10 rounded-full transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Message Feed */}
        <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-[#f8fafc]">
          {messages.map((m, idx) => (
            <div
              key={idx}
              className={`flex ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[82%] p-3 rounded-2xl text-xs sm:text-sm leading-relaxed shadow-xs ${
                  m.sender === 'user'
                    ? 'bg-gradient-to-r from-red-600 to-red-500 text-white rounded-br-none'
                    : 'bg-white text-gray-800 border border-gray-100 rounded-bl-none shadow-[0_2px_8px_rgba(0,0,0,0.03)]'
                }`}
              >
                {m.text}
              </div>
            </div>
          ))}

          {/* Quick suggestions */}
          <div className="pt-2">
            <p className="text-[11px] font-semibold text-gray-400 mb-2">Suggested questions:</p>
            <div className="flex flex-wrap gap-1.5">
              {quickQuestions.map((q, i) => (
                <button
                  key={i}
                  onClick={() => handleSend(q)}
                  className="text-xs bg-white border border-gray-200 text-gray-700 hover:border-red-400 hover:text-red-600 py-1.5 px-3 rounded-full transition-all text-left shadow-2xs cursor-pointer"
                >
                  {q}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Input form */}
        <div className="p-3 bg-white border-t border-gray-100 flex items-center gap-2">
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder={lang === 'bn' ? 'আপনার প্রশ্ন লিখুন...' : 'Type a question...'}
            className="flex-1 bg-gray-100 text-gray-800 text-xs sm:text-sm px-3.5 py-2.5 rounded-xl border border-transparent focus:border-red-400 focus:bg-white focus:outline-none transition-all"
          />
          <button
            onClick={() => handleSend()}
            disabled={!inputText.trim()}
            className="p-2.5 rounded-xl bg-gradient-to-r from-red-500 to-red-600 text-white hover:brightness-105 disabled:opacity-40 disabled:cursor-not-allowed transition-all cursor-pointer"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
