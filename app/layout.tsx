import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteTitle = "Sai Sreeram Nanapu | SAP BTP Developer & Full-Stack Engineer";
const siteDescription =
  "Portfolio of Sai Sreeram Nanapu, an SAP BTP-focused Software Engineer building enterprise applications with SAPUI5/Fiori, JavaScript, TypeScript, Node.js, OData, cloud services, and AI/ML workflows.";

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
      "SAP BTP, SAPUI5/Fiori, full-stack engineering, cloud, and AI/ML work by Sai Sreeram Nanapu.",
    type: "website",
    locale: "en_US",
    url: "https://sai-sreeram-nanapu.vercel.app",
    siteName: siteTitle,
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Sai Sreeram Nanapu Agentic AI Engineer portfolio"
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
  themeColor: "#070a08",
  colorScheme: "dark",
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
