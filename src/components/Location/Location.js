import React from "react";
import { Link } from "react-router-dom";

const location = (props) => {
  return (
    <div className="col-10 col-lg-4 mx-auto mb-5" onClick={props.clicked}>
      <div
        className="card"
        style={{
          width: "18rem",
          color: "var(--dark)",
        }}
      >
        <img src={props.img} className="card-img-top" alt={props.headerTitle} />
        <div className="card-body">
          <h3 className="card-title text-uppercase">{props.headerTitle}</h3>
          <h5 className="card-title">{props.headerSubTitle}</h5>
          <p className="card-text">{props.children}</p>
          <Link to={"/places/" + props.id} className="btn btn-outline-primary">
            More..
          </Link>
        </div>
      </div>
    </div>
  );
};

export default location;
