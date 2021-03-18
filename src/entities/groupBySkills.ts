import groupBy from 'lodash.groupby';
import sortBy from 'lodash.sortby';
import 'ts-polyfill/lib/es2019-array';
import type { EnhancedSkill } from './enhanced';
import type { Skill } from '.';

const levelMap = new Map([
  ['beginner', '☆☆☆'],
  ['intermediate', '★☆☆'],
  ['advanced', '★★☆'],
  ['master', '★★★'],
]);

const getTag = (tags: EnhancedSkill['tags']) =>
  (Array.isArray(tags) ? tags.length && tags[0] : tags) || '';

export interface GroupedSkill extends Skill {
  rowSpan?: number;
  tag?: string;
  tail: boolean;
}

export default (skills: EnhancedSkill[] = []): GroupedSkill[] =>
  Object.entries(
    groupBy<EnhancedSkill>(skills, ({ tags }) => getTag(tags))
  ).flatMap<GroupedSkill>(([, items]) =>
    sortBy(
      items.map(({ level = '', ...item }) => ({
        level: levelMap.get(level) || level,
        ...item,
      })),
      ({ level }) => level
    ).map(({ tags = '', ...item }, index) => ({
      tail: index === items.length - 1,
      ...(index ? {} : { rowSpan: items.length, tag: getTag(tags) }),
      ...item,
    }))
  );
