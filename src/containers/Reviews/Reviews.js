import React, { Component } from "react";
import Review from "../../components/Review/Review";
import { db } from "../../services/firebase";

class Reviews extends Component {
  state = {
    reviewsInfos: [],
  };
  componentDidMount() {
    db.collection("reviews")
      .get()
      .then((snapshot) => {
        const reviewsInfos = [];
        snapshot.docs.forEach((doc) => {
          const review = doc.data();
          reviewsInfos.push(review);
        });
        this.setState({ reviewsInfos: reviewsInfos });
      });
  }
  render() {
    let reviews = (
      <p style={{ textAlign: "center" }}>Feel free to review this place</p>
    );
    if (this.state.reviewsInfos) {
      reviews = this.state.reviewsInfos.map((reviewInfo) => {
        return (
          <Review
            key={reviewInfo.id}
            name={reviewInfo.name}
            avatar={reviewInfo.avatar}
            comment={reviewInfo.comment}
          />
        );
      });
    }
    return reviews;
  }
}

export default Reviews;
