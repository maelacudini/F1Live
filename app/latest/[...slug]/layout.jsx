import { getData } from "@/app/_utils/func";

export async function generateMetadata({ params }) {
  const data = await getData(
    "https://ergast.com/api/f1/current/last/results.json"
  );
  const race = data?.MRData?.RaceTable?.Races[0];

  return {
    title: race?.raceName,
    description:
      race?.Circuit?.circuitName + ", " + race?.Circuit?.Location?.locality,
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
    metadataBase: new URL(
      `https://f1-live-eight.vercel.app/latest/${race?.raceName}`
    ),
    alternates: {
      canonical: `/latest/${race?.raceName}`,
      languages: {
        "en-US": "/en-US",
      },
    },
    openGraph: {
      title: "F1 Live",
      description:
        race?.Circuit?.circuitName + ", " + race?.Circuit?.Location?.locality,
      url: `https://f1-live-eight.vercel.app/latest/${race?.raceName}`,
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
        race?.Circuit?.circuitName + ", " + race?.Circuit?.Location?.locality,
      images: ["https://f1-live-eight.vercel.app/twitter-image.png"],
    },
  };
}

export default function LatestLayout({ children }) {
  return <>{children}</>;
}
