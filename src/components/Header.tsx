import React from 'react';
import { Mail, Heart, Sparkles, Code2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ activeTab, setActiveTab }) => {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-neutral-950/80 border-b border-neutral-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-amber-500 via-yellow-400 to-emerald-400 flex items-center justify-center shadow-lg shadow-amber-500/10 text-neutral-950 font-extrabold text-sm tracking-tighter">
            AS
          </div>
          <div>
            <a href="#" className="font-bold text-neutral-100 hover:text-amber-400 transition-colors flex items-center gap-1.5 text-base">
              Abreham Shiferaw
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" title="Available for projects"></span>
            </a>
            <p className="text-xs text-neutral-400 hidden sm:block">Full-Stack & AI Engineer</p>
          </div>
        </div>

        {/* Navigation Tabs */}
        <nav className="hidden md:flex items-center gap-1 bg-neutral-900/90 p-1 rounded-xl border border-neutral-800 text-xs font-medium">
          {[
            { id: 'projects', label: 'Featured Projects', icon: Sparkles },
            { id: 'interactive', label: 'Live Tools', icon: Code2 },
            { id: 'docs', label: 'CV & Docs', icon: null },
            { id: 'skills', label: 'Technical Stack', icon: null },
            { id: 'sponsor', label: 'Sponsor', icon: Heart },
          ].map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 ${
                  isActive
                    ? 'bg-neutral-800 text-amber-300 font-semibold shadow-sm'
                    : 'text-neutral-400 hover:text-neutral-200 hover:bg-neutral-800/50'
                }`}
              >
                {Icon && <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-amber-400' : ''}`} />}
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Social Links & Sponsor Action */}
        <div className="flex items-center gap-2">
          <a
            href="https://github.com/abrehamshiferaw"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="p-2 rounded-lg text-neutral-400 hover:text-neutral-100 hover:bg-neutral-900 border border-transparent hover:border-neutral-800 transition"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/abrishwon"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="p-2 rounded-lg text-neutral-400 hover:text-neutral-100 hover:bg-neutral-900 border border-transparent hover:border-neutral-800 transition"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
          <a
            href="mailto:abrishwon9@gmail.com"
            aria-label="Email Abreham"
            className="p-2 rounded-lg text-neutral-400 hover:text-neutral-100 hover:bg-neutral-900 border border-transparent hover:border-neutral-800 transition"
          >
            <Mail className="w-4 h-4" />
          </a>
          <a
            href="https://github.com/sponsors/abrehamshiferaw"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-1 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-pink-500/10 hover:bg-pink-500/20 text-pink-400 hover:text-pink-300 border border-pink-500/30 text-xs font-semibold transition"
          >
            <Heart className="w-3.5 h-3.5 fill-pink-500/50" />
            <span>Sponsor</span>
          </a>
        </div>
      </div>
    </header>
  );
};
