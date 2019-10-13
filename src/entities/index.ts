import { ResumeSchema } from '@kurone-kito/jsonresume-types';

export type Award = NonNullable<ResumeSchema['awards']>[number];
export type Basics = NonNullable<ResumeSchema['basics']>;
export type Education = NonNullable<ResumeSchema['education']>[number];
export type Interest = NonNullable<ResumeSchema['interests']>[number];
export type Language = NonNullable<ResumeSchema['languages']>[number];
export type Meta = NonNullable<ResumeSchema['meta']>;
export type Project = NonNullable<ResumeSchema['projects']>[number];
export type Publication = NonNullable<ResumeSchema['publications']>[number];
export type Reference = NonNullable<ResumeSchema['references']>[number];
export type Skill = NonNullable<ResumeSchema['skills']>[number];
export type Volunteer = NonNullable<ResumeSchema['volunteer']>[number];
export type Work = NonNullable<ResumeSchema['work']>[number];
export type Location = NonNullable<Basics['location']>;
export type Profile = NonNullable<Basics['profiles']>[number];
