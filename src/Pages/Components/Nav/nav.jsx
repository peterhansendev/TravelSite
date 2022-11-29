import "./nav.css";
import { useGlobalContext } from "../../../context";

export default function Nav() {
  const {
    beach,
    adventure,
    shopping,
    setBeach,
    setAdventure,
    setShopping,
    setCalendar,
  } = useGlobalContext();
  return (
    <>
      <div className="suggestions">
        <div id="h1"></div>
        <button
          onClick={() =>
            setAdventure(!adventure) &
            setBeach(false) &
            setShopping(false) &
            setCalendar(false)
          }
          className="suggestion-btn suggestion-btn1"
        >
          Adventure
        </button>
     
        <button
          onClick={() =>
            setAdventure(false) &
            setBeach(!beach) &
            setShopping(false) &
            setCalendar(false)
          }
          className="suggestion-btn suggestion-btn2"
        >
          Beach
        </button>
        <button
          onClick={() =>
            setAdventure(false) &
            setBeach(false) &
            setShopping(!shopping) &
            setCalendar(false)
          }
          className="suggestion-btn suggestion-btn3"
        >
          Shopping
        </button>
      </div>
    </>
  );
}
