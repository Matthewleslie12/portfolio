import React from "react";
import Button from "../componenets/Button";
import Images from "../componenets/Images";

const Hero = () => {
  return (
    <div className="flex flex-col pt-5">
      <div className="space-y-2">
        <p className="text-red-300">Hey, I'm</p>
        <h4 className="font-bold text-2xl">Matthew Leslie.</h4>
        <p className="pb-5">
          A
          <span className="bg-[#9EC9BA] px-[0.4em] rounded-md">
            full stack web developer
          </span>
          with a focus on frontend design. I have a strong foundation in{" "}
          <span className="bg-[#9EC9BA] px-[0.4em] rounded-md ">
            React and backend development
          </span>
          and am passionatie about creating things that are both visually
          stunning and functionally robust.
        </p>
      </div>
      <Button text="About me!" />
      <Images />
    </div>
  );
};

export default Hero;
