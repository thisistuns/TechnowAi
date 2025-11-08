"use client";

import { useState } from "react";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        className="md:hidden p-2 rounded-md text-text-light dark:text-text-dark hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        <i className={`fas ${isOpen ? "fa-times" : "fa-bars"} text-xl`}></i>
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/50 z-40 md:hidden"
            onClick={() => setIsOpen(false)}
          ></div>
          <div className="fixed top-16 left-0 right-0 bg-surface-light dark:bg-surface-dark border-b border-slate-200 dark:border-slate-800 z-50 md:hidden shadow-lg">
            <nav className="container mx-auto px-6 py-4 flex flex-col space-y-4">
              <a
                className="text-text-muted-light dark:text-text-muted-dark hover:text-primary dark:hover:text-primary transition-colors py-2"
                href="#features"
                onClick={() => setIsOpen(false)}
              >
                Tính năng
              </a>
              <a
                className="text-text-muted-light dark:text-text-muted-dark hover:text-primary dark:hover:text-primary transition-colors py-2"
                href="#testimonials"
                onClick={() => setIsOpen(false)}
              >
                Đánh giá
              </a>
              <a
                className="text-text-muted-light dark:text-text-muted-dark hover:text-primary dark:hover:text-primary transition-colors py-2"
                href="#faq"
                onClick={() => setIsOpen(false)}
              >
                Câu hỏi thường gặp
              </a>
              <div className="flex flex-col gap-3 pt-4 border-t border-slate-200 dark:border-slate-800">
                <a
                  className="bg-primary text-white font-semibold px-5 py-2.5 rounded-md hover:opacity-90 transition-opacity text-center flex items-center justify-center gap-2"
                  href="https://m.me/technowIT.vn"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                >
                  <i className="fab fa-facebook-messenger"></i>
                  Nhắn tin
                </a>
                <a
                  className="bg-primary text-white font-semibold px-5 py-2.5 rounded-md hover:opacity-90 transition-opacity text-center"
                  href="https://www.facebook.com/technowIT.vn"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                >
                  Đăng ký ngay
                </a>
              </div>
            </nav>
          </div>
        </>
      )}
    </>
  );
}

