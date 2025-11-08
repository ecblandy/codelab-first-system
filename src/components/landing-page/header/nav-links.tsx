"use client";

interface NavLinksProps {
  links: { label: string; href: string }[];
  onClick?: () => void;
}

export default function NavLinks({ links, onClick }: NavLinksProps) {
  return (
    <>
      {links.map((link) => (
        <a
          key={link.href}
          href={link.href}
          onClick={onClick}
          className="relative text-gray-200 font-medium text-lg px-1 transition-colors focus:outline-none focus:ring-2 focus:ring-[#C8F904] hover:text-[#C8F904] before:absolute before:-bottom-1 before:left-0 before:h-0.5 before:w-0 before:bg-[#C8F904] before:transition-all hover:before:w-full"
        >
          {link.label}
        </a>
      ))}
    </>
  );
}
