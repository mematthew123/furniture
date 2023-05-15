import "./globals.css";
import { League_Spartan } from "next/font/google";

const leagueSpartan = League_Spartan({
  subsets: ["latin"],
  weight: ["300", "500", "700"],
});

export const metadata = {
  title: "Furniture Store",
  description: "A furniture store built with Next.js and Tailwind CSS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${leagueSpartan.className}`}>
      <body className="bg-slate-50">{children}</body>
    </html>
  );
}