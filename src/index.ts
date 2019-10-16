import { EnhancedResume } from './entities/enhanced';
import {
  TransformResumeUseCase,
  TransformResumeUseCaseType
} from './usecases/TransformResume';
import Container from './container';

export const render = (input: EnhancedResume) =>
  Container.get<TransformResumeUseCase>(TransformResumeUseCaseType).handle(
    input
  );
export default render;
