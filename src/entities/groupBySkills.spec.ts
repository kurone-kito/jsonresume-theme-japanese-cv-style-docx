import JSON5 from 'json5';
import type { EnhancedSkill } from '~/entities/enhanced';
import groupBySkills, { GroupedSkill } from './groupBySkills';

describe.each<[EnhancedSkill[] | undefined, GroupedSkill[]]>([
  [undefined, []],
  [[], []],
  [
    [
      { name: 'UX', tags: 'Design' },
      { name: 'PL/I', tags: 'lang' },
      { name: 'Java', tags: ['lang'] },
      { name: 'TypeScript', tags: ['lang', 'modern'] },
      { name: 'BASIC', tags: [] },
      { level: 'advanced', name: 'SQL' },
      { name: 'Delphi' },
    ],
    [
      { level: '', name: 'UX', rowSpan: 1, tag: 'Design', tail: true },
      { level: '', name: 'PL/I', rowSpan: 3, tag: 'lang', tail: false },
      { level: '', name: 'Java', tail: false },
      { level: '', name: 'TypeScript', tail: true },
      { level: '', name: 'BASIC', rowSpan: 3, tag: '', tail: false },
      { level: '', name: 'Delphi', tail: false },
      { level: '★★☆', name: 'SQL', tail: true },
    ],
  ],
  [
    [
      { level: 'foo', name: 'a', tags: [] },
      { level: 'intermediate', name: 'b' },
      { level: 'advanced', name: 'c', tags: 'x' },
      { level: 'beginner', name: 'd', tags: '' },
      { level: 'master', name: 'e' },
    ],
    [
      { level: 'foo', name: 'a', rowSpan: 4, tag: '', tail: false },
      { level: '★★★', name: 'e', tail: false },
      { level: '★☆☆', name: 'b', tail: false },
      { level: '☆☆☆', name: 'd', tail: true },
      { level: '★★☆', name: 'c', rowSpan: 1, tag: 'x', tail: true },
    ],
  ],
])('arg: (%j)', (arg, expected) => {
  it(`got: ${JSON5.stringify(expected)}`, () =>
    expect(groupBySkills(arg)).toStrictEqual(expected));
});
