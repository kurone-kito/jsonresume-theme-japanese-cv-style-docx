import { Paragraph, AlignmentType } from 'docx';
import type { Basics } from '~/entities';

export default ({ summary: text }: Pick<Basics, 'summary'> = {}): Paragraph[] =>
  text ? [new Paragraph({ alignment: AlignmentType.LEFT, text })] : [];
