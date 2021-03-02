import { Paragraph, HeadingLevel, AlignmentType } from 'docx';
import { Meta, Basics } from '~/entities';
import dateFormatter from '~/entities/dateFormatter';

export interface Arguments {
  basics?: Pick<Basics, 'name'>;
  meta?: Pick<Meta, 'lastModified'>;
}

export default ({ basics = {}, meta = {} }: Arguments = {}) => [
  new Paragraph({
    alignment: AlignmentType.CENTER,
    heading: HeadingLevel.HEADING_1,
    text: '職務経歴書',
  }),
  new Paragraph({
    alignment: AlignmentType.RIGHT,
    text: `${dateFormatter(new Date(meta.lastModified || new Date()))} 現在`,
  }),
  ...(basics.name
    ? [new Paragraph({ alignment: AlignmentType.RIGHT, text: basics.name })]
    : []),
];
