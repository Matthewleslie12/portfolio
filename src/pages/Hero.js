import React from "react";
import Button from "../componenets/Button";
import Images from "../componenets/Images";

const Hero = () => {
  return (
    <div className="flex flex-col pt-5 md:flex-row ">
      <div className="md:w-1/2 md:items-center flex">
        <div className="space-y-2">
          <p className="text-red-400 md:text-lg">Hey, I'm</p>
          <h4 className="font-bold text-2xl md:text-6xl">Matthew Leslie.</h4>
          <p className="pb-5 md:text-lg w-[90%]">
            A
            <span className="bg-[#9EC9BA] px-[0.1em] rounded-md">
              full stack web developer
            </span>
            with skills in{" "}
            <span className="bg-[#9EC9BA] px-[0.1em] rounded-md">
              React, Javascript, Node and MySQL
            </span>{" "}
            and am passionate about creating things that are both visually
            stunning and functionally robust.
          </p>

          <Button text="Learn about me!" />
        </div>
      </div>
      <div className="md:w-1/2">
        <Images />
      </div>
    </div>
  );
};

export default Hero;
