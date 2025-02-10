"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "normal",
  // pauseOnHover = true,
  className,
}: {
  items: {
    imageSrc: string;
    name: string;
  }[]; // Image source and name for each card
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  // pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
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
        "scroller relative z-20 w-[50vw] overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap pl-[25vw]",
          start && "animate-scroll",
          // pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item) => (
          <li
            key={item.name}
            className="w-[20px] h-[40px] max-w-full relative rounded-2xl border-2 border-solid border-slate-500 flex-shrink-0 px-4 py-4 md:w-[125px] flex flex-row items-center justify-center" // Adjusted width and height
            style={{
              background:
                "linear-gradient(180deg, var(--slate-800), var(--slate-900))",
            }}
          >
            {/* Image */}
            <img
              src={item.imageSrc}
              alt={item.name}
              className="w-[40px] h-[30px] rounded-lg mr-4" // Reduced image size
              style={{ objectFit: "contain" }}
            />
            {/* Text beside image */}
            <div className="text-left">
              <span className="text-sm leading-[1.6] text-gray-100 font-normal">
                {item.name}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
