"use client";

import Image from "next/image";
import { TeamMember } from "@/data/team-members";
import { motion } from "framer-motion";
import { FaLinkedin } from "react-icons/fa6";
import {
  FaGithubSquare,
  FaBehanceSquare,
  FaFileDownload,
} from "react-icons/fa";

interface HeaderProps {
  member: TeamMember;
}

export default function HeaderProfile({ member }: HeaderProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="flex flex-col md:flex-row gap-12 md:gap-16 items-start bg-[#2C2C2C] p-8 rounded-2xl shadow-xl"
    >
      {/* LADO ESQUERDO: FOTO + ÍCONES */}
      <div className="flex flex-col items-center gap-6">
        {member.photo && (
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="relative w-52 h-52 md:w-60 md:h-60 rounded-full overflow-hidden border-4 border-[#C8F904] shadow-2xl flex-shrink-0 transition-all duration-500"
          >
            <Image
              src={member.photo}
              alt={`${member.firstName} ${member.lastName}`}
              fill
              className="object-cover w-full h-full"
            />
            <span className="absolute inset-0 rounded-full border-2 border-[#C8F904] animate-pulse"></span>
          </motion.div>
        )}

        {/* ÍCONES SOCIAIS + CV abaixo da foto */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex gap-3"
        >
          {member.linkedin && (
            <motion.a
              whileHover={{ scale: 1.1 }}
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-[#423E37] hover:bg-[#323030] text-[#C8F904] p-4 rounded-xl shadow-md flex items-center justify-center transition-all duration-300"
            >
              <FaLinkedin size={22} />
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 mb-[-1.5rem] bg-[#C8F904] text-black text-xs font-semibold px-2 py-1 rounded opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                LinkedIn
              </span>
            </motion.a>
          )}

          {member.github && (
            <motion.a
              whileHover={{ scale: 1.1 }}
              href={member.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-[#423E37] hover:bg-[#323030] text-[#C8F904] p-4 rounded-xl shadow-md flex items-center justify-center transition-all duration-300"
            >
              <FaGithubSquare size={22} />
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 mb-[-1.5rem] bg-[#C8F904] text-black text-xs font-semibold px-2 py-1 rounded opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                GitHub
              </span>
            </motion.a>
          )}

          {member.behance && (
            <motion.a
              whileHover={{ scale: 1.1 }}
              href={member.behance}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-[#423E37] hover:bg-[#323030] text-[#C8F904] p-4 rounded-xl shadow-md flex items-center justify-center transition-all duration-300"
            >
              <FaBehanceSquare size={22} />
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 mb-[-1.5rem] bg-[#C8F904] text-black text-xs font-semibold px-2 py-1 rounded opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                Behance
              </span>
            </motion.a>
          )}

          {member.cvLink && (
            <motion.a
              whileHover={{ scale: 1.1 }}
              href={member.cvLink}
              download
              className="group relative bg-[#423E37] hover:bg-[#323030] text-[#C8F904] p-4 rounded-xl shadow-md flex items-center justify-center transition-all duration-300"
            >
              <FaFileDownload size={22} />
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 mb-[-1.5rem] bg-[#C8F904] text-black text-xs font-semibold px-2 py-1 rounded opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                CV
              </span>
            </motion.a>
          )}
        </motion.div>
      </div>

      {/* LADO DIREITO: DETALHES PRINCIPAIS */}
      <div className="flex-1 flex flex-col gap-6">
        {/* NOME E CARGO */}
        <div>
          <motion.h1
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-extrabold text-white"
          >
            {member.firstName} {member.lastName}
          </motion.h1>
          <motion.h2
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#C8F904] text-xl md:text-2xl font-semibold mt-1"
          >
            {member.role}
          </motion.h2>
        </div>

        {/* BIO */}
        {member.bio && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-gray-200 text-base md:text-lg leading-relaxed"
          >
            {member.bio}
          </motion.p>
        )}

        {/* EXPERIÊNCIA E IDIOMAS */}
        {(member.yearsOfExperience || member.languages?.length) && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap gap-4 mt-2"
          >
            {member.yearsOfExperience && (
              <div className="flex items-center gap-2 bg-[#423E37] px-4 py-2 rounded-lg text-[#C8F904] shadow-md">
                <span className="font-semibold">
                  {member.yearsOfExperience} anos
                </span>
                <span className="text-gray-400 text-sm">de experiência</span>
              </div>
            )}

            {member.languages?.map((lang) => (
              <div
                key={lang.name}
                className="flex items-center gap-2 bg-[#423E37] px-4 py-2 rounded-lg text-[#C8F904] shadow-md"
              >
                <span className="font-semibold">{lang.name}</span>
                <span className="text-gray-400 text-sm">{lang.level}</span>
              </div>
            ))}
          </motion.div>
        )}

        {/* TECNOLOGIAS MAIS USADAS */}
        {member.mostUsedTechs && member.mostUsedTechs.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col mt-2"
          >
            <span className="text-[#C8F904] font-semibold mb-1">
              Tecnologias mais usadas:
            </span>

            <div className="flex flex-wrap gap-3">
              {member.mostUsedTechs.map((tech) => (
                <motion.span
                  key={tech}
                  whileHover={{ scale: 1.05 }}
                  className="bg-[#423E37] hover:bg-[#323030] shadow-md text-[#C8F904] px-4 py-2 rounded-lg font-semibold transition-transform duration-300"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        )}

        {/* CARDS DE CONTATO */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4"
        >
          {member.email && (
            <a
              href={`mailto:${member.email}`}
              className="bg-[#C8F904]/20 text-[#F5F5F5] p-4 rounded-xl shadow-md flex flex-col transition-all duration-300 hover:bg-[#3A3A3A]"
            >
              <span className="text-xs text-gray-400">Email</span>
              <span className="text-sm font-semibold text-gray-200">
                {member.email}
              </span>
            </a>
          )}
          {member.phone && (
            <div className="bg-[#C8F904]/20 text-[#F5F5F5] p-4 rounded-xl shadow-md flex flex-col transition-all duration-300 hover:bg-[#3A3A3A]">
              <span className="text-xs text-gray-400">Telefone</span>
              <span className="text-sm font-semibold text-gray-200">
                {member.phone}
              </span>
            </div>
          )}
          {member.address && (
            <div className="bg-[#C8F904]/20 text-[#F5F5F5] p-4 rounded-xl shadow-md flex flex-col transition-all duration-300 hover:bg-[#3A3A3A]">
              <span className="text-xs text-gray-400">Localização</span>
              <span className="text-sm font-semibold text-gray-200">
                {member.address}
              </span>
            </div>
          )}
        </motion.div>
      </div>
    </motion.section>
  );
}
