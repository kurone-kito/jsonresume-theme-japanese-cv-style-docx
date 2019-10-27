import { Paragraph, HeadingLevel } from 'docx';
import singleOrMulti from '../../atoms/singleOrMulti';

export interface Options {
  body?: string | string[];
  heading: string;
}

export default ({ body, heading }: Options) =>
  body
    ? [
        new Paragraph({
          heading: HeadingLevel.HEADING_4,
          text: `◇ ${heading} ◇`
        }),
        ...singleOrMulti(body)
      ]
    : [];
