import { Document, Paragraph, Table, TableOfContents } from 'docx';
import 'reflect-metadata';
import type { Basics, Meta } from '~/entities';
import styles from './styles';

export default (
  basics: Pick<Basics, 'name'> = {},
  meta: Pick<Meta, 'version'> = {},
  sections: (Paragraph | Table | TableOfContents)[] = []
): Document =>
  new Document({
    creator: basics.name,
    revision: meta.version,
    sections: [{ children: sections }],
    subject: 'Curriculum Vitae',
    styles,
    title: '職務経歴書',
  });
