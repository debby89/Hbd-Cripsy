import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

// Imported Jost font
const jost = {
  fontFamily: "Jost, sans-serif",
  fontStyle: "normal",
  fontWeight: "100 900",
};

export const metadata: Metadata = {
  title: "LOML",
  description: "MADE WITH LOVE",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
      </head>
      <body style={jost} className={inter.className}>
        {children}
      </body>
    </html>
  );
}

