import React, { Component } from "react";
import Location from "../components/Location/Location";
import { db } from "../services/firebase";
// import { Route } from "react-router";
// import PlaceDetail from "./PlaceDetail";
import { Link } from "react-router-dom";
class Locations extends Component {
  state = {
    placeInfos: [],
  };
  componentDidMount() {
    db.collection("placeInfo")
      .get()
      .then((snapshot) => {
        const placeInfos = [];
        snapshot.docs.forEach((doc) => {
          const placeInfo = doc.data();
          placeInfos.push(placeInfo);
        });
        this.setState({ placeInfos: placeInfos });
      })
      .catch((error) => console.log(error));
  }

  // clickedLocationHandler = (id) => {
  //   this.props.history.push({ pathname: "/place-detail/" + id });
  // };

  render() {
    let locations = <p style={{ textAlign: "Center" }}>Loading!!</p>;
    if (this.state.placeInfos) {
      locations = this.state.placeInfos.map((loc) => {
        return (
          <Link to={"/" + loc.id} key={loc.id}>
            <Location
              headerTitle={loc.headerTitle}
              img={loc.img}
              headerSubTitle={loc.headerSubTitle}
              id={loc.id}
              // clicked={() => this.clickedLocationHandler(loc.id)}
            >
              {loc.headerText}
            </Location>
          </Link>
        );
      });
    }

    return (
      <div className="container">
        <div className="row mt-5">{locations}</div>
      </div>
    );
  }
}

export default Locations;
