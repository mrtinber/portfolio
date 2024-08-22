import { Header } from "./_components/layout/Header";
import { Hero } from "./_components/sections/Hero";
import { Spacing } from "./_components/layout/Spacing";
import { Content } from "./_components/sections/content/Content";
import { Skills } from "./_components/sections/Skills";
import { Contact } from "./_components/sections/contact/Contact";
import { Footer } from "./_components/layout/Footer";

export default function Home() {
  return (
    <main>
      <Header />

      <Spacing />

      <Hero />

      <Spacing />

      <Content />

      <Spacing />

      <Skills />

      <Spacing />

      <Contact />

      <Spacing />

      <Footer />
    </main>
  );
}
