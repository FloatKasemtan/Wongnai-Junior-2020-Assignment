import React from "react";
import "../common/styles/trip.css";
import TripContent from "./TripContent";

const Trip = ({ trip_info, ...rest }) => {
  return (
    <div {...rest} className="grid-container">
      <div
        className="main-img"
        style={{ backgroundImage: `url(${trip_info.photos[0]})` }}
      />

      <TripContent
        title={trip_info.title}
        description={trip_info.description}
        url={trip_info.url}
        photos={trip_info.photos}
        tags={trip_info.tags}
      />
    </div>
  );
};

export default Trip;
