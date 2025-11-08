import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import FontAwesomeLoader from "./components/FontAwesomeLoader";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Technow - Đăng ký ChatGPT Plus",
  description: "Khám phá sức mạnh đầy đủ của AI với ChatGPT Plus. Nhận tốc độ phản hồi nhanh hơn, ưu tiên truy cập các tính năng mới và truy cập ổn định ngay cả trong giờ cao điểm.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className="scroll-smooth">
      <body
        className={`${poppins.variable} font-display antialiased bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark`}
        suppressHydrationWarning
      >
        <FontAwesomeLoader />
        {children}
      </body>
    </html>
  );
}
