import { getExperience } from "@/utils/formatters";
import { TeamMember } from "../team-members";

export const humberto: TeamMember = {
  id: 2,
  firstName: "Humberto",
  lastName: "Nacif",
  role: "Backend Developer",
  photo: "/assets/images/humberto-nacif.jpg",
  description:
    "Back-end Developer especializado no desenvolvimento de APIs REST, automação de processos e deploy de aplicações escaláveis e seguras.",
  bio: `Back-end Developer especializado no desenvolvimento de APIs REST, automação de processos e deploy de aplicações escaláveis e seguras.

Atuação com foco em back-end, utilizando Python, Django e PostgreSQL, além de práticas sólidas de infraestrutura, segurança e deploy com Docker, VPS, Nginx Proxy Manager, Fail2Ban e UFW.

Experiência no desenvolvimento de sistemas robustos, abrangendo modelagem de dados, autenticação via JWT, integração com serviços como e-mail, WhatsApp, reCAPTCHA, testes automatizados com Pytest e pipelines de CI/CD com GitHub Actions.

Domínio na configuração de ambientes produtivos, gestão de servidores e aplicação de boas práticas de segurança e deploy.

Possuo também experiência no desenvolvimento front-end, atuando em projetos específicos com React, Next.js e TypeScript, aplicando ferramentas como Redux, Styled-components e Vite, o que contribui para uma visão completa da integração entre back-end e front-end.`,
  yearsOfExperience: getExperience(2023, 1),
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
        frameworks: ["Django", "Django REST Framework"],
        languages: ["Python", "SQL"],
        api: ["RESTful API", "JWT", "API Integration"],
        testing: ["Pytest"],
        cssHtml: [],
        other: ["Docker", "Nginx", "Git/GitHub"],
      },
    },
  ],
  education: [
    {
      degree: "Desenvolvedor Full Stack Python",
      institution: "EBAC",
      period: "2023 – 2024",
    },
  ],
  address: "Minas Gerais – Brasil",
  email: "----",
  phone: "+55 62 993618-0408",
  linkedin: "https://linkedin.com/in/humberto-nacif",
  github: "https://github.com/histereogenik",
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
  mostUsedTechs: ["Django", "Python", "SQL", "Docker", "Nginx", "Git/GitHub"],
  allStack: [
    "Python",
    "Django",
    "Django REST Framework",
    "PostgreSQL",
    "SQL",
    "AsyncIO",
    "Flask",
    "SQLAlchemy",
    "JWT",
    "API Integration",
    "Pytest",
    "Docker",
    "Docker Hub",
    "VPS",
    "Linux",
    "Nginx Proxy Manager",
    "Nginx",
    "Gunicorn",
    "UFW",
    "Fail2Ban",
    "Git",
    "GitHub",
    "CI/CD (GitHub Actions)",
    "Vagrant",
    "FTP",
    "AWS",
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Redux",
    "Styled-components",
    "Bootstrap",
    "Vite",
    "Formik",
    "Yup",
    "HTML",
    "CSS",
    "SASS",
    "Less",
    "Django Admin",
    "Django Templates",
    "Django Views",
    "Twig",
    "Bootstrap Icons",
    "ESLint",
    "Prettier",
    "Grunt",
    "Gulp",
    "Webhooks",
    "Integração com Gateway de Pagamento",
    "Controle de Acesso por Status",
    "Monitoramento de Logs",
    "Django Signals",
    "Django Permissions Avançado",
    "Fail2Ban",
    "Auditoria de Transações",
    "Modelagem Relacional Avançada",
  ],
};
