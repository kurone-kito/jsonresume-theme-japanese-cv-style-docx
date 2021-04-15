import {
  HeadingLevel,
  Paragraph,
  TableRow,
  TableCell,
  VerticalAlign,
} from 'docx';
import type { Project } from '~/entities';
import dateFormatter from '~/entities/dateFormatter';

export type Keys = 'endDate' | 'entity' | 'name' | 'startDate';

const getEndDate = (date?: string) =>
  date ? dateFormatter(new Date(date)) : '現在';
const getEntity = (entity = '') => entity && `(${entity})`;
const getName = (name = 'プロジェクト') => name;
const getStartDate = (date = '') => date && dateFormatter(new Date(date));
const getText = ({
  endDate,
  entity,
  name,
  startDate,
}: Pick<Project, Keys> = {}) => {
  const completedEndDate = getEndDate(endDate);
  const completedEntity = getEntity(entity);
  const completedName = getName(name);
  const completedStartDate = getStartDate(startDate);
  return `${completedName} ${completedEntity} / ${completedStartDate}〜${completedEndDate}`;
};

export default (project: Pick<Project, Keys> = {}): TableRow[] => [
  new TableRow({
    cantSplit: true,
    children: [
      new TableCell({
        children: [
          new Paragraph({
            heading: HeadingLevel.HEADING_3,
            text: getText(project),
          }),
        ],
        columnSpan: 2,
        margins: { left: 100, right: 100 },
        shading: { fill: 'seashell' },
        verticalAlign: VerticalAlign.CENTER,
      }),
    ],
  }),
];
