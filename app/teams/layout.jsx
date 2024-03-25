export const metadata = {
  title: "Teams",
  description:
    "F1 Live is the ultimate companion for Formula 1 enthusiasts. Stay ahead of the curve with the latest race results, sprint outcomes, championship standings, and more.",
  generator: "Next.js",
  applicationName: "F1 Live",
  referrer: "origin-when-cross-origin",
  keywords: ["Next.js", "React", "JavaScript", "F1"],
  authors: [{ name: "Maela", url: "https://maelacudini.com" }],
  creator: "Maela",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://addwebsite.com/teams"),
  alternates: {
    canonical: "/teams",
    languages: {
      "en-US": "/en-US",
    },
  },
  openGraph: {
    title: "F1 Live",
    description:
      "F1 Live is the ultimate companion for Formula 1 enthusiasts. Stay ahead of the curve with the latest race results, sprint outcomes, championship standings, and more.",
    url: "https://addwebsite.org/teams",
    siteName: "F1 Live",
    images: [
      {
        url: "https://addwebsite.org/opengraph-image.png",
        width: 800,
        height: 600,
        alt: "F1 Live",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: false,
    follow: false,
    nocache: false,
  },
  twitter: {
    card: "summary_large_image",
    title: "F1 Live",
    description:
      "F1 Live is the ultimate companion for Formula 1 enthusiasts. Stay ahead of the curve with the latest race results, sprint outcomes, championship standings, and more.",
    images: ["https://addwebsite.org/twitter-image.png"],
  },
};

export default function TeamsLayout({ children }) {
  return <>{children}</>;
}
