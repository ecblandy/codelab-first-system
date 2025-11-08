"use client";

import { Code, Users, LayoutDashboard, PackageCheck } from "lucide-react";

const timelineEvents = [
  {
    year: "Fevereiro 2025",
    title: "Fundação da Codelab",
    description:
      "Fundada por Vinícius Blandy, a Codelab nasceu com o propósito de oferecer soluções digitais completas e de alta qualidade. Seu fundador percebeu a necessidade de formar uma equipe multidisciplinar para atender à demanda por sistemas integrados.",
    icon: <Code size={32} className="text-[#C8F904]" />,
  },
  {
    year: "2025 – Formação da Equipe",
    title: "Equipe Multidisciplinar",
    description:
      "Vinícius reuniu Humberto Nacif (Backend) e Thais Vitorino (UX/UI Design), colegas da EBAC – Escola Britânica de Artes Criativas e Tecnologia. Com competências complementares, a equipe garante excelência em cada projeto.",
    icon: <Users size={32} className="text-[#C8F904]" />,
  },
  {
    year: "2025 – Primeiros Projetos",
    title: "Sites Institucionais",
    description:
      "A parceria deu certo desde o início, permitindo entregar projetos institucionais completos, consolidando a metodologia da equipe e fortalecendo a colaboração entre as áreas.",
    icon: <LayoutDashboard size={32} className="text-[#C8F904]" />,
  },
  {
    year: "2025 – Expansão de Soluções",
    title: "Aplicações Complexas",
    description:
      "Com a experiência adquirida, a Codelab passou a desenvolver soluções mais complexas, incluindo sistemas de fidelidade, e-commerce e dashboards, oferecendo entregas de alto nível e fortalecendo sua bagagem profissional.",
    icon: <PackageCheck size={32} className="text-[#C8F904]" />,
  },
];

export default function HistorySection() {
  return (
    <section id="history" className="relative bg-[#F5F5F5] py-24 px-6 md:px-16">
      {/* Cabeçalho */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#423E37] animate-fadeIn">
          Nossa História
        </h2>
        <p className="text-gray-700 text-lg md:text-xl mt-4 animate-fadeIn delay-200">
          Descubra como a Codelab evoluiu de projetos institucionais para
          soluções digitais complexas, sempre com foco em qualidade e inovação.
        </p>
      </div>

      {/* Steps */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
        {timelineEvents.map((event, index) => (
          <div
            key={event.year}
            className="flex flex-col items-center animate-fadeIn hover:translate-y-[-5px] transition-transform duration-500 h-full"
            style={{ animationDelay: `${index * 0.3}s` }}
          >
            {/* Ícone */}
            <div className="bg-[#423E37] p-4 rounded-full shadow-lg mb-4 flex items-center justify-center w-20 h-20 animate-bounce-slow">
              {event.icon}
            </div>

            {/* Conteúdo */}
            <div className="bg-[#423E37] rounded-2xl shadow-lg p-6 text-center hover:shadow-2xl transition-shadow duration-300 w-full flex flex-col justify-between h-full min-h-[250px]">
              <div>
                <span className="text-[#C8F904] font-bold text-lg">
                  {event.year}
                </span>
                <h3 className="text-white font-semibold text-xl mt-2">
                  {event.title}
                </h3>
                <p className="text-gray-200 mt-2 text-base">
                  {event.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Animações */}
      <style jsx>{`
        .animate-fadeIn {
          opacity: 0;
          transform: translateY(20px);
          animation: fadeIn 0.8s forwards;
        }
        .animate-bounce-slow {
          animation: bounceSlow 3s infinite alternate;
        }
        @keyframes fadeIn {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes bounceSlow {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-5px);
          }
        }
      `}</style>
    </section>
  );
}
