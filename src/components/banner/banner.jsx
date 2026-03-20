import { useEffect, useState } from "react";
import "./banner.css";

function Banner() {
  const images = [
    "/images/banner1.png",
    "/images/banner2.png",
    "/images/banner3.png"
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000); // troca a cada 3s

    return () => clearInterval(interval);
  }, []);

  return (
    <header className="banner">
      <div
        className="banner-track"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((img, index) => (
          <img key={index} src={img} alt={`banner-${index}`} />
        ))}
      </div>
    </header>
  );
}

export default Banner;