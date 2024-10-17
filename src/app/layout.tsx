import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Headertop from "./components/Headertop";
import { HeaderMain } from "./components/HeaderMain";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Footer from "./components/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Ghulam Ahmad SHOP.pop",
  description: "E-commerce Shopping website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-50`}
      >
        <Headertop />
        <HeaderMain />
        {children}
        <Footer />
      </body>
    </html>
  );
}
