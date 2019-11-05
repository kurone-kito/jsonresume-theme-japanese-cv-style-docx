import { Paragraph, HeadingLevel } from 'docx';
import 'ts-polyfill/lib/es2019-array';
import { Activity } from '~/entities/createActivity';
import item from './item';

export default (activities: Activity[] = []) =>
  activities.length
    ? [
        new Paragraph({
          heading: HeadingLevel.HEADING_2,
          text: 'その他活動'
        }),
        ...activities.map(item)
      ]
    : [];
