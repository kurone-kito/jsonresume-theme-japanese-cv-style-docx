import { ResumeSchema } from '@kurone-kito/jsonresume-types';

export interface Activity {
  date?: string;
  name?: string;
  summary?: string;
}

export default ({
  publications = [],
  volunteer = [],
}: Pick<ResumeSchema, 'publications' | 'volunteer'>): Activity[] => [
  ...publications.map(({ name, releaseDate: date, summary }) => ({
    date,
    name,
    summary,
  })),
  ...volunteer.map(({ organization: name, startDate: date, summary }) => ({
    date,
    name,
    summary,
  })),
];
