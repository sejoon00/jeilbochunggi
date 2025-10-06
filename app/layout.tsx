import type React from "react";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Analytics } from "@vercel/analytics/next";
import { Suspense } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "제일보청기 광주동구센터 - 전문 보청기 상담 및 판매",
  description:
    "보청기 무료체험, 출장방문, 6개월 분실보험 제공. 전문 청능사의 맞춤 상담으로 최적의 보청기를 찾아드립니다.",
  generator: "v0.app",
  metadataBase: new URL("https://www.jeilhear.co.kr/"),
  openGraph: {
    title: "제일보청기 광주동구센터 - 전문 보청기 상담 및 판매",
    description:
      "보청기 무료체험, 출장방문, 6개월 분실보험 제공. 전문 청능사의 맞춤 상담으로 최적의 보청기를 찾아드립니다.",
    url: "/",
    siteName: "제일보청기 광주동구센터",
    locale: "ko_KR",
    type: "website",
    images: [
      {
        url: "/images/design-mode/card.jpeg",
        width: 1000,
        height: 572,
        alt: "제일보청기 OG 이미지",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "제일보청기 광주동구센터 - 전문 보청기 상담 및 판매",
    description:
      "보청기 무료체험, 출장방문, 6개월 분실보험 제공. 전문 청능사의 맞춤 상담으로 최적의 보청기를 찾아드립니다.",
    images: ["/images/design-mode/card.jpeg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={<div>Loading...</div>}>
          {children}
          <Analytics />
        </Suspense>
      </body>
    </html>
  );
}
