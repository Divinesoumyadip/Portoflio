import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { styles } from "../styles";
import { useEffect, useState } from "react";
import HeroBgAnimation from "../components/HeroBgAnimation/index";
import { Tilt } from "react-tilt";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="w-full"
      >
        <div className="flex   items-center justify-center lg:w-96 lg:h-96 w-[12.5rem] h-[12.5rem] max-[350px]:w-[10.5rem] max-[350px]:h-[10.5rem] mx-auto bg-gradient-to-b from-blue-800 via-purple-700 to-red-700 hero-animation will-change-transform shadow-card"></div>

        <div className="bg-avatar  bg-cover bg-no-repeat bg-[50%]  justify-self-center lg:w-[374px] lg:h-[374px] w-48 h-48 max-[350px]:w-40 max-[350px]:h-40 hero-animation will-change-transform" />
      </div>
    </motion.div>
  </Tilt>
);

const Hero = () => {
  const [text, count] = useTypewriter({
    words: [
      "I'm We3b Developer",
      "GuyWhoLovesTea.jsx",
      "<ButLovesToCodeMore />",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  const [isLoading, setIsLoading] = useState(true);

  // Let create async method to fetch fake data
  useEffect(() => {
    const fakeDataFetch = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    };

    fakeDataFetch();
  }, []);

  return (
    <section className="w-full h-screen mx-auto  mt-5 relative ">
     
     <HeroBgAnimation />
   
      <div
        className={`${styles.paddingX} h-screen max-w-7xl mx-auto flex lg:flex-row flex-col-reverse items-center justify-center gap-5 pt-10`}
      >
        <div>
          <div className=" h-full z-[-10] absolute  top-[-260px]  shadow-lg shadow-[#030014]/50 ">
                  <video
              className="w-[1200px] md:mt-[-2px] mt-[232px] ml-[-20px] m-auto h-auto sticky rotate-180 opacity-100   "
              preload="false"
              playsInline
              loop
              muted
              // @ts-ignore
              autoPlay="autoplay"
              src="/q-c3d7becf.webm"
            ></video>
          </div>

          <div className="flex gap-3 select-none relative">
            <div className="flex flex-col justify-center items-center mt-5">
              <div className="w-5 h-5 rounded-full bg-[#915eff]"></div>
              <div className="w-1 sm:h-80 h-40 violet-gradient"></div>
            </div>

            <div className="lg:w-[32rem]">
              <h1 className={`${styles.heroHeadText} text-white`}>
               Hi  i'm <br />
                <span className="animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent font-black">
                 Soumyadip Das Mahapatra
                </span>
              </h1>

              <p
                className={`${styles.heroSubText} mt-2 text-white-100 max-w-lg`}
              >
                {text}
                <Cursor cursorColor="#915eff" />
              </p>
            </div>
          </div>

          <a
            href="#about"
            className="w-fit mx-auto flex items-center justify-center gap-6 bg-tertiary lg:px-7 lg:py-3 px-4 py-2 rounded-xl lg:mt-10 mt-5 cursor-pointer max-[350px]:hidden select-none"
          >
            <div className="group border-[3px] border-white rounded-full h-12 w-7 flex justify-center lg:scale-100 scale-75">
              <div className="bg-white h-3 w-1 rounded-full mt-[10px] animate-bounce lg:scale-100 scale-75"></div>
            </div>

            <p>Scroll Down</p>
          </a>
        </div>

        <div className="w-full">
          {/* <div className="flex items-center justify-center lg:w-96 lg:h-96 w-[12.5rem] h-[12.5rem] max-[350px]:w-[10.5rem] max-[350px]:h-[10.5rem] mx-auto bg-gradient-to-b from-blue-800 via-purple-700 to-red-700 hero-animation will-change-transform shadow-card"> */}
          <div className="flex items-center justify-center lg:w-96 lg:h-96 w-[12.5rem] h-[12.5rem] max-[350px]:w-[10.5rem] max-[350px]:h-[10.5rem] mx-auto ">
            <div className="bg-avatar bg-cover bg-no-repeat bg-[50%]  justify-self-center lg:w-[374px] lg:h-[374px] w-48 h-48 max-[350px]:w-40 max-[350px]:h-40 hero-animation will-change-transform" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
