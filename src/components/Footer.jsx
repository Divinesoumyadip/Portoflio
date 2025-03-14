import React from "react";
import { Link } from "react-router-dom";

import { logo } from "../assets";
import { styles } from "../styles";

import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsDiscord } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { SiCodechef, SiCodeforces, SiLeetcode } from "react-icons/si";

const Footer = () => {
  return (
    <div className=" flex flex-col  justify-center bg-black-200 sm:px-16 px-6 sm:py-12 py-10 min-h-[250px] mt-20 select-none">
      <div className="flex justify-around">
        <div className="flex  flex-col">
          <img src={logo} alt="logo" className="w-36  mb-5" />
        </div>

        <div className="   flex flex-wrap justify-center gap-12 items-center ">
          <Link
            target="_blank"
            to="https://www.linkedin.com/in/soumyadip-das-mahapatra-49a70124b/"
          >
            {" "}
            <BsLinkedin className="mr-2 hover:translate-y-[-2px] hover:cursor-pointer transition-all ease-in duration-100 -md:mr-0 -md:my-[1px]" />
          </Link>

          <Link
            target="_blank"
            to="https://github.com/Divinesoumyadip"
          >
            {" "}
            <BsGithub className="mx-2 hover:translate-y-[-2px] hover:cursor-pointer transition-all ease-in duration-100 -md:mx-0 -md:my-[1px]" />
          </Link>

          <Link target="_blank" to="https://leetcode.com/u/Soumyadip_dmp/">
            <SiLeetcode className="ml-2 hover:translate-y-[-2px] hover:cursor-pointer transition-all ease-in duration-100 -md:ml-0 -md:my-[1px]  " />
          </Link>

          <Link target="_blank" to="https://codeforces.com/profile/Soumyadip_Das-Mahapatra">
            <SiCodeforces className="mx-4 hover:translate-y-[-2px] hover:cursor-pointer transition-all ease-in duration-100 -md:mx-0 -md:my-[1px]" />
          </Link>

          <Link
            target="_blank"
            to="https://www.codechef.com/users/soumyadip_dmp"
          >
            <SiCodechef className="mx-2 hover:translate-y-[-2px] hover:cursor-pointer transition-all ease-in duration-100 -md:mx-0 -md:my-[1px]" />
          </Link>
        </div>
      </div>

      <div>
        <p className="text-secondary text-[17px] leading-[30px] text-center   left-0 right-0 cle">
          {new Date().getFullYear()} &copy; Soumyadip Das Mahapatra All rights
          reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
