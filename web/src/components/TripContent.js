import React, { Fragment } from "react";
import TripSubPictures from "./TripSubPictures";
import Tag from "./Tag";
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
        <a href={url}>อ่านต่อ</a>
      </span>
      <div className="tag-style">
        หมวด &#8226;&ensp;
        {tags.map((tag, idx) => {
          if (idx === tags.length - 1) {
            return (
              <Fragment key={idx}>
                <span>และ&ensp;</span>
                <Tag tag={tag} />
              </Fragment>
            );
          }
          return <Tag key={idx} tag={tag} />;
        })}
      </div>
      <TripSubPictures photos={photos.splice(1).slice(0, 3)} />
    </div>
  );
};

export default TripContent;
