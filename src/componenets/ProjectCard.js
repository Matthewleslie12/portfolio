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

  const handleViewProject = (url) => {
    window.open(url, "_blank");
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
          <div
            key={project.id}
            className="flex flex-col items-center rounded-lg  md:flex-row md:max-w-xl shadow-lg"
          >
            <img
              src={getImageUrlById(project.id)}
              alt={project.name}
              className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
            />
            <div className="flex flex-col ">
              <h5 className="mb-2 text-2xl font-bold text-black dark:text-black">
                {project.name}
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-700 px-2">
                {project.description}
              </p>
              <button
                onClick={() => handleViewProject(project.URL)}
                className="bg-red-300 hover:bg-red-400 text-white font-bold px-4 rounded-lg h-14 "
              >
                View Project
              </button>
            </div>
          </div>
        ))}
      </Carousel>
    </>
  );
};

export default ProjectCard;
