import React from "react";
import Navbar from "../navbar";
import "../globals.css";
import { Rethink_Sans } from "next/font/google";
import { Metadata } from "next";
import { ToastContainer } from "react-toastify";

const rethink = Rethink_Sans({
  variable: "--font-rethink-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Stream - Perya Gang",
  description: "Watch live streams from Perya Gang",
  openGraph: {
    title: "Perya Gang Stream",
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
  twitter: {
    card: "summary_large_image",
    title: "Perya Gang Stream",
    description: "Get Rewarded Like Never Before",
    images: [""], // REPLACE THIS WITH ACTUAL IMAGE URL
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
          className={`${rethink.className} antialiased gap-y-12 tracking-tight text-white bg-zinc-950`}
        >
          <ToastContainer />
          <Navbar />
          <main className="pb-10">{children}</main>
        </body>
      </html>
    </>
  );
}
