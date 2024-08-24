import Events from "./events/page";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import Guests from "./components/Guests";
import Sponsors from "./sponsors/page";
import Wrapper from "./components/bg-wrapper/Wrapper";

export default function Home() {
  return (
    <>
      <div
        className="text-2xl mx-auto text-center"
        style={{ fontFamily: "'Clash Display', sans-serif" }}
      >
        FMC WEEKEND '24
      </div>
      <div className="w-full h-[300px]">
        <Wrapper grid={true}>
          
        </Wrapper>
      </div>
      <Wrapper>
        
      </Wrapper>
      <HeroSection />
      <Events />
      <Guests />
      <Sponsors />
      <Footer />
    </>
  );
}
