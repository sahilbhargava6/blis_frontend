import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BLIS Platform Dashboard",
  description: "Advanced affiliate tracking and team management",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="bg-blob-1"></div>
        <div className="bg-blob-2"></div>
        <div className="bg-blob-3"></div>
        {children}
      </body>
    </html>
  );
}
