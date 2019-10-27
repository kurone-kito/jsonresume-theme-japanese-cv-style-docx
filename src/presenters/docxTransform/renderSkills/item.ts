import {
  TableRow,
  TableCell,
  Paragraph,
  BorderStyle,
  VerticalAlign
} from 'docx';
import { GroupedSkill } from '../../../entities/groupBySkills';
import singleOrMulti from '../atoms/singleOrMulti';

interface CellTextOptions {
  body?: string | string[];
  mergin?: boolean;
}

const cellText = ({ body, mergin }: CellTextOptions = {}) =>
  new TableCell({
    children: singleOrMulti(body),
    verticalAlign: VerticalAlign.CENTER,

    ...(mergin
      ? { margins: { left: 100, right: 100 } }
      : { margins: { left: 50, right: 50 } })
  });

const createBorder = (enable = true) => ({
  color: enable ? 'auto' : 'white',
  size: enable ? 1 : 0,
  style: enable ? BorderStyle.SINGLE : BorderStyle.NONE
});

export default ({ keywords, level, name, rowSpan, tag, tail }: GroupedSkill) =>
  new TableRow({
    cantSplit: true,

    children: [
      // ! XXX: Provisionary implements, Because docx has a bug in rowSpan.
      new TableCell({
        children: [new Paragraph({ text: tag })],
        borders: {
          bottom: createBorder(tail),
          left: createBorder(),
          right: createBorder(),
          top: createBorder(!!rowSpan)
        },
        verticalAlign: VerticalAlign.CENTER
        // ...(rowSpan ? { rowSpan } : {})
      }),
      cellText({ body: name }),
      cellText({ body: level, mergin: true }),
      cellText({ body: keywords })
    ]
  });
