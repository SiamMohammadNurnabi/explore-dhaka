import React from "react";

const review = (props) => {
  return (
    <div className="media mt-5">
      <img
        className="mr-3"
        src={props.avatar}
        alt={props.name}
        style={{ width: "100px" }}
      />
      <div className="media-body">
        <h5 className="mt-0">{props.name}</h5>
        {props.comment}
      </div>
    </div>
  );
};

export default review;
