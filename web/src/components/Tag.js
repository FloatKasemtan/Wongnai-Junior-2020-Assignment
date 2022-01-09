import React from "react";
import config from "../common/constants";

const Tag = ({ tag, ...rest }) => {
  return (
    <span {...rest}>
      <a href={config.URL + "?keyword=" + tag} className="tag-style">
        {tag}
      </a>
      &ensp;
    </span>
  );
};

export default Tag;
