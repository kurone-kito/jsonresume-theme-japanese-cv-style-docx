const formatter = Intl.DateTimeFormat('ja-JP', {
  year: 'numeric',
  month: 'long'
});

export default (date?: number | Date) => formatter.format(date);
