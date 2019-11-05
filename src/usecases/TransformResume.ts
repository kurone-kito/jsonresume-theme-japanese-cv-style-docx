import { inject, injectable } from 'inversify';
import 'reflect-metadata';
import { EnhancedResume, OutputResume } from '~/entities/enhanced';
import createActivity from '~/entities/createActivity';
import groupBySkills from '~/entities/groupBySkills';

export const TransformResumeUseCaseType = Symbol.for('TransformResumeUseCase');

export interface TransformResumeUseCase {
  handle: (input: EnhancedResume) => Promise<Buffer>;
}

export const TransformPresenterType = Symbol.for('TransformPresenter');

export interface TransformPresenter {
  transform: (output: OutputResume) => Promise<Buffer>;
}

@injectable()
export class TransformResumeInteractor implements TransformResumeUseCase {
  private readonly presenter: TransformPresenter;

  constructor(@inject(TransformPresenterType) presenter: TransformPresenter) {
    this.presenter = presenter;
  }

  public readonly handle = ({ skills, ...input }: EnhancedResume) =>
    this.presenter.transform({
      ...input,
      activities: createActivity(input),
      skills: groupBySkills(skills)
    });
}
