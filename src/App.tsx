import React, { useState, useRef } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { FeaturedProjects } from './components/FeaturedProjects';
import { TokaDemo } from './components/TokaDemo';
import { EthiopianCalendarDemo } from './components/EthiopianCalendarDemo';
import { GeezConverterDemo } from './components/GeezConverterDemo';
import { TelegramMiniAppDemo } from './components/TelegramMiniAppDemo';
import { TechnicalFocus } from './components/TechnicalFocus';
import { SponsorSection } from './components/SponsorSection';
import { TerminalReadme } from './components/TerminalReadme';
import { Footer } from './components/Footer';
import { Cpu, Calendar, Hash, Smartphone, Sparkles, Code2 } from 'lucide-react';

export const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('projects');
  const [selectedDemo, setSelectedDemo] = useState<string>('toka');

  const toolsSectionRef = useRef<HTMLDivElement>(null);
  const projectsSectionRef = useRef<HTMLDivElement>(null);
  const skillsSectionRef = useRef<HTMLDivElement>(null);
  const sponsorSectionRef = useRef<HTMLDivElement>(null);

  const handleNavClick = (tab: string) => {
    setActiveTab(tab);
    if (tab === 'projects') {
      projectsSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
    } else if (tab === 'interactive') {
      toolsSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
    } else if (tab === 'skills') {
      skillsSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
    } else if (tab === 'sponsor') {
      sponsorSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectProjectFromCards = (projectId: string) => {
    setSelectedDemo(projectId);
    toolsSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col font-sans selection:bg-amber-500/20 selection:text-amber-300">
      {/* Top sticky navigation */}
      <Header activeTab={activeTab} setActiveTab={handleNavClick} />

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onExploreProjects={() => handleNavClick('projects')}
          onOpenTools={() => handleNavClick('interactive')}
        />

        {/* Featured Projects Grid */}
        <div ref={projectsSectionRef}>
          <FeaturedProjects
            selectedProject={selectedDemo}
            onSelectProject={handleSelectProjectFromCards}
          />
        </div>

        {/* Live Interactive Demos Section */}
        <section ref={toolsSectionRef} className="py-14 border-b border-neutral-900 bg-neutral-950/60 relative">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-semibold block mb-1 flex items-center gap-1.5">
                  <Code2 className="w-4 h-4" />
                  Live Developer Playground
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-100">
                  Interactive Open-Source Tools
                </h2>
              </div>
              <p className="text-xs text-neutral-400 max-w-sm">
                Real in-browser engines: test token economics, convert Ethiopian dates, translate Ge'ez numerals, or simulate a Telegram Mini App.
              </p>
            </div>

            {/* Interactive Tool Switcher Tabs */}
            <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-6 scrollbar-none">
              {[
                { id: 'toka', label: 'Toka AI Cost Optimizer', icon: Cpu, badge: 'SDK' },
                { id: 'calendar', label: 'Ethiopian Calendar Engine', icon: Calendar, badge: '13 Months' },
                { id: 'geez', label: 'Ge\'ez Numerals Converter', icon: Hash, badge: 'npm' },
                { id: 'telegram', label: 'Telegram Mini App', icon: Smartphone, badge: 'Next.js' },
              ].map((tool) => {
                const Icon = tool.icon;
                const isSelected = selectedDemo === tool.id;
                return (
                  <button
                    key={tool.id}
                    onClick={() => setSelectedDemo(tool.id)}
                    className={`px-4 py-2.5 rounded-xl border text-xs font-medium flex items-center gap-2.5 transition shrink-0 ${
                      isSelected
                        ? 'bg-neutral-800 text-neutral-100 border-amber-400/80 shadow-md ring-1 ring-amber-400/30'
                        : 'bg-neutral-900/60 text-neutral-400 border-neutral-800 hover:text-neutral-200 hover:bg-neutral-800/60'
                    }`}
                  >
                    <Icon className={`w-4 h-4 ${isSelected ? 'text-amber-400' : 'text-neutral-500'}`} />
                    <span className="font-semibold">{tool.label}</span>
                    <span className={`text-[10px] px-1.5 py-0.5 rounded font-mono ${
                      isSelected ? 'bg-amber-400/20 text-amber-300' : 'bg-neutral-800 text-neutral-500'
                    }`}>
                      {tool.badge}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Render Selected Tool */}
            <div>
              {selectedDemo === 'toka' && <TokaDemo />}
              {selectedDemo === 'calendar' && <EthiopianCalendarDemo />}
              {selectedDemo === 'geez' && <GeezConverterDemo />}
              {selectedDemo === 'telegram' && <TelegramMiniAppDemo />}
            </div>
          </div>
        </section>

        {/* Technical Focus & Competencies */}
        <div ref={skillsSectionRef}>
          <TechnicalFocus />
        </div>

        {/* Sponsor Callout Section */}
        <div ref={sponsorSectionRef}>
          <SponsorSection />
        </div>

        {/* Interactive CLI Terminal & Raw README */}
        <TerminalReadme />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};
