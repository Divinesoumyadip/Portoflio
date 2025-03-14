import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { CalendarIcon, TrophyIcon, UsersIcon, MapPinIcon } from "lucide-react";
import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { AnimatedGallery } from "./AnimatedGallery";
import { HeroImage, HeroImage1, HeroImage2, HeroImage3, HeroImage4, HeroImage5 } from "../assets/ICPC";


const testimonials = [
    {
        quote: "",
        name: "",
        designation: "",
        src: HeroImage,
    },
    {
        quote: "",
        name: "",
        designation: "",
        src: HeroImage1,
    },
    {
        quote: "",
        name: "",
        designation: "",
        src: HeroImage2,
    },
    {
        quote: "",
        name: "",
        designation: "",
        src: HeroImage4,
    },
    {
        quote: "",
        name: "",
        designation: "",
        src: HeroImage5,
    },
  
    
];

const Gallery = () => {
    return (
        <>
            <div className="w-full flex flex-col gap-5 items-center">

            </div>
            <div className="text-center">
                <h2 className={styles.sectionHeadText}>Gallery</h2>
            </div>

            <AnimatedGallery testimonials={testimonials} />

        </>
    );
};

export default SectionWrapper(Gallery, "Gallery");
