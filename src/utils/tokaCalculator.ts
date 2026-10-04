// Toka AI Cost Optimization & Token Economics Utility

export interface AIModelRate {
  id: string;
  name: string;
  provider: string;
  inputPerMillion: number;
  outputPerMillion: number;
  cachedInputPerMillion: number;
  recommendedFallback?: string;
}

export const AI_MODELS: AIModelRate[] = [
  {
    id: 'gpt-4o',
    name: 'OpenAI GPT-4o',
    provider: 'OpenAI',
    inputPerMillion: 2.50,
    outputPerMillion: 10.00,
    cachedInputPerMillion: 1.25,
    recommendedFallback: 'gpt-4o-mini',
  },
  {
    id: 'gpt-4o-mini',
    name: 'OpenAI GPT-4o Mini',
    provider: 'OpenAI',
    inputPerMillion: 0.15,
    outputPerMillion: 0.60,
    cachedInputPerMillion: 0.075,
  },
  {
    id: 'claude-3-5-sonnet',
    name: 'Anthropic Claude 3.5 Sonnet',
    provider: 'Anthropic',
    inputPerMillion: 3.00,
    outputPerMillion: 15.00,
    cachedInputPerMillion: 0.30,
    recommendedFallback: 'claude-3-5-haiku',
  },
  {
    id: 'gemini-2-flash',
    name: 'Google Gemini 2.0 Flash',
    provider: 'Google',
    inputPerMillion: 0.10,
    outputPerMillion: 0.40,
    cachedInputPerMillion: 0.025,
  },
  {
    id: 'deepseek-v3',
    name: 'DeepSeek V3',
    provider: 'DeepSeek',
    inputPerMillion: 0.14,
    outputPerMillion: 0.28,
    cachedInputPerMillion: 0.014,
  },
];

export interface TokaSimulationResult {
  rawCost: number;
  optimizedCost: number;
  savingsDollars: number;
  savingsPercentage: number;
  cachedTokens: number;
  freshInputTokens: number;
  outputTokens: number;
  totalTokens: number;
  budgetExceeded: boolean;
  modelRecommendation?: string;
}

export function calculateTokaOptimization(params: {
  modelId: string;
  dailyRequests: number;
  avgInputTokens: number;
  avgOutputTokens: number;
  cacheHitRatio: number; // 0 to 1
  monthlyBudget: number;
  enableRoutingOptimization: boolean;
}): TokaSimulationResult {
  const model = AI_MODELS.find((m) => m.id === params.modelId) || AI_MODELS[0];

  const totalInputTokensDaily = params.dailyRequests * params.avgInputTokens;
  const totalOutputTokensDaily = params.dailyRequests * params.avgOutputTokens;

  // Monthly values (30 days)
  const monthlyInputTokens = totalInputTokensDaily * 30;
  const monthlyOutputTokens = totalOutputTokensDaily * 30;

  // Unoptimized raw cost
  const rawCost =
    (monthlyInputTokens / 1_000_000) * model.inputPerMillion +
    (monthlyOutputTokens / 1_000_000) * model.outputPerMillion;

  // With Toka Prompt Caching
  const cachedInputTokens = monthlyInputTokens * params.cacheHitRatio;
  const uncachedInputTokens = monthlyInputTokens * (1 - params.cacheHitRatio);

  let optimizedCost =
    (uncachedInputTokens / 1_000_000) * model.inputPerMillion +
    (cachedInputTokens / 1_000_000) * model.cachedInputPerMillion +
    (monthlyOutputTokens / 1_000_000) * model.outputPerMillion;

  // If smart model routing is enabled and raw model is heavy (e.g. GPT-4o),
  // simulate 40% simple queries routed to lighter model (e.g. GPT-4o-mini)
  if (params.enableRoutingOptimization && model.recommendedFallback) {
    const fallbackModel = AI_MODELS.find((m) => m.id === model.recommendedFallback);
    if (fallbackModel) {
      const routedPortion = 0.40;
      const routedInput = uncachedInputTokens * routedPortion;
      const routedOutput = monthlyOutputTokens * routedPortion;

      const costSavedByRouting =
        ((routedInput / 1_000_000) * (model.inputPerMillion - fallbackModel.inputPerMillion)) +
        ((routedOutput / 1_000_000) * (model.outputPerMillion - fallbackModel.outputPerMillion));

      optimizedCost = Math.max(0, optimizedCost - costSavedByRouting);
    }
  }

  const savingsDollars = Math.max(0, rawCost - optimizedCost);
  const savingsPercentage = rawCost > 0 ? (savingsDollars / rawCost) * 100 : 0;
  const budgetExceeded = (rawCost > params.monthlyBudget);

  return {
    rawCost: Number(rawCost.toFixed(2)),
    optimizedCost: Number(optimizedCost.toFixed(2)),
    savingsDollars: Number(savingsDollars.toFixed(2)),
    savingsPercentage: Number(savingsPercentage.toFixed(1)),
    cachedTokens: Math.round(cachedInputTokens),
    freshInputTokens: Math.round(uncachedInputTokens),
    outputTokens: Math.round(monthlyOutputTokens),
    totalTokens: Math.round(monthlyInputTokens + monthlyOutputTokens),
    budgetExceeded,
    modelRecommendation: model.recommendedFallback,
  };
}
