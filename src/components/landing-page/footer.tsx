"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Linkedin, Instagram, Github } from "lucide-react";

const footerColumns = [
  {
    title: "Navegação",
    links: [
      { label: "Início", href: "/" },
      { label: "Nossa História", href: "#about" },
      { label: "Equipe", href: "#team" },
      { label: "Processo", href: "#process" },
      { label: "Projetos", href: "#projects" },
      { label: "Planos", href: "#plans" },
      { label: "Serviços", href: "#services" },
      { label: "Depoimentos", href: "#testimonials" },
      { label: "Contato", href: "#contact" },
      { label: "FAQ", href: "#faq" },
    ],
  },
  {
    title: "Equipe",
    links: [
      { label: "Vinícius Blandy", href: "/team/vinicius-blandy" },
      { label: "Humberto Nacif", href: "/team/humberto-nacif" },
      { label: "Thais Vitorino", href: "/team/thais-vitorino" },
    ],
  },
  {
    title: "Social",
    links: [
      { label: "LinkedIn", href: "https://linkedin.com/company/codelab" },
      { label: "Instagram", href: "https://instagram.com/codelab" },
      { label: "GitHub", href: "https://github.com/codelab" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative bg-[#423E37] text-[#F5F5F5] pt-16 pb-8 px-6 md:px-16 overflow-hidden">
      {/* Fundo animado sutil */}
      <motion.div
        animate={{ backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 bg-gradient-to-tr from-[#2C2C2C] via-[#423E37]/30 to-[#C8F904]/10 opacity-20 bg-[length:400%_400%] z-0"
      />

      <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
        {/* Logo e descrição */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center md:items-start text-center md:text-left"
        >
          <Image
            src="/assets/images/logo-codelab.svg"
            alt="Logo CodeLab"
            width={160}
            height={50}
            className="mb-4"
          />
          <p className="text-gray-300 max-w-xs text-sm leading-relaxed">
            Transformamos ideias em soluções digitais com design, performance e
            tecnologia de ponta.
          </p>
        </motion.div>

        {/* Colunas de links */}
        {footerColumns.map((col, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 * i }}
            className="flex flex-col"
          >
            <h4 className="font-semibold text-lg text-[#C8F904] mb-4">
              {col.title}
            </h4>
            <ul className="flex flex-col gap-2">
              {col.links.map((link, idx) => {
                if (col.title === "Social") {
                  const Icon =
                    link.label === "LinkedIn"
                      ? Linkedin
                      : link.label === "Instagram"
                      ? Instagram
                      : link.label === "GitHub"
                      ? Github
                      : null;

                  return (
                    Icon && (
                      <a
                        key={idx}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 hover:text-[#C8F904] transition-colors font-medium"
                      >
                        <Icon size={18} />
                        {link.label}
                      </a>
                    )
                  );
                }

                return (
                  <Link
                    key={idx}
                    href={link.href}
                    className="hover:text-[#C8F904] transition-colors text-sm font-medium"
                  >
                    {link.label}
                  </Link>
                );
              })}
            </ul>
          </motion.div>
        ))}
      </div>

      {/* Rodapé inferior */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="relative z-10 mt-12 border-t border-[#423E37] pt-6 text-center text-sm text-gray-400"
      >
        © {new Date().getFullYear()} CodeLab — Todos os direitos reservados.
      </motion.div>
    </footer>
  );
}
