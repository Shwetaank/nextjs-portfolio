import AboutSection from "@/components/sections/aboutSection/AboutSection";
import HeroSection from "@/components/sections/heroSection/HeroSection";

const MainPage = () => {
  return (
    <main className="flex flex-col justify-center items-center">
      <section id="hero">
        <HeroSection />
      </section>
      <section id="about">
        <AboutSection />
      </section>
      {/* Add other sections as needed */}
    </main>
  );
};

export default MainPage;
