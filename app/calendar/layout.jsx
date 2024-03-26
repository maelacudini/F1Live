export const metadata = {
  title: "Calendar",
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
  metadataBase: new URL("https://f1-live-eight.vercel.app/calendar"),
  alternates: {
    canonical: "/calendar",
    languages: {
      "en-US": "/en-US",
    },
  },
  openGraph: {
    title: "F1 Live",
    description:
      "F1 Live is the ultimate companion for Formula 1 enthusiasts. Stay ahead of the curve with the latest race results, sprint outcomes, championship standings, and more.",
    url: "https://f1-live-eight.vercel.app/calendar",
    siteName: "F1 Live",
    images: [
      {
        url: "https://f1-live-eight.vercel.app/opengraph-image.png",
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
    images: ["https://f1-live-eight.vercel.app/twitter-image.png"],
  },
};

export default function CalendarLayout({ children }) {
  return <>{children}</>;
}
