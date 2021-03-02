const formatter = Intl.DateTimeFormat('ja-JP', {
  month: 'long',
  year: 'numeric',
});

export default (date?: number | Date) => formatter.format(date);
