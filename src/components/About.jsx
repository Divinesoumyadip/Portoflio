import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { CalendarIcon, TrophyIcon, UsersIcon, MapPinIcon } from "lucide-react";
import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { HeroImage, HeroImage1 } from "../assets/ICPC";

const ServiceCard = ({ index, title, icon, link }) => (
  <Tilt className="xs:w-[250px] w-full">
    <a href={link} target="_blank" rel="noopener noreferrer">
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className="glow-on-hover w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[10px] py-5 px-12 min-h-[220px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt="web-development" className="w-16 h-16 object-contain filter invert" />
          <h3 className="text-white text-[18px] font-bold text-center">{title}</h3>
        </div>
      </motion.div>
    </a>
  </Tilt>
);

const ICPCTimelineEntry = ({ date, title, location, image, achievements = [], tags, team }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 50 }}
    transition={{ duration: 0.5 }}
    className="relative pb-10"
  >
    <div className="absolute left-4 top-5 h-full w-0.5 bg-gray-700 backdrop-blur-sm"></div>
    <div className="absolute left-2.5 top-5 h-3 w-3 rounded-full bg-blue-500 ring-4 ring-blue-500/20 animate-pulse"></div>
    <div className="ml-12 transform transition-all duration-300 hover:-translate-y-1">
      <Tilt
        options={{
          max: 15,
          scale: 1.02,
          speed: 300,
        }}
      >
        <div className="overflow-hidden rounded-lg bg-gray-800 shadow-lg border border-opacity-20 border-blue-500 
          shadow-[0_0_15px_rgba(59,130,246,0.3)] hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] transition-all duration-300"
        >
          <div className="bg-gray-900 p-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-white">{title}</h3>
              <div className="flex items-center text-gray-400">
                <CalendarIcon className="mr-1 h-4 w-4" />
                <span className="text-sm">{date}</span>
              </div>
            </div>
            {/* {location && (
              <div className="mt-1 flex items-center text-gray-400">
                <MapPinIcon className="mr-1 h-4 w-4" />
                <span className="text-sm">{location}</span>
              </div>
            )} */}
            {team && (
              <div className="mt-1 flex items-center text-gray-400">
                <UsersIcon className="mr-1 h-4 w-4" />
                <span className="text-sm">{team}</span>
              </div>
            )}
          </div>
          <div className="flex p-4">
            <div className="w-1/2 flex items-center justify-center">
              <div className="w-100 h-60 overflow-hidden rounded-md">
                <img src={image} alt={title} className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="w-1/2 flex flex-col justify-between pl-4">
              <h4 className="mb-2 flex items-center text-md font-semibold text-blue-400">
                <TrophyIcon className="mr-2 h-5 w-5" /> Achievements
              </h4>
              <div className="space-y-2">
                {achievements.map((achievement, index) => (
                  <div key={index} className="border-l-2 border-blue-500 pl-3">
                    <h5 className="text-sm font-medium text-white">{achievement.title}</h5>
                    <p className="text-xs text-gray-400">{achievement.description}</p>
                  </div>
                ))}
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {/* {tags.map((tag, index) => (
                  <span key={index} className="rounded-full bg-blue-900/30 px-2 py-1 text-xs text-blue-300">
                    {tag}
                  </span>
                ))} */}
              </div>
            </div>
          </div>
        </div>
      </Tilt>
    </div>
  </motion.div>
);

const dummyData = [
  {
    date: "DEC 2025",
    title: "ICPC Asia Amritapuri Regional",
    location: "Coimbatore, India",
    team: "Team Compiler",
    image: HeroImage,
    achievements: [
      { title: "Top University Team", description: "Highest ranking team from our university" }
    ],
    tags: ["Dynamic Programming", "Graph Algorithms", "Team Collaboration"]
  },
  {
    date: "Sep 2022",
    title: "Became Candidate Master On Codeforces",
    location: "New York, USA",
    team: "Soumyadip_Das-Mahapatra",
    image: HeroImage1,
    achievements: [
     
      { title: "Became Candidate Master", description: "Ranked top and and rated 1983 and  college rank - 1" }
    ],
    tags: ["Data Structures", "Greedy Algorithms", "Team Strategy"]
  },
  {
    date: "2022-2026",
    title: "FROM A TIER 3 COLLEGE",
    location: "Kolkata, west Bengal",
    team: "Competettive Programmer,Open Source Contributor",
    image: "https://www.jisuniversity.ac.in/jisu-digital-landing/assets/img/its/abt1.jpg",
    achievements: [
      { title: "Learned DSA & CP ", description: "Practiced 3000 + problems " },
      { title: "Achived Cgpa", description: "Cgpa - 8.1" },
      { title: "Done many open source contributor ", description: "jwoc,gssoc" }
    ],
    tags: ["Graph Theory", "Dynamic Programming", "Team Coordination"]
  }
];

const About = () => {
  return (
    <>
      <div className="text-center">
        {/* <p className={styles.sectionSubText}>Introduction</p> */}
        <h2 className={styles.sectionHeadText}>ICPC Journey</h2>
      </div>
      <div className="w-full flex flex-col gap-5 mt-10 items-center">
        <motion.div variants={textVariant()} className="w-3/4">
          {dummyData.map((entry, index) => (
            <ICPCTimelineEntry key={index} {...entry} />
          ))}
        </motion.div>
      </div>
      <div className="mt-10">
        <h2 className={`${styles.sectionHeadText} text-center`}>CODING PROFILES</h2>
      </div>
      <div className="mt-10 flex flex-wrap gap-10 justify-center">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
