import { Paragraph, TextRun } from 'docx';
import 'ts-polyfill/lib/es2019-array';
import type { Activity } from '~/entities/createActivity';
import dateFormatter from '~/entities/dateFormatter';

export default ({ name, date, summary }: Activity): Paragraph =>
  new Paragraph({
    bullet: { level: 0 },
    children: [
      ...(name ? [new TextRun({ bold: true, text: name })] : []),
      ...(date
        ? [new TextRun({ text: `(${dateFormatter(new Date(date))})` })]
        : []),
      ...(name || date ? [new TextRun({ text: ': ' })] : []),
      ...(summary ? [new TextRun({ text: summary })] : []),
    ],
  });
