import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "./Carousel.css";
import { useGlobalContext } from "../../../context";
import { AiFillCloseCircle } from "react-icons/ai";
import { useState, useEffect } from "react";

function ImgCarouselAdventure() {
  const { setBeach, setAdventure, setShopping, adventure } = useGlobalContext();
  const [className, setClassName] = useState(1);


  useEffect(() => {
    if (adventure === true) {
      setTimeout(() => {
        setClassName("carouselDiv");
      }, "200"); 
   
    } else if (adventure === false && className !== 1) {
      setClassName("delay")
      setTimeout(() => {
        setClassName("display-none");
      }, "200"); 
    } else {
      setClassName("display-none");
    }
  }, [adventure]);

  function OnClick() {
    setBeach(false);
    setAdventure(false);
    setShopping(false);
  }

  return (
    <div className={className}>
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showIndicators={true}
        showThumbs={false}
        interval={2000}
        slideImageFit="contain"
      >
        <div key="content-0">
          <button onClick={OnClick} className="close-btn">
            <AiFillCloseCircle />
          </button>
          <img
            alt=""
            src="https://cdn.pixabay.com/photo/2017/08/06/12/06/people-2591874_960_720.jpg"
          />
        </div>
        <div key="content-1">
          <button onClick={OnClick} className="close-btn">
            <AiFillCloseCircle />
          </button>
          <img
            alt=""
            src="https://cdn.pixabay.com/photo/2016/08/01/20/13/girl-1561989_960_720.jpg"
          />
        </div>
        <div key="content-2">
          <button onClick={OnClick} className="close-btn">
            <AiFillCloseCircle />
          </button>
          <img
            alt=""
            src="https://cdn.pixabay.com/photo/2014/09/21/17/56/mountaineering-455338_960_720.jpg"
          />
        </div>
      </Carousel>
    </div>
  );
}

export default ImgCarouselAdventure;
