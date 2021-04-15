import { Paragraph, HeadingLevel, Table, WidthType } from 'docx';
import 'ts-polyfill/lib/es2019-array';
import type { GroupedSkill } from '~/entities/groupBySkills';
import header from './header';
import item from './item';

export default (skills: GroupedSkill[] = []): (Paragraph | Table)[] =>
  skills.length
    ? [
        new Paragraph({ heading: HeadingLevel.HEADING_2, text: '主なスキル' }),
        new Table({
          columnWidths: [1000, 1000, 1000, 1000],
          width: { size: 100, type: WidthType.PERCENTAGE },
          rows: [header(), ...skills.map(item)],
        }),
      ]
    : [];
