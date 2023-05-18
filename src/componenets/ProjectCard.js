import { useState, useEffect } from "react";
import axios from "axios";
import { Carousel } from "react-responsive-carousel";

const ProjectCard = () => {
  const [projects, setProjects] = useState([]);
  const [descriptions, setDescriptions] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/projects")
      .then((response) => {
        setProjects(response.data);
        setDescriptions(response.data.map((project) => project.description));
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const getImageUrlById = (id) => {
    const project = projects.find((proj) => proj.id === id);
    if (project) {
      return `http://localhost:8080/projects/${project.image}`;
    }
    return null;
  };

  return (
    <>
      <Carousel
        swipeable
        infiniteLoop
        showThumbs={false}
        centerMode
        centerSlidePercentage={95}
        showIndicators={false}
      >
        {projects.map((project) => (
          <>
            <a
              href="#home"
              className="flex flex-col items-center rounded-lg  md:flex-row md:max-w-xl dark:bg-red-300 dark:hover:bg-red-200 mb-8 shadow-lg"
            >
              <img
                key={project.id}
                src={getImageUrlById(project.id)}
                alt={project.name}
                className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
              />
              <div className="flex flex-col justify-between leading-normal ">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-black dark:text-black">
                  {project.name}
                </h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-700">
                  {project.description}
                </p>
              </div>
            </a>
          </>
        ))}
      </Carousel>
    </>
  );
};

export default ProjectCard;
