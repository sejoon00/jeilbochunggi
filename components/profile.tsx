"use client";

import Image from "next/image";

export default function Profile() {
  return (
    <section className="w-full py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4 grid gap-8 items-center justify-items-center">
        <div className="w-full max-w-2xl mx-auto shadow-md">
          <Image
            src="/images/design-mode/card.jpeg"
            alt="프로필 이미지"
            width={1000}
            height={572}
            className="w-full h-auto object-contain"
            priority
          />
        </div>
        <div className="space-y-3 text-center">
          <p className="text-muted-foreground text-base md:text-lg">
            30년 경력의 보청기 전문가로,
          </p>
          <p className="text-muted-foreground text-base md:text-lg">
            고객 환경에 딱 맞는 맞춤 솔루션을 제공합니다.
          </p>
        </div>
      </div>
    </section>
  );
}
