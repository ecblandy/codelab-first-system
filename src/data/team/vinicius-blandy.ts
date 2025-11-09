import { getExperience } from "@/utils/formatters";
import { TeamMember } from "../team-members";

export const vinicius: TeamMember = {
  id: 1,
  firstName: "Vinícius",
  lastName: "Blandy",
  role: "Frontend Developer & Founder",
  photo: "/assets/images/vinicius-profile.jpeg",
  description:
    "Especialista em Frontend, Vinícius lidera a equipe da Codelab e garante que todas as soluções digitais sejam criadas com alta performance e qualidade.",
  bio: "Especialista em Frontend e fundador da Codelab. Com foco em performance, escalabilidade e experiência do usuário, lidera a criação de soluções digitais inovadoras para diversos clientes.",
  yearsOfExperience: getExperience(2023, 3),
  languages: [
    { name: "Português", level: "Nativo" },
    { name: "Inglês", level: "Intermediário" },
  ],
  experience: [
    {
      position: "Frontend Developer",
      company: "Codelab",
      period: "2025 – Atual",
      description:
        "Como fundador e líder da Codelab, atuo diretamente como frontend developer no desenvolvimento de sistemas web, conduzindo o primeiro contato com clientes para entender necessidades e objetivos. Coordeno reuniões de alinhamento com equipes de UX/UI e backend, garantindo que todas as etapas do projeto sejam entregues com qualidade, eficiência e foco na experiência do usuário.",
      stacks: {
        skills: [
          "Clean Code",
          "SOLID",
          "Component-Based Architecture",
          "Design Patterns",
          "GitFlow",
          "Styled-Components",
          "Bootstrap",
          "Gulp",
          "Grunt",
          "Sass",
          "Less",
          "Axios",
        ],
        frameworks: [
          "React",
          "Next.js",
          "Tailwind CSS",
          "Framer Motion",
          "Zod",
          "Vite",
        ],
        languages: ["JavaScript", "TypeScript", "Node.js"],
        api: ["RESTful API"],
        testing: ["Cypress", "Jest"],
        cssHtml: ["HTML", "CSS", "Tailwind"],
        other: [
          "SEO e otimização de performance",
          "Responsividade e acessibilidade",
          "Deploy e automação de builds",
          "GIT/GitHub",
        ],
      },
    },
    {
      position: "Frontend Developer",
      company: "Easy Ofertas - AllStack",
      period: "2025 – atual",
      description:
        "Desenvolvimento de aplicações web para clientes variados, focando em interfaces intuitivas, performance e integração com APIs externas.",
      stacks: {
        skills: ["Clean Code", "SOLID"],
        frameworks: ["React", "Next.js", "Tailwind CSS"],
        languages: ["JavaScript"],
        api: ["RESTful API"],
        testing: ["Jest", "Cypress"],
        cssHtml: ["HTML", "CSS"],
        other: ["Git/GitHub"],
      },
    },
  ],
  education: [
    {
      degree: "Engenheiro Frontend",
      institution: "EBAC - Escola Britânica de Artes Criativas e Tecnologias",
      period: "2023 – 2024",
    },
    {
      degree: "Analise e Desenvolvimento de Sistemas",
      institution: "UNIME",
      period: "2024 – 2027",
    },
  ],
  address: "Salvador, Bahia – Brasil",
  email: "----",
  phone: "+55 71 99402-7893",
  linkedin: "https://www.linkedin.com/in/viniciusblandy/",
  github: "https://github.com/ecblandy",
  behance: "",
  cvLink: "/assets/cv/vinicius-blandy-cv.pdf",
  portfolio: [
    {
      title: "Landing Page Corporativa",
      description:
        "Desenvolvimento completo de landing page para cliente institucional.",
      link: "#",
    },
    {
      title: "Dashboard de Gestão",
      description:
        "Sistema integrado para controle administrativo e financeiro de empresas.",
      link: "#",
    },
    {
      title: "Aplicativo de Fidelidade",
      description:
        "Sistema para programas de fidelidade com frontend moderno e responsivo.",
      link: "#",
    },
  ],
  route: "/team/vinicius-blandy",
  mostUsedTechs: [
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Docker",
    "Portainer",
    "Zod",
    "Framer Motion",
  ],
};
