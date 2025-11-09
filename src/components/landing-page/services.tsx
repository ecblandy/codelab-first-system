"use client";

import { motion } from "framer-motion";
import { Code2, Layout, Server, Wrench, Palette, Workflow } from "lucide-react";

const services = [
  {
    icon: <Layout className="w-8 h-8 text-[#C8F904]" />,
    title: "UX/UI Design",
    description:
      "Criação de interfaces funcionais e atraentes. Desenvolvemos wireframes para aprovação antes do design final, garantindo que o cliente valide cada etapa.",
  },
  {
    icon: <Code2 className="w-8 h-8 text-[#C8F904]" />,
    title: "Desenvolvimento Frontend",
    description:
      "Interfaces modernas, animadas e otimizadas, construídas com React, Next.js e boas práticas de performance.",
  },
  {
    icon: <Server className="w-8 h-8 text-[#C8F904]" />,
    title: "Desenvolvimento Backend",
    description:
      "APIs seguras e escaláveis, com autenticação JWT, bancos de dados e integração com serviços externos.",
  },
  {
    icon: <Wrench className="w-8 h-8 text-[#C8F904]" />,
    title: "Manutenção e Suporte",
    description:
      "Corrigimos erros, aprimoramos funcionalidades e mantemos o sistema atualizado. Todos os clientes têm 3 meses de manutenção gratuita.",
  },
  {
    icon: <Workflow className="w-8 h-8 text-[#C8F904]" />,
    title: "Integrações e Automação",
    description:
      "Conectamos seu sistema a APIs externas, como Telegram, WhatsApp e gateways de pagamento.",
  },
  {
    icon: <Palette className="w-8 h-8 text-[#C8F904]" />,
    title: "Refatoração de Sistemas",
    description:
      "Melhoramos sistemas existentes, modernizando telas, performance e estrutura do código sem perder a essência do projeto.",
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="relative bg-[#1A1A1A] text-white py-24 px-6 overflow-hidden"
    >
      {/* Animação de fundo */}
      <motion.div
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute inset-0 opacity-10 bg-gradient-to-tr from-[#C8F904] via-[#2C2C2C] to-[#1A1A1A] bg-[length:400%_400%]"
      />

      {/* Título */}
      <div className="relative z-10 text-center max-w-5xl mx-auto mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold text-[#C8F904]"
        >
          Nossos Serviços
        </motion.h2>
        <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
          Da ideia inicial até o deploy final — a CodeLab acompanha todas as
          etapas do seu projeto com foco em qualidade, design e resultado.
        </p>
      </div>

      {/* Cards */}
      <div className="relative z-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{
              scale: 1.03,
              boxShadow: "0 0 25px rgba(200,249,4,0.15)",
            }}
            viewport={{ once: true }}
            className="bg-[#2C2C2C] rounded-2xl p-8 flex flex-col items-start gap-4 border border-[#2C2C2C] hover:border-[#C8F904] transition-all duration-300"
          >
            {service.icon}
            <h3 className="text-xl font-semibold text-[#C8F904]">
              {service.title}
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
