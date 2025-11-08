"use client";

import { motion } from "framer-motion";
import {
  MessageSquare,
  ClipboardList,
  PenTool,
  MonitorSmartphone,
  Code2,
  Wrench,
  CreditCard,
  CheckCircle2,
} from "lucide-react";

const steps = [
  {
    title: "1. Reunião Inicial",
    description:
      "Tudo começa com uma conversa para entender seu negócio, público e objetivo do projeto. Nessa etapa, coletamos todas as informações necessárias para iniciar o planejamento.",
    icon: MessageSquare,
  },
  {
    title: "2. Planejamento e Proposta",
    description:
      "Nossa equipe define escopo, prazo e custos. Enviamos uma proposta detalhada com as etapas de desenvolvimento, valores e cronograma de entrega.",
    icon: ClipboardList,
  },
  {
    title: "3. Processo de Design (UX/UI)",
    description:
      "A equipe de design cria os wireframes — uma estrutura visual simples sem cores ou fontes, apenas para validar a disposição dos elementos. O cliente aprova cada tela antes da fase de design final. Esse processo pode ocorrer até 2 vezes para ajustes. Após isso, as telas completas são entregues e aprovadas antes do início do desenvolvimento.",
    icon: PenTool,
  },
  {
    title: "4. Alinhamento Técnico",
    description:
      "Com as telas validadas, frontend e backend se reúnem para definir as tecnologias que serão usadas, como será feita a integração e qual será a arquitetura do sistema.",
    icon: MonitorSmartphone,
  },
  {
    title: "5. Desenvolvimento",
    description:
      "Começa a parte prática: o frontend desenvolve as interfaces com base no design aprovado, enquanto o backend implementa as funcionalidades, APIs e banco de dados. As equipes trabalham em constante alinhamento.",
    icon: Code2,
  },
  {
    title: "6. Testes e Ajustes",
    description:
      "Antes da entrega, realizamos testes de usabilidade, performance e integração. Corrigimos detalhes e garantimos que tudo funcione conforme o esperado.",
    icon: Wrench,
  },
  {
    title: "7. Pagamento",
    description:
      "O pagamento pode ser feito à vista ou dividido por etapas do projeto. Utilizamos PIX, transferência bancária e Asaas (com nota fiscal emitida).",
    icon: CreditCard,
  },
  {
    title: "8. Entrega e Suporte",
    description:
      "Após a entrega, o cliente recebe o sistema finalizado e nosso suporte pós-lançamento. Todos os clientes que fecham um projeto com a CodeLab têm direito a 3 meses de manutenção gratuita, para correção de eventuais erros ou ajustes técnicos. Após esse período, oferecemos planos de manutenção e evolução contínua conforme a necessidade do cliente.",
    icon: CheckCircle2,
  },
];

export default function DevelopmentProcess() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true }}
      className="relative overflow-hidden bg-[#1A1A1A] text-gray-100 py-20 px-6 md:px-16"
    >
      {/* Fundo animado suave */}
      <motion.div
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute inset-0 opacity-20 bg-gradient-to-tr from-[#C8F904] via-[#423E37] to-[#1A1A1A] bg-[length:400%_400%] z-0"
      />

      <div className="relative z-10 max-w-6xl mx-auto text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold text-[#C8F904] mb-4"
        >
          Nosso Processo de Desenvolvimento
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-lg text-gray-300 max-w-3xl mx-auto"
        >
          Da ideia inicial até o sistema no ar, seguimos um processo
          transparente e colaborativo entre cliente, design e desenvolvimento.
        </motion.p>
      </div>

      <div className="relative z-10 grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {steps.map((step, index) => {
          const Icon = step.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="bg-[#423E37] hover:bg-[#323030] transition-all duration-300 rounded-2xl shadow-lg p-8 flex flex-col items-start gap-4 group"
            >
              <div className="bg-[#C8F904] text-[#1A1A1A] p-3 rounded-xl group-hover:rotate-3 transition-transform duration-300 shadow-md">
                <Icon size={28} />
              </div>
              <h3 className="text-2xl font-semibold text-[#C8F904]">
                {step.title}
              </h3>
              <p className="text-gray-300 leading-relaxed text-base">
                {step.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </motion.section>
  );
}
