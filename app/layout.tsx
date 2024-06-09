import type { Metadata } from "next";
import { Josefin_Sans } from "next/font/google";
import "./globals.css";
import './embla.css'

const josefin = Josefin_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Skyrim Build Assistant",
  description: "Elder Scrolls V: Skyrim Perk Builder / Calculator, to assist with planning out your character.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={josefin.className}>{children}</body>
    </html>
  );
}
