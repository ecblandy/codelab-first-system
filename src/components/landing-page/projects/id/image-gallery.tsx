"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ImageModal } from "./image-modal";

export function ImageGallery({ images }: { images: string[] }) {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div className="relative z-10">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
        {images.map((src, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="relative aspect-video rounded-xl overflow-hidden cursor-pointer group"
            onClick={() => setSelected(src)}
          >
            <Image
              src={src}
              alt={`Imagem ${i + 1}`}
              fill
              className="object-cover group-hover:opacity-80 transition-all duration-300"
            />
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selected && (
          <ImageModal image={selected} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>
    </div>
  );
}
