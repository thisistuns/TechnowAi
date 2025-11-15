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
  const [snowflakes, setSnowflakes] = useState<Snowflake[]>([]);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    // Kiểm tra xem có class christmas trên html không
    const checkChristmas = () => {
      const html = document.documentElement;
      return html.classList.contains("christmas");
    };

    setIsActive(checkChristmas());

    // Tạo 60 bông tuyết với kích thước và tốc độ khác nhau
    const newSnowflakes: Snowflake[] = Array.from({ length: 60 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      animationDuration: 5 + Math.random() * 8, // 5-13 giây
      animationDelay: Math.random() * 5,
      size: 8 + Math.random() * 12, // 8-20px
      opacity: 0.4 + Math.random() * 0.6, // 0.4-1
    }));

    setSnowflakes(newSnowflakes);

    // Lắng nghe thay đổi class christmas
    const observer = new MutationObserver(() => {
      setIsActive(checkChristmas());
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  if (!isActive) return null;

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
