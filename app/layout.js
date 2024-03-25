import { Figtree } from "next/font/google";
import "./_style/globals.css";
import Header from "./_components/common/header/Header";
import Footer from "./_components/common/footer/Footer";
import Cursor from "./_components/common/cursor/Cursor";
import { CursorProvider } from "./_context/CursorContext";

const font = Figtree({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700", "800", "900"] });

export const viewport = {
  themeColor: 'black',
}

export const metadata = {
  title: {
    template: '%s | F1 Live',
    default: 'F1 Live'
  },
  description: "F1 Live is the ultimate companion for Formula 1 enthusiasts. Stay ahead of the curve with the latest race results, sprint outcomes, championship standings, and more.",
  generator: 'Next.js',
  applicationName: 'F1 Live',
  referrer: 'origin-when-cross-origin',
  keywords: ['Next.js', 'React', 'JavaScript', 'F1'],
  authors: [{ name: 'Maela', url: 'https://maelacudini.com' }],
  creator: 'Maela',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://f1-live-eight.vercel.app/'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
    },
  },
  openGraph: {
    title: 'F1 Live',
    description: "F1 Live is the ultimate companion for Formula 1 enthusiasts. Stay ahead of the curve with the latest race results, sprint outcomes, championship standings, and more.",
    url: 'https://f1-live-eight.vercel.app/',
    siteName: 'F1 Live',
    images: [
      {
        url: 'https://f1-live-eight.vercel.app/opengraph-image.png',
        width: 800,
        height: 600,
        alt: 'F1 Live',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: false,
    follow: false,
    nocache: false,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'F1 Live',
    description: "F1 Live is the ultimate companion for Formula 1 enthusiasts. Stay ahead of the curve with the latest race results, sprint outcomes, championship standings, and more.",
    images: ['https://f1-live-eight.vercel.app/twitter-image.png'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={font.className}>
        <CursorProvider>
          <Header />
          <Cursor />
          {children}
          <Footer />
        </CursorProvider>
      </body>
    </html>
  );
}
