import type { Metadata } from "next";
import localFont from "next/font/local";
import { ThemeProvider } from "@/components/theme/theme-provider";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import "./globals.css";

// Explicitly assigning values instead of spreading fontOptions
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
  display: "swap", // Explicitly assigned
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
  display: "swap", // Explicitly assigned
});

export const metadata: Metadata = {
  title: "Sin_Greed | Full Stack Developer Portfolio",
  description: "Portfolio of Shwetank Morey, a skilled Full Stack Developer.",
  keywords:
    "Full Stack Developer, Web Development, Portfolio, JavaScript, React, Node.js, Next.js",
  authors: [{ name: "Shwetank Morey" }],
  openGraph: {
    title: "Sin_Greed | Full Stack Developer",
    description:
      "Portfolio of Shwetank Morey showcasing web development skills.",
    url: "https://shwet-tech.com/",
    images: [
      {
        url: "/path-to-your-image.jpg", // Add a preview image for social sharing
        width: 800,
        height: 600,
        alt: "Portfolio preview image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sin_Greed | Full Stack Developer",
    description:
      "Check out my developer portfolio showcasing my skills and projects.",
    images: [
      {
        url: "/path-to-your-image.jpg",
        alt: "Portfolio preview image",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="h-full">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system">
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
