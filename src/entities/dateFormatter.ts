const formatter = Intl.DateTimeFormat('ja-JP', {
  month: 'long',
  year: 'numeric',
});

export default (date?: number | Date): string => formatter.format(date);
