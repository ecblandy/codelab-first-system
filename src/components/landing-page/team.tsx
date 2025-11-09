"use client";

import { teamMembers } from "@/data/team-members";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export default function TeamSection() {
  const router = useRouter();

  return (
    <section id="team" className="bg-[#EDEDED] py-32 px-6 md:px-16">
      {/* Cabeçalho */}
      <div className="text-center mb-12">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-[#2C2C2C]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Nossa Equipe
        </motion.h2>
        <motion.p
          className="text-gray-700 text-lg md:text-xl mt-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Conheça os especialistas por trás da Codelab, cada um dedicado a
          entregar soluções de alta qualidade.
        </motion.p>
      </div>

      {/* Grid de membros */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {teamMembers.map((member) => (
          <motion.div
            key={member.id}
            className="relative bg-[#2C2C2C] rounded-3xl shadow-lg flex flex-col items-center p-6 h-full"
            variants={cardVariants}
            whileHover={{ y: -5, scale: 1.03 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {/* Foto */}
            <div className="relative w-36 h-36 rounded-full overflow-hidden border-4 border-[#C8F904]">
              <Image
                src={member.photo}
                alt={member.firstName + " " + member.lastName}
                fill
                className="object-cover"
              />
            </div>

            {/* Conteúdo */}
            <div className="mt-6 flex flex-col items-center text-center flex-1 w-full">
              <h3 className="text-2xl font-bold text-[#F5F5F5]">
                {member.firstName} {member.lastName}
              </h3>
              <span className="text-[#C8F904] font-medium">{member.role}</span>
              <p className="text-gray-300 mt-3 text-base leading-relaxed flex-1">
                {member.description}
              </p>

              {/* Tags: mostUsedTechs */}
              <div className="flex gap-2 mt-4 flex-wrap justify-center">
                {member.mostUsedTechs?.map((tech, i) => (
                  <span
                    key={i}
                    className={`px-3 py-1 rounded-full text-sm ${
                      i === 0
                        ? "bg-[#C8F904]/20 text-[#F5F5F5]"
                        : "bg-[#C8F904]/30 text-[#F5F5F5]"
                    }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Botão */}
              <button
                onClick={() => router.push(member.route)}
                className="mt-6 bg-[#423E37] text-[#C8F904] px-8 py-3 rounded-xl font-semibold hover:bg-[#2E2B2B] transition-colors"
              >
                Saiba mais
              </button>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
