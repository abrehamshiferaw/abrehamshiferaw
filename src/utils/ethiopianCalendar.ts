// Ethiopian Calendar Engine & Gregorian Conversion Algorithm
// Julian Day Number (JDN) based calculation

export interface EthiopianDate {
  year: number;
  month: number;
  day: number;
  monthNameEn: string;
  monthNameAm: string;
  dayOfWeekEn: string;
  dayOfWeekAm: string;
  isLeapYear: boolean;
}

export const ETHIOPIAN_MONTHS = [
  { id: 1, en: 'Meskerem', am: 'መስከረም' },
  { id: 2, en: 'Tikimt', am: 'ጥቅምት' },
  { id: 3, en: 'Hidar', am: 'ኅዳር' },
  { id: 4, en: 'Tahsas', am: 'ታኅሣሥ' },
  { id: 5, en: 'Tir', am: 'ጥር' },
  { id: 6, en: 'Yakatit', am: 'የካቲት' },
  { id: 7, en: 'Megabit', am: 'መጋቢት' },
  { id: 8, en: 'Miyazya', am: 'ሚያዝያ' },
  { id: 9, en: 'Ginbot', am: 'ግንቦት' },
  { id: 10, en: 'Sene', am: 'ሰኔ' },
  { id: 11, en: 'Hamle', am: 'ሐምሌ' },
  { id: 12, en: 'Nehase', am: 'ነሐሴ' },
  { id: 13, en: 'Pagume', am: 'ጳጉሜ' },
];

export const DAYS_OF_WEEK = [
  { en: 'Sunday', am: 'እሑድ' },
  { en: 'Monday', am: 'ሰኞ' },
  { en: 'Tuesday', am: 'ማክሰኞ' },
  { en: 'Wednesday', am: 'ረቡዕ' },
  { en: 'Thursday', am: 'ሐሙስ' },
  { en: 'Friday', am: 'ዓርብ' },
  { en: 'Saturday', am: 'ቅዳሜ' },
];

export interface Holiday {
  name: string;
  amharic: string;
  ethMonth: number;
  ethDay: number;
  description: string;
  type: 'national' | 'orthodox' | 'cultural';
}

export const ETHIOPIAN_HOLIDAYS: Holiday[] = [
  { name: 'Enkutatash (Ethiopian New Year)', amharic: 'እንቁጣጣሽ', ethMonth: 1, ethDay: 1, description: 'First day of the Ethiopian New Year', type: 'national' },
  { name: 'Meskel (Finding of the True Cross)', amharic: 'መስቀል', ethMonth: 1, ethDay: 17, description: 'Demera bonfire celebration and Meskel flower blooming', type: 'orthodox' },
  { name: 'Genna (Ethiopian Christmas)', amharic: 'ገና', ethMonth: 4, ethDay: 29, description: 'Celebration of the Nativity of Jesus', type: 'orthodox' },
  { name: 'Timkat (Epiphany)', amharic: 'ጥምቀት', ethMonth: 5, ethDay: 11, description: 'Commemoration of the baptism of Jesus in Jordan River', type: 'orthodox' },
  { name: 'Victory of Adwa', amharic: 'የዐድዋ ድል በዓል', ethMonth: 6, ethDay: 23, description: 'Historic victory over colonial forces in 1896', type: 'national' },
  { name: 'Patriots Victory Day', amharic: 'የአርበኞች ቀን', ethMonth: 8, ethDay: 27, description: 'Remembering Ethiopian resistance against occupation', type: 'national' },
  { name: 'Downfall of the Derg', amharic: 'ደርግ የወደቀበት ቀን', ethMonth: 9, ethDay: 20, description: 'National holiday marking the end of the Derg regime', type: 'national' },
  { name: 'Buhe / Debre Tabor', amharic: 'ቡሄ (ደብረ ታቦር)', ethMonth: 12, ethDay: 13, description: 'Transfiguration feast with traditional torches and songs', type: 'cultural' },
];

// JDN Epoch for Ethiopian Calendar: August 29, 8 AD (Julian) = JDN 1723856
const ETHIOPIC_EPOCH = 1723856;

function gregorianToJDN(year: number, month: number, day: number): number {
  const a = Math.floor((14 - month) / 12);
  const y = year + 4800 - a;
  const m = month + 12 * a - 3;
  return (
    day +
    Math.floor((153 * m + 2) / 5) +
    365 * y +
    Math.floor(y / 4) -
    Math.floor(y / 100) +
    Math.floor(y / 400) -
    32045
  );
}

function jdnToEthiopian(jdn: number): { year: number; month: number; day: number } {
  const r = (jdn - ETHIOPIC_EPOCH) % 1461;
  const n = (r % 365) + 365 * Math.floor(r / 1460);
  const year = 4 * Math.floor((jdn - ETHIOPIC_EPOCH) / 1461) + Math.floor(r / 365) - Math.floor(r / 1460);
  const month = Math.floor(n / 30) + 1;
  const day = (n % 30) + 1;
  return { year, month, day };
}

function ethiopianToJDN(year: number, month: number, day: number): number {
  return (
    ETHIOPIC_EPOCH -
    1 +
    365 * (year - 1) +
    Math.floor(year / 4) +
    30 * (month - 1) +
    day
  );
}

function jdnToGregorian(jdn: number): { year: number; month: number; day: number } {
  const a = jdn + 32044;
  const b = Math.floor((4 * a + 3) / 146097);
  const c = a - Math.floor((146097 * b) / 4);
  const d = Math.floor((4 * c + 3) / 1461);
  const e = c - Math.floor((1461 * d) / 4);
  const m = Math.floor((5 * e + 2) / 153);
  const day = e - Math.floor((153 * m + 2) / 5) + 1;
  const month = m + 3 - 12 * Math.floor(m / 10);
  const year = 100 * b + d - 4800 + Math.floor(m / 10);
  return { year, month, day };
}

export function convertGregorianToEthiopian(gregDate: Date): EthiopianDate {
  const gYear = gregDate.getFullYear();
  const gMonth = gregDate.getMonth() + 1;
  const gDay = gregDate.getDate();

  const jdn = gregorianToJDN(gYear, gMonth, gDay);
  const { year, month, day } = jdnToEthiopian(jdn);

  const monthObj = ETHIOPIAN_MONTHS[month - 1] || ETHIOPIAN_MONTHS[0];
  const dayOfWeekIndex = gregDate.getDay();
  const dayOfWeek = DAYS_OF_WEEK[dayOfWeekIndex];
  const isLeapYear = year % 4 === 3;

  return {
    year,
    month,
    day,
    monthNameEn: monthObj.en,
    monthNameAm: monthObj.am,
    dayOfWeekEn: dayOfWeek.en,
    dayOfWeekAm: dayOfWeek.am,
    isLeapYear,
  };
}

export function convertEthiopianToGregorian(
  year: number,
  month: number,
  day: number
): { year: number; month: number; day: number; dateString: string } {
  const jdn = ethiopianToJDN(year, month, day);
  const { year: gYear, month: gMonth, day: gDay } = jdnToGregorian(jdn);
  const dateObj = new Date(gYear, gMonth - 1, gDay);
  return {
    year: gYear,
    month: gMonth,
    day: gDay,
    dateString: dateObj.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }),
  };
}
