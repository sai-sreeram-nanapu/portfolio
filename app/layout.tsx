import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteTitle = "Sai Sreeram Nanapu | Agentic AI Engineer";
const siteDescription =
  "Portfolio of Sai Sreeram Nanapu, an Agentic AI Engineer and Full-Stack AI Developer building intelligent systems with LLMs, machine learning, cloud-native backends, APIs, and automation workflows.";

export const metadata: Metadata = {
  metadataBase: new URL("https://sai-sreeram-nanapu.vercel.app"),
  title: siteTitle,
  description: siteDescription,
  keywords: [
    "Agentic AI",
    "Generative AI",
    "Full-Stack AI Developer",
    "Machine Learning",
    "LLMs",
    "RAG",
    "Cloud AI",
    "Python",
    "React",
    "Node.js",
    "AI Engineer",
    "Sai Sreeram Nanapu"
  ],
  authors: [{ name: "Sai Sreeram Nanapu" }],
  creator: "Sai Sreeram Nanapu",
  openGraph: {
    title: siteTitle,
    description:
      "Modern AI engineering portfolio featuring agentic AI systems, machine learning projects, cloud-native applications, and full-stack AI development.",
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
  themeColor: "#050816",
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
