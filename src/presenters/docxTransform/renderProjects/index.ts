import { Paragraph, HeadingLevel } from 'docx';
import 'ts-polyfill/lib/es2019-array';
import { EnhancedProject } from '../../../entities/enhanced';
import item from './item';

export default (projects: EnhancedProject[] = []) =>
  projects.length
    ? [
        new Paragraph({
          heading: HeadingLevel.HEADING_2,
          text: '主な職務経歴'
        }),
        ...projects.flatMap(item)
      ]
    : [];
