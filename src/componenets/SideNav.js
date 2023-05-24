import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { BsMedium } from "react-icons/bs";
import { DiNpm } from "react-icons/di";

const SideNav = () => {
  return (
    <div className="fixed bottom-0 px-4 hidden md:block">
      <div className="flex gap-4 flex-col">
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
      <div className=" pt-2 px-4">
        <div className="w-[2px] h-20 bg-red-300"></div>
      </div>
    </div>
  );
};

export default SideNav;
