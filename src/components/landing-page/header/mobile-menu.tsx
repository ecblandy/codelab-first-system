"use client";

import Link from "next/link";
import Image from "next/image";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import LoginButton from "./login-button";

interface MobileMenuProps {
  links: { label: string; href: string }[];
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({
  links,
  isOpen,
  onClose,
}: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/60 z-40"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          />

          {/* Side menu */}
          <motion.aside
            className="fixed top-0 right-0 h-full w-80 max-w-[90vw] bg-[#423E37] z-50 shadow-2xl flex flex-col"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.28, ease: "easeInOut" }}
            role="dialog"
            aria-modal="true"
          >
            {/* Header (solid background to avoid transparency) */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-gray-700 bg-[#423E37]">
              <Link
                href="#hero"
                onClick={onClose}
                className="inline-flex items-center"
              >
                <Image
                  src="/assets/images/logo-codelab.svg"
                  alt="CodeLab"
                  width={140}
                  height={36}
                  priority
                />
              </Link>

              <button
                aria-label="Fechar menu"
                onClick={onClose}
                className="text-gray-200 p-2 rounded focus:outline-none focus:ring-2 focus:ring-[#C8F904]"
              >
                <X size={24} />
              </button>
            </div>

            {/* Scrollable content */}
            <nav className="flex-1 overflow-y-auto px-4 py-6 space-y-2">
              {links.map((link) => {
                const isAnchor = link.href.startsWith("#");
                // Anchor (smooth scroll)
                if (isAnchor) {
                  return (
                    <button
                      key={link.href}
                      onClick={() => {
                        const el = document.querySelector(link.href);
                        if (el)
                          el.scrollIntoView({
                            behavior: "smooth",
                            block: "start",
                          });
                        onClose();
                      }}
                      className="w-full text-left px-4 py-3 rounded-lg text-gray-100 hover:bg-[#3B3B3B] transition-colors font-medium"
                    >
                      {link.label}
                    </button>
                  );
                }

                // Internal / external route
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={onClose}
                    className="block px-4 py-3 rounded-lg text-gray-100 hover:bg-[#3B3B3B] transition-colors font-medium"
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* Footer area: Login + CTA */}
            <div className="px-4 py-5 border-t border-gray-700 bg-[#423E37]">
              {/* Torne o LoginButton visível e bem espaçado */}
              <div className="mb-3">
                <LoginButton />
              </div>
              {/* Exemplo de CTA adicional */}
              <Link
                href="/project"
                onClick={onClose}
                className="block text-center w-full py-3 rounded-lg bg-[#C8F904] text-[#1A1A1A] font-semibold hover:bg-[#b7e500] transition"
              >
                Ver Projetos
              </Link>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
