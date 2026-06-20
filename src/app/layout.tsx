import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const siteUrl = "https://www.kisanacademy.in";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Kisan Academy | TGT & PGT Geography Coaching Institute",
    template: "%s | Kisan Academy",
  },
  description:
    "Kisan Academy is a trusted coaching institute for TGT Geography, PGT Geography, and competitive exam preparation. Expert faculty, PYQ-based notes, regular test series, and online classes.",
  keywords: [
    "TGT Geography coaching",
    "PGT Geography coaching",
    "Kisan Academy",
    "competitive exam coaching",
    "teacher recruitment exam preparation",
    "test series for TGT PGT",
    "online geography classes",
  ],
  authors: [{ name: "Kisan Academy" }],
  openGraph: {
    title: "Kisan Academy | TGT & PGT Geography Coaching Institute",
    description:
      "Trusted TGT/PGT Geography coaching with expert faculty, quality notes, PYQ-based preparation and regular test series.",
    url: siteUrl,
    siteName: "Kisan Academy",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kisan Academy | TGT & PGT Geography Coaching Institute",
    description:
      "Trusted TGT/PGT Geography coaching with expert faculty, quality notes, PYQ-based preparation and regular test series.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
