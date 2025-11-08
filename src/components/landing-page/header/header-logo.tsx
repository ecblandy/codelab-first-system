import Image from "next/image";

export default function HeaderLogo() {
  return (
    <a href="#hero" className="flex items-center">
      <Image
        src="/assets/images/logo-codelab.svg"
        alt="Logo Codelab"
        width={160}
        height={40}
        priority
      />
    </a>
  );
}
