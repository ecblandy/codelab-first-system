import { TeamMember } from "../team-members";

export const thais: TeamMember = {
  id: 3,
  firstName: "Thais",
  lastName: "Vitorino",
  role: "UX/UI Designer",
  photo: "/assets/images/thais-viturino.jpg",
  description:
    "Thais é especialista em UX/UI Design, criando interfaces intuitivas e experiências digitais memoráveis, garantindo excelência visual e usabilidade.",
  bio: "Thais atua como UX/UI Designer na Codelab. Focada em design centrado no usuário, desenvolve interfaces criativas e funcionais, garantindo uma experiência digital de alta qualidade.",
  yearsOfExperience: 4,
  languages: [
    { name: "Português", level: "Nativo" },
    { name: "Inglês", level: "Avançado" },
  ],
  experience: [
    {
      position: "UX/UI Designer",
      company: "Codelab",
      period: "2025 – Atual",
      description:
        "Crio interfaces intuitivas e funcionais, focando em experiência do usuário. Participo do planejamento, prototipagem e implementação de projetos digitais com atenção à estética e usabilidade.",
      stacks: {
        skills: ["Design centrado no usuário", "UX/UI Patterns"],
        frameworks: ["Figma", "Adobe XD", "Illustrator", "Photoshop"],
        languages: ["HTML", "CSS", "JavaScript"],
        api: [],
        testing: [],
        cssHtml: ["HTML", "CSS"],
        other: ["Web Design", "Responsividade", "Acessibilidade"],
      },
    },
    {
      position: "Designer Freelancer",
      company: "Projetos diversos",
      period: "2024 – 2025",
      description:
        "Atuação em projetos diversos de design, incluindo landing pages, dashboards e aplicações web, garantindo qualidade visual e UX consistente.",
      stacks: {
        skills: ["Design centrado no usuário"],
        frameworks: ["Figma", "Adobe XD", "Photoshop", "Illustrator"],
        languages: ["HTML", "CSS", "JavaScript"],
        api: [],
        testing: [],
        cssHtml: ["HTML", "CSS"],
        other: ["Web Design", "Responsividade", "Acessibilidade"],
      },
    },
  ],
  education: [
    {
      degree: "Bacharel em Design Digital",
      institution: "EBAC",
      period: "2021 – 2025",
    },
    {
      degree: "Cursos de UX/UI e Design Systems",
      institution: "Domestika / Udemy",
      period: "2023 – 2024",
    },
  ],
  address: "Salvador, Bahia – Brasil",
  email: "thais@codelab.com",
  phone: "+55 71 9XXXX-XXXX",
  linkedin: "https://linkedin.com/in/thais-vitorino",
  github: "",
  behance: "https://www.behance.net/thaisvitorino",
  cvLink: "/assets/cv/thais-vitorino-cv.pdf",
  portfolio: [
    {
      title: "Redesign de Aplicativo",
      description: "Projeto de redesign focado em experiência do usuário.",
      link: "#",
    },
    {
      title: "Landing Page Criativa",
      description: "Desenvolvimento de landing pages modernas e intuitivas.",
      link: "#",
    },
    {
      title: "Dashboard UX/UI",
      description:
        "Design completo de dashboard corporativo com foco em usabilidade.",
      link: "#",
    },
  ],
  route: "/team/thais-vitorino",
  mostUsedTechs: [
    "Figma",
    "Adobe XD",
    "Illustrator",
    "Photoshop",
    "HTML",
    "CSS",
  ],
};
