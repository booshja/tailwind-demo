import Hero from "../components/Hero";
import Features from "../components/Features";
import Testimonials from "../components/Testimonials";
import Cta from "../components/Cta";

export default function LandingPage(): JSX.Element {
  return (
    <main>
      <Hero />
      <Features />
      <Testimonials />
      <Cta />
    </main>
  );
}
