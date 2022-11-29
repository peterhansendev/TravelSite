import moment from "moment";
import { useRef, useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "react-datepicker/dist/react-datepicker.css";
import { useGlobalContext } from "../../../context";
import "./Calendar.css";

function PopUpCalendar() {
  const {
    //   locationName,
    // setLocationName,
    //setBeach,
    //setAdventure,
    //setShopping,
    calendar,
    //setCalendar,
    userInput,
    date,
    setDate,
  } = useGlobalContext();

  const [className, setClassName] = useState(1);

  useEffect(() => {
    if (calendar === true) {
      setTimeout(() => {
        setClassName("carouselDiv");
      }, "200");
    } else if (calendar === false && className !== 1) {
      setClassName("delay");
      setTimeout(() => {
        setClassName("display-none");
      }, "200");
    } else {
      setClassName("display-none");
    }
  }, [calendar]);

  return (
    <div className={className}>
      <Calendar
        onChange={setDate}
        value={date}
        tileContent={({ date }) => {
          let value;
          userInput.map((index) => {
            if (
              index.date.find((x) => x === moment(date).format("D-MM-YYYY"))
            ) {
              value = <p>{index.input}</p>;
            }
            return {};
          });
          return value;
        }}
        tileClassName={({ date }) => {
          let value;
          userInput.map((index) => {
            if (
              index.date.find((x) => x === moment(date).format("D-MM-YYYY"))
            ) {
              value = "border";
            }
            return {};
          });
          return value;
        }}
      />
    </div>
  );
}

export default PopUpCalendar;
