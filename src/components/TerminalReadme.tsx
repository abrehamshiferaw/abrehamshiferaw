import React, { useState } from 'react';
import { Terminal as TerminalIcon, CornerDownLeft, Copy, Check } from 'lucide-react';
import { toGeez } from '../utils/geez';
import { convertGregorianToEthiopian } from '../utils/ethiopianCalendar';

export const TerminalReadme: React.FC = () => {
  const [inputCommand, setInputCommand] = useState('');
  const [history, setHistory] = useState<Array<{ cmd: string; output: string }>>([
    {
      cmd: 'whoami',
      output: 'Abreham Shiferaw — Full-Stack & AI Engineer based in Ethiopia.\nBuilding AI developer tools, TypeScript/JS packages, and cultural software.',
    },
    {
      cmd: 'list --projects',
      output: '1. Toka (AI cost optimization SDK)\n2. Telegram Mini App (Next.js foundation)\n3. Ethiopian Calendar (Date engine & holidays)\n4. Ge\'ez Numerals Converter (npm library)',
    },
  ]);
  const [copiedRaw, setCopiedRaw] = useState(false);

  const rawReadmeText = `# Abreham Shiferaw — Full-Stack & AI Engineer

I build practical AI developer tools, TypeScript/JavaScript libraries, mobile applications, SaaS products, backend APIs, and culturally useful open-source software.

## Featured open-source projects
- Toka: AI cost optimization SDK for developers
- Telegram Mini App: Next.js-based Telegram Mini App foundation
- Ethiopian Calendar: Open-source Ethiopian calendar engine
- Ge'ez Numerals Converter: Lightweight JS/npm library

## Connect
- GitHub: https://github.com/abrehamshiferaw
- LinkedIn: https://www.linkedin.com/in/abrishwon
- Email: abrishwon9@gmail.com
- Sponsor: https://github.com/sponsors/abrehamshiferaw`;

  const handleCommandSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = inputCommand.trim();
    if (!trimmed) return;

    let output = '';
    const lower = trimmed.toLowerCase();

    if (lower === 'clear') {
      setHistory([]);
      setInputCommand('');
      return;
    } else if (lower === 'help') {
      output = `Available commands:
- whoami : Profile summary
- list : List featured projects
- toka : Toka SDK quick overview
- calendar : Today's Ethiopian calendar date
- geez <number> : Convert number to Ge'ez (e.g. geez 2026)
- contact : Contact links
- cat readme.md : Display raw README
- clear : Clear terminal screen`;
    } else if (lower === 'whoami') {
      output = 'Abreham Shiferaw — Full-Stack & AI Engineer.\nSpecializing in AI Token Economics, Next.js, and Ethiopic software.';
    } else if (lower.startsWith('list')) {
      output = '• toka: AI cost optimization SDK\n• telegram-mini-app: Next.js TWA starter\n• ethiopian-calendar: JDN-based calendar engine\n• geez-numerals-converter: Ethiopic numerals npm package';
    } else if (lower.startsWith('toka')) {
      output = 'Toka v1.2 — Real-time token tracking, prompt caching & cost controls.\nInstall: npm i @toka/sdk\nDocs: https://github.com/abrehamshiferaw/toka';
    } else if (lower.startsWith('calendar')) {
      const eth = convertGregorianToEthiopian(new Date());
      output = `Today in Ethiopia: ${eth.day} ${eth.monthNameEn} ${eth.year} (${eth.monthNameAm} ${eth.day}፣ ${eth.year} ዓ.ም)\nDay: ${eth.dayOfWeekEn} (${eth.dayOfWeekAm})`;
    } else if (lower.startsWith('geez')) {
      const parts = trimmed.split(' ');
      const val = parseInt(parts[1], 10);
      if (isNaN(val)) {
        output = 'Usage: geez <number> (e.g. geez 2026)';
      } else {
        const res = toGeez(val);
        output = `${val} = ${res}`;
      }
    } else if (lower === 'cat readme.md' || lower === 'readme') {
      output = rawReadmeText;
    } else if (lower === 'contact') {
      output = 'Email: abrishwon9@gmail.com\nGitHub: https://github.com/abrehamshiferaw\nLinkedIn: https://www.linkedin.com/in/abrishwon\nSponsor: https://github.com/sponsors/abrehamshiferaw';
    } else {
      output = `zsh: command not found: ${trimmed}. Type 'help' for available commands.`;
    }

    setHistory((prev) => [...prev, { cmd: trimmed, output }]);
    setInputCommand('');
  };

  const handleCopyRaw = () => {
    navigator.clipboard.writeText(rawReadmeText);
    setCopiedRaw(true);
    setTimeout(() => setCopiedRaw(false), 2000);
  };

  return (
    <section className="py-12 border-b border-neutral-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-3">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-amber-400 font-semibold block mb-1">
              Developer Terminal &amp; Raw Source
            </span>
            <h2 className="text-2xl font-bold text-neutral-100 flex items-center gap-2">
              <TerminalIcon className="w-5 h-5 text-amber-400" />
              <span>Interactive CLI &amp; Profile Explorer</span>
            </h2>
          </div>
          <button
            onClick={handleCopyRaw}
            className="px-3 py-1.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-xs font-mono text-neutral-300 flex items-center gap-1.5 transition self-start sm:self-auto"
          >
            {copiedRaw ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-400">Copied README.md!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Copy Raw README.md</span>
              </>
            )}
          </button>
        </div>

        {/* Terminal Window */}
        <div className="bg-neutral-950 border border-neutral-800 rounded-2xl overflow-hidden shadow-2xl font-mono text-xs">
          {/* Terminal Titlebar */}
          <div className="bg-neutral-900/90 px-4 py-3 flex items-center justify-between border-b border-neutral-800">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block"></span>
              <span className="ml-2 text-neutral-400 text-[11px]">abreham@portfolio: ~/repos/abrehamshiferaw</span>
            </div>
            <span className="text-[10px] text-neutral-500">bash &bull; zsh interactive</span>
          </div>

          {/* Terminal Output Body */}
          <div className="p-4 sm:p-5 space-y-4 max-h-96 overflow-y-auto scrollbar-thin">
            <div className="text-neutral-500 text-[11px]">
              Type <span className="text-amber-400 font-bold">help</span> to view available interactive commands (e.g. <span className="text-neutral-300">geez 2026</span>, <span className="text-neutral-300">calendar</span>, <span className="text-neutral-300">toka</span>).
            </div>

            {history.map((item, index) => (
              <div key={index} className="space-y-1">
                <div className="flex items-center gap-2 text-neutral-300">
                  <span className="text-emerald-400 font-bold">user@abreham-box:~$</span>
                  <span className="text-amber-200">{item.cmd}</span>
                </div>
                <div className="text-neutral-300 whitespace-pre-wrap pl-4 border-l border-neutral-800/80 py-1 leading-relaxed">
                  {item.output}
                </div>
              </div>
            ))}

            {/* Input Line */}
            <form onSubmit={handleCommandSubmit} className="flex items-center gap-2 pt-2">
              <span className="text-emerald-400 font-bold">user@abreham-box:~$</span>
              <input
                type="text"
                value={inputCommand}
                onChange={(e) => setInputCommand(e.target.value)}
                placeholder="type 'help' or command..."
                className="flex-1 bg-transparent border-none text-neutral-100 focus:outline-none font-mono text-xs"
              />
              <button type="submit" className="text-neutral-500 hover:text-neutral-200">
                <CornerDownLeft className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
