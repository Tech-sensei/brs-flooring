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
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={metadata.description} />
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
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-0YREJZV7DJ');
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
    </html>
  );
}
