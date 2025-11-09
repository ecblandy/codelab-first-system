"use client";

import { Code, Users, LayoutDashboard, PackageCheck } from "lucide-react";
import { motion } from "framer-motion";

const timelineEvents = [
  {
    year: "Fevereiro 2025",
    title: "Fundação da Codelab",
    description:
      "Fundada por Vinícius Blandy, a Codelab nasceu com o propósito de oferecer soluções digitais completas e de alta qualidade. Seu fundador percebeu a necessidade de formar uma equipe multidisciplinar para atender à demanda por sistemas integrados.",
    icon: <Code size={32} className="text-[#C8F904]" />,
  },
  {
    year: "2025 – Formação da Equipe",
    title: "Equipe Multidisciplinar",
    description:
      "Vinícius reuniu Humberto Nacif (Backend) e Thais Vitorino (UX/UI Design), colegas da EBAC. Com competências complementares, a equipe garante excelência em cada projeto.",
    icon: <Users size={32} className="text-[#C8F904]" />,
  },
  {
    year: "2025 – Primeiros Projetos",
    title: "Sites Institucionais",
    description:
      "A parceria deu certo desde o início, permitindo entregar projetos institucionais completos, consolidando a metodologia da equipe e fortalecendo a colaboração entre as áreas.",
    icon: <LayoutDashboard size={32} className="text-[#C8F904]" />,
  },
  {
    year: "2025 – Expansão de Soluções",
    title: "Aplicações Complexas",
    description:
      "Com a experiência adquirida, a Codelab passou a desenvolver soluções mais complexas, incluindo sistemas de fidelidade, e-commerce e dashboards.",
    icon: <PackageCheck size={32} className="text-[#C8F904]" />,
  },
];

// Variants para animação dos cards com stagger
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export default function HistorySection() {
  return (
    <section id="about" className="relative bg-[#F5F5F5] py-24 px-6 md:px-16">
      {/* Cabeçalho */}
      <div className="text-center mb-16">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-[#423E37]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Nossa História
        </motion.h2>
        <motion.p
          className="text-gray-700 text-lg md:text-xl mt-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Descubra como a Codelab evoluiu de projetos institucionais para
          soluções digitais complexas, sempre com foco em qualidade e inovação.
        </motion.p>
      </div>

      {/* Timeline */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {timelineEvents.map((event, index) => (
          <motion.div
            key={event.year}
            className="flex flex-col items-center h-full"
            variants={cardVariants}
            whileHover={{ y: -5, scale: 1.03 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {/* Ícone */}
            <div className="bg-[#423E37] p-4 rounded-full shadow-lg mb-4 flex items-center justify-center w-20 h-20">
              {event.icon}
            </div>

            {/* Conteúdo */}
            <div className="bg-[#423E37] rounded-2xl shadow-lg p-6 text-center w-full flex flex-col justify-between h-full min-h-[250px] transition-shadow duration-300 hover:shadow-2xl">
              <div>
                <span className="text-[#C8F904] font-bold text-lg">
                  {event.year}
                </span>
                <h3 className="text-white font-semibold text-xl mt-2">
                  {event.title}
                </h3>
                <p className="text-gray-200 mt-2 text-base">
                  {event.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
