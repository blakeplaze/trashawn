import type { Metadata } from "next";
import { Fraunces, Outfit } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
});

export const metadata: Metadata = {
  title: "Tra' Kyng — R&B",
  description:
    "Tra' Kyng is TraShawn. R&B and soul: I Miss You, Get Away, Just Being Real, and Titles.",
  metadataBase: new URL("https://www.trakyng.com"),
  openGraph: {
    title: "Tra' Kyng",
    description: "R&B, sung close. TraShawn, off the record.",
    images: ["/portrait.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} ${fraunces.variable} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
