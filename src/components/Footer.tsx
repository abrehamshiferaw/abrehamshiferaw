import React from 'react';
import { Mail, Heart, ArrowUp, Star } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-neutral-950 border-t border-neutral-900 py-12 text-xs text-neutral-400">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-neutral-900">
          {/* Brand & Bio */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-amber-400 flex items-center justify-center font-bold text-neutral-950 text-xs">
                AS
              </div>
              <span className="font-bold text-sm text-neutral-100">Abreham Shiferaw</span>
            </div>
            <p className="text-neutral-400 text-xs max-w-md leading-relaxed">
              Full-Stack &amp; AI Engineer building practical developer tools, open-source libraries, SaaS products, and culturally useful software.
            </p>
            <div className="pt-2 flex items-center gap-3">
              <a
                href="https://github.com/abrehamshiferaw"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-neutral-100 transition"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/abrishwon"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-neutral-100 transition"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href="mailto:abrishwon9@gmail.com"
                className="text-neutral-400 hover:text-neutral-100 transition"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href="https://github.com/sponsors/abrehamshiferaw"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-400 hover:text-pink-300 transition"
              >
                <Heart className="w-4 h-4 fill-pink-500/40" />
              </a>
            </div>
          </div>

          {/* Featured Projects Links */}
          <div className="space-y-2">
            <h4 className="font-bold text-neutral-200 text-xs uppercase tracking-wider">
              Open Source
            </h4>
            <ul className="space-y-1.5">
              <li>
                <a
                  href="https://github.com/abrehamshiferaw/toka"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-300 transition flex items-center gap-1"
                >
                  <span>Toka (AI Cost SDK)</span>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/abrehamshiferaw/telegram-mini-app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-300 transition"
                >
                  Telegram Mini App
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/abrehamshiferaw/Ethiopian-calendar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-300 transition"
                >
                  Ethiopian Calendar Engine
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/abrehamshiferaw/geez-numerals-converter"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-300 transition"
                >
                  Ge'ez Numerals Converter
                </a>
              </li>
            </ul>
          </div>

          {/* Community & Sponsorship */}
          <div className="space-y-2">
            <h4 className="font-bold text-neutral-200 text-xs uppercase tracking-wider">
              Community
            </h4>
            <ul className="space-y-1.5">
              <li>
                <a
                  href="https://github.com/sponsors/abrehamshiferaw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-400 hover:text-pink-300 transition flex items-center gap-1"
                >
                  <Heart className="w-3 h-3 fill-pink-500" />
                  GitHub Sponsors
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/abrehamshiferaw?tab=repositories"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-neutral-200 transition"
                >
                  All GitHub Repositories
                </a>
              </li>
              <li>
                <a
                  href="mailto:abrishwon9@gmail.com"
                  className="hover:text-neutral-200 transition"
                >
                  abrishwon9@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-neutral-400">
          <p>
            &copy; {new Date().getFullYear()} Abreham Shiferaw. Built with open source and cultural software passion.
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-neutral-400 hover:text-amber-400 transition"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
