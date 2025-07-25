import React from "react";
import Navbar from "../navbar";
import "../globals.css";
import { Rethink_Sans } from "next/font/google";
import { Metadata } from "next";
import Footer from "../Footer";
import { ToastContainer } from "react-toastify";

const rethink = Rethink_Sans({
  variable: "--font-rethink-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Streamer - Perya Gang",
  description: "A platform for streamers to connect and collaborate",
  openGraph: {
    title: "Perya Gang Streamer",
    description: "Get Rewarded Like Never Before",
    // url: "https://perya-gang.vercel.app", // REPLACE THIS WITH ACTUAL URL
    siteName: "Perya Gang",
    images: [
      {
        url: "",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <body
          className={`${rethink.className} antialiased gap-y-12 tracking-tight text-white bg-zinc-950 flex flex-col`}
        >
          <Navbar />
          <main className="w-full flex-1 max-w-screen-xl mx-auto pb-5">
            <ToastContainer />
            {children}
          </main>
          <Footer />
        </body>
      </html>
    </>
  );
}
