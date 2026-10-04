import React, { useState } from 'react';
import { Cpu, Code2, Smartphone, Database, Package, Globe, CheckCircle2 } from 'lucide-react';

interface TechDomain {
  id: string;
  title: string;
  icon: React.ElementType;
  color: string;
  summary: string;
  skills: string[];
  featuredIn: string;
}

const TECH_DOMAINS: TechDomain[] = [
  {
    id: 'ai',
    title: 'AI & LLM Engineering',
    icon: Cpu,
    color: 'from-amber-500/20 to-yellow-500/20 text-amber-400 border-amber-500/30',
    summary: 'Building developer-grade SDKs, cost containment, prompt caching, and intelligent model routing.',
    skills: [
      'AI SDK Development',
      'Token Economics & Cost Controls',
      'Model Routing & Fallbacks',
      'Prompt Caching Architectures',
      'OpenAI / Anthropic / Gemini APIs',
      'Context Window Optimization',
      'Real-time Token Budget Enforcers',
    ],
    featuredIn: 'Toka AI Cost Optimization SDK',
  },
  {
    id: 'languages',
    title: 'Languages',
    icon: Code2,
    color: 'from-blue-500/20 to-indigo-500/20 text-blue-400 border-blue-500/30',
    summary: 'Polyglot systems programming and strictly typed application development.',
    skills: [
      'TypeScript (Strict / Generics)',
      'JavaScript (ESNext / Node.js)',
      'Python (Async / FastAPI / PyTorch)',
      'Dart (Flutter ecosystem)',
      'PHP (Modern backend APIs)',
      'Swift (iOS native experiments)',
    ],
    featuredIn: 'Ge\'ez Converter, Toka, Telegram Mini App',
  },
  {
    id: 'web-mobile',
    title: 'Web & Mobile Platforms',
    icon: Smartphone,
    color: 'from-emerald-500/20 to-teal-500/20 text-emerald-400 border-emerald-500/30',
    summary: 'High-performance web applications, responsive interfaces, and cross-platform mobile apps.',
    skills: [
      'Next.js (App Router, SSR, RSC)',
      'React & React Hooks',
      'Telegram Web Apps (TWA / Mini Apps)',
      'React Native & Expo',
      'Flutter (iOS & Android)',
      'Tailwind CSS & Modern UI Systems',
    ],
    featuredIn: 'Telegram Mini App Foundation',
  },
  {
    id: 'backend',
    title: 'Backend & Data Infrastructure',
    icon: Database,
    color: 'from-purple-500/20 to-violet-500/20 text-purple-400 border-purple-500/30',
    summary: 'Scalable RESTful microservices, fast caching layers, and resilient databases.',
    skills: [
      'REST APIs & Microservices',
      'FastAPI (Python)',
      'PostgreSQL & Complex SQL',
      'Supabase (BaaS, Auth & RLS)',
      'Redis (In-memory caching & queues)',
      'Authentication & RBAC Security',
    ],
    featuredIn: 'Enterprise APIs & Telegram bot servers',
  },
  {
    id: 'opensource',
    title: 'Open Source & Tooling',
    icon: Package,
    color: 'from-pink-500/20 to-rose-500/20 text-pink-400 border-pink-500/30',
    summary: 'Publishing production npm packages with clean APIs, comprehensive tests, and great docs.',
    skills: [
      'npm Package Publishing',
      'Developer Tooling & CLI Design',
      'API Surface Design & DX',
      'Unit & Integration Testing',
      'GitHub Actions & CI/CD',
      'SemVer & Release Workflows',
    ],
    featuredIn: 'geez-numerals-converter, Toka SDK',
  },
  {
    id: 'ethiopian',
    title: 'Ethiopian Technology & Localization',
    icon: Globe,
    color: 'from-yellow-500/20 to-emerald-500/20 text-yellow-400 border-yellow-500/30',
    summary: 'Preserving and digitizing traditional Ethiopic writing, calendars, and numbering systems.',
    skills: [
      'Ethiopian Calendar Calculations',
      'Amharic Localization & Unicode',
      'Ge\'ez Numeral Conversion Algorithms',
      'Ecclesiastical & Holiday Algorithms',
      'Ethiopic Script Typography & Rendering',
    ],
    featuredIn: 'Ethiopian Calendar Engine, Ge\'ez Converter',
  },
];

export const TechnicalFocus: React.FC = () => {
  const [activeDomain, setActiveDomain] = useState<string>('ai');

  const selected = TECH_DOMAINS.find((d) => d.id === activeDomain) || TECH_DOMAINS[0];

  return (
    <section className="py-12 border-b border-neutral-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-amber-400 font-semibold block mb-1">
              Engineering Expertise
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-100">
              Technical Focus &amp; Competencies
            </h2>
          </div>
          <p className="text-sm text-neutral-400 max-w-md">
            Production-tested engineering across full-stack architecture, AI developer tooling, and cultural software.
          </p>
        </div>

        {/* Domain Navigation Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {TECH_DOMAINS.map((domain) => {
            const Icon = domain.icon;
            const isCurrent = domain.id === activeDomain;
            return (
              <button
                key={domain.id}
                onClick={() => setActiveDomain(domain.id)}
                className={`p-3.5 rounded-xl border text-left transition flex flex-col justify-between ${
                  isCurrent
                    ? 'bg-neutral-900 border-amber-400/80 shadow-lg shadow-amber-500/5'
                    : 'bg-neutral-950/60 border-neutral-800/80 hover:border-neutral-700 text-neutral-400 hover:text-neutral-200'
                }`}
              >
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center mb-3 bg-gradient-to-tr ${domain.color} border`}>
                  <Icon className="w-4 h-4" />
                </div>
                <div>
                  <h3 className={`text-xs font-bold ${isCurrent ? 'text-neutral-100' : 'text-neutral-300'}`}>
                    {domain.title}
                  </h3>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Domain Deep Dive */}
        <div className="mt-6 p-6 rounded-2xl bg-neutral-900/60 border border-neutral-800">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-neutral-800">
            <div>
              <h3 className="text-lg font-bold text-neutral-100 flex items-center gap-2">
                <span>{selected.title}</span>
              </h3>
              <p className="text-xs text-neutral-400 mt-0.5">{selected.summary}</p>
            </div>
            <div className="text-xs font-medium text-amber-300 bg-amber-500/10 px-3 py-1.5 rounded-lg border border-amber-500/20 self-start sm:self-auto">
              Applied in: {selected.featuredIn}
            </div>
          </div>

          <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {selected.skills.map((skill) => (
              <div
                key={skill}
                className="flex items-center gap-2.5 p-3 rounded-xl bg-neutral-950/80 border border-neutral-800/80 text-xs text-neutral-200"
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
