import { Container } from 'inversify';
import DocxPresenter from './presenters/docxTransform';
import {
  TransformPresenter,
  TransformPresenterType,
  TransformResumeInteractor,
  TransformResumeUseCase,
  TransformResumeUseCaseType,
} from './usecases/TransformResume';

const container = new Container();
container.bind<TransformPresenter>(TransformPresenterType).to(DocxPresenter);
container
  .bind<TransformResumeUseCase>(TransformResumeUseCaseType)
  .to(TransformResumeInteractor);

export default container;
