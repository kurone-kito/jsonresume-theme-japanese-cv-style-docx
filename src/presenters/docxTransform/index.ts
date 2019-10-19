import { Packer } from 'docx';
import { injectable } from 'inversify';
import 'reflect-metadata';
import { OutputResume } from '../../entities/enhanced';
import { TransformPresenter } from '../../usecases/TransformResume';
import createDocument from './createDocument';
import renderHeading from './renderHeading';
import renderSuffix from './renderSuffix';
import renderSummary from './renderSummary';

@injectable()
export default class DOCXPresenter implements TransformPresenter {
  transform = ({ basics, meta }: OutputResume) => {
    const doc = createDocument(basics, meta);
    doc.addSection({
      children: [
        ...renderHeading({ basics, meta }),
        ...renderSummary(basics),
        ...renderSuffix()
      ]
    });

    return Packer.toBuffer(doc);
  };
}
