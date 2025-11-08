"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Bruno",
    role: "Arktech",
    feedback:
      "Excelente trabalho realizado pelos desenvolvedores da CodeLab. Desde o início do projeto, demonstraram profissionalismo, comprometimento e capacidade técnica. Foram muito eficientes na comunicação, sempre dispostos a ouvir feedbacks e propor soluções adequadas para as nossas necessidades. O site foi entregue com qualidade, dentro do prazo acordado. Sem dúvidas, são profissionais recomendáveis para qualquer empresa que esteja em busca de um time técnico confiável e competente.",
  },
  {
    name: "Edson Junior",
    role: "FEC Safe",
    feedback:
      "A equipe CodeLab superou minhas expectativas! Desenvolveram o sistema com total competência, dentro do prazo e com a qualidade técnica que eu esperava. Foram extremamente profissionais, atenciosos em cada detalhe e sempre disponíveis para esclarecer dúvidas ao longo do processo. Mesmo após a entrega, continuaram prestando um excelente suporte, demonstrando um compromisso raro com o pós-venda. É visível o cuidado que têm com o cliente e o foco em entregar resultados consistentes.",
  },
  {
    name: "Vinicius B",
    role: "Fidnovax",
    feedback:
      "Trabalhar com o Vinicius, da Fidnovax, foi uma experiência muito positiva. Desde o início do projeto, ele demonstrou clareza nas demandas, comprometimento com os prazos e abertura para alinhamentos constantes. A comunicação foi sempre transparente, o que facilitou o andamento do trabalho e garantiu que chegássemos a um resultado final alinhado às expectativas. Além disso, o Vinicius valorizou cada etapa do processo, respeitando o cronograma e contribuindo com feedbacks construtivos.",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="relative bg-white text-[#1A1A1A] py-24 px-6 overflow-hidden">
      {/* Fundo animado sutil */}
      <motion.div
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute inset-0 opacity-5 bg-gradient-to-tr from-[#C8F904] via-[#423E37] to-[#2C2C2C] bg-[length:400%_400%]"
      />

      {/* Cabeçalho */}
      <div className="relative z-10 text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold text-[#2C2C2C]"
        >
          O que dizem nossos clientes
        </motion.h2>
        <p className="text-[#423E37] mt-4 max-w-2xl mx-auto">
          Feedbacks reais de quem confiou na{" "}
          <span className="font-semibold underline decoration-[#C8F904]">
            CodeLab
          </span>{" "}
          para desenvolver seus sistemas e sites.
        </p>
      </div>

      {/* Cards */}
      <div className="relative z-10 grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.name}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            whileHover={{ scale: 1.03 }}
            className="bg-[#423E37] p-8 rounded-2xl border border-[#2C2C2C] hover:border-[#C8F904] shadow-md hover:shadow-lg transition-all duration-300"
          >
            <Quote className="text-[#C8F904] mb-4 w-6 h-6" />
            <p className="text-[#F5F5F5] italic mb-6 leading-relaxed">
              {testimonial.feedback}
            </p>
            <div>
              <h4 className="text-white font-semibold">{testimonial.name}</h4>
              <span className="text-[#C8F904] text-sm">{testimonial.role}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
