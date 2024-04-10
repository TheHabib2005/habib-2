import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import "@/app/globals.css";
import { Toaster } from 'react-hot-toast';

import Header from "@/components/(root)/Header";
const inter = Roboto_Mono({ subsets: ["greek"] });

export const metadata: Metadata = {
  title: "H&H STORE",
  description: "Generated by create next app",
  icons: "@/app/favicon.ico",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>{/* <link rel="icon" href="./favicon.ico" /> */}</head>
      <body className={inter.className}>
        <Toaster
          position="top-center"
          reverseOrder={false}
        />
        <main className="bg-[#171717] w-full min-h-screen h-auto">
          <Header />
          {children}
        </main>
      </body>
    </html>
  );
}