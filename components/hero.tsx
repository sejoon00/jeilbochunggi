"use client"

import { Button } from "@/components/ui/button"
import { Phone, MapPin } from "lucide-react"
import { siteConfig } from "@/config/site"

export default function Hero() {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-secondary/5 to-background">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-20 md:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="space-y-2">
                <span className="text-sm md:text-base font-normal text-muted-foreground">since 1992</span>
                <div>
                  <span className="font-semibold text-foreground text-xl md:text-2xl">세계 각국 보청기 전문센터</span>
                </div>
              </div>
              <h1 className="text-5xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance">
                제일 보청기 <span className="text-primary"></span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground text-pretty">
                전문가에게
                <br />
                <span className="font-semibold text-foreground">클린피팅</span>하세요!
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-base text-muted-foreground leading-relaxed">
                귀가 안들립니까?
                <br />
                <span className="text-foreground font-semibold">30년 경력 보청기 전문 센터</span>입니다
                <br />
                방문하시면 최적의 제품을 선택하실 수 있습니다.
                <br />
                지금 바로 상담을 예약해보세요.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="gap-2" asChild>
                <a href={`tel:${siteConfig.phone}`}>
                  <Phone className="h-5 w-5" />
                  상담 신청
                </a>
              </Button>
              <Button size="lg" variant="outline" className="gap-2 bg-transparent" onClick={scrollToContact}>
                <MapPin className="h-5 w-5" />
                오시는 길
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/elderly-couple-smiling-happily-together.jpg"
                alt="행복한 노부부"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="absolute -bottom-12 -left-6 bg-card p-6 rounded-xl shadow-lg border">
              <p className="text-sm text-muted-foreground mb-1">상담문의</p>
              <p className="text-2xl font-bold text-primary">{siteConfig.phoneFormatted}</p>
              <p className="text-sm text-muted-foreground mt-1">센터: {siteConfig.centerPhone}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
