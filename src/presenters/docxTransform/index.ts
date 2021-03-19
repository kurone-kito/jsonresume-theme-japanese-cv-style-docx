import { Packer } from 'docx';
import { injectable } from 'inversify';
import 'reflect-metadata';
import type { OutputResume } from '~/entities/enhanced';
import type { TransformPresenter } from '~/usecases/TransformResume';
import createDocument from './createDocument';
import renderActivity from './renderActivity';
import renderHeading from './renderHeading';
import renderProjects from './renderProjects';
import renderSkills from './renderSkills';
import renderSuffix from './renderSuffix';
import renderSummary from './renderSummary';

@injectable()
export default class DOCXPresenter implements TransformPresenter {
  transform = ({
    activities,
    basics,
    meta,
    projects,
    skills,
  }: OutputResume): Promise<Buffer> =>
    Packer.toBuffer(
      createDocument(basics, meta, [
        ...renderHeading({ basics, meta }),
        ...renderSummary(basics),
        ...renderProjects(projects),
        ...renderSkills(skills),
        ...renderActivity(activities),
        ...renderSuffix(),
      ])
    );
}
