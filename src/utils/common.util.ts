
const MONTHS = [
  'January','February','March','April','May','June',
  'July','August','September','October','November','December',
];

export function safeFormatDate(value: string): string {
  if (!value || value === 'TBA') return 'TBA';
  if (/[a-zA-Z]/.test(value)) return value; 
  const [y, m, d] = value.split('-').map(Number);
  if (y && m && d) return `${d} ${MONTHS[m - 1]} ${y}`;
  return value;
}

export function safeFormatRuntime(value: string): string {
  if (!value || value === 'N/A') return '';
  if (value.includes('h') || value.includes('m')) return value; 
  const mins = parseInt(value, 10);
  if (isNaN(mins) || mins <= 0) return '';
  const h = Math.floor(mins / 60);
  const m = mins % 60;
  return h > 0 ? `${h}h ${m}m` : `${m}m`;
}
