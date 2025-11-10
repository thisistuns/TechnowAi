import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import FontAwesomeLoader from "./components/FontAwesomeLoader";
import SkipLink from "./components/SkipLink";
import StructuredData from "./components/StructuredData";
import ErrorBoundary from "./components/ErrorBoundary";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Technow - Đăng ký ChatGPT Plus",
  description: "Khám phá sức mạnh đầy đủ của AI với ChatGPT Plus. Nhận tốc độ phản hồi nhanh hơn, ưu tiên truy cập các tính năng mới và truy cập ổn định ngay cả trong giờ cao điểm.",
  keywords: ["ChatGPT Plus", "AI", "Technow", "OpenAI", "ChatGPT đăng ký", "ChatGPT Việt Nam"],
  authors: [{ name: "Technow" }],
  creator: "Technow",
  publisher: "Technow",
  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: "https://technowit.vn",
    siteName: "Technow",
    title: "Technow - Đăng ký ChatGPT Plus",
    description: "Khám phá sức mạnh đầy đủ của AI với ChatGPT Plus. Nhận tốc độ phản hồi nhanh hơn, ưu tiên truy cập các tính năng mới và truy cập ổn định ngay cả trong giờ cao điểm.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Technow - ChatGPT Plus",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Technow - Đăng ký ChatGPT Plus",
    description: "Khám phá sức mạnh đầy đủ của AI với ChatGPT Plus",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Thêm Google Search Console verification code nếu có
    // google: "your-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <StructuredData />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const theme = localStorage.getItem('theme');
                  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  if (theme === 'dark' || (!theme && prefersDark)) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.add('light-mode');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${poppins.variable} font-display antialiased bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark`}
        suppressHydrationWarning
      >
        <ErrorBoundary>
          <SkipLink />
          <FontAwesomeLoader />
          {children}
        </ErrorBoundary>
      </body>
    </html>
  );
}
