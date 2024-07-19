import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import Navbar from "@/components/navbar";
import ThemeSwitch from "@/sections/ThemeSwitch";
import Head from "next/head";
import ActiveSectioncontextProvider from "@/context/activeSectioncontext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fortune Mbonu | Portfolio",
  description: "Fortune Mbonu's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth ">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body
        className={`!font-poppins bg-cyan-50/20 text-gray-950 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        <div className="bg-blue-200 dark:bg-blue-900 absolute top-[50px] left-[20px] z-[-999] blur-[10rem] w-80 h-80 rounded-full"></div>
        <div className="bg-pink-200 dark:bg-pink-900 absolute top-[-80px] right-[20px] z-[-999] blur-[10rem] w-80 h-80 rounded-full"></div>
        <ActiveSectioncontextProvider>
          <Navbar />
          <ThemeSwitch />
          {children}
        </ActiveSectioncontextProvider>
      </body>
    </html>
  );
}
