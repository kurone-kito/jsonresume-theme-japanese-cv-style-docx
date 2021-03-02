import { Paragraph, AlignmentType } from 'docx';

export default () => [
  new Paragraph({
    alignment: AlignmentType.RIGHT,
    text: '以上',
  }),
];
