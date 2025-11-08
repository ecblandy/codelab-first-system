"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinksProps {
  links: { label: string; href: string }[];
  onClick?: () => void;
}

export default function NavLinks({ links, onClick }: NavLinksProps) {
  const pathname = usePathname();

  const handleClick = (href: string) => {
    if (href.startsWith("#")) {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    onClick?.();
  };

  return (
    <div className="flex flex-wrap md:flex-nowrap gap-4 md:gap-6">
      {links.map((link) => {
        const isExternalPage = !link.href.startsWith("#");
        const baseClasses =
          "relative text-gray-200 font-medium text-lg px-3 py-1 transition-colors whitespace-nowrap before:absolute before:-bottom-1 before:left-0 before:h-0.5 before:w-0 before:bg-[#C8F904] before:transition-all hover:before:w-full rounded";

        return isExternalPage ? (
          <Link
            key={link.href}
            href={link.href}
            className={`${baseClasses} focus:outline-none focus:ring-2 focus:ring-[#C8F904] focus:ring-offset-2 focus:ring-offset-[#423E37]`}
            onClick={onClick}
          >
            {link.label}
          </Link>
        ) : (
          <button
            key={link.href}
            onClick={() => handleClick(link.href)}
            className={`${baseClasses} focus:outline-none focus:ring-2 focus:ring-[#C8F904] focus:ring-offset-2 focus:ring-offset-[#423E37]`}
          >
            {link.label}
          </button>
        );
      })}
    </div>
  );
}
