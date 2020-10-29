import React, { useState } from "react";
import "./style/Slider.css";
import { Button } from "@material-ui/core";
import Search from "../searchdate/Search";
import { useHistory } from "react-router-dom";

function Slider() {
  const history = useHistory();
  const [showSearch, setShowSearch] = useState(false);
  return (
    <div className="slider">
      <div className="slider__search">
        {showSearch && <Search />}
        <Button
          onClick={() => setShowSearch(!showSearch)}
          className="slider__searchButton"
          variant="outlined"
        >
          {showSearch ? "Hide" : "Search Dates"}
        </Button>
      </div>
      <div className="slider__info">
        <h1>Get out and stretch your imagination</h1>
        <h5>
          Plan a different kind of getaway to uncover the hidden gems near you.
        </h5>
        <Button onClick={() => history.push("/search")} variant="outlined">
          Explore Nearby
        </Button>
      </div>
    </div>
  );
}

export default Slider;
