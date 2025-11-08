"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "Como funciona o processo de desenvolvimento com a CodeLab?",
    answer:
      "Primeiro fazemos o wireframe, que é validado pelo cliente. Depois iniciamos o desenvolvimento Frontend e Backend alinhados com o design. Todo cliente tem 3 meses de manutenção incluídos.",
    time: "Prazo médio: 4 a 6 semanas",
  },
  {
    question: "Quais tipos de projetos vocês desenvolvem?",
    answer:
      "Desenvolvemos sistemas do zero, refatorações de telas ou funcionalidades existentes, dashboards, plataformas web e aplicativos.",
    time: "Prazo médio: depende do escopo",
  },
  {
    question: "Como funciona o pagamento pelos planos?",
    answer:
      "Oferecemos planos mensais e anuais, com destaque para o melhor custo-benefício. O cliente pode pagar mensalmente ou quitar o plano anual de uma vez com desconto especial.",
    time: "Pagamento anual com desconto disponível",
  },
  {
    question: "Posso acompanhar o progresso do meu projeto?",
    answer:
      "Sim! Mantemos constante alinhamento durante todo o processo. Você recebe atualizações regulares e pode aprovar cada etapa do design e desenvolvimento.",
    time: "Atualizações semanais enviadas por e-mail",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative bg-[#F5F5F5] text-[#1A1A1A] py-24 px-6 overflow-hidden">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold"
        >
          Perguntas Frequentes
        </motion.h2>
        <p className="mt-4 text-gray-800 text-lg">
          Tire suas dúvidas sobre{" "}
          <span className="font-semibold text-[#423E37]">
            processos, planos e projetos
          </span>{" "}
          da CodeLab.
        </p>
      </div>

      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={index}
              className={`relative bg-[#2C2C2C] rounded-2xl shadow-md overflow-hidden border border-gray-300 transition-all duration-300`}
            >
              {/* Marcador verde lateral */}
              <div
                className={`absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl transition-all duration-300 ${
                  isOpen ? "bg-[#C8F904]" : "bg-transparent"
                }`}
              />

              <button
                onClick={() => toggleFAQ(index)}
                className="w-full pl-8 pr-6 py-4 flex justify-between items-center text-left hover:bg-[#423E37] transition-colors duration-300"
              >
                <span className="font-semibold text-white text-lg">
                  {faq.question}
                </span>
                {isOpen ? (
                  <ChevronUp className="w-6 h-6 text-[#C8F904]" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-[#C8F904]" />
                )}
              </button>

              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{
                  height: isOpen ? "auto" : 0,
                  opacity: isOpen ? 1 : 0,
                }}
                transition={{ duration: 0.35 }}
                className="px-8 overflow-hidden text-gray-300 text-sm leading-relaxed"
              >
                <div className="py-2">{faq.answer}</div>
                {faq.time && (
                  <p className="text-[#C8F904] font-semibold mt-2 text-sm">
                    {faq.time}
                  </p>
                )}
              </motion.div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
