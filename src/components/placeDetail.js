import React from "react";

const placeDetail = (props) => {
  console.log(props);
  return (
    <div className="container-fluid ">
      <h1 className="text-center">{props.loadedPost.title}</h1>
      <p className="text-justify">{props.loadedPost.headerText}</p>

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

      {/* tabs */}

      <div className="container mt-5">
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <a
              className="nav-link active"
              href="#aboutPlace"
              role="tab"
              data-toggle="tab"
            >
              About Place
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="#reviews"
              role="tab"
              data-toggle="tab"
            >
              Reviews
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#map" role="tab" data-toggle="tab">
              Map
            </a>
          </li>
        </ul>
      </div>

      {/* tab content */}
      <div className="container">
        <div className="tab-content mb-5">
          {/* About place */}
          <div
            className="tab-pane fade show active"
            id="aboutPlace"
            role="tabpanel"
          >
            <h1>{props.loadedPost.headerTitle}</h1>
            <img
              src={props.loadedPost.img}
              alt={props.loadedPost.headerTitle}
              className="img-thumbnail img-fluid rounded float-left mr-2"
              // style={{ width: "100%", height: "auto" }}
            />
            <p>{props.loadedPost.description}</p>
          </div>
          {/* reviews */}
          <div className="tab-pane fade" id="reviews" role="tabpanel">
            <h1>Reviews</h1>
          </div>
          {/* map */}
          <div className="tab-pane fade" id="map" role="tabpanel">
            <iframe
              src={props.loadedPost.maps}
              style={{
                border: "0",
                height: "30rem",
                width: "100%",
                frameborder: "0",
              }}
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default placeDetail;
