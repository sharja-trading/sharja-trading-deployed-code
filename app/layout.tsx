import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import "@/assets/css/bootstrap.min.css";
import "@/assets/css/flatpickr.min.css";
import "@/assets/css/style.css";
import "@/assets/css/slick-theme.css";
import "@/assets/css/slick.css";
import Footer from "@/components/Footer";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sharjah Trading PLC | Dell Authorized IT Solutions",
  description:
    "Sharja Trading PLC is the trusted destination for IT solutions, delivering genuine Dell Computers and cutting-edge technology as one of the few authorized Dell partners in the country.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`page-wrapper ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />

        <Script src="/assets/js/jquery.js" strategy="beforeInteractive" />
        <Script src="/assets/js/popper.min.js" strategy="beforeInteractive" />
        <Script src="/assets/js/bootstrap.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/slick.min.js" strategy="afterInteractive" />
        <Script
          src="/assets/js/slick-animation.min.js"
          strategy="afterInteractive"
        />
        <Script
          src="/assets/js/jquery.fancybox.js"
          strategy="afterInteractive"
        />
        <Script src="/assets/js/wow.js" strategy="afterInteractive" />
        <Script src="/assets/js/appear.js" strategy="afterInteractive" />
        <Script src="/assets/js/mixitup.js" strategy="afterInteractive" />
        <Script src="/assets/js/flatpickr.js" strategy="afterInteractive" />
        <Script src="/assets/js/swiper.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/gsap.min.js" strategy="afterInteractive" />
        <Script
          src="/assets/js/ScrollTrigger.min.js"
          strategy="afterInteractive"
        />
        <Script src="/assets/js/SplitText.min.js" strategy="afterInteractive" />
        <Script
          src="/assets/js/nice-select.min.js"
          strategy="afterInteractive"
        />
        <Script src="/assets/js/knob.js" strategy="afterInteractive" />
        <Script src="/assets/js/parallax.js" strategy="afterInteractive" />
        <Script src="/assets/js/vanilla-tilt.js" strategy="afterInteractive" />
        <Script src="/assets/js/splitting.js" strategy="afterInteractive" />
        <Script src="/assets/js/splitType.js" strategy="afterInteractive" />
        <Script src="/assets/js/script-gsap.js" strategy="afterInteractive" />
        <Script src="/assets/js/script.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
