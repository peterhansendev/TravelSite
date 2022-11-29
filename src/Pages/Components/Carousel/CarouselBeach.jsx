import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "./Carousel.css";
import { useGlobalContext } from "../../../context";
import { AiFillCloseCircle } from 'react-icons/ai';
import { useState, useEffect } from "react";

function ImgCarouselBeach() {
  const { setBeach, setAdventure, setShopping, beach } = useGlobalContext();
  const [className, setClassName] = useState(1);


  useEffect(() => {
    if (beach === true) {
      setTimeout(() => {
        setClassName("carouselDiv");
      }, "200"); 
    
    } else if (beach === false && className !== 1) {
      setClassName("delay")
      setTimeout(() => {
        setClassName("display-none");
      }, "200"); 
    } else {
      setClassName("display-none");
    }
  }, [beach]);
  
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
            src="https://cdn.pixabay.com/photo/2017/01/20/00/30/maldives-1993704_960_720.jpg"
          />
        </div>
        <div key="content-1">
          <button onClick={OnClick} className="close-btn">
          <AiFillCloseCircle />
          </button>
          <img
            alt=""
            src="https://cdn.pixabay.com/photo/2015/03/02/23/40/father-656734_960_720.jpg"
          />
        </div>
        <div key="content-2">
          <button onClick={OnClick} className="close-btn">
          <AiFillCloseCircle />
          </button>
          <img
            alt=""
            src="https://cdn.pixabay.com/photo/2016/11/08/05/08/adult-1807500_960_720.jpg"
          />
        </div>
      </Carousel>
    </div>
  );
}

export default ImgCarouselBeach;
