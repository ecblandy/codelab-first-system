"use client";

import { useState } from "react";
import { ImageGallery } from "@/components/landing-page/projects/id/image-gallery";
import { ProjectHeader } from "@/components/landing-page/projects/id/project-header";
import { motion } from "framer-motion";
import { useParams } from "next/navigation";
import { ArrowUpRight } from "lucide-react";

const projectData = {
  "sistema-pontos": {
    title: "FIDNOVAX – Sistema de Pontos para Lojistas",
    type: "Desenvolvido do zero",
    description:
      "Plataforma web onde lojistas podem cadastrar clientes, registrar compras e oferecer recompensas. Inclui autenticação, dashboards, QR Codes e painel administrativo. O sistema foi planejado do zero com foco em escalabilidade e experiência do usuário, com telas modernas e intuitivas criadas pela equipe de UX/UI da CodeLab.",
    figmaUrl:
      "https://www.figma.com/design/aBKm8nYvecEjyPAbNhtrzk/FIDNOVAX---2?node-id=0-1&p=f&t=EYVcbgRE2e9CDpZk-0",
    images: [
      "/assets/images/fidnovax-login.svg",
      "/assets/images/fidnovax-login-2.svg",
      "/assets/images/fidnovax-register-store.svg",
      "/assets/images/fidnovax-register-store-2.svg",
      "/assets/images/fidnovax-register-customer.svg",
      "/assets/images/fidnovax-landing.svg",
      "/assets/images/fidnovax-dashboard-store.svg",
      "/assets/images/fidnovax-dashboard-store-2.svg",
      "/assets/images/fidnovax-dashboard-store-3.svg",
      "/assets/images/fidnovax-dashboard-store-4.svg",
      "/assets/images/fidnovax-dashboard-store-5.svg",
      "/assets/images/fidnovax-dashboard-customer.svg",
      "/assets/images/fidnovax-dashboard-customer-2.svg",
      "/assets/images/fidnovax-dashboard-customer-3.svg",
      "/assets/images/fidnovax-dashboard-admin.svg",
      "/assets/images/findovax-dashboard-admin-2.svg",
      "/assets/images/fidnovax-dashboard-admin-3.svg",
      "/assets/images/fidnovax-dashboard-admin-4.svg",
    ],
  },
  "dashboard-gestao": {
    title: "Dashboard de Gestão Empresarial",
    type: "Desenvolvido do zero",
    description:
      "Sistema completo para visualização de métricas e indicadores de performance de empresas, com gráficos interativos e controle de acessos.",
    figmaUrl: "https://www.figma.com/file/EXEMPLO_LINK_DASHBOARD",
    images: [
      "/images/projects/dashboard1.jpg",
      "/images/projects/dashboard2.jpg",
      "/images/projects/dashboard3.jpg",
    ],
  },
  "refatoracao-blog": {
    title: "Refatoração de Blog Corporativo",
    type: "Refatoração de tela e funcionalidades",
    description:
      "Refatoramos completamente o layout e o código do blog, melhorando SEO, performance e tornando a experiência responsiva em todos os dispositivos.",
    figmaUrl: "https://www.figma.com/file/EXEMPLO_LINK_REDESIGN_BLOG",
    images: [
      "/images/projects/blog-before.jpg",
      "/images/projects/blog-after.jpg",
      "/images/projects/blog-dashboard.jpg",
    ],
  },
};

export default function ProjectPage() {
  const { id } = useParams();
  const project = projectData[id as keyof typeof projectData];
  const [visibleCount, setVisibleCount] = useState(6);

  if (!project)
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-300">
        Projeto não encontrado.
      </div>
    );

  const visibleImages = project.images.slice(0, visibleCount);
  const hasMore = visibleCount < project.images.length;

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-[#1A1A1A] text-gray-100 py-24 px-6"
    >
      {/* Cabeçalho */}
      <ProjectHeader
        title={project.title}
        type={project.type}
        description={project.description}
      />

      {/* Botão Figma */}
      {project.figmaUrl && (
        <motion.a
          href={project.figmaUrl}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05, y: -2 }}
          transition={{ duration: 0.3 }}
          className="flex items-center justify-center gap-2 bg-[#C8F904] text-[#1A1A1A] font-semibold mx-auto w-fit px-6 py-3 rounded-xl shadow-lg hover:bg-[#D8FF32] transition-colors mb-12"
        >
          Ver no Figma
          <ArrowUpRight size={18} />
        </motion.a>
      )}

      {/* Galeria de imagens */}
      <ImageGallery images={visibleImages} />

      {/* Botão Ver Mais */}
      {hasMore && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex justify-center mt-10"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => setVisibleCount((prev) => prev + 6)}
            className="px-6 py-3 bg-[#423E37] text-[#C8F904] font-semibold rounded-xl hover:bg-[#323030] transition-all shadow-md"
          >
            Ver mais
          </motion.button>
        </motion.div>
      )}
    </motion.section>
  );
}
