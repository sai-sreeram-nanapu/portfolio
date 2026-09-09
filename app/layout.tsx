import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteTitle = "Sai Sreeram Nanapu | Software Engineer & Data Scientist";
const siteDescription =
  "Portfolio of Sai Sreeram Nanapu, a software engineer and data scientist building full-stack applications, AI/ML workflows, cloud systems, and enterprise software.";

export const metadata: Metadata = {
  metadataBase: new URL("https://sai-sreeram-nanapu.vercel.app"),
  title: siteTitle,
  description: siteDescription,
  keywords: [
    "SAP BTP",
    "SAPUI5",
    "SAP Fiori",
    "CAP",
    "Cloud Foundry",
    "OData",
    "Full-Stack Engineer",
    "Python",
    "React",
    "Node.js",
    "Generative AI",
    "Sai Sreeram Nanapu"
  ],
  authors: [{ name: "Sai Sreeram Nanapu" }],
  creator: "Sai Sreeram Nanapu",
  openGraph: {
    title: siteTitle,
    description:
      "Full-stack engineering, data and AI, cloud, and enterprise work by Sai Sreeram Nanapu.",
    type: "website",
    locale: "en_US",
    url: "https://sai-sreeram-nanapu.vercel.app",
    siteName: siteTitle,
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Sai Sreeram Nanapu software engineering portfolio"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/og-image.svg"]
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg"
  }
};

export const viewport: Viewport = {
  themeColor: "#0d1a23",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
