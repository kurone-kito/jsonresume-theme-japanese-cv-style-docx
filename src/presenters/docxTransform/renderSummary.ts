import { Paragraph, AlignmentType } from 'docx';
import { Basics } from '../../entities';

export default ({ summary: text }: Pick<Basics, 'summary'> = {}) =>
  text ? [new Paragraph({ alignment: AlignmentType.LEFT, text })] : [];
