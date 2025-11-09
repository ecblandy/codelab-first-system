import { vinicius } from "./team/vinicius-blandy";
import { humberto } from "./team/humberto";
import { thais } from "./team/thais";

export interface TeamMember {
  id: number;
  firstName: string;
  lastName: string;
  role: string;
  photo: string;
  description: string;
  bio: string;
  yearsOfExperience?: number;
  languages?: { name: string; level: string }[];
  experience: {
    position: string;
    company: string;
    period: string;
    description?: string;
    stacks?: {
      skills?: string[];
      frameworks?: string[];
      languages?: string[];
      architecture?: string[];
      api?: string[];
      testing?: string[];
      cssHtml?: string[];
      other?: string[];
    };
  }[];
  education: {
    degree: string;
    institution: string;
    period: string;
  }[];
  address: string;
  email: string;
  phone: string;
  linkedin?: string;
  github?: string;
  behance?: string;
  cvLink?: string;
  portfolio: {
    title: string;
    description: string;
    link: string;
  }[];
  route: string;
  mostUsedTechs?: string[]; // Lista das tecnologias mais usadas pelo usuário
}

export const teamMembers = [vinicius, humberto, thais];
