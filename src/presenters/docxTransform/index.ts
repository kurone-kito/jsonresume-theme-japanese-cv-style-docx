import { Packer } from 'docx';
import { injectable } from 'inversify';
import 'reflect-metadata';
import { OutputResume } from '../../entities/enhanced';
import { TransformPresenter } from '../../usecases/TransformResume';
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
    skills
  }: OutputResume) => {
    const doc = createDocument(basics, meta);
    doc.addSection({
      children: [
        ...renderHeading({ basics, meta }),
        ...renderSummary(basics),
        ...renderProjects(projects),
        ...renderSkills(skills),
        ...renderActivity(activities),
        ...renderSuffix()
      ]
    });

    return Packer.toBuffer(doc);
  };
}
