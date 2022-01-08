import axios from "axios";
import React, { useState, useEffect, useMemo } from "react";
import config from "./common/constants";
import Trip from "./components/Trip";
import svg from "./common/assets";
import "./common/styles/App.css";
import { useLocation, useHistory } from "react-router-dom";

function useQuery() {
  const { search } = useLocation();
  return useMemo(() => new URLSearchParams(search), [search]);
}
function App() {
  const [keyword, setKeyword] = useState("");
  const [trips, setTrips] = useState([]);
  const history = useHistory();
  const query = useQuery();

  useEffect(() => {
    if (query.get("keyword")) setKeyword(query.get("keyword"));
  }, [query]);

  useEffect(() => {
    axios
      .get(`${config.SERVER_URL}/trips?keyword=${keyword}`)
      .then(({ data }) => {
        setTrips(data);
      });
  }, [keyword]);

  return (
    <div className="App">
      <header>เที่ยวไหนดี</header>
      <div className="textfield-parent">
        <input
          type="text"
          className="input-style"
          id="textfield-1"
          name="textfield-1"
          placeholder="หาที่เที่ยวแล้วไปกัน..."
          value={keyword}
          onChange={(e) => {
            setKeyword(e.target.value);
            history.replace(`?keyword=${e.target.value}`);
          }}
        />
        {svg.searchIcon}
        <span className="textfield-bottom-line"></span>
      </div>
      {trips.map((trip) => (
        <Trip trip_info={trip} key={trip.eid} />
      ))}
    </div>
  );
}

export default App;
