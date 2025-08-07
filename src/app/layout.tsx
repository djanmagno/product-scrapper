import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "VTEX Migration Tool",
  description: "Migrate product catalogs to VTEX",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased font-sans">{children}</body>
    </html>
  );
}
