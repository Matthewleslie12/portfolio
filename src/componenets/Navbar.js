import logo from "../assets/Logo.svg";
import Resume from "../assets/Matthew_Leslie_Resume.pdf";
import { Sling as Hamburger } from "hamburger-react";
import { useState } from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { BsMedium } from "react-icons/bs";
import { DiNpm } from "react-icons/di";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  return (
    <>
      <div className=" flex justify-between  items-center py-[25px]">
        <img
          src={logo}
          alt=" keyboard keycap with the letter m on top"
          className="w-12 active:shadow-inner active:scale-95 active:translate-y-1/12 active:brightness-60 cursor-pointer"
        />

        <nav className="hidden md:flex gap-5 ">
          <a
            href="#about"
            className="hover:underline underline-offset-4 decoration-red-400"
          >
            About
          </a>
          <a
            href="#tech"
            className="hover:underline underline-offset-4 decoration-red-400"
          >
            Tech
          </a>
          <a
            href="#projects"
            className="hover:underline underline-offset-4 decoration-red-400"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="hover:underline underline-offset-4 decoration-red-400"
          >
            Contact
          </a>
          <a
            href={Resume}
            target="_blank"
            rel="noreferrer"
            className="hover:underline underline-offset-4 decoration-red-400"
          >
            Resume
          </a>
        </nav>

        <div className="md:hidden">
          <Hamburger toggled={nav} toggle={setNav} />
        </div>

        <nav
          className={`h-[100vh] fixed top-[0px] flex flex-col justify-center gap-16 items-center w-full md:hidden bg-gray-200 z-40 duration-1000 ${
            nav ? "right-[0px]" : "right-[-100vw]"
          } `}
        >
          <a href="#about" className="">
            About
          </a>
          <a href="#tech" className="">
            Tech
          </a>
          <a href="#projects" className="">
            Projects
          </a>
          <a href="#contact" className="">
            Contact
          </a>
          <a href={Resume} className="" target="_blank" rel="noreferrer">
            Resume
          </a>
          <div className="flex gap-4">
            <a
              href="https://github.com/Matthewleslie12/"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillGithub size={28} />
            </a>

            <a
              href="https://linkedin.com/in/matthew-leslie"
              rel="noreferrer"
              target="_blank"
            >
              <AiFillLinkedin size={28} color="#0077b5" />
            </a>
            <a
              href="https://www.npmjs.com/~matthewleslie"
              rel="noreferrer"
              target="_blank"
            >
              <DiNpm size={28} color="red" />
            </a>
            <a
              href="https://medium.com/@matthewleslie155"
              rel="noreferrer"
              target="_blank"
            >
              <BsMedium size={28} />
            </a>
          </div>
          <div className="">
            {nav ? (
              <Hamburger toggled={nav} toggle={setNav} size={24} color="#333" />
            ) : null}
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
