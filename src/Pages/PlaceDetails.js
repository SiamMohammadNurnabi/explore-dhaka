import React, { Component } from "react";
import PlaceDetail from "../components/placeDetail";
import { db } from "../services/firebase";
class PlaceDetails extends Component {
  state = {
    loadedPost: null,
  };
  componentDidMount = () => {
    if (this.props.match.params.id) {
      if (
        !this.state.loadedPost ||
        (this.state.loadedPost &&
          this.state.loadedPost.id !== +this.props.match.params.id)
      )
        db.collection("placeInfo")
          .get()
          .then((snapshot) => {
            snapshot.docs.forEach((info) => {
              const data = info.data();
              if (+this.props.match.params.id === data.id) {
                this.setState({ loadedPost: data });
              }
            });
          });
    }
  };

  render() {
    let placeDetail = <p>Loading</p>;
    if (this.state.loadedPost) {
      placeDetail = (
        <PlaceDetail {...this.props} loadedPost={this.state.loadedPost} />
      );
    }
    return <div className="container-fluid">{placeDetail}</div>;
  }
}

export default PlaceDetails;
