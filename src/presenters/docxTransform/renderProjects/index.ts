import { Paragraph, HeadingLevel, Table } from 'docx';
import type { EnhancedProject } from '~/entities/enhanced';
import item from './item';

export default (projects: EnhancedProject[] = []): (Table | Paragraph)[] =>
  projects.length
    ? [
        new Paragraph({
          heading: HeadingLevel.HEADING_2,
          text: '主な職務経歴',
        }),
        ...projects.flatMap(item),
      ]
    : [];
