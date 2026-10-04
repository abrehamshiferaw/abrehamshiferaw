import React, { useState } from 'react';
import { Send, Smartphone, Check, Sparkles, ExternalLink, Heart, Shield, RefreshCw } from 'lucide-react';

export const TelegramMiniAppDemo: React.FC = () => {
  const [hapticTriggered, setHapticTriggered] = useState(false);
  const [mainButtonActive, setMainButtonActive] = useState(true);
  const [counter, setCounter] = useState(42);
  const [themeMode, setThemeMode] = useState<'dark' | 'light'>('dark');

  const triggerHaptic = (style: string) => {
    setHapticTriggered(true);
    setTimeout(() => setHapticTriggered(false), 800);
  };

  return (
    <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-5 sm:p-7 shadow-xl">
      {/* Title & Info */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-neutral-800">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 rounded text-[11px] font-mono uppercase tracking-wider bg-sky-500/20 text-sky-300 border border-sky-500/30">
              Next.js Starter
            </span>
            <span className="text-xs text-neutral-400">Telegram Web App Platform</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-neutral-100 mt-1 flex items-center gap-2">
            <span>Telegram Mini App Foundation</span>
          </h3>
          <p className="text-sm text-neutral-400 mt-1 max-w-xl">
            A Next.js foundation for building fast, mobile-friendly Telegram Web Apps (TWA) with bot authentication, haptic feedback, and modern state management.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <a
            href="https://github.com/abrehamshiferaw/telegram-mini-app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-xs font-semibold text-neutral-200 border border-neutral-700 transition"
          >
            <span>View on GitHub</span>
            <ExternalLink className="w-3.5 h-3.5 text-neutral-400" />
          </a>
          <a
            href="https://github.com/sponsors/abrehamshiferaw"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-pink-500/15 hover:bg-pink-500/25 text-pink-400 border border-pink-500/30 text-xs font-semibold transition"
          >
            <Heart className="w-3.5 h-3.5 fill-pink-500" />
            <span>Sponsor</span>
          </a>
        </div>
      </div>

      {/* Simulator and Architecture Grid */}
      <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Telegram Phone Simulator Frame */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="w-72 sm:w-80 rounded-[2.5rem] bg-neutral-950 border-4 border-neutral-700 p-3 shadow-2xl shadow-sky-500/10 relative">
            {/* Phone Speaker Notch */}
            <div className="w-24 h-4 bg-neutral-800 rounded-full mx-auto mb-2 flex items-center justify-center">
              <div className="w-3 h-3 rounded-full bg-neutral-900 border border-neutral-700"></div>
            </div>

            {/* Telegram Header Bar */}
            <div className="bg-[#242f3d] text-white p-2.5 rounded-t-2xl flex items-center justify-between text-xs font-medium">
              <span className="text-sky-300 font-semibold cursor-pointer">Close</span>
              <div className="text-center">
                <div className="font-bold flex items-center gap-1 justify-center">
                  <span>Abreham MiniApp</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                </div>
                <div className="text-[10px] text-neutral-300">bot</div>
              </div>
              <span className="text-neutral-400 cursor-pointer">&bull;&bull;&bull;</span>
            </div>

            {/* MiniApp Inner Canvas */}
            <div className={`p-4 rounded-b-xl min-h-[340px] flex flex-col justify-between ${
              themeMode === 'dark' ? 'bg-[#17212b] text-neutral-100' : 'bg-neutral-50 text-neutral-900'
            }`}>
              <div className="space-y-3">
                {/* User info mock */}
                <div className="p-2.5 rounded-xl bg-sky-500/10 border border-sky-500/20 text-xs flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-sky-500 flex items-center justify-center text-white font-bold text-xs">
                    AS
                  </div>
                  <div>
                    <div className="font-bold text-sky-400">@abrishwon</div>
                    <div className="text-[10px] text-neutral-400">Telegram ID: 84920491</div>
                  </div>
                </div>

                <div className="text-center py-2">
                  <span className="text-xs font-medium opacity-80">Next.js Fast Refresh Demo</span>
                  <div className="text-3xl font-extrabold mt-1 text-sky-400 font-mono">
                    {counter}
                  </div>
                  <p className="text-[11px] text-neutral-400 mt-1">Interactions tracked</p>
                </div>

                {/* Simulated TWA Actions */}
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <button
                    onClick={() => {
                      setCounter((c) => c + 1);
                      triggerHaptic('impact');
                    }}
                    className="p-2 rounded-lg bg-sky-600 hover:bg-sky-500 text-white font-semibold transition active:scale-95 text-center"
                  >
                    + Tap Button
                  </button>
                  <button
                    onClick={() => {
                      triggerHaptic('notification');
                      alert('Telegram WebApp Haptic feedback triggered');
                    }}
                    className="p-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-200 border border-neutral-700 text-xs font-medium transition text-center"
                  >
                    Test Haptic
                  </button>
                </div>

                {hapticTriggered && (
                  <div className="text-[11px] text-center text-emerald-400 font-mono animate-bounce">
                    ⚡ Telegram WebApp Haptic Fired
                  </div>
                )}
              </div>

              {/* Telegram MainButton Fixed at Bottom */}
              {mainButtonActive && (
                <div className="mt-4 pt-2">
                  <button
                    onClick={() => {
                      setCounter((c) => c + 5);
                      triggerHaptic('main');
                    }}
                    className="w-full py-2.5 rounded-xl bg-[#2481cc] hover:bg-[#1f72b5] text-white font-bold text-xs shadow-md active:scale-95 transition"
                  >
                    CONTINUE &bull; tg.MainButton
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Features & Architecture Highlights */}
        <div className="lg:col-span-7 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800">
              <div className="w-8 h-8 rounded-lg bg-sky-500/10 text-sky-400 flex items-center justify-center mb-2">
                <Shield className="w-4 h-4" />
              </div>
              <h4 className="text-xs font-bold text-neutral-200">HMAC-SHA256 Auth Verification</h4>
              <p className="text-[11px] text-neutral-400 mt-1">
                Zero-trust signature verification of Telegram `initData` on Next.js server route handlers.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-2">
                <Smartphone className="w-4 h-4" />
              </div>
              <h4 className="text-xs font-bold text-neutral-200">Native WebApp SDK Bridge</h4>
              <p className="text-[11px] text-neutral-400 mt-1">
                Deep hooks for HapticFeedback, MainButton, BackButton, CloudStorage, and theme synchronization.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800">
              <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center mb-2">
                <Sparkles className="w-4 h-4" />
              </div>
              <h4 className="text-xs font-bold text-neutral-200">Next.js App Router Ready</h4>
              <p className="text-[11px] text-neutral-400 mt-1">
                Optimized SSR/SSG caching, mobile-first layouts, and minimal bundle sizes for fast load times inside chat.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800">
              <div className="w-8 h-8 rounded-lg bg-purple-500/10 text-purple-400 flex items-center justify-center mb-2">
                <Send className="w-4 h-4" />
              </div>
              <h4 className="text-xs font-bold text-neutral-200">Bot Connection &amp; Webhooks</h4>
              <p className="text-[11px] text-neutral-400 mt-1">
                Pre-wired Telegraf / GramJS integration recipes for bidirectional bot-to-mini-app communication.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 font-mono text-xs">
            <span className="text-neutral-500 text-[11px] block mb-1">Quick Clone Starter</span>
            <span className="text-sky-300">git clone https://github.com/abrehamshiferaw/telegram-mini-app.git</span>
          </div>
        </div>
      </div>
    </div>
  );
};
