"use client";

import { TeamMember } from "@/data/team-members";
import { motion } from "framer-motion";

interface Props {
  experience: TeamMember["experience"];
}

export default function ExperienceSection({ experience }: Props) {
  if (!experience || experience.length === 0) return null;

  return (
    <div className="mt-10">
      <h3 className="text-3xl font-bold text-[#2C2C2C] mb-8">
        Experiência Profissional
      </h3>
      <ul className="space-y-6">
        {experience.map((exp, idx) => (
          <motion.li
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.15 }}
            className="bg-[#2C2C2C] text-gray-100 rounded-2xl p-6 shadow-xl border-l-4 border-[#C8F904] hover:shadow-2xl transition-shadow duration-300"
          >
            {/* Cargo e empresa */}
            <div className="flex flex-col md:flex-row md:justify-between md:items-center">
              <div>
                <h4 className="text-xl md:text-2xl font-semibold text-[#C8F904]">
                  {exp.position}
                </h4>
                <p className="text-gray-300 mt-1">{exp.company}</p>
              </div>
              <span className="text-[#C8F904] mt-2 md:mt-0">{exp.period}</span>
            </div>

            {/* Descrição detalhada */}
            {exp.description && (
              <p className="mt-4 text-gray-200 text-sm md:text-base leading-relaxed">
                {exp.description}
              </p>
            )}

            {/* Stacks utilizadas */}
            {exp.stacks && exp.stacks.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-4">
                {exp.stacks.map((stack) => (
                  <span
                    key={stack}
                    className="bg-[#423E37] text-[#C8F904] px-3 py-1 rounded-full text-sm font-medium shadow-sm hover:scale-105 transition-transform duration-300"
                  >
                    {stack}
                  </span>
                ))}
              </div>
            )}
          </motion.li>
        ))}
      </ul>
    </div>
  );
}
