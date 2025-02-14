"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import Image from "next/image";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = false,
  className,
}: {
  items: {
    quote: string;
    name: string;
    title: string;
    imageSrc: string; // Menambahkan imageSrc untuk gambar
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef1 = React.useRef<HTMLUListElement>(null);
  const scrollerRef2 = React.useRef<HTMLUListElement>(null);
  const scrollerRef3 = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);

  const [start, setStart] = useState(false);

  function addAnimation() {
    if (containerRef.current && scrollerRef1.current && scrollerRef2.current && scrollerRef3.current) {
      // Duplicating content for infinite scroll effect
      const scrollerContent1 = Array.from(scrollerRef1.current.children);
      const scrollerContent2 = Array.from(scrollerRef2.current.children);
      const scrollerContent3 = Array.from(scrollerRef3.current.children);

      scrollerContent1.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        scrollerRef1.current.appendChild(duplicatedItem);
      });

      scrollerContent2.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        scrollerRef2.current.appendChild(duplicatedItem);
      });

      scrollerContent3.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        scrollerRef3.current.appendChild(duplicatedItem);
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "right") {
        containerRef.current.style.setProperty("--animation-direction", "forwards");
      } else {
        containerRef.current.style.setProperty("--animation-direction", "reverse");
      }
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <div className="flex flex-col gap-2">
        {/* Layer 1 (Right direction) */}
        <ul
          ref={scrollerRef1}
          className={cn(
            "flex min-w-full shrink-0 gap-2 py-2 w-max flex-nowrap",
            start && "animate-scroll",
            pauseOnHover && "hover:[animation-play-state:paused]"
          )}
          style={{ animationDirection: "forwards" }} // Move to the right
        >
          {items.map((item) => (
            <li
              key={item.name}
              className="flex items-center justify-start space-x-4 p-2 bg-black rounded-xl border border-gray-600 hover:border-blue-500"
              style={{
                width: "fit-content",
                height: "40px",
                borderWidth: "2px",
              }}
            >
              <Image
                src={item.imageSrc}
                alt={item.name}
                width={25}
                height={20}
                className="object-contain"
              />
              {/* Teks */}
              <div className="ml-4 mb-4 flex flex-col justify-center">
                <blockquote>
                  <span className="relative z-20 text-sm leading-[1.6] text-gray-100 font-normal">
                    {item.quote}
                  </span>
                </blockquote>
                <div className="relative z-20 mt-6 flex flex-row items-center">
                  <span className="flex flex-col gap-1">
                    <span className="text-sm leading-[1.6] text-gray-400 font-normal">
                      {item.name}
                    </span>
                    <span className="text-sm leading-[1.6] text-gray-400 font-normal">
                      {item.title}
                    </span>
                  </span>
                </div>
              </div>
            </li>
          ))}
        </ul>

        {/* Layer 2 (Left direction) */}
        <ul
          ref={scrollerRef2}
          className={cn(
            "flex min-w-full shrink-0 gap-2 py-2 w-max flex-nowrap",
            start && "animate-scroll",
            pauseOnHover && "hover:[animation-play-state:paused]"
          )}
          style={{ animationDirection: "reverse" }} // Move to the left
        >
          {items.map((item) => (
            <li
              key={item.name}
              className="flex items-center justify-start space-x-4 p-2 bg-black rounded-xl border border-gray-600 hover:border-blue-500"
              style={{
                width: "fit-content",
                height: "40px",
                borderWidth: "2px",
              }}
            >
              <Image
                src={item.imageSrc}
                alt={item.name}
                width={25}
                height={20}
                className="object-contain"
              />
              {/* Teks */}
              <div className="ml-4 mb-4 flex flex-col justify-center">
                <blockquote>
                  <span className="relative z-20 text-sm leading-[1.6] text-gray-100 font-normal">
                    {item.quote}
                  </span>
                </blockquote>
                <div className="relative z-20 mt-6 flex flex-row items-center">
                  <span className="flex flex-col gap-1">
                    <span className="text-sm leading-[1.6] text-gray-400 font-normal">
                      {item.name}
                    </span>
                    <span className="text-sm leading-[1.6] text-gray-400 font-normal">
                      {item.title}
                    </span>
                  </span>
                </div>
              </div>
            </li>
          ))}
        </ul>

        {/* Layer 3 (Right direction) */}
        <ul
          ref={scrollerRef3}
          className={cn(
            "flex min-w-full shrink-0 gap-2 py-4 w-max flex-nowrap",
            start && "animate-scroll",
            pauseOnHover && "hover:[animation-play-state:paused]"
          )}
          style={{ animationDirection: "forwards" }} // Move to the right
        >
          {items.map((item) => (
            <li
              key={item.name}
              className="flex items-center justify-start space-x-4 p-2 bg-black rounded-xl border border-gray-600 hover:border-blue-500"
              style={{
                width: "fit-content",
                height: "40px",
                borderWidth: "2px",
              }}
            >
              <Image
                src={item.imageSrc}
                alt={item.name}
                width={25}
                height={20}
                className="object-contain"
              />
              {/* Teks */}
              <div className="mb-4 flex flex-col justify-center">
                <blockquote>
                  <span className="relative z-20 text-sm leading-[1.6] text-gray-100 font-normal">
                    {item.quote}
                  </span>
                </blockquote>
                <div className="relative z-20 mt-6 flex flex-row items-center">
                  <span className="flex flex-col gap-1">
                    <span className="text-sm leading-[1.6] text-gray-400 font-normal">
                      {item.name}
                    </span>
                    <span className="text-sm leading-[1.6] text-gray-400 font-normal">
                      {item.title}
                    </span>
                  </span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
