"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-16 py-24 bg-[#423E37]"
    >
      {/* Texto Hero */}
      <div className="md:w-1/2 flex flex-col gap-6 text-white">
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight animate-fadeIn">
          Bem-vindo à <span className="text-[#C8F904]">Codelab</span>
        </h1>
        <p className="text-gray-300 text-lg md:text-xl leading-relaxed animate-fadeIn delay-200">
          Transformamos ideias em soluções digitais de alto impacto. Do design
          ao desenvolvimento, entregamos experiências completas que impulsionam
          o crescimento da sua empresa.
        </p>

        {/* Botões CTA */}
        <div className="flex flex-col sm:flex-row gap-4 mt-6 animate-fadeIn delay-400">
          <a
            href="#about"
            className="bg-[#C8F904] text-[#423E37] px-6 py-3 rounded-lg font-semibold text-lg hover:scale-105 transition-transform shadow-md focus:outline-none focus:ring-2 focus:ring-[#C8F904]"
          >
            Conheça mais
          </a>
          <a
            href="https://wa.me/5571994027893"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-transparent border border-[#C8F904] text-[#C8F904] px-6 py-3 rounded-lg font-semibold text-lg hover:bg-[#C8F904] hover:text-[#423E37] transition-all shadow-md focus:outline-none focus:ring-2 focus:ring-[#C8F904]"
          >
            Fale no WhatsApp
          </a>
        </div>
      </div>

      {/* GIF Hero - novo estilo */}
      <div className="md:w-1/2 mb-12 md:mb-0 flex justify-center md:justify-end relative animate-fadeIn delay-600">
        <div className="relative w-[400px] h-[350px] overflow-hidden rounded-3xl">
          <Image
            src="/assets/gifs/hand-coding.gif"
            alt="Ilustração Codelab"
            fill
            className="object-cover animate-gifFloat"
          />
          {/* Glow sutil */}
          <div className="absolute inset-0 rounded-3xl shadow-[0_0_60px_rgba(200,199,4,0.4)] pointer-events-none"></div>
        </div>
      </div>

      {/* Animações simples */}
      <style jsx>{`
        .animate-fadeIn {
          opacity: 0;
          transform: translateY(20px);
          animation: fadeIn 0.8s forwards;
        }
        .animate-fadeIn.delay-200 {
          animation-delay: 0.2s;
        }
        .animate-fadeIn.delay-400 {
          animation-delay: 0.4s;
        }
        .animate-fadeIn.delay-600 {
          animation-delay: 0.6s;
        }
        @keyframes fadeIn {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* leve flutuação para GIF */
        .animate-gifFloat {
          animation: float 3s ease-in-out infinite alternate;
        }
        @keyframes float {
          0% {
            transform: translateY(0) scale(1);
          }
          100% {
            transform: translateY(-15px) scale(1.02);
          }
        }
      `}</style>
    </section>
  );
}
