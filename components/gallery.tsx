import { Card } from "@/components/ui/card"

const galleryImages = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image.png-o6pgD8mjxQN1VTxHQFHGzJ81JOEvSf.jpeg",
    alt: "센터 외관",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image.png-KMx0XMnhByswMvmJ9HKpzWNZeIVFjK.jpeg",
    alt: "상담실",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image.png-9vkyihd7R0368owjZv96yXmTyGvyjM.jpeg",
    alt: "제품 전시",
  },
]

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">센터 미리보기</h2>
          <p className="text-lg text-muted-foreground">깨끗하고 전문적인 시설에서 편안하게 상담받으세요</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <Card key={index} className="overflow-hidden group cursor-pointer">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
                />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
