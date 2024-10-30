import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Local de Viagem",
  description: "Aplicação desenvolvida no desafio Full-Stack da @rocketseat",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <link rel="shortcut icon" href="/destination.png" type="image/png" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
