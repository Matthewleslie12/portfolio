import axios from "axios";
import { useState, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const Images = () => {
  const [images, setImages] = useState([]);
  const [, setDescriptions] = useState([]);

  useEffect(() => {
    axios
      .get("https://portfolio-image-server.onrender.com/images/")
      .then((response) => {
        setImages(response.data);
        setDescriptions(response.data.map((image) => image.description));
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const getImageUrlById = (id) => {
    const image = images.find((img) => img.id === id);
    if (image) {
      return `https://portfolio-image-server.onrender.com/images/${image.image}`;
    }
    return null;
  };

  return (
    <div className="pt-8 ">
      <Carousel
        interval={2500}
        autoPlay
        stopOnHover={true}
        swipeable
        infiniteLoop
        transitionTime={500}
        showThumbs={false}
        showArrows={false}
        showStatus={false}
      >
        {images.map((image) => (
          <div className="relative">
            <img
              key={image.id}
              src={getImageUrlById(image.id)}
              alt={image.name}
              className="h-[515px] rounded-md md:rounded-lg"
            />
            <p className="legend absolute bottom-0 left-0 w-full text-center bg-black bg-opacity-50 text-white p-2">
              {image.description}
            </p>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Images;
