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
    metadataBase: new URL(
      `https://flive-eight.vercel.app/latest/${race?.raceName}`
    ),
    alternates: {
      canonical: `/latest/${race?.raceName}`,
      languages: {
        "en-US": "/en-US",
      },
    },
    openGraph: {
      title: "Flive",
      description:
        race?.Circuit?.circuitName + ", " + race?.Circuit?.Location?.locality,
      url: `https://flive-eight.vercel.app/latest/${race?.raceName}`,
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
        race?.Circuit?.circuitName + ", " + race?.Circuit?.Location?.locality,
      images: ["https://flive-eight.vercel.app/twitter-image.png"],
    },
  };
}

export default function LatestLayout({ children }) {
  return <>{children}</>;
}
