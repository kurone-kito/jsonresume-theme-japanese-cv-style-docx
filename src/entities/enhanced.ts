import { ResumeSchema } from '@kurone-kito/jsonresume-types';
import { Activity } from './createActivity';
import { GroupedSkill } from './groupBySkills';
import { Project, Skill } from '.';

export interface ProjectEnv {
  languages?: string[];
  os?: string[];
  platforms?: string[];
}

export type EnhancedProject = Project & { env?: ProjectEnv };

export type EnhancedSkill = Skill & { tags?: string | string[] };

export interface EnhancedResume extends ResumeSchema {
  projects?: EnhancedProject[];
  skills?: EnhancedSkill[];
}

export interface OutputResume
  extends Omit<
    EnhancedResume,
    'projects' | 'publications' | 'skills' | 'volunteer'
  > {
  activities?: Activity[];
  projects?: EnhancedProject[];
  skills?: GroupedSkill[];
}
