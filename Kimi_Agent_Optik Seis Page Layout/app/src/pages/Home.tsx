import Header from "@/sections/Header";
import Hero from "@/sections/Hero";
import Heritage from "@/sections/Heritage";
import Collections from "@/sections/Collections";
import Services from "@/sections/Services";
import Craft from "@/sections/Craft";
import Finder from "@/sections/Finder";
import Testimonial from "@/sections/Testimonial";
import Footer from "@/sections/Footer";
import { useReveal } from "@/hooks/useReveal";

export default function Home() {
  useReveal();

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Heritage />
        <Collections />
        <Services />
        <Craft />
        <Finder />
        <Testimonial />
      </main>
      <Footer />
    </>
  );
}
