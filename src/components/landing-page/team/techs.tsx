"use client";

import { TeamMember } from "@/data/team-members";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaDocker, FaGithub } from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiNextdotjs,
  SiFigma,
  SiAdobephotoshop,
  SiAdobeillustrator,
} from "react-icons/si";

interface Props {
  member: TeamMember;
}

export default function TechsSection({ member }: Props) {
  if ((!member.stacks || member.stacks.length === 0) && !member.experience)
    return null;

  // Mapeamento de nomes de tech para ícones
  const iconMap: Record<string, React.ReactNode> = {
    React: <FaReact size={22} className="text-[#C8F904]" />,
    "Next.js": <SiNextdotjs size={22} className="text-[#C8F904] " />,
    TypeScript: <SiTypescript size={22} className="text-[#C8F904]" />,
    "Tailwind CSS": <SiTailwindcss size={22} className="text-[#C8F904]" />,
    Docker: <FaDocker size={22} className="text-[#C8F904]" />,
    NodeJS: <FaNodeJs size={22} className="text-[#C8F904]" />,
    GitHub: <FaGithub size={22} className="text-[#C8F904] " />,
    Figma: <SiFigma size={22} className="text-[#C8F904]" />,
    "Adobe Photoshop": (
      <SiAdobephotoshop size={22} className="text-text-[#C8F904]" />
    ),
    "Adobe Illustrator": (
      <SiAdobeillustrator size={22} className="text-text-[#C8F904]" />
    ),
  };

  // Coletar todas as stacks das experiências
  const allStacks: { name: string; experience?: string }[] = [];

  member.experience.forEach((exp) => {
    exp.stacks?.forEach((stack) => {
      allStacks.push({ name: stack, experience: exp.period });
    });
  });

  // Adicionar stacks principais do membro que não estão nas experiências
  member.stacks?.forEach((stack) => {
    if (!allStacks.some((s) => s.name === stack)) {
      allStacks.push({ name: stack });
    }
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="mt-8"
    >
      <h3 className="text-2xl font-bold text-[#2C2C2C] mb-6">
        Tecnologias & Experiência
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {allStacks.map((tech, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.05, y: -2 }}
            transition={{ duration: 0.3 }}
            className="bg-[#2C2C2C] flex items-center gap-3 p-4 rounded-xl shadow-md hover:shadow-xl transition-shadow"
          >
            <div className="shrink-0">
              {iconMap[tech.name] || (
                <span className="text-[#C8F904] font-semibold">
                  {tech.name[0]}
                </span>
              )}
            </div>
            <div>
              <p className="text-gray-100 font-semibold">{tech.name}</p>
              {tech.experience && (
                <p className="text-[#C8F904]/60 text-sm">{tech.experience}</p>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
