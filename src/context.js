import React, { createContext, useContext, useState } from "react";
const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [locationName, setLocationName] = useState("");
  const [adventure, setAdventure] = useState(false);
  const [beach, setBeach] = useState(false);
  const [shopping, setShopping] = useState(false);
  const [calendar, setCalendar] = useState(false);
  const [animationDelayAdvendture, setAnimationDelayAdventure] = useState(false);
  const [animationDelayBeach, setAnimationDelayBeach] = useState(false);
  const [animationDelayShopping, setAnimationDelayShopping] = useState(false); 
  const [date, setDate] = useState(new Date());
  const [userInput, setUserInput] = useState([
    {
      input: [],
      date: [],
    },
  ]);

  return (
    <AppContext.Provider
      value={{
        locationName,
        setLocationName,
        adventure,
        setAdventure,
        beach,
        setBeach,
        shopping,
        setShopping,
        calendar,
        setCalendar,
        animationDelayAdvendture,
        setAnimationDelayAdventure,
        animationDelayBeach,
        setAnimationDelayBeach,
        animationDelayShopping,
        setAnimationDelayShopping,
        setUserInput,
        userInput,
        date,
        setDate
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
