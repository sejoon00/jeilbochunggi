export default function Brands() {
  return (
    <section id="brands" className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          취급 제품
        </h2>
        <div className="grid grid-cols-2 gap-8 md:gap-12 max-w-4xl mx-auto">
          <div className="flex items-center justify-center p-8 bg-card rounded-lg border hover:shadow-lg transition-shadow">
            <img
              src="/brands/oticon-logo.png"
              alt="Oticon"
              className="w-full h-auto max-w-[200px]"
            />
          </div>

          <div className="flex items-center justify-center p-8 bg-card rounded-lg border hover:shadow-lg transition-shadow">
            <img
              src="/brands/phonak-logo.png"
              alt="Phonak"
              className="w-full h-auto max-w-[200px]"
            />
          </div>
          <div className="flex items-center justify-center p-8 bg-card rounded-lg border hover:shadow-lg transition-shadow">
            <img
              src="/brands/bernafon-logo.png"
              alt="Bernafon"
              className="w-full h-auto max-w-[200px]"
            />
          </div>
          <div className="flex items-center justify-center p-8 bg-card rounded-lg border hover:shadow-lg transition-shadow">
            <img
              src="/brands/unitron-logo.png"
              alt="Unitron"
              className="w-full h-auto max-w-[200px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
