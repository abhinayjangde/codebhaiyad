import type { Metadata } from "next";
import "./globals.css";
import "@repo/ui/styles.css";

export const metadata: Metadata = {
  title: "codebhaiya",
  description: "The right way to learn coding",
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
