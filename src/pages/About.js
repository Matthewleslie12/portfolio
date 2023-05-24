import React from "react";

const About = () => {
  return (
    <div className="pt-8 md:w-[95%]" id="about">
      <h1 className="md:text-5xl">About me</h1>
      <p className="pb-6 md:pb-2 md:text-lg ">
        Hello, I am originally from England but moved to Toronto at the end of
        2022. I love exploring new technologies and learning different ways to
        create things. Just recently, I wanted to learn Tailwind CSS, to do
        that, I used it to create this portfolio.
      </p>
      <p className="md:text-lg md:pb-8">
        When I'm not coding, you can find me in nature, travelling, building
        keyboards and computers, or eating great food. I am passionate about
        many things, but particularly the intersection of technology and
        society, and how we can use technology to make the world a better place.
        I am excited to create things that follow this ethos.
      </p>
    </div>
  );
};

export default About;
