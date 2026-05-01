import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { LocalBusinessSchema } from "@/components/JsonLd";
import { site } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Pallets in Fontana, CA`,
    template: `%s · ${site.shortName} Pallets Fontana, CA`,
  },
  description:
    "Manufacturing Green Products builds new, recycled, and custom wood pallets in Fontana, CA. Same-day Inland Empire delivery, ISPM-15 export, and pickup recycling.",
  keywords: [
    "pallets Fontana CA",
    "pallet manufacturer Fontana",
    "wood pallets Inland Empire",
    "custom pallets California",
    "pallet recycling Fontana",
    "ISPM-15 export pallets",
    "GMA pallets",
    "Manufacturing Green Products",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    title: `${site.name} | Pallets in Fontana, CA`,
    description:
      "New, recycled, and custom wood pallets manufactured in Fontana, California. Same-day delivery across the Inland Empire.",
    url: site.url,
    siteName: site.name,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | Pallets Fontana, CA`,
    description:
      "Pallet manufacturer & recycler in Fontana, CA. Same-day delivery across the Inland Empire.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable}`}
    >
      <head>
        <LocalBusinessSchema />
      </head>
      <body className="font-sans">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
