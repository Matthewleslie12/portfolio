import logo from "../assets/Logo.svg";
import Resume from "../assets/Matthew_Leslie-Resume.pdf";
import { Sling as Hamburger } from "hamburger-react";
import { useState } from "react";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  return (
    <>
      <div className=" flex justify-between px-8 items-center py-[25px]">
        <img
          src={logo}
          alt=" keyboard keycap with the letter m on top"
          className="w-12 active:shadow-inner active:scale-95 active:translate-y-1/12 active:brightness-60 cursor-pointer"
        />

        <nav className="hidden md:flex gap-5">
          <a href="#/" className="">
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
          <a href={Resume} target="_blank" rel="noreferrer">
            Resume
          </a>
        </nav>

        <div className="md:hidden">
          <Hamburger toggled={nav} toggle={setNav} />
        </div>

        <nav
          className={`h-[100vh] fixed top-[0px] flex flex-col justify-center gap-20 items-center w-full md:hidden bg-white z-40 duration-1000 ${
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
