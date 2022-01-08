import React from "react";
import TripSubPictures from "./TripSubPictures";
import "../common/styles/trip.css";

const TripContent = ({ title, description, tags, photos, url, ...rest }) => {
  return (
    <div {...rest} className="trip-content-container">
      <div className="title">{title}</div>
      <span className="description">
        {description.length > 200
          ? description.substring(0, 200) + "...."
          : description}
        &ensp;
        <a href={url}>อ่านต่อ</a>{" "}
      </span>

      <div className="tag-style">
        หมวด &#8226;&ensp;
        {tags.map((tag) => (
          <span key={tag}>
            <a
              key={tag}
              href={"http://localhost:3000?keyword=" + tag}
              className="tag-style"
            >
              {tag}
            </a>
            &ensp;
          </span>
        ))}
      </div>
      <TripSubPictures photos={photos.splice(1).slice(0, 3)} />
    </div>
  );
};

export default TripContent;
