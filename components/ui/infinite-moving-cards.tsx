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
    imageSrc: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  const [start, setStart] = useState(false);

  useEffect(() => {
    function addAnimation() {
      if (containerRef.current && scrollerRef.current) {
        const scrollerContent = Array.from(scrollerRef.current.children);
        
        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true);
          scrollerRef.current?.appendChild(duplicatedItem);
        });

        getDirection();
        getSpeed();
        setStart(true);
      }
    }
    addAnimation();
  }, []);

  const getDirection = () => {
    if (containerRef.current) {
      containerRef.current.style.setProperty(
        "--animation-direction",
        direction === "right" ? "forwards" : "reverse"
      );
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      switch (speed) {
        case "fast":
          containerRef.current.style.setProperty("--animation-duration", "20s");
          break;
        case "normal":
          containerRef.current.style.setProperty("--animation-duration", "40s");
          break;
        case "slow":
          containerRef.current.style.setProperty("--animation-duration", "80s");
          break;
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
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item) => (
          <li
            key={item.name}
            className="flex items-center p-4 bg-black rounded-xl border-2 border-gray-600 hover:border-blue-500"
            style={{
              width: '200px',
              height: '60px',
            }}
          >
            <Image
              src={item.imageSrc}
              alt={item.name}
              width={32}
              height={32}
              className="w-8 h-8 object-contain"
            />
            <span className="text-lg text-gray-100 ml-2">
              {item.name}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};