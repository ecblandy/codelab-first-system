"use client";

import { teamMembers } from "@/data/team-members";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function TeamSection() {
  const router = useRouter();

  return (
    <section id="team" className="bg-[#EDEDED] py-32 px-6 md:px-16">
      <div className="text-center mb-45">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#2C2C2C] animate-fadeIn">
          Nossa Equipe
        </h2>
        <p className="text-gray-700 text-lg md:text-xl mt-4 animate-fadeIn delay-200">
          Conheça os especialistas por trás da Codelab, cada um dedicado a
          entregar soluções digitais de alta qualidade e inovação.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {teamMembers.map((member, index) => (
          <div
            key={member.id}
            className="relative bg-[#2C2C2C] rounded-3xl shadow-lg flex flex-col items-center text-center p-6 hover:shadow-xl transition-shadow duration-500 animate-fadeIn"
            style={{ animationDelay: `${index * 0.3}s` }}
          >
            {/* Foto */}
            {member.photo && (
              <div className="relative w-36 h-36 rounded-full overflow-hidden border-4 border-[#C8F904] shadow-md -mt-20">
                <Image
                  src={member.photo}
                  alt={`${member.firstName} ${member.lastName}`}
                  width={144}
                  height={144}
                  className="object-cover w-full h-full"
                />
              </div>
            )}

            {/* Conteúdo */}
            <div className="mt-6 flex flex-col items-center text-center flex-1">
              <h3 className="text-2xl font-bold text-[#F5F5F5]">
                {member.firstName} {member.lastName}
              </h3>
              <span className="text-[#C8F904] font-medium">{member.role}</span>
              <p className="text-gray-300 mt-3 text-base leading-relaxed flex-1">
                {member.description}
              </p>

              {/* Badges */}
              <div className="flex gap-2 mt-4">
                <span className="bg-[#C8F904]/20 text-[#F5F5F5] px-3 py-1 rounded-full text-sm font-semibold">
                  Especialista
                </span>
                <span className="bg-[#C8F904]/30 text-[#F5F5F5] px-3 py-1 rounded-full text-sm font-semibold">
                  Alta Qualidade
                </span>
              </div>

              {/* Botão Saiba Mais */}
              <button
                onClick={() => router.push(member.route)}
                className="mt-6 bg-[#423E37] text-[#C8F904] px-8 py-3 rounded-xl font-semibold text-lg hover:bg-[#323030] hover:scale-105 transition-all shadow-md focus:outline-none focus:ring-2 focus:ring-[#C8F904]"
              >
                Saiba mais
              </button>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .animate-fadeIn {
          opacity: 0;
          transform: translateY(20px);
          animation: fadeIn 0.8s forwards;
        }
        @keyframes fadeIn {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
