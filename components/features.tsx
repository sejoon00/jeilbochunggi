import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

const features = [
  {
    title: "착한 가격의 보청기 구매 지원",
    description: "무료 검사 및 상담 서비스 제공",
    image: "/hearing-aid-consultation.jpg",
  },
  {
    title: "전문 청력 상담 서비스",
    description: "정확한 청력 측정과 맞춤형 보청기 안내",
    image: "/professional-hearing-test.jpg",
  },
  {
    title: "분실 보장 프로그램",
    description: "6개월 이내 분실 시 무상 재제작 서비스",
    image: "/hearing-aid-warranty-service.jpg",
  },
];

const benefits = [
  "전문가의 1:1 맞춤 상담",
  "최신 디지털 보청기 제품",
  "정기적인 무료 점검 서비스",
  "편리한 출장 방문 서비스",
  "합리적인 가격과 다양한 할인",
  "철저한 사후관리 시스템",
];

export default function Features() {
  return (
    <section id="products" className="py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <div className="bg-gradient-to-br from-primary to-secondary rounded-2xl p-8 md:p-12 text-primary-foreground">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">
              가장 잘 듣는 선택, <br />
              제일보청기
            </h2>
            <div className="grid sm:grid-cols-2 gap-4 text-left">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 flex-shrink-0 mt-0.5" />
                  <p className="text-lg">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
