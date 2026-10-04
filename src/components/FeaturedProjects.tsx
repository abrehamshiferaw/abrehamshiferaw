import React from 'react';
import { ExternalLink, Heart, Sparkles, Terminal, Calendar, Hash, ArrowRight, Smartphone, Cpu } from 'lucide-react';

interface FeaturedProjectsProps {
  selectedProject: string;
  onSelectProject: (projectId: string) => void;
}

export const FeaturedProjects: React.FC<FeaturedProjectsProps> = ({
  selectedProject,
  onSelectProject,
}) => {
  const projects = [
    {
      id: 'toka',
      title: 'Toka',
      tagline: 'AI cost optimization SDK for developers',
      description:
        'Track LLM token usage, estimate API costs in real time, enforce budgets, cache repeated requests, and optimize model selection for OpenAI and other AI applications.',
      icon: Cpu,
      color: 'from-amber-500 to-yellow-500',
      tag: 'AI & Developer Tooling',
      githubUrl: 'https://github.com/abrehamshiferaw/toka',
      sponsorUrl: 'https://github.com/sponsors/abrehamshiferaw',
      stats: 'npm package &bull; TypeScript SDK &bull; Caching &bull; Cost controls',
    },
    {
      id: 'telegram',
      title: 'Telegram Mini App',
      tagline: 'Next.js Telegram Mini App foundation',
      description:
        'A Next.js-based Telegram Mini App foundation for building fast, mobile-friendly Telegram Web Apps (TWA) and bot-connected product experiences.',
      icon: Smartphone,
      color: 'from-sky-500 to-blue-500',
      tag: 'Web & Mobile Apps',
      githubUrl: 'https://github.com/abrehamshiferaw/telegram-mini-app',
      sponsorUrl: 'https://github.com/sponsors/abrehamshiferaw',
      stats: 'Next.js App Router &bull; Telegram SDK &bull; HMAC Auth',
    },
    {
      id: 'calendar',
      title: 'Ethiopian Calendar',
      tagline: 'Open-source Ethiopian calendar engine',
      description:
        'An open-source Ethiopian calendar engine for Ethiopian–Gregorian date conversion, Amharic localization, holidays, ecclesiastical calculations, and developer integrations.',
      icon: Calendar,
      color: 'from-emerald-500 to-teal-500',
      tag: 'Cultural Software & Localization',
      githubUrl: 'https://github.com/abrehamshiferaw/Ethiopian-calendar',
      sponsorUrl: 'https://github.com/sponsors/abrehamshiferaw',
      stats: 'JDN Algorithm &bull; 13 Months &bull; Holiday Engine',
    },
    {
      id: 'geez',
      title: 'Ge\'ez Numerals Converter',
      tagline: 'Lightweight JavaScript / npm library',
      description:
        'A lightweight JavaScript/npm library for converting between Arabic numerals and Ge\'ez numerals, supporting developers building Ethiopian and multilingual software.',
      icon: Hash,
      color: 'from-yellow-400 to-amber-600',
      tag: 'npm Library & Localization',
      githubUrl: 'https://github.com/abrehamshiferaw/geez-numerals-converter',
      sponsorUrl: 'https://github.com/sponsors/abrehamshiferaw',
      stats: 'Zero-deps &bull; Bidirectional &bull; 100k+ support',
    },
  ];

  return (
    <section id="projects-section" className="py-12 border-b border-neutral-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-amber-400 font-semibold block mb-1">
              Open Source Portfolio
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-100">
              Featured Open-Source Projects
            </h2>
          </div>
          <p className="text-sm text-neutral-400 max-w-md">
            Click any project below to activate its live interactive simulator right on this page.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {projects.map((project) => {
            const Icon = project.icon;
            const isSelected = selectedProject === project.id;
            return (
              <div
                key={project.id}
                onClick={() => onSelectProject(project.id)}
                className={`group cursor-pointer rounded-2xl p-6 transition-all duration-200 border flex flex-col justify-between ${
                  isSelected
                    ? 'bg-neutral-900/90 border-amber-400/80 ring-1 ring-amber-400/50 shadow-xl shadow-amber-400/5'
                    : 'bg-neutral-950/70 border-neutral-800/80 hover:border-neutral-700 hover:bg-neutral-900/40'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-300">
                      {project.tag}
                    </span>
                    <div className="flex items-center gap-1.5" onClick={(e) => e.stopPropagation()}>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded-lg text-neutral-400 hover:text-neutral-100 hover:bg-neutral-800 transition"
                        title="GitHub Repository"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                      <a
                        href={project.sponsorUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded-lg text-pink-400 hover:text-pink-300 hover:bg-pink-500/10 transition"
                        title="Sponsor Project"
                      >
                        <Heart className="w-3.5 h-3.5 fill-pink-500/40" />
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className={`w-11 h-11 rounded-xl bg-gradient-to-tr ${project.color} p-0.5 shrink-0 shadow-md`}>
                      <div className="w-full h-full bg-neutral-950 rounded-[10px] flex items-center justify-center text-neutral-100">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-neutral-100 group-hover:text-amber-300 transition-colors flex items-center gap-1.5">
                        <span>{project.title}</span>
                      </h3>
                      <p className="text-xs font-medium text-neutral-400 mt-0.5">
                        {project.tagline}
                      </p>
                    </div>
                  </div>

                  <p className="mt-4 text-xs text-neutral-300 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-neutral-900 flex items-center justify-between text-xs">
                  <span
                    dangerouslySetInnerHTML={{ __html: project.stats }}
                    className="text-[11px] text-neutral-400 font-mono"
                  />
                  <span className={`inline-flex items-center gap-1 text-xs font-semibold ${
                    isSelected ? 'text-amber-400' : 'text-neutral-400 group-hover:text-neutral-200'
                  }`}>
                    {isSelected ? 'Live Simulator Active' : 'Launch Demo'}
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
