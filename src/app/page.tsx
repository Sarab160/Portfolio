import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className="min-h-screen bg-brand-black text-white">
      <Hero />
      <About />
      <Skills />
    </main>
  );
}
