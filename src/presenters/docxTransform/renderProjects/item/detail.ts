import { Paragraph, HeadingLevel } from 'docx';
import singleOrMulti from '~/presenters/docxTransform/atoms/singleOrMulti';

export interface Options {
  body?: string | string[];
  heading: string;
}

export default ({ body, heading }: Options): Paragraph[] =>
  body
    ? [
        new Paragraph({
          heading: HeadingLevel.HEADING_4,
          text: `◇ ${heading} ◇`,
        }),
        ...singleOrMulti(body),
      ]
    : [];
