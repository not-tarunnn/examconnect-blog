"use client";

import { useEffect } from "react";
import Script from "next/script";

declare global {
  interface Window {
    adsbygoogle: any[];
  }
}

type AdsenseProps = {
  slot: string;
  format?: "auto" | "rectangle" | "horizontal" | "vertical";
  responsive?: boolean;
  className?: string;
  style?: React.CSSProperties;
};

export default function Adsense({
  slot,
  format = "auto",
  responsive = true,
  className = "",
  style = {},
}: AdsenseProps) {
  useEffect(() => {
    try {
      window.adsbygoogle = window.adsbygoogle || [];
      window.adsbygoogle.push({});
    } catch (err) {
      console.error("AdSense error:", err);
    }
  }, []);

  return (
    <>
      <Script
        id="adsense-script"
        async
        strategy="afterInteractive"
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6676209672905473"
        crossOrigin="anonymous"
      />

      <ins
        className={`adsbygoogle ${className}`}
        style={{
          display: "block",
          minHeight: "250px",
          ...style,
        }}
        data-ad-client="ca-pub-6676209672905473"
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive={responsive.toString()}
      />
    </>
  );
}