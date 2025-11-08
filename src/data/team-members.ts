export interface TeamMember {
  id: number;
  firstName: string;
  lastName: string;
  role: string;
  yearsOfExperience?: number; // Anos de experiência
  languages?: { name: string; level: string }[]; // Idiomas e nível
  photo: string;
  description: string;
  bio: string;
  experience: {
    position: string;
    company: string;
    period: string;
    description?: string; // Descrição detalhada da experiência
    stacks?: string[]; // Tecnologias usadas em cada experiência
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
  cvLink?: string; // Novo campo para link do CV
  portfolio: {
    title: string;
    description: string;
    link: string;
  }[];
  route: string;
  stacks?: string[]; // Stacks principais do membro
}

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    firstName: "Vinícius",
    lastName: "Blandy",
    role: "Frontend Developer & Founder",
    photo: "/assets/images/vinicius-profile.jpeg",
    description:
      "Especialista em Frontend, Vinícius lidera a equipe da Codelab e garante que todas as soluções digitais sejam criadas com alta performance e qualidade.",
    bio: "Vinícius é especialista em Frontend e fundador da Codelab. Com foco em performance, escalabilidade e experiência do usuário, lidera a criação de soluções digitais inovadoras para diversos clientes.",
    yearsOfExperience: 4,
    languages: [
      { name: "Português", level: "Nativo" },
      { name: "Inglês", level: "Avançado" },
    ],
    experience: [
      {
        position: "Frontend Developer",
        company: "Codelab",
        period: "2025 – Atual",
        description:
          "Atuo no desenvolvimento de sistemas web em equipe, colaborando na criação de interfaces modernas, responsivas e integradas a APIs. Participo de todo o ciclo de desenvolvimento desde o planejamento até testes e melhorias de performance.",
        stacks: [
          "React",
          "Next.js",
          "TypeScript",
          "Tailwind CSS",
          "Framer Motion",
          "Zod",
          "Docker",
        ],
      },
      {
        position: "Freelancer Frontend",
        company: "Projetos diversos",
        period: "2024 – 2025",
        description:
          "Desenvolvimento de aplicações web para clientes variados, focando em interfaces intuitivas, performance e integração com APIs externas.",
        stacks: ["React", "JavaScript", "CSS3", "HTML5", "Tailwind CSS"],
      },
    ],
    education: [
      {
        degree: "Bacharel em Sistemas de Informação",
        institution: "EBAC",
        period: "2022 – 2025",
      },
      {
        degree: "Cursos de Frontend Avançado",
        institution: "Udemy / Platzi",
        period: "2021 – 2022",
      },
    ],
    address: "Salvador, Bahia – Brasil",
    email: "vinicius@codelab.com",
    phone: "+55 71 9XXXX-XXXX",
    linkedin: "https://linkedin.com/in/vinicius",
    github: "https://github.com/vinicius",
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
    stacks: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
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
        stacks: ["Node.js", "Express", "PostgreSQL", "Prisma", "JWT", "Docker"],
      },
      {
        position: "Desenvolvedor Fullstack Junior",
        company: "Projetos diversos",
        period: "2024 – 2025",
        description:
          "Atuação em projetos fullstack, desenvolvendo tanto frontend quanto backend, garantindo funcionalidades completas e integradas.",
        stacks: ["Node.js", "React", "SQL", "JavaScript"],
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
        description:
          "Estrutura backend para dashboard de controle empresarial.",
        link: "#",
      },
    ],
    route: "/team/humberto-nacif",
    stacks: ["Node.js", "Express", "PostgreSQL", "Prisma", "JWT"],
  },
  {
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
        stacks: ["Figma", "Adobe XD", "Illustrator", "Photoshop", "Web Design"],
      },
      {
        position: "Designer Freelancer",
        company: "Projetos diversos",
        period: "2024 – 2025",
        description:
          "Atuação em projetos diversos de design, incluindo landing pages, dashboards e aplicações web, garantindo qualidade visual e UX consistente.",
        stacks: ["Figma", "Adobe XD", "Photoshop", "Illustrator"],
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
    stacks: ["Figma", "Adobe XD", "Illustrator", "Photoshop", "Web Design"],
  },
];
