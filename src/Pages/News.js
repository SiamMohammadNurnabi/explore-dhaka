import React, { Component } from "react";
import { db } from "../services/firebase";
import NewsCard from "../components/NewsCard/NewsCard";
// import { Route } from "react-router-dom";
// import PlaceDetails from "./PlaceDetails";

class News extends Component {
  state = {
    news: [],
  };

  componentDidMount() {
    db.collection("news")
      .get()
      .then((snapshot) => {
        const news = [];
        snapshot.docs.forEach((doc) => {
          const data = doc.data();
          news.push(data);
        });
        this.setState({ news: news });
      })
      .catch((error) => console.log(error));
  }
  render() {
    let newsData = (
      <p style={{ textAlign: "center", textTransform: "capitalize" }}>
        Wait for the latest news
      </p>
    );
    if (this.state.news) {
      newsData = this.state.news.map((singleNews) => {
        return (
          <NewsCard
            key={singleNews.id}
            newsTitle={singleNews.newsTitle}
            newsText={singleNews.newsText}
          />
        );
      });
    }
    return <div className="container">{newsData}</div>;
  }
}

export default News;
