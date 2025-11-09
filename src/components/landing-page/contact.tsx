"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MessageCircle } from "lucide-react";
import { useState } from "react";

// Para o reCAPTCHA v2, você precisará do site key do Google
// const RECAPTCHA_SITE_KEY = "SUA_SITE_KEY_AQUI";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
  });

  const [submitting, setSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // validações básicas
    if (!formData.name || !formData.email || !formData.message) {
      alert("Por favor, preencha os campos obrigatórios.");
      return;
    }

    setSubmitting(true);

    try {
      // Aqui você faria a integração com o backend para envio do formulário
      // e validação do reCAPTCHA

      alert("Mensagem enviada com sucesso!");
      setFormData({
        name: "",
        email: "",
        company: "",
        subject: "",
        message: "",
      });
    } catch (err) {
      console.error(err);
      alert("Ocorreu um erro ao enviar a mensagem.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative bg-[#1A1A1A] text-white py-32 px-6 overflow-hidden"
    >
      {/* Fundo animado */}
      <motion.div
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
        }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute inset-0 opacity-20 bg-gradient-to-tr from-[#C8F904] via-[#2C2C2C] to-[#1A1A1A] bg-[length:400%_400%]"
      />

      {/* Cabeçalho */}
      <div className="relative z-10 text-center mb-20">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-extrabold text-[#C8F904] drop-shadow-lg"
        >
          Fale com a CodeLab
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-300 mt-4 max-w-3xl mx-auto text-lg"
        >
          Tem um projeto em mente?{" "}
          <span className="text-[#C8F904] font-semibold">
            Vamos transformar sua ideia
          </span>{" "}
          em um sistema completo e funcional. Preencha o formulário e entraremos
          em contato em até 24h.
        </motion.p>
      </div>

      {/* Conteúdo */}
      <div className="relative z-10 grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {/* Contatos */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <div className="flex items-center gap-4 p-6 bg-[#2C2C2C] rounded-2xl shadow-lg hover:shadow-xl transition">
            <Mail className="text-[#C8F904] w-8 h-8 animate-bounce" />
            <p className="text-gray-300 text-lg">contato@codelab.dev.br</p>
          </div>
          <div className="flex items-center gap-4 p-6 bg-[#2C2C2C] rounded-2xl shadow-lg hover:shadow-xl transition">
            <Phone className="text-[#C8F904] w-8 h-8 animate-bounce" />
            <p className="text-gray-300 text-lg">(71) 9 9999-9999</p>
          </div>
          <div className="flex items-center gap-4 p-6 bg-[#2C2C2C] rounded-2xl shadow-lg hover:shadow-xl transition">
            <MessageCircle className="text-[#C8F904] w-8 h-8 animate-bounce" />
            <p className="text-gray-300 text-lg">Atendimento via WhatsApp</p>
          </div>
        </motion.div>

        {/* Formulário */}
        <motion.form
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-[#2C2C2C] p-10 rounded-3xl flex flex-col gap-5 shadow-xl relative z-10"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="name"
            placeholder="Seu nome *"
            value={formData.name}
            onChange={handleChange}
            className="bg-[#1A1A1A] text-white px-5 py-4 rounded-xl outline-none focus:ring-2 focus:ring-[#C8F904] transition placeholder-gray-400"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Seu e-mail *"
            value={formData.email}
            onChange={handleChange}
            className="bg-[#1A1A1A] text-white px-5 py-4 rounded-xl outline-none focus:ring-2 focus:ring-[#C8F904] transition placeholder-gray-400"
            required
          />
          <input
            type="text"
            name="company"
            placeholder="Nome da empresa"
            value={formData.company}
            onChange={handleChange}
            className="bg-[#1A1A1A] text-white px-5 py-4 rounded-xl outline-none focus:ring-2 focus:ring-[#C8F904] transition placeholder-gray-400"
          />
          <input
            type="text"
            name="subject"
            placeholder="Assunto"
            value={formData.subject}
            onChange={handleChange}
            className="bg-[#1A1A1A] text-white px-5 py-4 rounded-xl outline-none focus:ring-2 focus:ring-[#C8F904] transition placeholder-gray-400"
          />
          <textarea
            name="message"
            placeholder="Escreva sua mensagem *"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            className="bg-[#1A1A1A] text-white px-5 py-4 rounded-xl outline-none focus:ring-2 focus:ring-[#C8F904] transition placeholder-gray-400 resize-none"
            required
          />

          {/* reCAPTCHA placeholder */}
          <div className="mt-2 mb-4">
            <div className="bg-[#1A1A1A] p-4 rounded-xl border border-gray-700 text-gray-300 text-sm">
              Aqui seria renderizado o reCAPTCHA do Google.
            </div>
          </div>

          <motion.button
            type="submit"
            disabled={submitting}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 15px rgba(200, 249, 4, 0.6)",
            }}
            className="bg-[#C8F904] text-[#1A1A1A] font-bold py-4 rounded-2xl transition-all text-lg disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {submitting ? "Enviando..." : "Enviar mensagem"}
          </motion.button>

          <p className="text-gray-400 text-sm mt-4">
            * Campos obrigatórios. Seus dados serão usados apenas para contato
            da CodeLab e não serão compartilhados.
          </p>
        </motion.form>
      </div>
    </section>
  );
}
