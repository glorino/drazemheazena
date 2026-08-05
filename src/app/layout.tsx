import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Turning Point Gospel Center International | Dr. Azemhe Azena",
  description:
    "Turning Point Gospel Center International - A place of transformation, hope, and divine encounters. Senior Pastor: Dr. Azemhe Azena PhD. Located in Benin City, Edo State, Nigeria.",
  keywords: [
    "church",
    "gospel",
    "turning point",
    "Dr Azemhe Azena",
    "Benin City",
    "worship",
    "prayer",
    "faith",
  ],
  openGraph: {
    title: "Turning Point Gospel Center International",
    description:
      "A place of transformation, hope, and divine encounters. Senior Pastor: Dr. Azemhe Azena PhD.",
    url: "https://drazemheazena.vercel.app",
    siteName: "Turning Point Gospel Center International",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
