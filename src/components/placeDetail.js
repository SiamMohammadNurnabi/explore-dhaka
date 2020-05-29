import React from "react";
import { Link } from "react-router-dom";

const placeDetail = (props) => {
  console.log(props);
  return (
    <div className="container-fluid ">
      <h1 className="text-center">{props.title}</h1>
      <p className="text-justify">{props.headerText}</p>

      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-2">
            <i className="fab fa-facebook-f" />
          </div>
          <div className="col-2">
            <i className="fab fa-twitter" />
          </div>
          <div className="col-2">
            <i className="fab fa-google-plus-g" />
          </div>
          <div className="col-2">
            <i className="fab fa-reddit" />
          </div>
          <div className="col-2">
            <i className="fab fa-whatsapp" />
          </div>
          <div className="col-2">
            <i className="fab fa-facebook-messenger" />
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <Link
              className="nav-link active"
              to={props.match.url + "#about-place"}
              role="tab"
              data-toggle="tab"
            >
              About Place
            </Link>
          </li>
          <li className="nav-item">
            <button
              className="btn-secondary nav-link"
              href={props.match.url + "/rgiteviews"}
              role="tab"
              data-toggle="tab"
            >
              Reviews
            </button>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href={props.match.url + "#map"}
              role="tab"
              data-toggle="tab"
            >
              Map
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default placeDetail;
