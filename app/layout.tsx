import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Futo | Bringing Beautiful Warmth to Life",
  description: "Delivering simple designs that cherish elegance and warmth, from Japan.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}
