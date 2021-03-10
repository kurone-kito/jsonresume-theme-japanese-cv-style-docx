import { WidthType, Table, TableRow, TableCell } from 'docx';
import { EnhancedProject } from '~/entities/enhanced';
import header, { Keys as KeysForHeader } from './header';
import detail from './detail';

export type Keys =
  | KeysForHeader
  | 'description'
  | 'env'
  | 'highlights'
  | 'roles';

export default (project: Pick<EnhancedProject, Keys> = {}): Table[] => [
  new Table({
    width: { size: 100, type: WidthType.PERCENTAGE },
    rows: [
      ...header(project),
      new TableRow({
        cantSplit: true,
        children: [
          new TableCell({
            children: [
              ...detail({ body: project.description, heading: '概要' }),
              ...detail({ body: project.roles, heading: '業務内容' }),
              ...detail({ body: project.highlights, heading: '取り組み' }),
            ],
            margins: { left: 100, right: 100 },
          }),
          ...(project.env
            ? [
                new TableCell({
                  children: [
                    ...detail({ body: project.env.os, heading: 'OS' }),
                    ...detail({ body: project.env.languages, heading: '言語' }),
                    ...detail({
                      body: project.env.platforms,
                      heading: 'その他',
                    }),
                  ],
                  margins: { left: 100, right: 100 },
                }),
              ]
            : []),
        ],
      }),
    ],
  }),
];
