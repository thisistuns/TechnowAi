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
      {/* Mobile: Ít hoạ tiết hơn, kích thước nhỏ */}
      {/* Cây thông Noel - Mobile */}
      <div className="fixed bottom-0 left-0 z-40 pointer-events-none lg:hidden">
        <div className="text-3xl opacity-15 animate-pulse-slow" style={{ transform: "scaleX(-1)" }}>
          🎄
        </div>
      </div>
      <div className="fixed bottom-0 right-0 z-40 pointer-events-none lg:hidden">
        <div className="text-3xl opacity-15 animate-pulse-slow">
          🎄
        </div>
      </div>

      {/* Ngôi sao - Mobile */}
      <div className="fixed top-2 right-2 z-40 pointer-events-none lg:hidden">
        <div className="text-2xl opacity-20 animate-pulse-slow">
          ⭐
        </div>
      </div>

      {/* Desktop: Nhiều hoạ tiết hơn */}
      {/* Cây thông Noel ở góc dưới */}
      <div className="fixed bottom-0 left-0 z-40 pointer-events-none hidden lg:block">
        <div className="text-6xl opacity-20 animate-pulse-slow" style={{ transform: "scaleX(-1)" }}>
          🎄
        </div>
      </div>
      <div className="fixed bottom-0 right-0 z-40 pointer-events-none hidden lg:block">
        <div className="text-6xl opacity-20 animate-pulse-slow">
          🎄
        </div>
      </div>

      {/* Ngôi sao ở các góc */}
      <div className="fixed top-4 right-4 z-40 pointer-events-none hidden md:block">
        <div className="text-4xl opacity-30 animate-pulse-slow">
          ⭐
        </div>
      </div>
      <div className="fixed top-8 left-8 z-40 pointer-events-none hidden xl:block">
        <div className="text-3xl opacity-25 animate-pulse-slow" style={{ animationDelay: "0.5s" }}>
          ⭐
        </div>
      </div>

      {/* Vòng hoa và nơ */}
      <div className="fixed top-4 left-4 z-40 pointer-events-none hidden md:block">
        <div className="text-3xl opacity-25 animate-pulse-slow">
          🎀
        </div>
      </div>
      <div className="fixed bottom-16 left-16 z-40 pointer-events-none hidden xl:block">
        <div className="text-2xl opacity-20 animate-pulse-slow" style={{ animationDelay: "1s" }}>
          🎀
        </div>
      </div>

      {/* Quả bóng trang trí - nhiều màu */}
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
      <div className="fixed top-56 right-56 z-40 pointer-events-none hidden xl:block">
        <div className="text-2xl opacity-20 animate-float" style={{ animationDelay: "0.5s" }}>
          🔵
        </div>
      </div>
      <div className="fixed top-28 right-28 z-40 pointer-events-none hidden xl:block">
        <div className="text-2xl opacity-20 animate-float" style={{ animationDelay: "1.5s" }}>
          🟣
        </div>
      </div>

      {/* Quả bóng ở bên trái */}
      <div className="fixed top-24 left-24 z-40 pointer-events-none hidden xl:block">
        <div className="text-2xl opacity-20 animate-float" style={{ animationDelay: "0.8s" }}>
          🔴
        </div>
      </div>
      <div className="fixed top-36 left-36 z-40 pointer-events-none hidden xl:block">
        <div className="text-2xl opacity-20 animate-float" style={{ animationDelay: "1.8s" }}>
          🟢
        </div>
      </div>

      {/* Quả chuông */}
      <div className="fixed bottom-20 left-20 z-40 pointer-events-none hidden xl:block">
        <div className="text-3xl opacity-20 animate-pulse-slow">
          🔔
        </div>
      </div>
      <div className="fixed bottom-32 right-32 z-40 pointer-events-none hidden xl:block">
        <div className="text-3xl opacity-20 animate-pulse-slow" style={{ animationDelay: "1s" }}>
          🔔
        </div>
      </div>

      {/* Ông già Noel và tuần lộc */}
      <div className="fixed bottom-24 left-1/4 z-40 pointer-events-none hidden xl:block">
        <div className="text-2xl opacity-15 animate-pulse-slow" style={{ animationDelay: "0.5s" }}>
          🎅
        </div>
      </div>
      <div className="fixed bottom-40 right-1/4 z-40 pointer-events-none hidden xl:block">
        <div className="text-2xl opacity-15 animate-pulse-slow" style={{ animationDelay: "1.5s" }}>
          🦌
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
      <div className="fixed top-32 left-1/2 z-40 pointer-events-none hidden xl:block">
        <div className="text-xl opacity-15 animate-float" style={{ animationDelay: "2.5s" }}>
          ❄
        </div>
      </div>

      {/* Ngọn nến */}
      <div className="fixed top-40 left-12 z-40 pointer-events-none hidden xl:block">
        <div className="text-2xl opacity-20 animate-pulse-slow" style={{ animationDelay: "0.3s" }}>
          🕯️
        </div>
      </div>
      <div className="fixed top-48 right-12 z-40 pointer-events-none hidden xl:block">
        <div className="text-2xl opacity-20 animate-pulse-slow" style={{ animationDelay: "1.3s" }}>
          🕯️
        </div>
      </div>

      {/* Vòng hoa lá thông */}
      <div className="fixed top-12 left-1/3 z-40 pointer-events-none hidden xl:block">
        <div className="text-2xl opacity-18 animate-pulse-slow" style={{ animationDelay: "0.7s" }}>
          🪴
        </div>
      </div>
      <div className="fixed top-20 right-1/3 z-40 pointer-events-none hidden xl:block">
        <div className="text-2xl opacity-18 animate-pulse-slow" style={{ animationDelay: "1.7s" }}>
          🪴
        </div>
      </div>
    </>
  );
}

