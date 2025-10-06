import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Clock } from "lucide-react"
import { siteConfig } from "@/config/site"

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">오시는 길</h2>
          <p className="text-lg text-muted-foreground">편리한 위치에서 편안하게 상담받으세요</p>
        </div>

        <div className="mb-12">
          <div className="aspect-[21/9] bg-muted overflow-hidden relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3262.5222830006796!2d126.9175734763276!3d35.14359317276563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35718c83112fd673%3A0xd3bcaa37676e1fb9!2z7KCc7J2867O07LKt6riw!5e0!3m2!1sko!2skr!4v1759739314412!5m2!1sko!2skr"
              className="absolute inset-0 w-full h-full"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="센터 위치"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary flex-shrink-0">
                  <MapPin className="h-6 w-6" />
                </div>
                <h3 className="font-bold text-lg">주소</h3>
              </div>
              <p className="text-muted-foreground text-sm">
                {siteConfig.address.street}
                <br />
                {siteConfig.address.detail}
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-lg bg-secondary/10 text-secondary flex-shrink-0">
                  <Phone className="h-6 w-6" />
                </div>
                <h3 className="font-bold text-lg">전화번호</h3>
              </div>
              <div className="space-y-2">
                <a href={`tel:${siteConfig.phone}`} className="block text-xl font-bold text-primary">
                  {siteConfig.phoneFormatted}
                </a>
                <p className="text-sm text-muted-foreground">센터: {siteConfig.centerPhone}</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-lg bg-chart-3/10 text-chart-3 flex-shrink-0">
                  <Clock className="h-6 w-6" />
                </div>
                <h3 className="font-bold text-lg">운영시간</h3>
              </div>
              <div className="space-y-1 text-muted-foreground text-sm">
                <p>평일: {siteConfig.hours.weekday}</p>
                <p>토요일: {siteConfig.hours.saturday}</p>
                <p>{siteConfig.hours.reserved}</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <Button size="lg" className="px-12" asChild>
            <a href={`tel:${siteConfig.phone}`}>전화 상담 신청하기</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
