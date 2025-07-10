import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css"; // Your global CSS with Tailwind and custom styles

import { AOSInitializer } from "../components/AOSInitializer";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: "Dwi Agus Wibisana | Web Developer",
  description: "Dwi Agus Wibisana's personal portfolio website showcasing web development projects and experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-poppins tech-bg`}>
        <AOSInitializer />
        {children}
      </body>
    </html>
  );
}