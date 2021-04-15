import { Paragraph, AlignmentType } from 'docx';

export default (): Paragraph[] => [
  new Paragraph({ alignment: AlignmentType.RIGHT, text: '以上' }),
];
