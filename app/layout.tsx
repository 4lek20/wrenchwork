import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Wrenchwork | Trade Career Explorer for Students",
  description: "Skip the $100K degree. Wrenchwork matches students to high-paying trade careers in 10 minutes. Compare salaries, training time, and find local programs.",
  keywords: ["trade careers", "skilled trades", "career assessment", "electrician", "plumber", "HVAC", "no student debt"],
  authors: [{ name: "Wrenchwork" }],
  openGraph: {
    title: "Wrenchwork | Trade Career Explorer",
    description: "Find high-paying trade careers. 0 debt, start earning in 6mo-2yrs.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wrenchwork | Skip Debt, Start Earning",
    description: "Match with trade careers in 10 minutes. $60K-$90K starting salary, 0 debt.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
