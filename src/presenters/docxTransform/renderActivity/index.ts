import { Paragraph, HeadingLevel } from 'docx';
import type { Activity } from '~/entities/createActivity';
import item from './item';

export default (activities: Activity[] = []): Paragraph[] =>
  activities.length
    ? [
        new Paragraph({ heading: HeadingLevel.HEADING_2, text: 'その他活動' }),
        ...activities.map(item),
      ]
    : [];
