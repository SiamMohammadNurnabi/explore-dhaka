import React, { Component } from "react";
import { Link } from "react-router-dom";
import { db } from "../services/firebase";

class ContactUs extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
    message: "",
  };

  contactUsHandler = () => {
    const data = {
      name: this.state.name,
      email: this.state.email,
      phone: this.state.phone,
      message: this.state.message,
    };
    db.collection("contact-us")
      .add(data)
      .then((response) => {
        console.log(response);
      });
  };
  render() {
    return (
      <section className="my-5 py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <h4>
                <strong>Our Location</strong>
              </h4>
              <iframe
                src="https://www.google.com/maps/d/u/1/embed?mid=1h_r3bHpWw-nTr-jhPV1HXoo4gwvE75e5"
                style={{
                  border: "0",
                  width: "100%",
                  height: "350px",
                  frameborder: "0",
                }}
                allowFullScreen
              ></iframe>
            </div>
            <div className="col-md-5">
              <h4>
                <strong>Contact Us</strong>
              </h4>
              <form>
                <div className="form-group">
                  <input
                    className="form-control"
                    type="text"
                    value={this.state.name}
                    placeholder="Name"
                    onChange={(event) =>
                      this.setState({ name: event.target.value })
                    }
                  ></input>
                </div>
                <div className="form-group">
                  <input
                    className="form-control"
                    type="email"
                    placeholder="E-mail"
                    value={this.state.email}
                    onChange={(event) =>
                      this.setState({ email: event.target.value })
                    }
                  ></input>
                </div>
                <div className="form-group">
                  <input
                    className="form-control"
                    type="tel"
                    placeholder="Phone"
                    value={this.state.phone}
                    onChange={(event) =>
                      this.setState({ phone: event.target.value })
                    }
                  ></input>
                </div>
                <textarea
                  className="form-control"
                  cols="30"
                  rows="3"
                  value={this.state.message}
                  placeholder="Message"
                  onChange={(event) =>
                    this.setState({ message: event.target.value })
                  }
                />
                <Link
                  to="/"
                  onClick={this.contactUsHandler}
                  className="btn btn-outline-primary text-uppercase mt-2"
                >
                  <i className="fab fa-telegram-plane" />
                  &nbsp;Send
                </Link>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default ContactUs;
