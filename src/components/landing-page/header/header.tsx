"use client";

import { useState } from "react";
import { Menu } from "lucide-react";
import HeaderLogo from "./header-logo";
import NavLinks from "./nav-links";
import LoginButton from "./login-button";
import MobileMenu from "./mobile-menu";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const links = [
    { label: "Início", href: "#hero" },
    { label: "Nossa História", href: "#about" },
    { label: "Contato", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 w-full bg-[#423E37] bg-opacity-95 backdrop-blur-md shadow-lg z-50 transition-colors duration-300">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <HeaderLogo />

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 items-center">
          <NavLinks links={links} />
          <LoginButton />
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-gray-200 focus:outline-none focus:ring-2 focus:ring-[#C8F904]"
          aria-label="Abrir menu"
          onClick={() => setMenuOpen(true)}
        >
          <Menu size={28} />
        </button>
      </div>

      {/* Mobile Menu */}
      <MobileMenu
        links={links}
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
      />
    </header>
  );
}
