import React, { useState } from 'react';
import {
  convertGregorianToEthiopian,
  convertEthiopianToGregorian,
  ETHIOPIAN_MONTHS,
  ETHIOPIAN_HOLIDAYS,
  EthiopianDate,
} from '../utils/ethiopianCalendar';
import { Calendar, RefreshCw, ExternalLink, Heart, Sparkles, Clock } from 'lucide-react';

export const EthiopianCalendarDemo: React.FC = () => {
  const [gregDateInput, setGregDateInput] = useState<string>(
    new Date().toISOString().split('T')[0]
  );

  const [ethYearInput, setEthYearInput] = useState<number>(2017);
  const [ethMonthInput, setEthMonthInput] = useState<number>(1);
  const [ethDayInput, setEthDayInput] = useState<number>(1);

  // Current today calculation
  const todayEth = convertGregorianToEthiopian(new Date());

  // Converted result from Gregorian input
  const convertedFromGreg: EthiopianDate = React.useMemo(() => {
    const d = new Date(gregDateInput);
    if (isNaN(d.getTime())) return todayEth;
    return convertGregorianToEthiopian(d);
  }, [gregDateInput]);

  // Converted result from Ethiopian input
  const convertedFromEth = React.useMemo(() => {
    return convertEthiopianToGregorian(ethYearInput, ethMonthInput, ethDayInput);
  }, [ethYearInput, ethMonthInput, ethDayInput]);

  return (
    <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-5 sm:p-7 shadow-xl">
      {/* Title & Info */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-neutral-800">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 rounded text-[11px] font-mono uppercase tracking-wider bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
              Open Source Engine
            </span>
            <span className="text-xs text-neutral-400">Date Conversion &amp; Holidays</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-neutral-100 mt-1 flex items-center gap-2">
            <span>Ethiopian Calendar — 13 Months of Sunshine</span>
          </h3>
          <p className="text-sm text-neutral-400 mt-1 max-w-xl">
            An open-source Ethiopian calendar engine for Ethiopian–Gregorian date conversion, Amharic localization, holidays, and ecclesiastical calculations.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <a
            href="https://github.com/abrehamshiferaw/Ethiopian-calendar"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-xs font-semibold text-neutral-200 border border-neutral-700 transition"
          >
            <span>View Calendar on GitHub</span>
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

      {/* Live Today Badge */}
      <div className="mt-6 p-4 rounded-2xl bg-gradient-to-r from-emerald-950/40 via-neutral-900 to-amber-950/40 border border-emerald-500/30 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-3.5">
          <div className="w-12 h-12 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
            <Calendar className="w-6 h-6" />
          </div>
          <div>
            <div className="text-[11px] uppercase tracking-wider text-emerald-400 font-bold flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" />
              Live Ethiopian Date Today
            </div>
            <div className="text-xl sm:text-2xl font-extrabold text-neutral-100 flex items-baseline gap-2">
              <span>{todayEth.day} {todayEth.monthNameEn} {todayEth.year}</span>
              <span className="text-emerald-400 font-normal text-lg">({todayEth.monthNameAm} {todayEth.day}፣ {todayEth.year})</span>
            </div>
            <div className="text-xs text-neutral-400">
              {todayEth.dayOfWeekEn} ({todayEth.dayOfWeekAm}) &bull; {todayEth.isLeapYear ? 'Leap Year (ዘመነ ዮሐንስ)' : 'Regular Year'}
            </div>
          </div>
        </div>

        <div className="text-xs text-neutral-400 border-t md:border-t-0 md:border-l border-neutral-800 pt-3 md:pt-0 md:pl-4">
          <span className="block font-semibold text-neutral-300">Why 13 Months?</span>
          <span>12 months of 30 days each + Pagume (5 or 6 days). The calendar is ~7-8 years behind Gregorian.</span>
        </div>
      </div>

      {/* Dual Converter Grids */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Gregorian to Ethiopian */}
        <div className="bg-neutral-950 border border-neutral-800 rounded-xl p-5">
          <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-300 mb-3 flex items-center justify-between">
            <span>Gregorian &rarr; Ethiopian</span>
            <span className="text-neutral-500 text-[10px]">Pick any date</span>
          </h4>

          <div className="space-y-4">
            <div>
              <label className="block text-xs text-neutral-400 mb-1">Gregorian Date</label>
              <input
                type="date"
                value={gregDateInput}
                onChange={(e) => setGregDateInput(e.target.value)}
                className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-3 py-2 text-sm text-neutral-100 focus:outline-none focus:border-amber-400 font-mono"
              />
            </div>

            <div className="p-4 rounded-xl bg-neutral-900/80 border border-neutral-800">
              <span className="text-xs text-neutral-400 block mb-1">Ethiopian Equivalent</span>
              <div className="text-lg font-bold text-amber-300">
                {convertedFromGreg.day} {convertedFromGreg.monthNameEn} {convertedFromGreg.year}
              </div>
              <div className="text-sm text-neutral-300 mt-0.5">
                {convertedFromGreg.monthNameAm} {convertedFromGreg.day} ቀን {convertedFromGreg.year} ዓ.ም
              </div>
              <div className="text-xs text-neutral-400 mt-1">
                {convertedFromGreg.dayOfWeekEn} ({convertedFromGreg.dayOfWeekAm})
              </div>
            </div>
          </div>
        </div>

        {/* Ethiopian to Gregorian */}
        <div className="bg-neutral-950 border border-neutral-800 rounded-xl p-5">
          <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-300 mb-3 flex items-center justify-between">
            <span>Ethiopian &rarr; Gregorian</span>
            <span className="text-neutral-500 text-[10px]">Select Ethiopic date</span>
          </h4>

          <div className="space-y-4">
            <div className="grid grid-cols-3 gap-2">
              <div>
                <label className="block text-xs text-neutral-400 mb-1">Day (1-30)</label>
                <input
                  type="number"
                  min={1}
                  max={ethMonthInput === 13 ? 6 : 30}
                  value={ethDayInput}
                  onChange={(e) => setEthDayInput(Math.min(30, Math.max(1, Number(e.target.value))))}
                  className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-3 py-2 text-sm text-neutral-100 focus:outline-none focus:border-emerald-400 font-mono"
                />
              </div>

              <div>
                <label className="block text-xs text-neutral-400 mb-1">Month</label>
                <select
                  value={ethMonthInput}
                  onChange={(e) => setEthMonthInput(Number(e.target.value))}
                  className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-2 py-2 text-xs text-neutral-100 focus:outline-none focus:border-emerald-400"
                >
                  {ETHIOPIAN_MONTHS.map((m) => (
                    <option key={m.id} value={m.id}>
                      {m.en} ({m.am})
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs text-neutral-400 mb-1">Year (ዓ.ም)</label>
                <input
                  type="number"
                  min={1900}
                  max={2100}
                  value={ethYearInput}
                  onChange={(e) => setEthYearInput(Number(e.target.value))}
                  className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-3 py-2 text-sm text-neutral-100 focus:outline-none focus:border-emerald-400 font-mono"
                />
              </div>
            </div>

            <div className="p-4 rounded-xl bg-neutral-900/80 border border-neutral-800">
              <span className="text-xs text-neutral-400 block mb-1">Gregorian Equivalent</span>
              <div className="text-lg font-bold text-emerald-300">
                {convertedFromEth.dateString}
              </div>
              <div className="text-xs text-neutral-400 mt-1">
                ISO: {convertedFromEth.year}-{String(convertedFromEth.month).padStart(2, '0')}-{String(convertedFromEth.day).padStart(2, '0')}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Ethiopian Holidays */}
      <div className="mt-6 pt-5 border-t border-neutral-800">
        <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-3 flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          Major Ethiopian Holidays &amp; Celebrations Supported
        </h4>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {ETHIOPIAN_HOLIDAYS.map((holiday) => (
            <div
              key={holiday.name}
              className="p-3 rounded-xl bg-neutral-950 border border-neutral-800/80 hover:border-neutral-700 transition"
            >
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-neutral-200">{holiday.name.split(' (')[0]}</span>
                <span className="text-amber-400 font-amharic text-xs">{holiday.amharic}</span>
              </div>
              <div className="text-[11px] text-emerald-400 font-mono mt-1">
                Month {holiday.ethMonth}, Day {holiday.ethDay}
              </div>
              <p className="text-[11px] text-neutral-400 mt-1 line-clamp-2">
                {holiday.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
