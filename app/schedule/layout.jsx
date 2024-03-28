export const metadata = {
  title: "Schedule",
  description:
    "Flive is the ultimate companion for motor sport enthusiasts. Stay ahead of the curve with the latest races, driver standings, championship updates, and more.",
  generator: "Next.js",
  applicationName: "Flive",
  referrer: "origin-when-cross-origin",
  keywords: ["Next.js", "React", "JavaScript"],
  authors: [{ name: "Maela", url: "https://maelacudini.com" }],
  creator: "Maela",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://flive-eight.vercel.app/schedule"),
  alternates: {
    canonical: "/schedule",
    languages: {
      "en-US": "/en-US",
    },
  },
  openGraph: {
    title: "Flive",
    description:
      "Flive is the ultimate companion for motor sport enthusiasts. Stay ahead of the curve with the latest races, driver standings, championship updates, and more.",
    url: "https://flive-eight.vercel.app/schedule",
    siteName: "Flive",
    images: [
      {
        url: "https://flive-eight.vercel.app/opengraph-image.png",
        width: 800,
        height: 600,
        alt: "Flive",
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
    title: "Flive",
    description:
      "Flive is the ultimate companion for motor sport enthusiasts. Stay ahead of the curve with the latest races, driver standings, championship updates, and more.",
    images: ["https://flive-eight.vercel.app/twitter-image.png"],
  },
};

export default function CalendarLayout({ children }) {
  return <>{children}</>;
}
