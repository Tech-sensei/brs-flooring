import "./globals.css";
import Head from "next/head";
import localFont from "next/font/local";
import Header from "@/components/global/Header";
import Footer from "@/components/global/Footer";
import Script from "next/script";
import { ToastContainer, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const montserrat = localFont({
  src: [
    {
      path: "../../public/fonts/Montserrat-VariableFont_wght.ttf",
      weight: "100 900",
      style: "normal",
    },
  ],
  variable: "--font-montserrat-sans",
  display: "swap",
  subsets: ["latin"],
});

const montserratAlt = localFont({
  src: [
    {
      path: "../../public/fonts/MontserratAlternates-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-montserrat-alt",
  display: "swap",
  subsets: ["latin"],
});

export const metadata = {
  title: "BRS Floors | Premium Flooring Solutions At Your Reach",
  description:
    "BRS Floors specializes in high-quality, durable, and stylish flooring solutions across the world. From hardwood to luxury vinyl, we offer expert installation and premium materials to transform your space.",
  keywords: [
    "flooring",
    "home",
    "floor",
    "tiles",
    "hardwood",
    "luxury vinyl",
    "tile",
    "brs floors",
    "premium flooring solutions",
    "commercial flooring",
    "residential flooring",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={metadata.description} />
        <meta
          name="keywords"
          content="flooring, home, floor, tiles, hardwood, luxury vinyl, tile, brs floors, premium flooring solutions, commercial flooring, residential flooring"
        />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content="/images/og-image.jpg" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content="/images/og-image.jpg" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-0YREJZV7DJ" strategy="afterInteractive" />
      <Script id="google-analytics" strategy="afterInteractive">
        {`  window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-0YREJZV7DJ');
        `}
      </Script>

      {/* <!-- Google tag (gtag.js) --> */}
      <Script async src="https://www.googletagmanager.com/gtag/js?id=AW-17033744716"></Script>
      <Script>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'AW-17033744716');
        `}
      </Script>

      <body className={`${montserrat.variable} ${montserratAlt.variable} antialiased`}>
        <Header />
        <ToastContainer
          position="bottom-center"
          autoClose={4000}
          hideProgressBar={false}
          closeOnClick
          transition={Slide}
          toastStyle={{ backgroundColor: "#FFF" }}
          progressStyle={{ backgroundColor: "#fa7d1e" }} // Custom progress bar color
        />

        {children}
        <Footer />
      </body>

      <Script id="schema-org" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "BRS Floors",
          url: "https://brsflooring.com/",
          sameAs: ["https://brsflooring.com/about", "https://brsflooring.com/services"],
          description:
            "BRS Floors specializes in high-quality, durable, and stylish flooring solutions across the world. From hardwood to luxury vinyl, we offer expert installation and premium materials to transform your space.",
          publisher: {
            "@type": "Organization",
            name: "BRS Floors",
            logo: {
              "@type": "ImageObject",
              url: "https://brsfloors.com/images/logo.png",
            },
          },
          potentialAction: {
            "@type": "SearchAction",
            target: "https://brsfloors.com/search?q={search_term_string}",
            "query-input": "required name=search_term_string",
          },
        })}
      </Script>
    </html>
  );
}
