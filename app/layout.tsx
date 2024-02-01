import type { Metadata } from "next";
import { Urbanist } from "next/font/google";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

import ModalProvider from "@/providers/ModalProvider";

import "./globals.css";
import ToastProvider from "@/providers/ToastProvider";

const font = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Store | Your favourite products here!",
  description: "Created by /in/emanuelnunez/",
};

export const nameStore = "🐒 MONKEY_STYLE";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ToastProvider />
        <ModalProvider />

        <Navbar nameStore={nameStore} />
        {children}
        <Footer nameStore={nameStore} />
      </body>
    </html>
  );
}
