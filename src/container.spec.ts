import Container from './container';
import DocxPresenter from './presenters/docxTransform';
import {
  TransformResumeUseCaseType,
  TransformResumeInteractor,
  TransformPresenterType,
} from './usecases/TransformResume';

describe('container test', () => {
  it.each<[symbol, NewableFunction]>([
    [TransformResumeUseCaseType, TransformResumeInteractor],
    [TransformPresenterType, DocxPresenter],
  ])('Container.get(%p) => %p', (symbol, expected) =>
    expect(Container.get(symbol)).toBeInstanceOf(expected)
  );
});
