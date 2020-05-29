import React, { Component } from "react";
import Aux from "../../hoc/Auxiliary";
import Home from "../../Pages/Home";
import ContactUs from "../../Pages/ContactUs";
import Locations from "../../Pages/Locations";
import PageNotFound from "../../Pages/PageNotFound";
import { Route, Switch } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import Footer from "../Footer/Footer";
import PlaceDetails from "../../Pages/PlaceDetails";

class Main extends Component {
  componentDidMount() {
    // console.log(this.props);
    // this.props.history.push("/home");
  }
  render() {
    return (
      <Aux>
        <Navigation />
        <Switch>
          <Route path="/contact-us" component={ContactUs} />
          <Route path="/locations" component={Locations} />
          <Route path="/" exact component={Home} />
          <Route path={"/:id"} component={PlaceDetails} />
          {/* <Route component={PageNotFound} /> */}
        </Switch>

        <Footer />
      </Aux>
    );
  }
}

export default Main;
