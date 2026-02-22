import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SBXi — We back founders.",
  description: "MIT-backed venture studio for early-stage founders.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}