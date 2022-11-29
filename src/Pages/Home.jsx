import "./Home.css";
import Calender from "./Components/Calendar/Calendar";
import ImgCarouselAdventure from "./Components/Carousel/CarouselAdventure";
import ImgCarouselBeach from "./Components/Carousel/CarouselBeach";
import ImgCarouselShopping from "./Components/Carousel/CarouselShopping";
import BasicModal from "./Components/Search/modal";
import Nav from "./Components/Nav/nav";
import PopUpCalendar from "./Components/Calendar/PopUpCalendar";

export default function Home() {
  return (
    <main>
      <div className="nav">
        <Nav />

        <div className="carousel-main">
          <ImgCarouselAdventure />
          <ImgCarouselBeach />
          <ImgCarouselShopping />
          <PopUpCalendar />
        </div>
        <div className="main-bottom">
          <BasicModal />
          <Calender />
        </div>
      </div>

      <h1 className="title">Travel The World</h1>
    </main>
  );
}
