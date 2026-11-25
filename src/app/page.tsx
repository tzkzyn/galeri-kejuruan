import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Manifesto from "@/components/Manifesto";
import Week from "@/components/Week";
import Clubs from "@/components/Clubs";
import Board from "@/components/Board";
import Edit from "@/components/Edit";
import Journal from "@/components/Journal";
import Letter from "@/components/Letter";
import Membership from "@/components/Membership";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <a className="u-skip m-link-2" href="#main">
        Skip to content
      </a>

      {/* Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main id="main">
        <Hero />
        <Manifesto />
        <Clubs />
        <Week />
        <Edit />
        <Board />
        <Letter />
        <Membership />
        <Journal />
        <Faq />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
