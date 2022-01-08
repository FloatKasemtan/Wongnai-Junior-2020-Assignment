import React from "react";
import TripSubPictures from "./TripSubPictures";
import "../common/styles/trip.css";

const TripContent = ({ title, description, tags, photos, url, ...rest }) => {
  return (
    <div {...rest} className="trip-content-container">
      <a className="title" href={url}>
        {title}
      </a>
      <span className="description">
        {description.length > 200
          ? description.substring(0, 200) + "...."
          : description}
        &ensp;
        <a href={url}>อ่านต่อ</a>{" "}
      </span>

      <div className="tag-style">
        หมวด &#8226;&ensp;
        {tags.map((tag, idx) => {
          if (idx === tags.length - 1) {
            return (
              <span key={idx}>
                <span>และ&ensp;</span>
                <span>
                  <a
                    key={tag}
                    href={"http://localhost:3000?keyword=" + tag}
                    className="tag-style"
                  >
                    {tag}
                  </a>
                  &ensp;
                </span>
              </span>
            );
          }
          return (
            <span key={idx}>
              <a
                key={tag}
                href={"http://localhost:3000?keyword=" + tag}
                className="tag-style"
              >
                {tag}
              </a>
              &ensp;
            </span>
          );
        })}
      </div>
      <TripSubPictures photos={photos.splice(1).slice(0, 3)} />
    </div>
  );
};

export default TripContent;
