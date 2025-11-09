"use client";

import { useState } from "react";
import { ImageGallery } from "@/components/landing-page/projects/id/image-gallery";
import { ProjectHeader } from "@/components/landing-page/projects/id/project-header";
import { motion } from "framer-motion";
import { useParams } from "next/navigation";
import { ArrowUpRight } from "lucide-react";

type Project = {
  title: string;
  type: string;
  description: string;
  figmaUrl: string;
  siteUrl?: string;
  images: string[];
};

const projectData: Record<string, Project> = {
  fidnovax: {
    title: "FIDNOVAX – Sistema de Pontos para Lojistas",
    type: "Desenvolvido do zero",
    description:
      "Plataforma web onde lojistas podem cadastrar clientes, registrar compras e oferecer recompensas. Inclui autenticação, dashboards, QR Codes e painel administrativo. O sistema foi planejado do zero com foco em escalabilidade e experiência do usuário, com telas modernas e intuitivas criadas pela equipe de UX/UI da CodeLab.",
    figmaUrl:
      "https://www.figma.com/design/aBKm8nYvecEjyPAbNhtrzk/FIDNOVAX---2?node-id=0-1&p=f&t=EYVcbgRE2e9CDpZk-0",
    siteUrl: "https://fidnovax.com.br/",
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
  "fec-safe": {
    title: "FEC Safe - Plataforma Web Completa",
    type: "Desenvolvido do zero",
    description:
      "Sistema completo para visualização de métricas e indicadores de performance de empresas, com gráficos interativos e controle de acessos.",
    figmaUrl:
      "https://www.figma.com/design/8U7cL1HjGyEachHKYLTxts/FEC-Safe?node-id=10-1280&p=f",
    siteUrl: "https://fecrental.com/",
    images: [
      "/assets/images/fec-dashboard.jpeg",
      "/assets/images/fec-equipamentos.svg",
      "/assets/images/fec-registro.svg",
      "/assets/images/fec-contratos.svg",
    ],
  },
  arktech: {
    title: "Arktech - Site Institucional com Blog",
    type: "Desenvolvido do zero",
    description:
      "A Arktech, empresa sediada na Inglaterra, precisava de um site institucional moderno com área de blog. A CodeLab desenvolveu uma plataforma leve, responsiva e otimizada para SEO, garantindo alta performance, acessibilidade e uma presença digital profissional no mercado europeu.",
    figmaUrl:
      "https://www.figma.com/design/UOI1ylluP0QR1H9J7zmHyj/Projetos?node-id=225-2&p=f&t=WZPSuMxxAHIVbQIL-0",
    images: [
      "/assets/images/arktech-home.svg",
      "/assets/images/arktech-about.svg",
      "/assets/images/arktech-services.svg",
      "/assets/images/arktech-blog.svg",
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

      {/* Botões de ação */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {project.figmaUrl && (
          <motion.a
            href={project.figmaUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -2 }}
            transition={{ duration: 0.3 }}
            className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl shadow-lg font-semibold text-[#1A1A1A] bg-[#C8F904] hover:bg-[#D8FF32] transition-colors min-h-[50px]"
          >
            Ver no Figma
            <ArrowUpRight size={18} />
          </motion.a>
        )}

        {project.siteUrl && (
          <motion.a
            href={project.siteUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -2 }}
            transition={{ duration: 0.3 }}
            className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl shadow-lg font-semibold text-[#C8F904] bg-[#423E37] hover:bg-[#323030] transition-colors min-h-[50px]"
          >
            Ver site real
            <ArrowUpRight size={18} />
          </motion.a>
        )}
      </div>

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
            className="px-6 py-3 bg-[#423E37] text-[#C8F904] font-semibold rounded-xl hover:bg-[#323030] transition-all shadow-md min-h-[50px]"
          >
            Ver mais
          </motion.button>
        </motion.div>
      )}
    </motion.section>
  );
}
