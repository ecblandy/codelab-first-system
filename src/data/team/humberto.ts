import { TeamMember } from "../team-members";

export const humberto: TeamMember = {
  id: 2,
  firstName: "Humberto",
  lastName: "Nacif",
  role: "Backend Developer",
  photo: "/assets/images/humberto-nacif.jpg",
  description:
    "Humberto é especialista em Backend, desenvolvendo sistemas robustos, seguros e escaláveis, garantindo que todas as soluções da Codelab funcionem perfeitamente.",
  bio: "Humberto atua como Backend Developer na Codelab. Sua expertise é construir APIs, gerenciar bancos de dados e integrar sistemas complexos, assegurando performance e confiabilidade.",
  yearsOfExperience: 4,
  languages: [
    { name: "Português", level: "Nativo" },
    { name: "Inglês", level: "Avançado" },
  ],
  experience: [
    {
      position: "Backend Developer",
      company: "Codelab",
      period: "2025 – Atual",
      description:
        "Desenvolvo APIs escaláveis e seguras, gerencio banco de dados e integro sistemas complexos. Meu foco é performance, segurança e escalabilidade do backend.",
      stacks: {
        skills: ["Clean Code", "SOLID", "Design Patterns", "GitFlow"],
        frameworks: ["Node.js", "Express"],
        languages: ["JavaScript", "TypeScript", "Node.js"],
        api: ["RESTful API", "Tratamento de erros"],
        testing: ["Jest"],
        cssHtml: ["HTML", "CSS"],
        other: ["PostgreSQL", "Prisma", "JWT", "Docker", "MySQL", "MongoDB"],
      },
    },
    {
      position: "Desenvolvedor Fullstack Junior",
      company: "Projetos diversos",
      period: "2024 – 2025",
      description:
        "Atuação em projetos fullstack, desenvolvendo tanto frontend quanto backend, garantindo funcionalidades completas e integradas.",
      stacks: {
        skills: ["Clean Code", "SOLID"],
        frameworks: ["Node.js", "React"],
        languages: ["JavaScript", "TypeScript"],
        api: ["RESTful API"],
        testing: ["Jest"],
        cssHtml: ["HTML", "CSS"],
        other: ["SQL"],
      },
    },
  ],
  education: [
    {
      degree: "Bacharel em Ciência da Computação",
      institution: "EBAC",
      period: "2021 – 2025",
    },
    {
      degree: "Cursos de Node.js e SQL Avançado",
      institution: "Udemy / Alura",
      period: "2023 – 2024",
    },
  ],
  address: "Salvador, Bahia – Brasil",
  email: "humberto@codelab.com",
  phone: "+55 71 9XXXX-XXXX",
  linkedin: "https://linkedin.com/in/humberto-nacif",
  github: "https://github.com/humberto",
  behance: "",
  cvLink: "/assets/cv/humberto-nacif-cv.pdf",
  portfolio: [
    {
      title: "API para E-commerce",
      description:
        "Desenvolvimento de API escalável para sistema de vendas online.",
      link: "#",
    },
    {
      title: "Sistema de Pontos de Fidelidade",
      description:
        "Backend completo para gerenciamento de pontos e recompensas.",
      link: "#",
    },
    {
      title: "Dashboard Administrativo",
      description: "Estrutura backend para dashboard de controle empresarial.",
      link: "#",
    },
  ],
  route: "/team/humberto-nacif",
  mostUsedTechs: [
    "Node.js",
    "Express",
    "PostgreSQL",
    "Prisma",
    "JWT",
    "Docker",
  ],
};
