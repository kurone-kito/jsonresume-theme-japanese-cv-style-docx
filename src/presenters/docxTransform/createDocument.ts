import { Document } from 'docx';
import 'reflect-metadata';
import { Basics, Meta } from '../../entities';
import styles from './styles';

export default (
  basics: Pick<Basics, 'name'> = {},
  meta: Pick<Meta, 'version'> = {}
) =>
  new Document({
    creator: basics.name,
    revision: meta.version,
    subject: 'Curriculum Vitae',
    styles,
    title: '職務経歴書'
  });
