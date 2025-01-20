import type { Metadata } from "next";
import "./globals.css";
import "@repo/ui/styles.css";

export const metadata: Metadata = {
  title: "Docs",
  description: "Docs for developer by Codebhaiya",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
