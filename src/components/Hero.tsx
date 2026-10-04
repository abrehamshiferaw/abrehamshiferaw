import React from 'react';
import { ArrowUpRight, Sparkles, Terminal, Code2, Heart, ShieldCheck, FileText } from 'lucide-react';
import { GithubIcon } from './Icons';

interface HeroProps {
  onExploreProjects: () => void;
  onOpenTools: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreProjects, onOpenTools }) => {
  const baseUrl = import.meta.env.BASE_URL.endsWith('/')
    ? import.meta.env.BASE_URL
    : `${import.meta.env.BASE_URL}/`;
  return (
    <section className="relative pt-12 pb-14 overflow-hidden border-b border-neutral-900">
      {/* Background subtle glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-gradient-to-tr from-amber-500/10 via-emerald-500/10 to-transparent blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        <div className="flex flex-col lg:flex-row gap-8 lg:items-center justify-between">
          <div className="max-w-2xl">
            {/* Status chip */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-mono text-neutral-300 mb-5">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              <span>Full-Stack &amp; AI Engineer &bull; Open Source Creator</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-neutral-100 tracking-tight leading-tight">
              Building AI developer tools &amp;{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-300 to-emerald-400">
                culturally useful
              </span>{' '}
              open source.
            </h1>

            <p className="mt-4 text-base sm:text-lg text-neutral-300 leading-relaxed">
              I build practical <strong className="text-neutral-100 font-semibold">AI developer tools</strong>,{' '}
              <strong className="text-neutral-100 font-semibold">TypeScript/JavaScript libraries</strong>,{' '}
              mobile applications, SaaS products, backend APIs, and open-source software celebrating Ethiopian heritage.
            </p>

            {/* Quick action buttons */}
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <a
                href={`${baseUrl}docs/Abreham_Shiferaw_Senior_AI_FullStack_Engineer_CV.pdf`}
                download="Abreham_Shiferaw_Senior_AI_FullStack_Engineer_CV.pdf"
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-bold text-sm flex items-center gap-2 transition shadow-lg shadow-sky-500/20 active:scale-95"
              >
                <FileText className="w-4 h-4" />
                <span>Download CV (PDF)</span>
              </a>

              <button
                onClick={onExploreProjects}
                className="px-5 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-neutral-950 font-bold text-sm flex items-center gap-2 transition shadow-lg shadow-amber-400/20 active:scale-95"
              >
                <Sparkles className="w-4 h-4" />
                Featured Projects
              </button>

              <button
                onClick={onOpenTools}
                className="px-5 py-2.5 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-neutral-200 border border-neutral-700 font-medium text-sm flex items-center gap-2 transition active:scale-95"
              >
                <Code2 className="w-4 h-4 text-emerald-400" />
                Live Interactive Tools
              </button>

              <a
                href="https://github.com/abrehamshiferaw"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-xl bg-neutral-900/60 hover:bg-neutral-800 text-neutral-300 border border-neutral-800 font-medium text-sm flex items-center gap-2 transition"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-neutral-500" />
              </a>
            </div>
          </div>

          {/* Quick Stats / Bio Badge Card */}
          <div className="w-full lg:w-80 bg-neutral-900/70 border border-neutral-800 rounded-2xl p-5 backdrop-blur-sm shadow-xl">
            <div className="flex items-center justify-between pb-4 border-b border-neutral-800">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-amber-500 to-emerald-500 p-0.5">
                  <div className="w-full h-full bg-neutral-950 rounded-full flex items-center justify-center font-bold text-amber-400 text-sm">
                    AS
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-sm text-neutral-100">Abreham Shiferaw</h3>
                  <p className="text-xs text-neutral-400">@abrehamshiferaw</p>
                </div>
              </div>
              <span className="text-xs px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                Active
              </span>
            </div>

            <div className="mt-4 space-y-3 text-xs">
              <div className="flex items-center justify-between">
                <span className="text-neutral-400">Focus</span>
                <span className="text-neutral-200 font-medium">AI SDKs &bull; Full-Stack &bull; Ge'ez</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-neutral-400">Primary Languages</span>
                <span className="text-neutral-200 font-mono">TS, JS, Python, Dart</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-neutral-400">Open Source</span>
                <span className="text-amber-400 font-medium">Toka, Calendar, Ge'ez, Mini App</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-neutral-400">Sponsorship</span>
                <a
                  href="https://github.com/sponsors/abrehamshiferaw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-400 hover:text-pink-300 font-medium flex items-center gap-1"
                >
                  <Heart className="w-3 h-3 fill-pink-500" />
                  GitHub Sponsors
                </a>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-neutral-800 text-center">
              <p className="text-[11px] text-neutral-400 flex items-center justify-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                Verified GitHub Profile Applet
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
