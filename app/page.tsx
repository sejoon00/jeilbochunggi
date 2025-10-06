import Header from "@/components/header";
import Hero from "@/components/hero";
import Services from "@/components/services";
import Features from "@/components/features";
import Brands from "@/components/brands";
import Profile from "@/components/profile";
import Certification from "@/components/certification";
import Gallery from "@/components/gallery";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Profile />
      <Brands />
      <Certification />
      <Services />
      <Features />
      <Gallery />
      <Contact />
      <Footer />
    </main>
  );
}
