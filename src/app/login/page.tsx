"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaGithub, FaGoogle } from "react-icons/fa";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ email, password });
    router.push("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#1A1A1A] pt-20 px-6">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-[550px] bg-[#2C2C2C] rounded-3xl shadow-2xl p-10"
      >
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <Image
            src="/assets/images/poison.svg"
            alt="Poção da Codelab"
            width={80}
            height={80}
          />
        </div>

        {/* Título */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-center mb-6"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-[#C8F904]">
            Painel Administrativo
          </h2>
          <p className="text-gray-400 mt-1 text-sm md:text-base">
            Área exclusiva para o time da Codelab
          </p>
        </motion.div>

        {/* Formulário */}
        <motion.form
          onSubmit={handleLogin}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="flex flex-col gap-4"
        >
          <input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="px-4 py-3 rounded-xl bg-[#1A1A1A] border border-gray-700 text-[#F5F5F5] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#C8F904] focus:border-[#C8F904] transition"
            required
          />
          <input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="px-4 py-3 rounded-xl bg-[#1A1A1A] border border-gray-700 text-[#F5F5F5] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#C8F904] focus:border-[#C8F904] transition"
            required
          />
          <button
            type="submit"
            className="mt-2 bg-[#C8F904] text-[#2C2C2C] font-semibold py-3 rounded-xl text-lg hover:bg-[#A7C7E7] hover:text-[#1A1A1A] transition-all shadow-lg"
          >
            Entrar
          </button>
        </motion.form>

        {/* Separador */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="flex items-center my-6"
        >
          <hr className="flex-1 border-gray-600" />
          <span className="mx-4 text-gray-400 uppercase text-xs tracking-wider">
            ou
          </span>
          <hr className="flex-1 border-gray-600" />
        </motion.div>

        {/* Login Social */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="flex flex-col gap-4"
        >
          <button className="flex items-center justify-center gap-3 py-3 rounded-xl bg-[#333333] text-[#F5F5F5] hover:bg-[#444444] transition-all shadow-lg">
            <FaGithub size={20} />
            Entrar com GitHub
          </button>
          <button className="flex items-center justify-center gap-3 py-3 rounded-xl bg-[#DB4437] text-white hover:bg-[#C33D2E] transition-all shadow-lg">
            <FaGoogle size={20} />
            Entrar com Google
          </button>
        </motion.div>

        {/* Rodapé */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="mt-6 text-center text-gray-400 text-sm"
        >
          Não tem conta?{" "}
          <span className="text-[#C8F904] cursor-pointer hover:underline">
            Cadastre-se
          </span>
        </motion.p>
      </motion.div>
    </div>
  );
}
