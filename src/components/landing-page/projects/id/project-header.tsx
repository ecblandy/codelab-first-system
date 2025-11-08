"use client";

import { motion } from "framer-motion";

export function ProjectHeader({
  title,
  type,
  description,
}: {
  title: string;
  type: string;
  description: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-center max-w-3xl mx-auto mb-12"
    >
      <h1 className="text-4xl md:text-5xl font-bold text-[#C8F904] mb-2">
        {title}
      </h1>
      <p className="text-gray-400 italic mb-4">{type}</p>
      <p className="text-gray-300 leading-relaxed">{description}</p>
    </motion.div>
  );
}
