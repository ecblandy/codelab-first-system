"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-16 py-20 bg-[#F5F5F5]"
    >
      {/* Texto da Hero */}
      <div className="md:w-1/2 flex flex-col gap-6">
        <h1 className="text-4xl md:text-5xl font-bold text-[#423E37] leading-tight animate-fadeIn">
          Bem-vindo à <span className="text-[#C8F904]">Codelab</span>
        </h1>
        <p className="text-gray-700 text-lg md:text-xl leading-relaxed animate-fadeIn delay-200">
          Transformamos ideias em soluções digitais incríveis. Do design ao
          desenvolvimento, estamos aqui para levar sua empresa ao próximo nível.
        </p>

        {/* Botões CTA */}
        <div className="flex flex-col sm:flex-row gap-4 mt-4 animate-fadeIn delay-400">
          <a
            href="#about"
            className="bg-[#C8F904] text-[#423E37] px-6 py-3 rounded-lg font-semibold text-lg hover:scale-105 transition-transform shadow-md focus:outline-none focus:ring-2 focus:ring-[#C8F904]"
          >
            Conheça mais
          </a>
          <a
            href="https://wa.me/5591999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#423E37] text-[#C8F904] px-6 py-3 rounded-lg font-semibold text-lg hover:scale-105 transition-transform shadow-md focus:outline-none focus:ring-2 focus:ring-[#C8F904]"
          >
            Fale no WhatsApp
          </a>
        </div>
      </div>

      {/* Imagem da Hero */}
      <div className="md:w-1/2 mb-12 md:mb-0 flex justify-center md:justify-end animate-fadeIn delay-600">
        <Image
          src="/assets/images/hero-image.png"
          alt="Ilustração Codelab"
          width={500}
          height={400}
          className="rounded-xl shadow-xl"
        />
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
      `}</style>
    </section>
  );
}
