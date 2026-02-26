import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mobivogue - Build Shopify Mobile Apps",
  description: "Turn your Shopify store into a high-performance mobile app in 24 hours.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-sans antialiased bg-white text-slate-900">
        {children}
      </body>
    </html>
  );
}
