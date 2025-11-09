"use client";

import { TeamMember } from "@/data/team-members";
import { motion } from "framer-motion";

interface Props {
  member: TeamMember;
}

export default function TechsSection({ member }: Props) {
  if (!member.allStack || member.allStack.length === 0) return null;

  // Colocar as tecnologias mais usadas no topo
  const mostUsedTechs = member.mostUsedTechs || [];
  const combinedStacks: string[] = [
    ...mostUsedTechs,
    ...member.allStack.filter((tech) => !mostUsedTechs.includes(tech)),
  ];

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
        {combinedStacks.map((tech, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.05, y: -2 }}
            transition={{ duration: 0.3 }}
            className="bg-[#2C2C2C] flex items-center gap-3 p-4 rounded-xl shadow-md hover:shadow-xl transition-shadow"
          >
            <div className="shrink-0">
              <span className="text-[#C8F904] font-semibold">{tech[0]}</span>
            </div>
            <div>
              <p className="text-gray-100 font-semibold">{tech}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
