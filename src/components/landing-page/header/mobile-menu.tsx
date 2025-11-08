"use client";

import { X } from "lucide-react";
import Image from "next/image";
import LoginButton from "./login-button";
import NavLinks from "./nav-links";

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
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-60 z-40 transition-opacity duration-300"
          onClick={onClose}
        ></div>
      )}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-[#423E37] shadow-2xl z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b border-gray-700">
          <a href="#hero" onClick={onClose}>
            <Image
              src="/assets/images/logo-codelab.svg"
              alt="Logo Codelab"
              width={140}
              height={35}
              priority
            />
          </a>
          <button
            className="text-gray-200 focus:outline-none focus:ring-2 focus:ring-[#C8F904]"
            aria-label="Fechar menu"
            onClick={onClose}
          >
            <X size={28} />
          </button>
        </div>
        <nav className="flex flex-col mt-6 px-6 gap-4">
          <NavLinks links={links} onClick={onClose} />
          <LoginButton />
        </nav>
      </div>
    </>
  );
}
