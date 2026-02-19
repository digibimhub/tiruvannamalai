import SunCalc from 'suncalc';
import { addDays, format, getYear } from 'date-fns';

export interface PurnamiDate {
  date: Date;
  formatted: string;
  monthName: string;
  dayNum: number;
  year: number;
  isKarthigaiDeeam: boolean;
  label: string;
}

function isFullMoon(date: Date): boolean {
  const illumination = SunCalc.getMoonIllumination(date);
  return Math.abs(illumination.phase - 0.5) < 0.03;
}

// Karthigai Deepam: full moon in Tamil month Karthigai → November or December
function isKarthigaiDeeam(date: Date): boolean {
  const month = date.getMonth(); // 0-indexed: 10=Nov, 11=Dec
  return month === 10 || month === 11;
}

export function getPurnamiDates(startYear: number, endYear: number): PurnamiDate[] {
  const results: PurnamiDate[] = [];
  let current = new Date(startYear, 0, 1);
  const end = new Date(endYear, 11, 31);

  while (current <= end) {
    if (isFullMoon(current)) {
      const isKarthigai = isKarthigaiDeeam(current);
      results.push({
        date: new Date(current),
        formatted: format(current, 'MMMM d, yyyy'),
        monthName: format(current, 'MMMM'),
        dayNum: current.getDate(),
        year: getYear(current),
        isKarthigaiDeeam: isKarthigai,
        label: isKarthigai ? 'Karthigai Deepam' : 'Purnami',
      });
      // Skip 27 days to avoid counting the same full moon twice
      current = addDays(current, 27);
    } else {
      current = addDays(current, 1);
    }
  }

  return results;
}
