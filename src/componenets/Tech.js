import axios from "axios";
import { useState, useEffect } from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";

const Tech = () => {
  const [icons, setIcons] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/icons")
      .then((response) => {
        setIcons(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const getIconByURL = (id) => {
    const icon = icons.find((icon) => icon.id === id);
    if (icon) {
      return `http://localhost:8080/icons/${icon.icon}`;
    }
    return null;
  };

  return (
    <div id="tech">
      <h1 className="md:text-5xl ">Tech Stack</h1>
      <div className="grid grid-cols-5 items-center space-y-2 md:py-8 md:grid-cols-8 md:w-[90%]">
        {icons.map((image) => (
          <img
            key={image.id}
            src={getIconByURL(image.id)}
            alt={image.name}
            className="w-16 rounded-full md:w-28"
            data-tooltip-id="my-tooltip"
            data-tooltip-content={image.name}
            data-tooltip-place="top"
          />
        ))}
        <Tooltip id="my-tooltip" />
      </div>
    </div>
  );
};

export default Tech;
