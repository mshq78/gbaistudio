/**
 * Persian number conversion utility
 */
export function toPersianDigits(input: string | number): string {
  const persianDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
  return String(input).replace(/[0-9]/g, (w) => persianDigits[parseInt(w, 10)]);
}

/**
 * Format numbers with comma separator in Persian
 */
export function formatPersianNumber(num: number): string {
  const parts = num.toString().split('.');
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, '،');
  return toPersianDigits(parts.join('.'));
}
