import { useState, useEffect } from "react";
import "react-calendar/dist/Calendar.css";
import "react-datepicker/dist/react-datepicker.css";
import { useGlobalContext } from "../../../context";
import "./Calendar.css";
import Time from "./Time.js";

function Calender() {
  const {
    locationName,
    setBeach,
    setAdventure,
    setShopping,
    calendar,
    setCalendar,
    userInput,
    setUserInput,
    date,
  } = useGlobalContext();
  // const [date, setDate] = useState(new Date());
  const [showTime, setShowTime] = useState(false);
  // const inputRef = useRef([]);
  //const [startDate, setStartDate] = useState(new Date());

  // const [isActive, setIsActive] = useState(true);

  /* const catchInput = (e) => {
    setLocationName(e.target.value);
  }; */

  function catchEvent(date) {
    var formattedDate = `${date.getDate()}-${
      date.getMonth() + 1
    }-${date.getFullYear()}`;
    setUserInput([
      ...userInput,
      { input: [locationName], date: [formattedDate] },
    ]);
    setShowTime(true);
  }

  useEffect(() => {
    let timeout;
    if (showTime) {
      timeout = setTimeout(() => setShowTime(false), 3000);
    }
    return () => clearTimeout(timeout);
  }, [showTime]);
 

  function OnClick() {
    setCalendar(!calendar);
    setBeach(false);
    setAdventure(false);
    setShopping(false);
  }

  return (
    <div className="inputForm">
      <div className="datePickerDiv">
       
        <button onClick={() => OnClick()}>Choose A <br /> Date</button>
        <button disabled={locationName === "" ? true : false} onClick={() => catchEvent(date)}>Submit</button>
        <button onClick={() => OnClick()}>View Your Calendar</button>
     
      </div>
      <Time showTime={showTime} date={date} />
    </div>
  );
}

export default Calender;

  /*  <DatePicker
            className="datePicker"
            dateFormat="dd/MM/yyyy"
            selected={startDate}
            onChange={(date) => setStartDate(date)}
          />*/