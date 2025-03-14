
import React, { useState, useEffect } from 'react';
import { styles } from '../styles';
import { textVariant } from '../utils/motion';
import TrophyComponent from './TrophyComponent';
import { HeroImage, HeroImage1, HeroImage3, HeroImage4, HeroImage5, ICPCCertificate } from '../assets/ICPC';


const ICPCAchivment = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [progress, setProgress] = useState(0);

  const steps = [
    {
      title: "ICPC AMRITAPURI Regional contest",
      description: "In 2024 ICPC, in prelims I achieved 79th rank out of 5000+ teams in prelims.I Ranked Top 2.4% of teams nationwide",
      image: ICPCCertificate
    },
    {
      title: " ICPC AMRITAPURI Regional contest",
      description: "I qualified of Amritapuri and Chennai Region. And I participated solo in Amritapuri",
      image: HeroImage
    }
  ];

  useEffect(() => {
    const totalDuration = 10000; // 10 seconds
    const intervalTime = 100; // Update every 100ms for smooth animation
    const increment = (intervalTime / totalDuration) * 100;

    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          setActiveStep((prevStep) => (prevStep + 1) % steps.length);
          return 0;
        }
        return prevProgress + increment;
      });
    }, intervalTime);

    return () => clearInterval(interval);
  }, [steps.length]);

  const handleStepClick = (index) => {
    setActiveStep(index);
    setProgress(0);
  };

  return (
    <div className="flex flex-col md:flex-row text-white p-6 rounded-lg shadow-xl max-w-6xl mx-auto">
      <div className='flex flex-col gap-10'>

        <div className='flex  justify-center items-center '>
          <div className=''>
            <h2 className={`${styles.sectionHeadText} `}> ICPC Achivement</h2>
            <p className={`${styles.sectionSubText} text-center `}> From Prelims to Reginals </p>
          </div>
          <TrophyComponent width={100} height={100} />
        </div>

        <div className='flex'>


          {/* Left Section - Steps */}
          <div className="md:w-1/2 pr-6 flex flex-col mt-2">
            {steps.map((step, index) => (
              <div
                key={index}
                onClick={() => handleStepClick(index)}
                className={`mb-8 cursor-pointer transition-all duration-300 relative ${activeStep === index ? 'opacity-100' : 'opacity-60'
                  }`}
              >
                {/* Progress bar as left border */}
                {activeStep === index && (
                  <div
                    className="absolute left-0 top-0 bottom-0 bg-blue-500 transition-all duration-100 ease-linear"
                    style={{ width: '4px', height: `${progress}%` }}
                  ></div>
                )}

                {/* Step content with padding to make room for the border */}
                <div className="pl-6">
                  <h2 className="text-2xl font-bold mb-2">{step.title}</h2>
                  <p className="text-gray-400 text-[18px]">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Section - Image */}
          <div className="md:w-1/2 flex items-center justify-center mt-6 md:mt-0">
            <div className="relative bg-gray-800 rounded-lg overflow-hidden shadow-lg p-2 w-full h-96">
              <img
                src={steps[activeStep].image}
                alt={steps[activeStep].title}
                className="w-full h-full object-cover rounded transition-opacity duration-500"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900 to-transparent p-4">
                <h3 className="text-lg font-semibold">{steps[activeStep].title}</h3>
              </div>
            </div>
          </div>
        </div>

      </div>


    </div>
  );
};

export default ICPCAchivment;