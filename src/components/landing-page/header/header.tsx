"use client";

import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import HeaderLogo from "./header-logo";
import NavLinks from "./nav-links";
import LoginButton from "./login-button";

const links = [
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
];

// Links principais do header
const mainLinks = ["Início", "Nossa História", "Contato"];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const extraLinks = links.filter((l) => !mainLinks.includes(l.label));

  // Variants para animação do header
  const headerVariants = {
    hidden: { y: -50, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <motion.header
      initial="hidden"
      animate="visible"
      variants={headerVariants}
      transition={{ duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }}
      className="fixed top-0 w-full bg-[#423E37] bg-opacity-95 backdrop-blur-md shadow-lg z-50 transition-colors duration-300"
    >
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <HeaderLogo />

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 items-center relative">
          <NavLinks links={links.filter((l) => mainLinks.includes(l.label))} />

          {/* Dropdown Mais */}
          <div
            className="relative"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button className="flex items-center gap-1 text-gray-200 font-medium px-3 py-1 hover:text-[#C8F904] focus:outline-none focus:ring-2 focus:ring-[#C8F904] rounded transition-colors">
              Mais <ChevronDown className="w-4 h-4" />
            </button>

            <AnimatePresence>
              {dropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="absolute right-0 mt-2 bg-[#2C2C2C] rounded-lg shadow-lg py-2 flex flex-col min-w-[220px] z-50 border border-gray-700"
                >
                  {extraLinks.map((link) => (
                    <button
                      key={link.href}
                      onClick={() => {
                        if (link.href.startsWith("#")) {
                          const el = document.querySelector(link.href);
                          if (el) el.scrollIntoView({ behavior: "smooth" });
                        } else {
                          window.location.href = link.href;
                        }
                        setDropdownOpen(false);
                      }}
                      className="text-gray-200 hover:text-[#C8F904] px-4 py-2 text-left w-full font-medium transition-colors rounded hover:bg-[#3B3B3B]"
                    >
                      {link.label}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <LoginButton />
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-gray-200 focus:outline-none focus:ring-2 focus:ring-[#C8F904] rounded"
          aria-label="Abrir menu"
          onClick={() => setMenuOpen(true)}
        >
          <Menu size={28} />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="md:hidden absolute top-full left-0 w-full bg-[#423E37] shadow-lg z-40"
          >
            <div className="flex flex-col h-[calc(100vh-64px)] p-6">
              {/* Botão de fechar */}
              <div className="flex justify-end mb-4">
                <button
                  className="text-gray-200 focus:outline-none focus:ring-2 focus:ring-[#C8F904] rounded"
                  onClick={() => setMenuOpen(false)}
                >
                  <X size={28} />
                </button>
              </div>

              {/* Links empilhados */}
              <div className="flex-1 flex flex-col gap-2 overflow-y-auto">
                {links.map((link) => (
                  <button
                    key={link.href}
                    onClick={() => {
                      if (link.href.startsWith("#")) {
                        const el = document.querySelector(link.href);
                        if (el) el.scrollIntoView({ behavior: "smooth" });
                      } else {
                        window.location.href = link.href;
                      }
                      setMenuOpen(false);
                    }}
                    className="w-full text-left text-gray-200 px-4 py-3 rounded hover:bg-[#3B3B3B] transition-colors font-medium"
                  >
                    {link.label}
                  </button>
                ))}
              </div>

              {/* Botão de login fixo no final */}
              <div className="mt-4">
                <LoginButton />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
