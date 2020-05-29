import React from "react";

const review = (props) => {
  return (
    <div class="media mt-5">
      <img
        class="mr-3"
        src={props.avatar}
        alt={props.name}
        style={{ width: "100px" }}
      />
      <div class="media-body">
        <h5 class="mt-0">{props.name}</h5>
        {props.comment}
      </div>
    </div>
  );
};

export default review;
