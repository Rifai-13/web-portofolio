"use client";

import * as React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
} from "@/components/ui/sidebar";
import { motion } from "framer-motion";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { useEffect, useState } from "react";

export function AppSidebar() {
  const staticText = "Muh"; // Bagian teks yang tetap
  const typingText = "ammad Rifai"; // Bagian teks yang dianimasikan

  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);
  const items = [
    { name: "HTML", imageSrc: "/image/html.png" },
    { name: "CSS", imageSrc: "/image/css.png" },
    { name: "JavaScript", imageSrc: "/image/js.png" },
    { name: "Booststrap", imageSrc: "/image/boostraps.png" },
    { name: "MySQL", imageSrc: "/image/mysql.png" },
    { name: "Laravel", imageSrc: "/image/laravel.png" },
    { name: "PHP", imageSrc: "/image/php.png" },
    { name: "NodeJs", imageSrc: "/image/nodejs.png" },
    { name: "Vue", imageSrc: "/image/vue.png" },
    { name: "React", imageSrc: "/image/react.png" },
    { name: "Express", imageSrc: "/image/express.png" },
    { name: "Flutter", imageSrc: "/image/flutter.png" },
    { name: "Next.Js", imageSrc: "/image/nextjs.png" },
    { name: "Tailwindcss", imageSrc: "/image/tailwind.png" },
    { name: "Shadcn/Ui", imageSrc: "/image/shadcn.png" },
    { name: "Figma", imageSrc: "/image/figma.png" },
    { name: "Vite", imageSrc: "/image/vite.png" },
  ]; // Define your items here

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
    <Sidebar
      style={{ border: "none" }}
      className="bg-background text-card-foreground w-64 h-full p-4"
    >
      <SidebarHeader>
        <div className="items-center justify-start mt-20 ml-20">
          {/* Animasi Mengetik untuk h1 */}
          <motion.h1
            className="text-5xl font-semibold text-card whitespace-nowrap"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {staticText}
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {displayText}
            </motion.span>
          </motion.h1>

          {/* Animasi Masuk untuk h2 */}
          <motion.h2
            className="text-2xl text-gray-600 whitespace-nowrap mt-4 font-semibold"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.8 }}
          >
            Front End Engineer
          </motion.h2>

          {/* Animasi Masuk untuk h3 */}
          <motion.h3
            className="text-lg text-gray-600 mt-4 font-semibold w-96"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 2, duration: 0.8 }}
          >
            I design innovative and functional web for the digital future.
          </motion.h3>
        </div>
      </SidebarHeader>
      <SidebarContent className="w-full h-full mr-20">
      <InfiniteMovingCards items={items}/>
      </SidebarContent>
    </Sidebar>
  );
}
