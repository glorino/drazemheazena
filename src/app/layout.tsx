import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Dr. Azemhe Azena | Faith, Leadership & Impact",
  description:
    "Dr. Azemhe Azena PhD - Christian minister, teacher, entrepreneur, educationist, public leader and advocate for human development. A life of faith, leadership, learning, enterprise and service.",
  keywords: [
    "Dr Azemhe Azena",
    "pastor",
    "evangelist",
    "author",
    "entrepreneur",
    "educationist",
    "public leader",
    "Benin City",
    "Nigeria",
    "faith",
    "leadership",
    "humanitarian",
  ],
  icons: {
    icon: "/logo.png",
  },
  openGraph: {
    title: "Dr. Azemhe Azena | Faith, Leadership & Impact",
    description:
      "Christian minister, teacher, entrepreneur, educationist, public leader and advocate for human development.",
    url: "https://drazemheazena.vercel.app",
    siteName: "Dr. Azemhe Azena",
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
