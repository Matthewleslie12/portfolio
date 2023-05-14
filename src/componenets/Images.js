import axios from "axios";
import { useState, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const Images = () => {
  const [images, setImages] = useState([]);
  const [descriptions, setDescriptions] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/images")
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
      return `http://localhost:8080/images/${image.image}`;
    }
    return null;
  };

  return (
    <div className="pt-8">
      <Carousel
        interval={2500}
        autoPlay
        stopOnHover
        swipeable
        infiniteLoop
        transitionTime={500}
        showThumbs={false}
      >
        {images.map((image) => (
          <>
            <img
              key={image.id}
              src={getImageUrlById(image.id)}
              alt={image.name}
              className="h-[515px] rounded-md"
            />
            <p className="legend">{image.description}</p>
          </>
        ))}
      </Carousel>
    </div>
  );
};

export default Images;
