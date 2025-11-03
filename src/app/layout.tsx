import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RSD Whisky",
  description: "Rutherford, Shirlaw & Denholm Ltd — whisky advisory and prestige bottlings.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
