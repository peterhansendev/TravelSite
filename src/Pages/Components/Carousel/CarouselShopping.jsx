import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "./Carousel.css";
import { useGlobalContext } from "../../../context";
import { AiFillCloseCircle } from 'react-icons/ai';
import { useState, useEffect } from "react";

function ImgCarouselShopping() {
  const { setBeach, setAdventure, setShopping, shopping } = useGlobalContext();
  const [className, setClassName] = useState(1);


  useEffect(() => {
    if (shopping === true) {
      setTimeout(() => {
        setClassName("carouselDiv");
      }, "200"); 
    } else if (shopping === false && className !== 1) {
      setClassName("delay")
      setTimeout(() => {
        setClassName("display-none");
      }, "200"); 
    } else {
      setClassName("display-none");
    }
  }, [shopping]);

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
        showIndicators={false}
        showThumbs={false}
        interval={2000}
    
      >
        <div key="content-0">
          <button onClick={OnClick} className="close-btn">
          <AiFillCloseCircle />
          </button>
          <img
            alt=""
            src="https://cdn.pixabay.com/photo/2017/08/05/00/12/girl-2581913_960_720.jpg"
          />
        </div>
        <div key="content-1">
          <button onClick={OnClick} className="close-btn">
          <AiFillCloseCircle />
          </button>
          <img
            alt=""
            src="https://cdn.pixabay.com/photo/2017/12/26/09/15/woman-3040029_960_720.jpg"
          />
        </div>
        <div key="content-2">
          <button onClick={OnClick} className="close-btn">
          <AiFillCloseCircle />
          </button>
          <img
            alt=""
            src="https://cdn.pixabay.com/photo/2016/11/23/14/56/bazaar-1853361_960_720.jpg"
          />
        </div>
      </Carousel>
    </div>
  );
}

export default ImgCarouselShopping;
