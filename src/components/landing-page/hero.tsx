"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";

// Importação dinâmica do Canvas (evita SSR)
const CodeCubeScene = dynamic(() => import("./code-cube"), {
  ssr: false,
});

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.8 },
  }),
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-16 py-24 bg-[#423E37]"
    >
      {/* Texto Hero */}
      <div className="md:w-1/2 flex flex-col gap-6 text-white">
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold leading-tight"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
        >
          Bem-vindo à <span className="text-[#C8F904]">Codelab</span>
        </motion.h1>

        <motion.p
          className="text-gray-300 text-lg md:text-xl leading-relaxed"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={1}
        >
          Transformamos ideias em soluções digitais de alto impacto. Do design
          ao desenvolvimento, entregamos experiências completas que impulsionam
          o crescimento da sua empresa.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 mt-6"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={2}
        >
          <a
            href="#about"
            className="bg-[#C8F904] text-[#423E37] px-6 py-3 rounded-lg font-semibold text-lg hover:scale-105 transition-transform shadow-md focus:outline-none focus:ring-2 focus:ring-[#C8F904]"
          >
            Conheça mais
          </a>
          <a
            href="https://wa.me/5571994027893"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-transparent border border-[#C8F904] text-[#C8F904] px-6 py-3 rounded-lg font-semibold text-lg hover:bg-[#C8F904] hover:text-[#423E37] transition-all shadow-md focus:outline-none focus:ring-2 focus:ring-[#C8F904]"
          >
            Fale no WhatsApp
          </a>
        </motion.div>
      </div>

      {/* Canvas Three.js */}
      <motion.div
        className="md:w-1/2 mb-12 md:mb-0 flex justify-center md:justify-end relative"
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        custom={3}
      >
        <div className="relative w-full h-[600px] rounded-3xl overflow-hidden ">
          <CodeCubeScene />-
        </div>
      </motion.div>
    </section>
  );
}
