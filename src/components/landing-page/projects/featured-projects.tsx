"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ArrowRight, ExternalLink } from "lucide-react";

const projects = [
  {
    id: "sistema-pontos",
    title: "FIDNOVAX — Sistema de Pontos para Lojistas",
    type: "Desenvolvido do zero",
    description:
      "Plataforma completa onde clientes acumulam pontos e trocam por recompensas. Inclui painel do lojista, área do cliente e dashboard administrativo. Desenvolvido do zero pela CodeLab.",
    image: "/assets/images/fidnovax-landing.png",
  },
  {
    id: "dashboard-gestao",
    title: "Dashboard de Gestão Empresarial",
    type: "Desenvolvido do zero",
    description:
      "Sistema web criado para automatizar processos internos e facilitar o acompanhamento de métricas em tempo real. Interface moderna, com gráficos e autenticação segura.",
    image: "/images/projects/dashboard.jpg",
  },
  {
    id: "refatoracao-blog",
    title: "Refatoração de Blog Corporativo",
    type: "Refatoração de tela e funcionalidades",
    description:
      "Melhoria de performance e acessibilidade em um blog institucional. A CodeLab otimizou SEO, layout e carregamento de imagens, além de reestruturar o código frontend.",
    image: "/images/projects/blog.jpg",
  },
];

export default function FeaturedProjects() {
  const router = useRouter();

  return (
    <motion.section
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="relative bg-[#2C2C2C] text-gray-100 py-24 px-6 md:px-16 overflow-hidden"
    >
      {/* Fundo animado sutil */}
      <motion.div
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute inset-0 opacity-20 bg-gradient-to-tr from-[#C8F904] via-[#423E37] to-[#1A1A1A] bg-[length:400%_400%] z-0"
      />

      {/* Cabeçalho */}
      <div className="relative z-10 max-w-6xl mx-auto text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold text-[#C8F904] mb-4"
        >
          Projetos em Destaque
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-gray-300 max-w-3xl mx-auto"
        >
          Conheça alguns dos trabalhos mais relevantes que desenvolvemos — de
          sistemas criados do zero a refatorações completas para melhorar
          performance e experiência do usuário.
        </motion.p>
      </div>

      {/* Cards */}
      <div className="relative z-10 grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            viewport={{ once: true }}
            className="group relative bg-[#423E37] hover:bg-[#35322C] transition-all duration-300 rounded-2xl overflow-hidden shadow-lg flex flex-col"
          >
            <div className="relative h-56 w-full overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-all duration-500" />
            </div>

            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-2xl font-semibold text-[#C8F904] mb-2">
                {project.title}
              </h3>
              <span className="text-sm text-gray-400 mb-3 italic">
                {project.type}
              </span>
              <p className="text-gray-300 text-sm flex-1 leading-relaxed">
                {project.description}
              </p>

              <motion.button
                whileHover={{ scale: 1.05 }}
                onClick={() => router.push(`/project/${project.id}`)}
                className="mt-6 bg-[#C8F904] text-[#1A1A1A] px-4 py-2 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all hover:bg-[#D4FA2A]"
              >
                Ver Detalhes <ExternalLink size={18} />
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Botão "Ver todos" */}
      {/* <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="relative z-10 flex justify-center mt-16"
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          onClick={() => router.push("/project")}
          className="bg-[#C8F904] text-[#1A1A1A] px-6 py-3 rounded-xl font-semibold flex items-center gap-2 shadow-md hover:bg-[#D4FA2A] transition-all"
        >
          Ver Todos os Projetos <ArrowRight size={20} />
        </motion.button>
      </motion.div> */}
    </motion.section>
  );
}
