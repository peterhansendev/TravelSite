import * as React from "react";
import { useState } from "react";
import {Box} from "@mui/material";
// Button from "@mui/material/Button";
import {Modal} from "@mui/material";
import "./Search.css";
import { useGlobalContext } from "../../../context";
import { AiOutlineSearch } from "react-icons/ai";

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [name, setName] = useState([]);
  const [finalPlace, setFinalPlace] = useState(null);
  const [finalPlaceImg, setFinalPlaceImg] = useState([]);
  const [finalPlaceWiki, setFinalPlaceWiki] = useState([]);
  const [all, setAll] = useState([]);
  const [modalEntry, setModalEntry] = useState(false);
  const [activeIndex, setActiveIndex] = useState([]);
  const [favorite, setFavorite] = useState("search");
  const { setLocationName } = useGlobalContext();

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const searchPlace = async () => {
    try {
      const response = await fetch(
        `https://api.opentripmap.com/0.1/en/places/geoname?name=${name}&apikey=5ae2e3f221c38a28845f05b635984f3ae7126f4e47c13ba1df68dad9`
      );
      const places = await response.json();

      const newResponse = await fetch(
        `https://api.opentripmap.com/0.1/en/places/radius?radius=300&lon=${places.lon}&lat=${places.lat}&apikey=5ae2e3f221c38a28845f05b635984f3ae7126f4e47c13ba1df68dad9`
      );
      const newPlaces = await newResponse.json();
      setAll(newPlaces.features);
      setModalEntry(true);
    } catch (error) {
      console.log(error);
    }
  };

  const getPlace = async (xid) => {
    try {
      const finalResponse = await fetch(
        `https://api.opentripmap.com/0.1/en/places/xid/${xid}?apikey=5ae2e3f221c38a28845f05b635984f3ae7126f4e47c13ba1df68dad9`
      );
      const finalPlace = await finalResponse.json();
      setFinalPlace(finalPlace);
      setFinalPlaceImg(finalPlace.preview);
      setFinalPlaceWiki(finalPlace.wikipedia_extracts);
    } catch (error) {}
  };

  function displayInfo() {
    if (finalPlace !== null) {
      return (
        <div>
          <div className="displayInfoTitle">
            <h2>{finalPlace.name ? finalPlace.name : "No Data Available"}</h2>
          </div>
          {finalPlace.address.city_district}
          <br />
          {finalPlace.address.country}
          <br />
          {finalPlaceWiki === undefined
            ? "No info to display"
            : finalPlaceWiki.text}
          <br />
          <br />
          <img
            alt={finalPlace.kinds}
            src={
              finalPlaceImg === undefined
                ? "https://cdn.pixabay.com/photo/2016/05/30/14/23/detective-1424831_960_720.png"
                : finalPlaceImg.source
            }
          />
          <br />
          <a href={finalPlace.otm}>Show more at OpenTripMap</a>
          <br />
          <br />
        </div>
      );
    }
  }
  function Favorite(favoritePlace) {
    setFavorite(favoritePlace);
    setLocationName(favoritePlace);
  }

  return (
    <div className="top">
      <div className="modal-going">
        <div className="modal-btn" onClick={handleOpen}>
          <h1> Travel Search </h1>
        </div>
        <div className="going">
          <p>You are going to</p>
          <h2>
            {favorite === "search" ? "Search for a destination" : favorite}
          </h2>
        </div>
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className={modalEntry ? "box" : "no-box"}>
          <button className="closeModal-btn" hidden={modalEntry ? false : true} onClick={handleClose}>
            X
          </button>
          <aside
            className={modalEntry === false ? "asideBefore" : "asideAfter"}
          >
            <div className="search-list">
              <div id="cover">
                <div class="tb">
                  <div class="td">
                    <input
                      type="text"
                      placeholder="Search"
                      required
                      onChange={handleChange}
                    />
                  </div>
                  <div onClick={() => searchPlace()}>
                    <button className="search-btn" type="submit">
                      <AiOutlineSearch size={30} />
                    </button>
                  </div>
                </div>
              </div>

              {all.map((index) => {
                return (
                  <div
                    className={
                      activeIndex !== index.properties.xid
                        ? "searched"
                        : "searchedActive"
                    }
                    key={index.properties.xid}
                    onClick={() =>
                      getPlace(index.properties.xid) &&
                      setActiveIndex(index.properties.xid)
                    }
                  >
                    <h2>
                      {index.properties.name === ""
                        ? "Name Missing"
                        : index.properties.name}
                    </h2>
                    <button
                      className="favorites"
                      onClick={() => Favorite(index.properties.name)}
                    >
                      Add
                    </button>
                  </div>
                );
              })}
            </div>

            <div
              className={
                finalPlace === null ? "no-info-display" : "info-display"
              }
            >
              {displayInfo()}
            </div>
          </aside>
        </Box>
      </Modal>
    </div>
  );
}
