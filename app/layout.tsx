import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Futo | 暮らしに、美しいぬくもりを。",
  description: "気品と温かさを大切にしたシンプルなデザインをお届けします。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className="antialiased min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}
