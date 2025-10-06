import { Card, CardContent } from "@/components/ui/card"
import { Ear, Home, Wrench, Gift } from "lucide-react"

const services = [
  {
    icon: Ear,
    title: "보청기 상담 및 판매",
    description: "전문가의 정밀한 청력 검사와 보청기 맞춤 상담",
    color: "text-primary",
  },
  {
    icon: Home,
    title: "방문 출장 서비스",
    description: "거동이 불편하신 분들을 위한 방문 출장 가능",
    color: "text-secondary",
  },
  {
    icon: Wrench,
    title: "보청기 수리 및 관리",
    description: "정기적인 점검과 신속한 A/S 서비스",
    color: "text-chart-3",
  },
  {
    icon: Gift,
    title: "6개월 무상 분실 보험 가능",
    description: "분실 시 무상 재제작 서비스 제공",
    color: "text-chart-4",
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">서비스 안내</h2>
          <p className="text-lg text-muted-foreground">고객님의 청력 건강을 위한 전문 서비스를 제공합니다</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="border-2 hover:border-primary/50 transition-colors">
              <CardContent className="p-6 space-y-4">
                <div className={`inline-flex p-3 rounded-lg bg-primary/10 ${service.color}`}>
                  <service.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
