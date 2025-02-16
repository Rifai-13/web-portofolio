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
    name: string;
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
    if (
      containerRef.current &&
      scrollerRef1.current &&
      scrollerRef2.current &&
      scrollerRef3.current
    ) {
      // Duplicating content for infinite scroll effect
      const scrollerContent1 = Array.from(scrollerRef1.current.children);
      const scrollerContent2 = Array.from(scrollerRef2.current.children);
      const scrollerContent3 = Array.from(scrollerRef3.current.children);

      scrollerContent1.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef1.current) {
          scrollerRef1.current.appendChild(duplicatedItem);
        }
      });

      scrollerContent2.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef2.current) {
          scrollerRef2.current.appendChild(duplicatedItem);
        }
      });

      scrollerContent3.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef3.current) {
          scrollerRef3.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "right") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      // Setting speed for each layer
      const speedDurations = {
        fast: "30s",
        normal: "40s",
        slow: "80s",
      };

      // Layer 1: Fast speed
      if (scrollerRef1.current && scrollerRef1.current.style) {
        scrollerRef1.current.style.animationDuration = speedDurations[speed] || speedDurations.fast;
      }

      // Layer 2: Normal speed (this remains the same for Layer 2)
      if (scrollerRef2.current && scrollerRef2.current.style) {
        scrollerRef2.current.style.animationDuration = speedDurations[speed] || speedDurations.normal;
      }

      // Layer 3: Slower speed
      if (scrollerRef3.current && scrollerRef3.current.style) {
        scrollerRef3.current.style.animationDuration = speedDurations[speed] || speedDurations.slow; // Layer 3 slower
      }
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative z-20 max-w-7xl overflow-hidden",
        "[mask-image:linear-gradient(to_right,transparent,white_2%,white_98%,transparent)]", // Untuk device kecil
        "xs:[mask-image:linear-gradient(to_right,transparent,white_5%,white_95%,transparent)]", // Untuk xs
        "sm:[mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <div className="flex flex-col gap-1 xs:gap-2">
        {/* Desktop View - Layer 1 */}
        <ul
          ref={scrollerRef1}
          className={cn(
            "hidden sm:flex min-w-full shrink-0 gap-2 py-2 w-max flex-nowrap",
            start && "animate-scroll",
            pauseOnHover && "hover:[animation-play-state:paused]"
          )}
          style={{ animationDirection: "reverse"}} // Layer 1: Move to the left
        >
          {items.map((item) => (
            <li
              key={item.name}
              className="flex items-center p-2 bg-black rounded-xl border-2 border-gray-600"
              style={{
                width: "fit-content",
                height: "40px",
              }}
            >
              <Image
                src={item.imageSrc}
                alt={item.name}
                width={25}
                height={20}
                className="w-6 h-6"
              />
              <span className="text-sm ml-2 text-gray-100">{item.name}</span>
            </li>
          ))}
        </ul>

        {/* Layer 2 (Move from left to right) */}
        <ul
          ref={scrollerRef2}
          className={cn(
            "flex min-w-full shrink-0 gap-2 py-2 w-max flex-nowrap",
            start && "animate-scroll",
            pauseOnHover && "hover:[animation-play-state:paused]"
          )}
          style={{ animationDirection: "normal" }} // Layer 2: Move to the right
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
              <span className="text-sm ml-2 text-gray-100">{item.name}</span>
            </li>
          ))}
        </ul>

        {/* Layer 3 (Move from right to left) */}
        <ul
          ref={scrollerRef3}
          className={cn(
            "flex min-w-full shrink-0 gap-2 py-4 w-max flex-nowrap",
            start && "animate-scroll",
            pauseOnHover && "hover:[animation-play-state:paused]"
          )}
          style={{ animationDirection: "reverse" }} // Layer 3: Move to the left
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
              <span className="text-sm ml-2 text-gray-100">{item.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
