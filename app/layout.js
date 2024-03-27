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
    template: '%s | Flive',
    default: 'Flive'
  },
  description: "Flive is the ultimate companion for motor sport enthusiasts. Stay ahead of the curve with the latest races, driver standings, championship updates, and more.",
  generator: 'Next.js',
  applicationName: 'Flive',
  referrer: 'origin-when-cross-origin',
  keywords: ['Next.js', 'React', 'JavaScript'],
  authors: [{ name: 'Maela', url: 'https://maelacudini.com' }],
  creator: 'Maela',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://flive-eight.vercel.app/'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
    },
  },
  openGraph: {
    title: 'Flive',
    description: "Flive is the ultimate companion for motor sport enthusiasts. Stay ahead of the curve with the latest races, driver standings, championship updates, and more.",
    url: 'https://flive-eight.vercel.app/',
    siteName: 'Flive',
    images: [
      {
        url: 'https://flive-eight.vercel.app/opengraph-image.png',
        width: 800,
        height: 600,
        alt: 'Flive',
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
    title: 'Flive',
    description: "Flive is the ultimate companion for motor sport enthusiasts. Stay ahead of the curve with the latest races, driver standings, championship updates, and more.",
    images: ['https://flive-eight.vercel.app/twitter-image.png'],
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
