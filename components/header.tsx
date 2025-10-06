"use client"

import { Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/config/site"

export default function Header() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-16 items-center justify-between max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2">
            <div>
              <h1 className="text-lg font-bold text-primary">{siteConfig.name}</h1>
            </div>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <button onClick={scrollToTop} className="text-sm font-medium hover:text-primary transition-colors">
            센터소개
          </button>
          <a href="#services" className="text-sm font-medium hover:text-primary transition-colors">
            서비스안내
          </a>
          <a href="#products" className="text-sm font-medium hover:text-primary transition-colors">
            제품정보
          </a>
          <a href="#gallery" className="text-sm font-medium hover:text-primary transition-colors">
            갤러리
          </a>
          <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
            오시는길
          </a>
        </nav>

        <div className="flex items-center gap-4">
          <div className="hidden lg:flex flex-col items-end">
            <p className="text-xs text-muted-foreground">상담문의</p>
            <a href={`tel:${siteConfig.phone}`} className="text-sm font-bold text-primary">
              {siteConfig.phoneFormatted}
            </a>
          </div>
          <Button size="sm" className="gap-2" asChild>
            <a href={`tel:${siteConfig.phone}`}>
              <Phone className="h-4 w-4" />
              <span className="hidden sm:inline">전화상담</span>
            </a>
          </Button>
        </div>
      </div>
    </header>
  )
}
