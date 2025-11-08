"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Linkedin, Instagram, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-[#423E37] text-gray-300 pt-16 pb-8 px-6 md:px-16">
      {/* Fundo animado */}
      <motion.div
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute inset-0 bg-gradient-to-tr from-[#423E37] via-[#1A1A1A] to-[#C8F904]/10 opacity-20 bg-[length:400%_400%] z-0"
      />

      <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-3 gap-10 items-center">
        {/* Logo e descrição */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center md:items-start text-center md:text-left"
        >
          <Image
            src="/assets/images/logo-codelab.svg" // ajuste o caminho da logo
            alt="Logo CodeLab"
            width={160}
            height={50}
            className="mb-4"
          />
          <p className="text-gray-400 max-w-sm text-sm leading-relaxed">
            Transformamos ideias em soluções digitais com design, performance e
            tecnologia de ponta.
          </p>
        </motion.div>

        {/* Navegação */}
        <motion.nav
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8"
        >
          <Link
            href="/"
            className="hover:text-[#C8F904] transition-colors text-sm font-medium"
          >
            Início
          </Link>
          <Link
            href="/#projects"
            className="hover:text-[#C8F904] transition-colors text-sm font-medium"
          >
            Projetos
          </Link>
          <Link
            href="/#team"
            className="hover:text-[#C8F904] transition-colors text-sm font-medium"
          >
            Equipe
          </Link>
          <Link
            href="/#contact"
            className="hover:text-[#C8F904] transition-colors text-sm font-medium"
          >
            Contato
          </Link>
        </motion.nav>

        {/* Redes sociais */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center md:justify-end gap-4"
        >
          <a
            href="https://linkedin.com/company/codelab"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-[#2C2C2C] hover:bg-[#C8F904] hover:text-[#1A1A1A] transition-all"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="https://instagram.com/codelab"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-[#2C2C2C] hover:bg-[#C8F904] hover:text-[#1A1A1A] transition-all"
          >
            <Instagram size={18} />
          </a>
          <a
            href="https://github.com/codelab"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-[#2C2C2C] hover:bg-[#C8F904] hover:text-[#1A1A1A] transition-all"
          >
            <Github size={18} />
          </a>
        </motion.div>
      </div>

      {/* Linha inferior */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="relative z-10 mt-12 border-t border-gray-800 pt-6 text-center text-sm text-gray-500"
      >
        © {new Date().getFullYear()} CodeLab — Todos os direitos reservados.
      </motion.div>
    </footer>
  );
}
