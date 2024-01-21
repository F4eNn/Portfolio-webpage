import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default:"Mateusz Kołodziej",
    template: '%s | Mateusz Kołodziej'
  },
  description: 'Personal porfolio Mateusz Kolodziej',
  keywords: "Web developer, strony internetowe, portfolio, frontend, front-end",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
