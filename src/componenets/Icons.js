import React from "react";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";
import { FaReact, FaNodeJs, FaFigma, FaSass } from "react-icons/fa";
import { SiTailwindcss, SiExpress } from "react-icons/si";

export const getTechStackIcons = (techStack) => {
  const icons = [];
  if (Array.isArray(techStack)) {
    techStack.forEach((tech) => {
      switch (tech) {
        case "react":
          icons.push(
            <FaReact
              key="react"
              data-tooltip-id="my-tooltip"
              data-tooltip-content={"React"}
              data-tooltip-place="top"
            />
          );
          break;
        case "node":
          icons.push(
            <FaNodeJs
              key="node"
              data-tooltip-id="my-tooltip"
              data-tooltip-content={"Node.js"}
              data-tooltip-place="top"
            />
          );
          break;
        case "figma":
          icons.push(
            <FaFigma
              key="figma"
              data-tooltip-id="my-tooltip"
              data-tooltip-content={"Figma"}
              data-tooltip-place="top"
            />
          );
          break;
        case "tailwind":
          icons.push(
            <SiTailwindcss
              key="tailwind"
              data-tooltip-id="my-tooltip"
              data-tooltip-content={"Tailwind"}
              data-tooltip-place="top"
            />
          );
          break;
        case "sass":
          icons.push(
            <FaSass
              key="sass"
              data-tooltip-id="my-tooltip"
              data-tooltip-content={"SASS"}
              data-tooltip-place="top"
            />
          );
          break;
        case "express":
          icons.push(
            <SiExpress
              key="express"
              data-tooltip-id="my-tooltip"
              data-tooltip-content={"Express.js"}
              data-tooltip-place="top"
            />
          );
          break;
        default:
          break;
      }
    });
    <Tooltip />;
  }
  return icons;
};
