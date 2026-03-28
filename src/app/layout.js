import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

export const metadata = {
  title: "ecd.dev",
  description: "Eren Cem Değirmenci — Software Developer focusing on architectural excellence and modern web experiences.",
  keywords: ["Software Developer", "UI Architecture", "Next.js", "Portfolio", "Eren Cem Değirmenci", "ecd.dev"],
  authors: [{ name: "Eren Cem Değirmenci" }],
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={geist.variable}>
        {children}
      </body>
    </html>
  );
}
