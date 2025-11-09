"use client";

export default function FloatingChatButton() {
  return (
    <a
      href="https://m.me/technowIT.vn"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-primary text-white rounded-full p-4 sm:p-5 shadow-2xl shadow-primary/50 hover:shadow-primary/70 transition-all duration-300 hover:scale-110 animate-pulse-slow hover:animate-none group"
      aria-label="Nhắn tin với chúng tôi"
    >
      <div className="relative">
        <i className="fab fa-facebook-messenger text-2xl sm:text-3xl"></i>
        <span className="absolute -top-12 right-0 bg-gray-900 dark:bg-gray-800 text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none hidden sm:block">
          Nhắn tin với chúng tôi
          <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900 dark:border-t-gray-800"></div>
        </span>
      </div>
      <div className="absolute -top-1 -right-1 w-3 h-3 sm:w-4 sm:h-4 bg-red-500 rounded-full border-2 border-white animate-ping"></div>
      <div className="absolute -top-1 -right-1 w-3 h-3 sm:w-4 sm:h-4 bg-red-500 rounded-full border-2 border-white"></div>
    </a>
  );
}
