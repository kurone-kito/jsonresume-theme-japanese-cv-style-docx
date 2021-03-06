import { Paragraph, AlignmentType } from 'docx';

const renderSingle = (text: string) => [
  new Paragraph({ alignment: AlignmentType.LEFT, text }),
];
const renderMulti = (texts: string[]) =>
  texts.map(
    (text) =>
      new Paragraph({ alignment: AlignmentType.LEFT, text: `・${text}` })
  );

export default (body?: string | string[]): Paragraph[] =>
  body
    ? [...(Array.isArray(body) ? renderMulti(body) : renderSingle(body))]
    : [];
