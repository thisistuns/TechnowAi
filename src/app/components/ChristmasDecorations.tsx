"use client";

import { useState, useLayoutEffect } from "react";

export default function ChristmasDecorations() {
  const [isChristmas, setIsChristmas] = useState(() => {
    if (typeof window === "undefined") return false;
    const html = document.documentElement;
    return html.classList.contains("christmas");
  });

  useLayoutEffect(() => {
    const checkChristmas = () => {
      const html = document.documentElement;
      return html.classList.contains("christmas");
    };

    // Chỉ dùng observer để cập nhật khi có thay đổi
    const observer = new MutationObserver(() => {
      setIsChristmas(checkChristmas());
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  if (!isChristmas) return null;

  return (
    <>
      {/* Cây thông Noel ở góc dưới bên trái */}
      <div className="fixed bottom-0 left-0 z-40 pointer-events-none hidden lg:block">
        <div className="text-6xl opacity-20 animate-pulse-slow" style={{ transform: "scaleX(-1)" }}>
          🎄
        </div>
      </div>

      {/* Cây thông Noel ở góc dưới bên phải */}
      <div className="fixed bottom-0 right-0 z-40 pointer-events-none hidden lg:block">
        <div className="text-6xl opacity-20 animate-pulse-slow">
          🎄
        </div>
      </div>

      {/* Ngôi sao ở góc trên */}
      <div className="fixed top-4 right-4 z-40 pointer-events-none hidden md:block">
        <div className="text-4xl opacity-30 animate-pulse-slow">
          ⭐
        </div>
      </div>

      {/* Vòng hoa ở góc trên bên trái */}
      <div className="fixed top-4 left-4 z-40 pointer-events-none hidden md:block">
        <div className="text-3xl opacity-25 animate-pulse-slow">
          🎀
        </div>
      </div>

      {/* Quả bóng trang trí rải rác */}
      <div className="fixed top-20 right-20 z-40 pointer-events-none hidden xl:block">
        <div className="text-2xl opacity-20 animate-float" style={{ animationDelay: "0s" }}>
          🔴
        </div>
      </div>

      <div className="fixed top-32 right-32 z-40 pointer-events-none hidden xl:block">
        <div className="text-2xl opacity-20 animate-float" style={{ animationDelay: "1s" }}>
          🟢
        </div>
      </div>

      <div className="fixed top-44 right-44 z-40 pointer-events-none hidden xl:block">
        <div className="text-2xl opacity-20 animate-float" style={{ animationDelay: "2s" }}>
          🟡
        </div>
      </div>

      {/* Quả chuông */}
      <div className="fixed bottom-20 left-20 z-40 pointer-events-none hidden xl:block">
        <div className="text-3xl opacity-20 animate-pulse-slow">
          🔔
        </div>
      </div>

      {/* Tuyết rơi nhỏ ở header */}
      <div className="fixed top-16 left-1/4 z-40 pointer-events-none hidden lg:block">
        <div className="text-xl opacity-15 animate-float" style={{ animationDelay: "0.5s" }}>
          ❄
        </div>
      </div>

      <div className="fixed top-24 left-3/4 z-40 pointer-events-none hidden lg:block">
        <div className="text-xl opacity-15 animate-float" style={{ animationDelay: "1.5s" }}>
          ❄
        </div>
      </div>
    </>
  );
}

