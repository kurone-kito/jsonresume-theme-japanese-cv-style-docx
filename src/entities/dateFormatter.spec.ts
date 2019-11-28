import dateFormatter from './dateFormatter';

describe.each<[Date, string]>([
  [new Date('2008-10-19 04:05:45+0900'), '2008年10月'],
  [new Date('2051-04-08 10:01:14+0900'), '2051年4月']
])('argument: (%s)', (date, expected) => {
  it(`got: ${expected}`, () => expect(dateFormatter(date)).toBe(expected));
});
