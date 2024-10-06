import{ useEffect, useState, useRef } from "react";
import { gsap } from "gsap";

const ImageSlider = ({ images }) => {
  const [index, setIndex] = useState(0);
  const imageRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  useEffect(() => {
    if (imageRef.current) {
      gsap.fromTo(
        imageRef.current,
        { opacity: 0, x: 100 },
        { opacity: 1, x: 0, duration: 1, ease: "power2.out" }
      );
       // Imposta la variabile CSS --bg-image con l'URL dell'immagine corrente
      imageRef.current.style.setProperty('--bg-image', `url(${images[index]})`); 
    }
  }, [index, images]);

  if (!Array.isArray(images) || images.length === 0) {
    return <div>No images available</div>;
  }

  return (
    <div ref={imageRef} className="image-slider"></div>
  );
};

export default ImageSlider;
