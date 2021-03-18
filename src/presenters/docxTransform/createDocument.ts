import { Document } from 'docx';
import 'reflect-metadata';
import type { Basics, Meta } from '~/entities';
import styles from './styles';

export default (
  basics: Pick<Basics, 'name'> = {},
  meta: Pick<Meta, 'version'> = {}
): Document =>
  new Document({
    creator: basics.name,
    revision: meta.version,
    subject: 'Curriculum Vitae',
    styles,
    title: '職務経歴書',
  });
