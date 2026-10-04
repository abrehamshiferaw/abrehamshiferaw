// Ge'ez Numerals Conversion Utility
// Based on traditional Ethiopic numeral system

const ONES: Record<number, string> = {
  1: '፩',
  2: '፪',
  3: '፫',
  4: '፬',
  5: '፭',
  6: '፮',
  7: '፯',
  8: '፰',
  9: '፱',
};

const TENS: Record<number, string> = {
  10: '፲',
  20: '፳',
  30: '፴',
  40: '፵',
  50: '፶',
  60: '፷',
  70: '፸',
  80: '፹',
  90: '፺',
};

const HUNDRED = '፻';
const TEN_THOUSAND = '፼';

/**
 * Converts a number between 1 and 99 to Ge'ez numerals
 */
function convertUnder100(n: number): string {
  if (n <= 0 || n >= 100) return '';
  const tens = Math.floor(n / 10) * 10;
  const ones = n % 10;
  const tensStr = tens > 0 ? (TENS[tens] || '') : '';
  const onesStr = ones > 0 ? (ONES[ones] || '') : '';
  return tensStr + onesStr;
}

/**
 * Converts an integer up to 100,000,000 into Ge'ez numerals
 */
export function toGeez(num: number): string {
  if (isNaN(num) || num <= 0 || !Number.isInteger(num)) {
    return '';
  }

  if (num > 100000000) {
    return 'Value exceeds supported range (max 100,000,000)';
  }

  // Handle numbers under 100 directly
  if (num < 100) {
    return convertUnder100(num);
  }

  // Split into groups of 100 from right to left
  const groups: number[] = [];
  let temp = num;
  while (temp > 0) {
    groups.push(temp % 100);
    temp = Math.floor(temp / 100);
  }

  let result = '';
  for (let i = groups.length - 1; i >= 0; i--) {
    const val = groups[i];
    const isOddGroup = i % 2 !== 0; // determines whether to append ፻ (100) or ፼ (10,000)
    const isHighGroup = i > 0 && i % 2 === 0;

    let groupStr = '';
    if (val > 0) {
      // In Ge'ez, a leading 1 before 100 (፻) or 10,000 (፼) is usually omitted unless it's standalone
      if (val === 1 && (isOddGroup || isHighGroup) && (i === groups.length - 1)) {
        groupStr = '';
      } else {
        groupStr = convertUnder100(val);
      }
    }

    if (isOddGroup) {
      if (val > 0 || (i > 0 && groups[i - 1] > 0)) {
        result += groupStr + HUNDRED;
      }
    } else if (isHighGroup) {
      if (val > 0) {
        result += groupStr + TEN_THOUSAND;
      }
    } else {
      result += groupStr;
    }
  }

  return result;
}

/**
 * Converts Ge'ez numeral string back to integer
 */
export function fromGeez(geezStr: string): number | null {
  const clean = geezStr.trim();
  if (!clean) return null;

  const charMap: Record<string, number> = {
    '፩': 1, '፪': 2, '፫': 3, '፬': 4, '፭': 5, '፮': 6, '፯': 7, '፰': 8, '፱': 9,
    '፲': 10, '፳': 20, '፴': 30, '፵': 40, '፶': 50, '፷': 60, '፸': 70, '፹': 80, '፺': 90,
  };

  let total = 0;
  let currentGroup = 0;

  for (let i = 0; i < clean.length; i++) {
    const ch = clean[i];
    if (ch === HUNDRED) {
      total += (currentGroup === 0 ? 1 : currentGroup) * 100;
      currentGroup = 0;
    } else if (ch === TEN_THOUSAND) {
      total = (total + (currentGroup === 0 ? 1 : currentGroup)) * 10000;
      currentGroup = 0;
    } else if (charMap[ch] !== undefined) {
      currentGroup += charMap[ch];
    } else {
      return null; // invalid character
    }
  }

  return total + currentGroup;
}
