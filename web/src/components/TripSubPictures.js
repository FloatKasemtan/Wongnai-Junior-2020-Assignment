import React from "react";

const TripSubPictures = (photos, ...rest) => {
  return (
    <div {...rest} className="grid-container-pictures">
      {photos.photos.map((photo) => (
        <img className="sub-image" key={photo} src={photo} alt={photo} />
      ))}
    </div>
  );
};

export default TripSubPictures;
