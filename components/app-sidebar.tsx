"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

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
  ];

  useEffect(() => {
    const typingSpeed = isDeleting ? 100 : 200;
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (index < typingText.length) {
          setDisplayText((prev) => prev + typingText[index]);
          setIndex(index + 1);
        } else {
          setTimeout(() => setIsDeleting(true), 1000);
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
    <div className="flex flex-col h-full w-full bg-background text-card-foreground p-4 md:p-6">
      <div className="flex flex-col flex-grow">
        <div className="items-center justify-start mt-4 md:mt-20">
          <motion.h1
            className={cn("font-semibold text-card whitespace-nowrap", "text-3xl md:text-5xl")}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {staticText}
            <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
              {displayText}
            </motion.span>
          </motion.h1>

          <motion.h2
            className={cn("text-gray-600 whitespace-nowrap mt-2 md:mt-4 font-semibold", "text-xl md:text-2xl")}
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.8 }}
          >
            Front End Engineer
          </motion.h2>

          <motion.h3
            className={cn("text-gray-600 mt-2 md:mt-4 font-semibold", "text-sm md:text-lg")}
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 2, duration: 0.8 }}
          >
            I design innovative and functional web for the digital future.
          </motion.h3>
        </div>

        {/* InfiniteMovingCards di bawah teks */}
        <div className="flex-1 mt-6">
          <InfiniteMovingCards items={items} />
        </div>
      </div>
    </div>
  );
}
