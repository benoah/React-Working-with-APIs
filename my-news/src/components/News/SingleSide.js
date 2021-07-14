import React from "react";

const SingleSide = ({ item }) => (
  <div>
    <div className="divider"></div>
    <a href={item.url} target="_blank">
      <div className="section">
        <p>{item.source.name}</p>
        <p>{item.title}</p>
      </div>
    </a>
  </div>
);

export default SingleSide;
