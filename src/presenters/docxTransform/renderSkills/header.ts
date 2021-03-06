import {
  AlignmentType,
  Paragraph,
  TableCell,
  TableRow,
  VerticalAlign,
} from 'docx';

const headText = (text: string) =>
  new TableCell({
    children: [new Paragraph({ alignment: AlignmentType.CENTER, text })],
    shading: { fill: 'seashell' },
    verticalAlign: VerticalAlign.CENTER,
  });

export default (): TableRow =>
  new TableRow({
    cantSplit: true,
    children: [
      headText('分類'),
      headText('名称'),
      headText('レベル'),
      headText('詳細'),
    ],
    tableHeader: true,
  });
