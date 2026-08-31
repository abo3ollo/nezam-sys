// app/page.tsx (Home Page)

import { Footer } from "./_components/layout/Footer";
import { Navbar } from "./_components/layout/Navbar";
import { About } from "./_components/sections/About";
import { Cta } from "./_components/sections/Cta";
import { Hero } from "./_components/sections/Hero";
import { HowWeWork } from "./_components/sections/HowWeWork";
import { Industries } from "./_components/sections/Industries";
import { Products } from "./_components/sections/Products";
import { Projects } from "./_components/sections/Projects";
import { Services } from "./_components/sections/Services";
import { Technology } from "./_components/sections/Technology";
import { TrustStrip } from "./_components/sections/TrustStrip";
import { WhyNezamSys } from "./_components/sections/WhyNezamSys";


export default function Home() {
  return (
    <>
      <Navbar />
      <main className="bg-[#07152E] min-h-screen">

        <Hero />
        <TrustStrip />
        <Industries />
        <Products />
        <WhyNezamSys />
        <Services />
        <Projects />
        <HowWeWork />
        <Technology />
        <About />
        <Cta />
      </main>
      <Footer />
    </>
  );
}