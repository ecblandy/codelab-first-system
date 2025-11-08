"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface ImageModalProps {
  image: string | null;
  onClose: () => void;
}

export function ImageModal({ image, onClose }: ImageModalProps) {
  if (!image) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-6"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 120 }}
        className="relative w-full max-w-4xl h-[80vh]"
      >
        <Image
          src={image}
          alt="Visualização ampliada"
          fill
          className="object-contain rounded-xl"
        />
      </motion.div>
    </motion.div>
  );
}
