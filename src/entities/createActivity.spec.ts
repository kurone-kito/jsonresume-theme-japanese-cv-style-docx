import JSON5 from 'json5';
import chunk from 'lodash.chunk';
import { ResumeSchema } from '@kurone-kito/jsonresume-types';
import 'ts-polyfill/lib/es2019-array';
import { Publication, Volunteer } from '~/entities';
import createActivity, { Activity } from './createActivity';

describe('length test', () => {
  describe.each<[number, number]>([
    [0, 0],
    [0, 1],
    [1, 0],
    [1, 1],
    [1, 2],
    [2, 1],
    [2, 2]
  ])(
    'argument: { publications: [{}, ...x%d],  volunteer: [{}, ...x%d] }',
    (publications, volunteer) => {
      const arg: Pick<ResumeSchema, 'publications' | 'volunteer'> = {
        publications: Array(publications).fill({}),
        volunteer: Array(volunteer).fill({})
      };
      const expected = publications + volunteer;
      it(`got array length is ${expected}`, () =>
        expect(createActivity(arg)).toHaveLength(expected));
    }
  );
});

const pattern: [string?, string?, string?][] = [
  ['foo', 'bar', undefined],
  ['hoge', undefined, 'fuga'],
  [undefined, 'qux', 'buz'],
  ['corge', 'grault', 'xyzzy']
];
const flattedPattern = pattern.flat();
const createItemsDesc = (desc: string) => pattern.map(() => desc).join(', ');

describe.each<
  [
    'publications' | 'volunteer',
    'name' | 'organization',
    'releaseDate' | 'startDate'
  ]
>([
  ['publications', 'name', 'releaseDate'],
  ['volunteer', 'organization', 'startDate']
])('%s: single key test', (target, nameKey, dateKey) => {
  const itemDesc = `{ ${nameKey}: %p, ${dateKey}: %p, summary: %p }`;
  describe.each(pattern)(
    `argument: { ${target}: [${itemDesc}] }`,
    (name, date, summary) => {
      const arg: Pick<ResumeSchema, 'publications' | 'volunteer'> = {
        [target]: [{ [nameKey]: name, [dateKey]: date, summary }]
      };
      const expected: Activity[] = [{ date, name, summary }];
      it(`got: ${JSON5.stringify(expected)}`, () =>
        expect(createActivity(arg)).toStrictEqual(expected));
    }
  );
  describe.each([flattedPattern])(
    `argument: { ${target}: [${createItemsDesc(itemDesc)}] }`,
    (...args) => {
      const chunked = chunk(args, 3);
      const arg: Pick<ResumeSchema, 'publications' | 'volunteer'> = {
        [target]: chunked.map<Publication | Volunteer>(
          ([name, date, summary]) => ({
            [nameKey]: name,
            [dateKey]: date,
            summary
          })
        )
      };
      const expected = chunked.map<Activity>(([name, date, summary]) => ({
        date,
        name,
        summary
      }));
      it(`Got: ${JSON5.stringify(expected)}`, () =>
        expect(createActivity(arg)).toStrictEqual(expected));
    }
  );
});
describe('combine keys test', () => {
  const publicationsDesc = createItemsDesc(
    '{ name: %p, releaseDate: %p, summary: %p }'
  );
  const volunteerDesc = createItemsDesc(
    '{ organization: %p, startDate: %p, summary: %p }'
  );
  describe.each([[...flattedPattern, ...[...flattedPattern].reverse()]])(
    `argument: { publications: [${publicationsDesc}], volunteer: [${volunteerDesc}] }`,
    (...args) => {
      const chunked = chunk(args, 3);
      const chunked2 = chunk(chunk(args, 3), pattern.length);
      const arg: Pick<ResumeSchema, 'publications' | 'volunteer'> = {
        publications: chunked2[0].map<Publication>(
          ([name, releaseDate, summary]) => ({ name, releaseDate, summary })
        ),
        volunteer: chunked2[1].map<Volunteer>(
          ([organization, startDate, summary]) => ({
            organization,
            startDate,
            summary
          })
        )
      };
      const expected = chunked.map<Activity>(([name, date, summary]) => ({
        date,
        name,
        summary
      }));
      it(`got: ${JSON5.stringify(expected)}`, () =>
        expect(createActivity(arg)).toStrictEqual(expected));
    }
  );
});
