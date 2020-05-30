import React from "react";
import { Link } from "react-router-dom";

const newsCard = (props) => {
  return (
    <div class="card mt-2">
      {/* <h5 class="card-header">Featured</h5> */}
      <div class="card-body">
        <h5 class="card-title">{props.newsTitle}</h5>
        <p class="card-text">{props.newsText}</p>
        <Link to="/" class="card-link">
          Read More > >
        </Link>
      </div>
    </div>
  );
};

export default newsCard;
