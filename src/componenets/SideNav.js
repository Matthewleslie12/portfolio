import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { BsMedium } from "react-icons/bs";
import { DiNpm } from "react-icons/di";
import "react-tooltip/dist/react-tooltip.css";

const SideNav = () => {
  return (
    <div className="fixed bottom-0 px-4 hidden md:block">
      <div className="flex gap-4 flex-col">
        <a
          href="https://github.com/Matthewleslie12/"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillGithub
            size={28}
            data-tooltip-id="my-tooltip"
            data-tooltip-content="Github"
            data-tooltip-place="right"
          />
        </a>

        <a
          href="https://linkedin.com/in/matthew-leslie"
          rel="noreferrer"
          target="_blank"
        >
          <AiFillLinkedin
            size={28}
            color="#0077b5"
            data-tooltip-id="my-tooltip"
            data-tooltip-content="LinkedIn"
            data-tooltip-place="right"
          />
        </a>
        <a
          href="https://www.npmjs.com/~matthewleslie"
          rel="noreferrer"
          target="_blank"
        >
          <DiNpm
            size={28}
            color="red"
            data-tooltip-id="my-tooltip"
            data-tooltip-content="NPM"
            data-tooltip-place="right"
          />
        </a>
        <a
          href="https://medium.com/@matthewleslie155"
          rel="noreferrer"
          target="_blank"
        >
          <BsMedium
            size={28}
            data-tooltip-id="my-tooltip"
            data-tooltip-content="Medium"
            data-tooltip-place="right"
          />
        </a>
      </div>
      <div className=" pt-2 px-4">
        <div className="w-[2px] h-20 bg-red-300"></div>
      </div>
    </div>
  );
};

export default SideNav;
