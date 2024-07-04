import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "포켓몬카드",
  description: "나의 포켓몬카드",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="w-full h-[60px] bg-[#1a4687]	text-center pt-[1rem] border-double border-b-4 border-#b2efcf-500">
          <h2 className="font-bold">나의 포켓몬 카드</h2>
        </header>
        {children}
      </body>
    </html>
  );
}
