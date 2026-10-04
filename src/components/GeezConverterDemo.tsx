import React, { useState } from 'react';
import { toGeez, fromGeez } from '../utils/geez';
import { Copy, Check, ExternalLink, Heart, BookOpen, Hash } from 'lucide-react';

export const GeezConverterDemo: React.FC = () => {
  const [arabicInput, setArabicInput] = useState<string>('2026');
  const [geezInput, setGeezInput] = useState<string>('፳፻፳፮');
  const [copiedGeez, setCopiedGeez] = useState(false);
  const [copiedNpm, setCopiedNpm] = useState(false);

  const convertedGeez = React.useMemo(() => {
    const n = parseInt(arabicInput, 10);
    return isNaN(n) ? '' : toGeez(n);
  }, [arabicInput]);

  const convertedArabic = React.useMemo(() => {
    return fromGeez(geezInput);
  }, [geezInput]);

  const presets = [
    { label: '1', num: 1 },
    { label: '7', num: 7 },
    { label: '10', num: 10 },
    { label: '13 (Months)', num: 13 },
    { label: '100', num: 100 },
    { label: '2017 (Eth Year)', num: 2017 },
    { label: '2026 (Current)', num: 2026 },
    { label: '10,000', num: 10000 },
  ];

  const handleCopyGeez = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedGeez(true);
    setTimeout(() => setCopiedGeez(false), 2000);
  };

  const handleCopyNpm = () => {
    navigator.clipboard.writeText('npm install geez-numerals-converter');
    setCopiedNpm(true);
    setTimeout(() => setCopiedNpm(false), 2000);
  };

  return (
    <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-5 sm:p-7 shadow-xl">
      {/* Title & Info */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-neutral-800">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 rounded text-[11px] font-mono uppercase tracking-wider bg-yellow-500/20 text-yellow-300 border border-yellow-500/30">
              npm library
            </span>
            <span className="text-xs text-neutral-400">Ethiopic Number System</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-neutral-100 mt-1 flex items-center gap-2">
            <span>Ge'ez Numerals Converter (ግዕዝ ቁጥሮች)</span>
          </h3>
          <p className="text-sm text-neutral-400 mt-1 max-w-xl">
            A lightweight JavaScript/npm library for converting between Arabic numerals and traditional Ge'ez numerals, supporting Ethiopian and multilingual software.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <a
            href="https://github.com/abrehamshiferaw/geez-numerals-converter"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-xs font-semibold text-neutral-200 border border-neutral-700 transition"
          >
            <span>View npm/GitHub</span>
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

      {/* Quick npm command bar */}
      <div className="mt-5 p-3 rounded-xl bg-neutral-950 border border-neutral-800 flex items-center justify-between font-mono text-xs">
        <div className="flex items-center gap-2 overflow-x-auto text-neutral-300">
          <span className="text-amber-400 font-bold">$</span>
          <span>npm install geez-numerals-converter</span>
        </div>
        <button
          onClick={handleCopyNpm}
          className="ml-3 px-2.5 py-1 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-200 text-xs flex items-center gap-1.5 transition shrink-0"
        >
          {copiedNpm ? (
            <>
              <Check className="w-3.5 h-3.5 text-emerald-400" />
              <span className="text-emerald-400 font-sans">Copied!</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5" />
              <span className="font-sans">Copy</span>
            </>
          )}
        </button>
      </div>

      {/* Dual Live Converter */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Arabic -> Ge'ez */}
        <div className="bg-neutral-950 border border-neutral-800 rounded-xl p-5 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs font-bold uppercase tracking-wider text-neutral-300 flex items-center gap-1.5">
                <Hash className="w-3.5 h-3.5 text-amber-400" />
                Arabic Numeral &rarr; Ge'ez
              </label>
              <span className="text-[10px] text-neutral-500">e.g. 1 to 10,000+</span>
            </div>

            <input
              type="number"
              min="1"
              max="9999999"
              value={arabicInput}
              onChange={(e) => setArabicInput(e.target.value)}
              placeholder="Enter number..."
              className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-2.5 text-lg font-mono text-neutral-100 focus:outline-none focus:border-amber-400"
            />

            {/* Quick Presets */}
            <div className="mt-3 flex flex-wrap gap-1.5">
              <span className="text-[10px] text-neutral-400 mr-1 self-center">Presets:</span>
              {presets.map((p) => (
                <button
                  key={p.label}
                  onClick={() => setArabicInput(String(p.num))}
                  className="px-2 py-0.5 rounded bg-neutral-800 hover:bg-neutral-700 text-[11px] font-mono text-neutral-300 transition"
                >
                  {p.label}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-5 p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 relative">
            <span className="text-xs text-amber-400 font-semibold block mb-1">
              Ge'ez Numeral Output
            </span>
            <div className="text-3xl sm:text-4xl font-extrabold text-amber-200 tracking-wider font-mono">
              {convertedGeez || '—'}
            </div>
            {convertedGeez && (
              <button
                onClick={() => handleCopyGeez(convertedGeez)}
                className="absolute top-3 right-3 p-2 rounded-lg bg-neutral-900/80 hover:bg-neutral-900 text-neutral-300 hover:text-amber-300 transition"
                title="Copy Ge'ez characters"
              >
                {copiedGeez ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            )}
          </div>
        </div>

        {/* Ge'ez -> Arabic */}
        <div className="bg-neutral-950 border border-neutral-800 rounded-xl p-5 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs font-bold uppercase tracking-wider text-neutral-300 flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5 text-emerald-400" />
                Ge'ez Numeral &rarr; Arabic
              </label>
              <span className="text-[10px] text-neutral-500">Paste or type Ge'ez</span>
            </div>

            <input
              type="text"
              value={geezInput}
              onChange={(e) => setGeezInput(e.target.value)}
              placeholder="Paste Ge'ez numerals (e.g. ፳፻፳፮)..."
              className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-2.5 text-lg font-mono text-neutral-100 focus:outline-none focus:border-emerald-400"
            />

            {/* Quick Ge'ez key buttons */}
            <div className="mt-3 flex flex-wrap gap-1">
              {['፩', '፪', '፫', '፬', '፭', '፲', '፳', '፻', '፼'].map((symbol) => (
                <button
                  key={symbol}
                  onClick={() => setGeezInput((prev) => prev + symbol)}
                  className="w-7 h-7 rounded bg-neutral-800 hover:bg-neutral-700 text-xs font-bold text-neutral-200 transition"
                >
                  {symbol}
                </button>
              ))}
              <button
                onClick={() => setGeezInput('')}
                className="px-2 h-7 rounded bg-neutral-800 hover:bg-neutral-700 text-[10px] text-neutral-400 transition"
              >
                Clear
              </button>
            </div>
          </div>

          <div className="mt-5 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
            <span className="text-xs text-emerald-400 font-semibold block mb-1">
              Arabic Integer Output
            </span>
            <div className="text-3xl sm:text-4xl font-extrabold text-emerald-200 font-mono">
              {convertedArabic !== null ? convertedArabic.toLocaleString() : 'Invalid Ge\'ez String'}
            </div>
          </div>
        </div>
      </div>

      {/* Ge'ez Digits Reference Table */}
      <div className="mt-6 pt-5 border-t border-neutral-800">
        <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-3">
          Ethiopic Numeral Reference Reference
        </h4>
        <div className="grid grid-cols-5 sm:grid-cols-10 gap-2 text-center text-xs font-mono">
          {[
            { a: '1', g: '፩' },
            { a: '2', g: '፪' },
            { a: '3', g: '፫' },
            { a: '4', g: '፬' },
            { a: '5', g: '፭' },
            { a: '6', g: '፮' },
            { a: '7', g: '፯' },
            { a: '8', g: '፰' },
            { a: '9', g: '፱' },
            { a: '10', g: '፲' },
            { a: '20', g: '፳' },
            { a: '30', g: '፴' },
            { a: '40', g: '፵' },
            { a: '50', g: '፶' },
            { a: '60', g: '፷' },
            { a: '70', g: '፸' },
            { a: '80', g: '፹' },
            { a: '90', g: '፺' },
            { a: '100', g: '፻' },
            { a: '10k', g: '፼' },
          ].map((item) => (
            <div
              key={item.a}
              onClick={() => setArabicInput(item.a === '10k' ? '10000' : item.a)}
              className="p-2 rounded-lg bg-neutral-950 border border-neutral-800/80 hover:border-amber-400/50 cursor-pointer transition"
            >
              <div className="text-amber-300 font-bold text-sm">{item.g}</div>
              <div className="text-[10px] text-neutral-400 mt-0.5">{item.a}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
