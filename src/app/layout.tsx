import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Orbit Notes — A blog on product and content strategy",
    template: "%s · Orbit Notes",
  },
  description:
    "A blog sharing systems thinking for product teams, content operations, and design leaders who want to ship with clarity.",
  metadataBase: new URL("https://agentic-8180759f.vercel.app"),
  openGraph: {
    title: "Orbit Notes",
    description:
      "Dispatches on product strategy, content operations, and intentional team building.",
    url: "https://agentic-8180759f.vercel.app",
    siteName: "Orbit Notes",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Orbit Notes",
    description:
      "Dispatches on product strategy, content operations, and intentional team building.",
    creator: "@orbitnotes",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SiteHeader />
        <main className="bg-gradient-to-b from-white via-zinc-50 to-white dark:from-zinc-950 dark:via-zinc-950">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
