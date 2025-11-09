"use client";

import { motion } from "framer-motion";

const plans = [
  {
    title: "Plano Essencial",
    price: "R$149/mês",
    yearlyPrice: "R$1.490/ano (economize R$298)",
    description:
      "Ideal para quem precisa de suporte básico, correções e pequenas melhorias de interface.",
    features: [
      "Correção de bugs e ajustes visuais",
      "Atualizações de segurança",
      "Suporte via WhatsApp e e-mail",
    ],
  },
  {
    title: "Plano Profissional",
    price: "R$299/mês",
    yearlyPrice: "R$2.990/ano (economize R$598)",
    highlight: true,
    bestValue: true,
    description:
      "Perfeito para empresas que precisam de novas funcionalidades, performance e acompanhamento constante.",
    features: [
      "Tudo do plano Essencial",
      "Novas funcionalidades sob demanda",
      "Revisões mensais de performance",
      "Atendimento prioritário",
    ],
  },
  {
    title: "Plano Premium",
    price: "R$499/mês",
    yearlyPrice: "R$4.990/ano (economize R$998)",
    description:
      "Para quem busca suporte completo, inclusive emergencial e acompanhamento contínuo do sistema.",
    features: [
      "Tudo do plano Profissional",
      "Atendimento emergencial 24h",
      "Reuniões quinzenais de evolução",
      "Hospedagem e deploy inclusos",
    ],
  },
];

export default function PlansSection() {
  return (
    <section
      id="plans"
      className="relative bg-[#C8F904] text-[#1A1A1A] py-24 px-6 overflow-hidden"
    >
      {/* Fundo animado sutil */}
      <motion.div
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute inset-0 opacity-20 bg-gradient-to-tr from-[#1A1A1A] via-[#2C2C2C] to-[#C8F904] bg-[length:400%_400%] z-0"
      />

      {/* Cabeçalho */}
      <div className="relative z-10 text-center max-w-5xl mx-auto mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold text-[#1A1A1A]"
        >
          Planos CodeLab
        </motion.h2>
        <p className="text-[#1A1A1A]/70 mt-4 max-w-2xl mx-auto">
          Todos os clientes têm direito a{" "}
          <strong>3 meses de manutenção gratuita</strong> após a entrega do
          projeto. Escolha o plano que melhor atende suas necessidades.
        </p>
      </div>

      {/* Cards */}
      <div className="relative z-10 grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {plans.map((plan, index) => (
          <motion.div
            key={plan.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.04,
              boxShadow: plan.bestValue
                ? "0 0 40px rgba(200, 249, 4, 0.4)"
                : "0 0 25px rgba(0,0,0,0.2)",
            }}
            className={`relative p-8 rounded-2xl transition-all duration-300 flex flex-col justify-between ${
              plan.highlight
                ? "bg-[#1A1A1A] text-white border-2 border-[#C8F904]"
                : "bg-[#2C2C2C] text-gray-100"
            }`}
          >
            {/* Selo de melhor custo-benefício */}
            {plan.bestValue && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#C8F904] text-[#1A1A1A] font-bold text-sm px-4 py-1 rounded-full shadow-md">
                MELHOR CUSTO-BENEFÍCIO
              </div>
            )}

            <div>
              <h3
                className={`text-2xl font-bold mb-2 ${
                  plan.highlight ? "text-[#C8F904]" : "text-[#C8F904]"
                }`}
              >
                {plan.title}
              </h3>
              <p className="text-lg font-semibold mb-2">{plan.price}</p>
              <p className="text-sm font-medium text-[#C8F904] mb-4">
                {plan.yearlyPrice}
              </p>
              <p className="text-sm opacity-80 mb-6">{plan.description}</p>

              <ul className="space-y-3 text-sm">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2 text-gray-300 hover:text-[#C8F904] transition-colors"
                  >
                    <span className="h-2 w-2 bg-[#C8F904] rounded-full" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Botões mensais e anuais */}
            <div className="mt-8 flex flex-col gap-3">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 ${
                  plan.highlight
                    ? "bg-[#C8F904] text-[#1A1A1A] hover:bg-[#b7e500]"
                    : "bg-[#C8F904] text-[#1A1A1A] hover:bg-[#b7e500]"
                }`}
              >
                Assinar Mensal
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                className={`w-full py-3 rounded-xl font-semibold border border-[#C8F904] transition-all duration-300 ${
                  plan.highlight
                    ? "text-[#C8F904] hover:bg-[#C8F904] hover:text-[#1A1A1A]"
                    : "text-[#C8F904] hover:bg-[#C8F904] hover:text-[#1A1A1A]"
                }`}
              >
                Pagar Anual (Economize)
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
