"use client";

import { Phone, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function Header() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-16 items-center justify-between max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2">
            <div>
              <h1 className="text-lg font-bold text-primary">
                {siteConfig.name}
              </h1>
            </div>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <button
            onClick={scrollToTop}
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            센터소개
          </button>
          <a
            href="#brands"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            제품정보
          </a>
          <a
            href="#services"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            서비스안내
          </a>

          <a
            href="#gallery"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            갤러리
          </a>
          <a
            href="#contact"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            오시는길
          </a>
        </nav>

        <div className="flex items-center gap-4">
          {/* Mobile menu trigger */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 p-0">
              <div className="px-5 pt-5 pb-3 border-b">
                <SheetHeader>
                  <SheetTitle className="text-lg font-bold text-primary">
                    {siteConfig.name}
                  </SheetTitle>
                </SheetHeader>
              </div>
              <nav className="px-3 py-4 grid gap-1">
                <Button
                  variant="ghost"
                  className="justify-start text-base"
                  onClick={scrollToTop}
                >
                  센터소개
                </Button>
                <Button
                  asChild
                  variant="ghost"
                  className="justify-start text-base"
                >
                  <a href="#brands">제품정보</a>
                </Button>
                <Button
                  asChild
                  variant="ghost"
                  className="justify-start text-base"
                >
                  <a href="#services">서비스안내</a>
                </Button>
                <Button
                  asChild
                  variant="ghost"
                  className="justify-start text-base"
                >
                  <a href="#gallery">갤러리</a>
                </Button>
                <Button
                  asChild
                  variant="ghost"
                  className="justify-start text-base"
                >
                  <a href="#contact">오시는길</a>
                </Button>
              </nav>
              <div className="px-5 pb-6">
                <Button size="lg" className="w-full gap-2" asChild>
                  <a href={`tel:${siteConfig.phone}`}>
                    <Phone className="h-4 w-4" />
                    {siteConfig.phoneFormatted}
                  </a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>

          <div className="hidden lg:flex flex-col items-end">
            <p className="text-xs text-muted-foreground">상담문의</p>
            <a
              href={`tel:${siteConfig.phone}`}
              className="text-sm font-bold text-primary"
            >
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
  );
}
