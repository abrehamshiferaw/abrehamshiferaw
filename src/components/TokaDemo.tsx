import React, { useState, useMemo } from 'react';
import { AI_MODELS, calculateTokaOptimization } from '../utils/tokaCalculator';
import { DollarSign, Cpu, Zap, Copy, Check, ExternalLink, Heart, Sparkles, Layers } from 'lucide-react';

export const TokaDemo: React.FC = () => {
  const [modelId, setModelId] = useState('gpt-4o');
  const [dailyRequests, setDailyRequests] = useState(2500);
  const [avgInputTokens, setAvgInputTokens] = useState(800);
  const [avgOutputTokens, setAvgOutputTokens] = useState(300);
  const [cacheHitRatio, setCacheHitRatio] = useState(0.45); // 45% caching
  const [monthlyBudget, setMonthlyBudget] = useState(250);
  const [enableRouting, setEnableRouting] = useState(true);
  const [copiedSnippet, setCopiedSnippet] = useState(false);

  const result = useMemo(() => {
    return calculateTokaOptimization({
      modelId,
      dailyRequests,
      avgInputTokens,
      avgOutputTokens,
      cacheHitRatio,
      monthlyBudget,
      enableRoutingOptimization: enableRouting,
    });
  }, [modelId, dailyRequests, avgInputTokens, avgOutputTokens, cacheHitRatio, monthlyBudget, enableRouting]);

  const selectedModel = AI_MODELS.find((m) => m.id === modelId) || AI_MODELS[0];

  const codeSnippet = `import { TokaTracker } from '@toka/sdk';

// Initialize Toka client with budget thresholds & caching
const toka = new TokaTracker({
  apiKey: process.env.TOKA_API_KEY,
  budget: {
    monthlyLimitUSD: ${monthlyBudget},
    alertWebhook: 'https://api.yourdomain.com/alerts/llm-budget',
  },
  caching: {
    enabled: true,
    ttlSeconds: 3600, // Caches repeated system prompts & context
  },
  routing: {
    fallbackModel: '${selectedModel.recommendedFallback || 'gpt-4o-mini'}',
    autoDowngradeOnBudgetRisk: true,
  },
});

// Wraps LLM requests transparently
const response = await toka.optimize('chat.completions.create', {
  model: '${selectedModel.id}',
  messages: [{ role: 'user', content: 'Process document and summarize...' }],
});

console.log('Estimated Request Cost:', response.tokaCostUSD);
console.log('Cache Status:', response.isCached ? 'HIT (90% savings)' : 'MISS');`;

  const handleCopyCode = () => {
    navigator.clipboard.writeText(codeSnippet);
    setCopiedSnippet(true);
    setTimeout(() => setCopiedSnippet(false), 2000);
  };

  return (
    <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-5 sm:p-7 shadow-xl">
      {/* Title & Info */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-neutral-800">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 rounded text-[11px] font-mono uppercase tracking-wider bg-amber-500/20 text-amber-300 border border-amber-500/30">
              Interactive Simulator
            </span>
            <span className="text-xs text-neutral-400">AI Cost Optimization SDK</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-neutral-100 mt-1 flex items-center gap-2">
            <span>Toka — Token Economics &amp; Cost Optimizer</span>
          </h3>
          <p className="text-sm text-neutral-400 mt-1 max-w-xl">
            Simulate real LLM token costs, prompt caching savings, and automated model routing fallback.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <a
            href="https://github.com/abrehamshiferaw/toka"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-xs font-semibold text-neutral-200 border border-neutral-700 transition"
          >
            <span>View Toka on GitHub</span>
            <ExternalLink className="w-3.5 h-3.5 text-neutral-400" />
          </a>
          <a
            href="https://github.com/sponsors/abrehamshiferaw"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-pink-500/15 hover:bg-pink-500/25 text-pink-400 border border-pink-500/30 text-xs font-semibold transition"
          >
            <Heart className="w-3.5 h-3.5 fill-pink-500" />
            <span>Sponsor Toka</span>
          </a>
        </div>
      </div>

      {/* Simulator Grid */}
      <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Controls Column */}
        <div className="lg:col-span-6 space-y-5">
          {/* Model Selector */}
          <div>
            <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-2">
              Select AI Model
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {AI_MODELS.map((model) => (
                <button
                  key={model.id}
                  onClick={() => setModelId(model.id)}
                  className={`p-2.5 rounded-xl border text-left transition flex flex-col justify-between ${
                    modelId === model.id
                      ? 'bg-amber-500/10 border-amber-500/60 text-amber-200'
                      : 'bg-neutral-800/40 border-neutral-800 hover:border-neutral-700 text-neutral-300'
                  }`}
                >
                  <span className="text-xs font-bold leading-tight">{model.name}</span>
                  <span className="text-[10px] text-neutral-400 mt-1 font-mono">
                    ${model.inputPerMillion}/M in &bull; ${model.outputPerMillion}/M out
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Daily Requests Slider */}
          <div>
            <div className="flex justify-between text-xs mb-1.5">
              <span className="text-neutral-300 font-medium">Daily API Requests</span>
              <span className="text-amber-400 font-mono font-bold">{dailyRequests.toLocaleString()} req/day</span>
            </div>
            <input
              type="range"
              min={100}
              max={25000}
              step={100}
              value={dailyRequests}
              onChange={(e) => setDailyRequests(Number(e.target.value))}
              className="w-full accent-amber-400 cursor-pointer h-1.5 bg-neutral-800 rounded-lg appearance-none"
            />
            <div className="flex justify-between text-[10px] text-neutral-500 mt-1 font-mono">
              <span>100 req/day</span>
              <span>10,000 req/day</span>
              <span>25,000 req/day</span>
            </div>
          </div>

          {/* Average Prompt & Completion Tokens */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <div className="flex justify-between text-xs mb-1.5">
                <span className="text-neutral-300 font-medium">Avg Input Tokens</span>
                <span className="text-neutral-200 font-mono font-bold">{avgInputTokens} tokens</span>
              </div>
              <input
                type="range"
                min={100}
                max={4000}
                step={50}
                value={avgInputTokens}
                onChange={(e) => setAvgInputTokens(Number(e.target.value))}
                className="w-full accent-amber-400 cursor-pointer h-1.5 bg-neutral-800 rounded-lg appearance-none"
              />
            </div>
            <div>
              <div className="flex justify-between text-xs mb-1.5">
                <span className="text-neutral-300 font-medium">Avg Output Tokens</span>
                <span className="text-neutral-200 font-mono font-bold">{avgOutputTokens} tokens</span>
              </div>
              <input
                type="range"
                min={50}
                max={2000}
                step={25}
                value={avgOutputTokens}
                onChange={(e) => setAvgOutputTokens(Number(e.target.value))}
                className="w-full accent-amber-400 cursor-pointer h-1.5 bg-neutral-800 rounded-lg appearance-none"
              />
            </div>
          </div>

          {/* Cache Hit Ratio & Smart Routing Toggles */}
          <div className="space-y-3 pt-2">
            <div>
              <div className="flex justify-between text-xs mb-1.5">
                <span className="text-neutral-300 font-medium flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5 text-amber-400" />
                  Prompt Cache Hit Ratio (Toka Caching)
                </span>
                <span className="text-emerald-400 font-mono font-bold">
                  {Math.round(cacheHitRatio * 100)}%
                </span>
              </div>
              <input
                type="range"
                min={0}
                max={0.9}
                step={0.05}
                value={cacheHitRatio}
                onChange={(e) => setCacheHitRatio(Number(e.target.value))}
                className="w-full accent-emerald-400 cursor-pointer h-1.5 bg-neutral-800 rounded-lg appearance-none"
              />
            </div>

            <div className="flex items-center justify-between p-3 rounded-xl bg-neutral-800/50 border border-neutral-700/60">
              <div className="flex items-center gap-2">
                <Layers className="w-4 h-4 text-amber-400" />
                <div>
                  <span className="text-xs font-semibold text-neutral-200 block">
                    Dynamic Model Routing
                  </span>
                  <span className="text-[11px] text-neutral-400">
                    Route standard prompts to lighter model when possible
                  </span>
                </div>
              </div>
              <input
                type="checkbox"
                checked={enableRouting}
                onChange={(e) => setEnableRouting(e.target.checked)}
                className="w-4 h-4 accent-amber-400 cursor-pointer rounded"
              />
            </div>
          </div>
        </div>

        {/* Results & Cost Savings Card */}
        <div className="lg:col-span-6 flex flex-col justify-between space-y-4">
          <div className="bg-neutral-950 border border-neutral-800 rounded-2xl p-5 shadow-inner">
            <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-4 flex items-center justify-between">
              <span>Monthly Cost &amp; Savings Projection</span>
              <span className="text-emerald-400 font-mono text-xs flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5" />
                Toka Optimized
              </span>
            </h4>

            <div className="grid grid-cols-2 gap-4 pb-4 border-b border-neutral-800">
              <div>
                <span className="text-xs text-neutral-400 block">Standard Provider Cost</span>
                <span className="text-2xl sm:text-3xl font-extrabold text-neutral-400 line-through">
                  ${result.rawCost.toFixed(2)}
                </span>
                <span className="text-[11px] text-neutral-500 block mt-0.5">per month</span>
              </div>

              <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-3">
                <span className="text-xs text-emerald-400 font-semibold block">With Toka Optimization</span>
                <span className="text-2xl sm:text-3xl font-extrabold text-emerald-300">
                  ${result.optimizedCost.toFixed(2)}
                </span>
                <span className="text-[11px] text-emerald-400 font-medium block mt-0.5">
                  Save ${result.savingsDollars.toFixed(2)} ({result.savingsPercentage}%)
                </span>
              </div>
            </div>

            {/* Metrics Breakdown */}
            <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
              <div className="bg-neutral-900 p-2.5 rounded-lg border border-neutral-800">
                <span className="text-neutral-400 block text-[11px]">Monthly Tokens</span>
                <span className="font-mono font-bold text-neutral-200">
                  {(result.totalTokens / 1_000_000).toFixed(2)}M
                </span>
              </div>
              <div className="bg-neutral-900 p-2.5 rounded-lg border border-neutral-800">
                <span className="text-neutral-400 block text-[11px]">Cached Tokens</span>
                <span className="font-mono font-bold text-emerald-400">
                  {(result.cachedTokens / 1_000_000).toFixed(2)}M
                </span>
              </div>
              <div className="bg-neutral-900 p-2.5 rounded-lg border border-neutral-800 col-span-2 sm:col-span-1">
                <span className="text-neutral-400 block text-[11px]">Cost Reduction</span>
                <span className="font-mono font-bold text-amber-400">
                  -{result.savingsPercentage}%
                </span>
              </div>
            </div>
          </div>

          {/* Quick Code Integration Preview */}
          <div className="bg-neutral-950 border border-neutral-800 rounded-xl p-3.5 relative font-mono text-[11px]">
            <div className="flex items-center justify-between pb-2 border-b border-neutral-800/80 mb-2">
              <span className="text-neutral-400 text-xs font-sans font-medium flex items-center gap-1.5">
                <Cpu className="w-3.5 h-3.5 text-amber-400" />
                Toka SDK Integration Example
              </span>
              <button
                onClick={handleCopyCode}
                className="px-2 py-1 rounded bg-neutral-800 hover:bg-neutral-700 text-neutral-300 flex items-center gap-1 text-[10px] transition"
              >
                {copiedSnippet ? (
                  <>
                    <Check className="w-3 h-3 text-emerald-400" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3 h-3" />
                    <span>Copy Code</span>
                  </>
                )}
              </button>
            </div>
            <pre className="text-neutral-300 overflow-x-auto max-h-36 scrollbar-thin text-[11px] leading-relaxed">
              <code>{codeSnippet}</code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
};
