import React from 'react';
import { Heart, Coffee, Star, GitPullRequest, ShieldCheck, ExternalLink, ArrowRight } from 'lucide-react';

export const SponsorSection: React.FC = () => {
  return (
    <section className="py-14 border-b border-neutral-900 bg-neutral-950/40 relative overflow-hidden">
      {/* Pink subtle glow */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-pink-500/5 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        <div className="bg-gradient-to-br from-neutral-900 via-neutral-900 to-neutral-950 border border-neutral-800 rounded-3xl p-6 sm:p-10 shadow-2xl">
          <div className="flex flex-col lg:flex-row gap-8 items-start lg:items-center justify-between">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/30 text-xs font-semibold text-pink-400 mb-4">
                <Heart className="w-3.5 h-3.5 fill-pink-500" />
                <span>Support Open Source</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-extrabold text-neutral-100 tracking-tight">
                Fuel continuous open-source maintenance &amp; innovation
              </h2>

              <p className="mt-4 text-sm sm:text-base text-neutral-300 leading-relaxed">
                Your sponsorship directly supports active maintenance, comprehensive documentation, automated test suites, SemVer releases, developer issue triage, and high-impact new features across <strong className="text-neutral-100">Toka</strong>, <strong className="text-neutral-100">Ethiopian Calendar</strong>, <strong className="text-neutral-100">Telegram Mini App</strong>, and <strong className="text-neutral-100">Ge'ez Numerals Converter</strong>.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a
                  href="https://github.com/sponsors/abrehamshiferaw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-xl bg-pink-500 hover:bg-pink-600 text-white font-bold text-sm flex items-center gap-2 shadow-lg shadow-pink-500/25 transition active:scale-95"
                >
                  <Heart className="w-4 h-4 fill-white" />
                  <span>Sponsor on GitHub Sponsors</span>
                  <ExternalLink className="w-3.5 h-3.5 ml-1" />
                </a>

                <a
                  href="https://github.com/abrehamshiferaw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-neutral-200 border border-neutral-700 text-sm font-semibold flex items-center gap-2 transition"
                >
                  <Star className="w-4 h-4 text-amber-400 fill-amber-400/30" />
                  <span>Star Repositories</span>
                </a>
              </div>
            </div>

            {/* Sponsor Impact Card */}
            <div className="w-full lg:w-80 bg-neutral-950/80 border border-neutral-800 rounded-2xl p-5 space-y-3.5">
              <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400">
                What Sponsorship Funds
              </h4>

              <div className="space-y-2.5 text-xs text-neutral-300">
                <div className="flex items-start gap-2.5">
                  <div className="p-1 rounded bg-emerald-500/10 text-emerald-400 mt-0.5">
                    <ShieldCheck className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <strong className="text-neutral-200 block">Reliability &amp; Bug Fixes</strong>
                    <span className="text-[11px] text-neutral-400">Keeping SDKs compatible with newest model API releases</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <div className="p-1 rounded bg-amber-500/10 text-amber-400 mt-0.5">
                    <Coffee className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <strong className="text-neutral-200 block">Documentation &amp; Demos</strong>
                    <span className="text-[11px] text-neutral-400">Interactive playgrounds, copy-paste snippets, and guides</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <div className="p-1 rounded bg-pink-500/10 text-pink-400 mt-0.5">
                    <GitPullRequest className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <strong className="text-neutral-200 block">Cultural Preservation</strong>
                    <span className="text-[11px] text-neutral-400">Expanding open-source tools for Ethiopian languages &amp; systems</span>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-neutral-800 text-center">
                <span className="text-[11px] text-neutral-400">
                  Every sponsor is highlighted in project READMEs!
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
