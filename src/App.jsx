import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
  ICPCAchivment,
} from "./components";
import Tweets from "./components/Tweets";
import Footer from "./components/Footer";

import { BsArrowUp } from "react-icons/bs";

import { useState, useEffect } from "react";
import Gallery from "./components/Gallery";
const App = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <BrowserRouter>
        <div className="relative z-0 bg-primary  ">
          <div className=" bg-hero-pattern bg-cover bg-no-repeat bg-center  ">
            {/* <StarsCanvas /> */}

            <Navbar />
            <Hero />
          </div>
          <ICPCAchivment />
          <Gallery />
          <About />
          <Tweets />
          <Tech />
          <Works />
          <Experience />
          <Feedbacks />

          <div className="relative z-0">
            <Contact />
            <StarsCanvas />
          </div>

          <Footer />
        </div>
      </BrowserRouter>

      {showBackToTop && (
        <button
          className="fixed bottom-4 right-4 p-2 shadow cursor-pointer backToTop"
          onClick={handleBackToTop}
        >
          <BsArrowUp />
        </button>
      )}
    </>
  );
};

export default App;
