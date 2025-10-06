import { siteConfig } from "@/config/site";

export default function Footer() {
  return (
    <footer className="border-t bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold mb-4">{siteConfig.name}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              대한민국 최고의 보청기 전문 센터로서
              <br />
              고객님의 청력 건강을 책임집니다.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">서비스</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  보청기 상담
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  청력 검사
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  이명 완화
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  청력 재활
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  수리 전문
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">제품정보</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  귓속형 보청기
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  귀걸이형 보청기
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  충전식 보청기
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  보청기 악세서리
                </a>
              </li>
            </ul>
          </div>

          {/* <div>
            <h4 className="font-semibold mb-4">고객센터</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  문의하기
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  주문조회
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  배송조회
                </a>
              </li>
            </ul>
          </div> */}
        </div>

        <div className="pt-8 border-t text-center text-sm text-muted-foreground">
          <p>© 2025 {siteConfig.name}. All rights reserved.</p>
          <p className="mt-2">
            {siteConfig.address.street} | TEL: {siteConfig.phoneFormatted}
          </p>
        </div>
      </div>
    </footer>
  );
}
