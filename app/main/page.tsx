"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Main() {
  const staticText = "My "; // Bagian teks yang tetap
  const typingText = "Name is Rifa'i"; // Bagian teks yang dianimasikan

  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const typingSpeed = isDeleting ? 100 : 200; // Kecepatan ketik & hapus
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (index < typingText.length) {
          setDisplayText((prev) => prev + typingText[index]);
          setIndex(index + 1);
        } else {
          setTimeout(() => setIsDeleting(true), 1000); // Tunggu sebelum hapus
        }
      } else {
        if (index > 0) {
          setDisplayText((prev) => prev.slice(0, -1));
          setIndex(index - 1);
        } else {
          setIsDeleting(false);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [index, isDeleting]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-4 md:px-24">
      {/* Animated Typing Text */}
      <motion.div className="mb-8 w-full text-center">
        <h1 className="text-3xl md:text-6xl font-bold tracking-wide whitespace-nowrap">
          {staticText}
          <motion.span className="inline-block">{displayText}</motion.span>
          <motion.span
            className="inline-block bg-gray-700 w-2 h-6 ml-1"
            animate={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, repeat: Infinity }}
          />
        </h1>
      </motion.div>

      {/* Bio Section */}
      <div className="max-w-xl text-center md:text-left">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-base md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed"
        >
          Frontend Developer dengan spesialisasi dalam React & Next.js.
          Berpengalaman dalam membangun aplikasi web modern dengan fokus pada
          performa dan user experience. Selalu tertarik dengan teknologi terbaru
          dan solusi kreatif untuk masalah pengembangan web.
        </motion.p>
      </div>
    </main>
  );
}
