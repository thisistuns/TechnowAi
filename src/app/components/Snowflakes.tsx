"use client";

import { useEffect, useState } from "react";

interface Snowflake {
  id: number;
  left: number;
  animationDuration: number;
  animationDelay: number;
  size: number;
  opacity: number;
}

const SNOWFLAKE_SYMBOLS = ["❄", "❅", "❆", "✻", "✼", "✽", "✾", "✿"];

export default function Snowflakes() {
  const [snowflakes, setSnowflakes] = useState<Snowflake[]>(() => {
    if (typeof window === "undefined") return [];
    
    // Tạo 50 bông tuyết với kích thước và tốc độ khác nhau (ít hơn để không quá rối)
    return Array.from({ length: 50 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      animationDuration: 6 + Math.random() * 10, // 6-16 giây
      animationDelay: Math.random() * 5,
      size: 6 + Math.random() * 10, // 6-16px
      opacity: 0.3 + Math.random() * 0.5, // 0.3-0.8 (nhẹ hơn)
    }));
  });

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {snowflakes.map((snowflake) => {
        const symbol =
          SNOWFLAKE_SYMBOLS[
            Math.floor(Math.random() * SNOWFLAKE_SYMBOLS.length)
          ];
        return (
          <div
            key={snowflake.id}
            className="snowflake"
            style={{
              left: `${snowflake.left}%`,
              fontSize: `${snowflake.size}px`,
              opacity: snowflake.opacity,
              animation: `fall ${snowflake.animationDuration}s linear ${snowflake.animationDelay}s infinite`,
            }}
          >
            {symbol}
          </div>
        );
      })}
    </div>
  );
}
