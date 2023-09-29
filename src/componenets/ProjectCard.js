import {useState, useEffect} from "react";
import axios from "axios";
import {FaGlobe, FaGithub} from "react-icons/fa";
import {getTechStackIcons} from "./Icons";

const ProjectCard = () => {
  const [projects, setProjects] = useState([]);
  const [, setDescriptions] = useState([]);

  useEffect(() => {
    axios
      .get("https://portfolio-image-server.onrender.com/projects/")
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
      return `https://portfolio-image-server.onrender.com/projects/${project.image}`;
    }
    return null;
  };

  const handleViewProject = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div className="">
      {projects.map((project) => (
        <div class="max-w-sm w-full md:max-w-full lg:flex mb-4 md:mb-6">
          <img
            alt={project.name}
            src={getImageUrlById(project.id)}
            class="h-48 lg:h-auto lg:w-96 flex-none rounded-b-none rounded-lg  lg:rounded-r-none text-center overflow-hidden w-full aspect-video object-center object-cover "
          />
          <div class="shadow-md  bg-white rounded-lg rounded-t-none  lg:rounded-l-none p-4 flex flex-col justify-between leading-normal">
            <div class="mb-8">
              <div class="text-gray-900 font-bold text-xl mb-2">
                {project.name}
              </div>
              <div class="flex items-center mb-2">
                {getTechStackIcons(project.icons).map((icon) => (
                  <span class="mr-2 text-xl text-gray-500">{icon}</span>
                ))}
              </div>
              <div class="flex items-center mb-2">
                {getTechStackIcons(project.description).map((icon) => (
                  <span class="mr-2 text-xl text-gray-500">{icon}</span>
                ))}
              </div>
              <p class="text-gray-700 text-base">{project.description}</p>
            </div>
            <div class="flex items-center space-x-2">
              {project.URL && (
                <button
                  onClick={() => handleViewProject(project.URL)}
                  className="inline-flex items-center py-2 text-xs md:text-lg text-white bg-red-300 rounded-lg hover:bg-red-400 w-full font-bold h-14 justify-center "
                >
                  <FaGlobe class="mr-2" />
                  View Project
                </button>
              )}
              {project.Github && (
                <button
                  onClick={() => handleViewProject(project.Github)}
                  className="inline-flex items-center py-2 text-xs md:text-lg text-white bg-[#9EC9BA] rounded-lg hover:bg-[#7d9f93] w-full font-bold h-14 justify-center "
                >
                  <FaGithub class="mr-2" />
                  View Code
                </button>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectCard;
