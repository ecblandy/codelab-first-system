import Image from "next/image";
import Link from "next/link";

export default function HeaderLogo() {
  return (
    <Link href="/" className="flex items-center">
      <Image
        src="/assets/images/logo-codelab.svg"
        alt="Logo Codelab"
        width={160}
        height={40}
        priority
      />
    </Link>
  );
}
