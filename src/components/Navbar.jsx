import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";
import resume from "/src/Soumyadip_Das_Mahapatra_Resume.pdf";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { SiCodechef, SiCodeforces, SiLeetcode } from "react-icons/si";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={` ${styles.paddingX}  w-full flex items-center py-2 fixed top-0 z-20  backdrop-blur-lg `}
    >
      {/* bg-primary */}
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <div className="gap-1">
          <Link to="/" className="flex items-center gap-2">
            <img
              onClick={() => {
                setActive("");
                window.scrollTo(0, 0);
              }}
              src={logo}
              alt="logo"
              className="w-16 h-20  
        object-contain  "
            />
            <div className="flex gap-3 flex-col ">
              <p
                className="text-white text-[16px]  mt-2 
        font-bold cursor-pointer flex"
              >
                Soumyadip Das Mahapatra &nbsp;{" "}
                <span className="sm:block hidden"> | Competitve Programmer</span>
              </p>
            </div>
          </Link>
        </div>

        <div className="flex flex-col gap-2">
          <ul className="list-none hidden sm:flex flex-row gap-5">
            {/* add href={resume} and import the file that is stored inresube  */}
            <a href={resume}>
              <button
                className={`${
                  active === Link.title ? "  text-white" : "text-secondary"
                } hover:text-white text-[18px] font-medium cursor-pointer`}
                onClick={() => setActive(Link.title)}
              >
                <span className="flex items-center">
                  {" "}
                  <svg
                    className="fill-current w-4 h-4 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
                  </svg>{" "}
                  Download Cv
                </span>
              </button>
            </a>

            {navLinks.map((Link) => (
              <li
                key={Link.id}
                className={`${
                  active === Link.title ? "text-white" : "text-secondary"
                } hover:text-white text-[18px] font-medium cursor-pointer`}
                onClick={() => setActive(Link.title)}
              >
                <a href={` #${Link.id}`}> {Link.title}</a>
              </li>
            ))}
{/* 
            <a
              href="https://codingguidewithsoumyadip.blogspot.com/"
              target="_blank"
            >
              <button
                className={`${
                  active === Link.title ? "  text-white" : "text-secondary"
                } hover:text-white text-[18px] font-medium cursor-pointer`}
                onClick={() => setActive(Link.title)}
              >
                <span className="flex items-center"> Blogs</span>
              </button>
            </a> */}
          </ul>

          <div className="sm:flex hidden flex-row justify-center gap-12 items-center ">
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

        <div className=" sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px]  object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${!toggle ? "hidden" : "flex"} p-6 black-gradient 
          absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex  justfy-end items-start flex-col gap-4">
              {/* add href={resume} and import the file that is stored inresube  */}
              <a download="Soumyadip">
                <button
                  className={`${
                    active === Link.title ? "  text-white" : "text-secondary"
                  } hover:text-white text-[18px] font-medium cursor-pointer`}
                  onClick={() => setActive(Link.title)}
                >
                  <span className="flex items-center">
                    {" "}
                    <svg
                      className="fill-current w-4 h-4 mr-2"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
                    </svg>{" "}
                    Download Cv
                  </span>
                </button>
              </a>

              {navLinks.map((Link) => (
                <li
                  key={Link.id}
                  className={`${
                    active === Link.title ? "text-white" : "text-secondary"
                  } font-poppins font-medium  cursor-pointer  text-[16px]`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(Link.title);
                  }}
                >
                  <a href={` #${Link.id}`}> {Link.title}</a>
                </li>
              ))}

              <a
                href="https://codingguidewithsoumyadip.blogspot.com/"
                target="_blank"
              >
                <button
                  className={`${
                    active === Link.title ? "  text-white" : "text-secondary"
                  } hover:text-white text-[18px] font-medium cursor-pointer`}
                  onClick={() => setActive(Link.title)}
                >
                  <span className="flex items-center"> Blogs</span>
                </button>
              </a>
             

              <div className="flex flex-row justify-start items-center -md:flex-col ">
              <Link
              target="_blank"
              to="https://www.linkedin.com/in/soumyadip-das-mahapatra-49a70124b/"
            >
              {" "}
              <BsLinkedin className="mr-2 hover:translate-y-[-2px] hover:cursor-pointer transition-all ease-in duration-100 -md:mr-0 -md:my-[1px]" />
            </Link>

            <Link
              target="_blank"
              to="https://www.linkedin.com/in/soumyadip-das-mahapatra-49a70124b/"
            >
              {" "}
              <BsGithub className="mx-2 hover:translate-y-[-2px] hover:cursor-pointer transition-all ease-in duration-100 -md:mx-0 -md:my-[1px]" />
            </Link>

            <Link target="_blank" to="https://twitter.com">
              <SiLeetcode className="ml-2 hover:translate-y-[-2px] hover:cursor-pointer transition-all ease-in duration-100 -md:ml-0 -md:my-[1px]  " />
            </Link>

            <Link target="_blank" to="https://discord.com/channels/@me">
              <SiCodeforces className="mx-4 hover:translate-y-[-2px] hover:cursor-pointer transition-all ease-in duration-100 -md:mx-0 -md:my-[1px]" />
            </Link>

            <Link
              target="_blank"
              to="https://www.instagram.com/developer_soumyadip/"
            >
              <SiCodechef className="mx-2 hover:translate-y-[-2px] hover:cursor-pointer transition-all ease-in duration-100 -md:mx-0 -md:my-[1px]" />
            </Link>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
