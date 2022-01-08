import axios from "axios";
import React, { useState, useEffect, useMemo } from "react";
import config from "./common/constants";
import Trip from "./components/Trip";
import "./common/styles/App.css";
import { useLocation, useHistory } from "react-router-dom";

function useQuery() {
  const { search } = useLocation();
  return useMemo(() => new URLSearchParams(search), [search]);
}
function App() {
  const [keyword, setKeyword] = useState("");
  const [trips, setTrips] = useState([]);
  let history = useHistory();
  let query = useQuery();

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
        <svg
          className="search-icon"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M19.023 16.977a35.13 35.13 0 0 1-1.367-1.384c-.372-.378-.596-.653-.596-.653l-2.8-1.337A6.962 6.962 0 0 0 16 9c0-3.859-3.14-7-7-7S2 5.141 2 9s3.14 7 7 7c1.763 0 3.37-.66 4.603-1.739l1.337 2.8s.275.224.653.596c.387.363.896.854 1.384 1.367l1.358 1.392.604.646 2.121-2.121-.646-.604c-.379-.372-.885-.866-1.391-1.36zM9 14c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5z"></path>
        </svg>
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
        <span className="textfield-bottom-line"></span>
      </div>
      {trips.map((trip) => (
        <Trip trip_info={trip} key={trip.eid} />
      ))}
    </div>
  );
}

export default App;
