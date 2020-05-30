import React, { Component } from "react";

class ContactUs extends Component {
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
                    placeholder="Name"
                  ></input>
                </div>
                <div className="form-group">
                  <input
                    className="form-control"
                    type="email"
                    placeholder="E-mail"
                  ></input>
                </div>
                <div className="form-group">
                  <input
                    className="form-control"
                    type="tel"
                    placeholder="Phone"
                  ></input>
                </div>
                <textarea
                  className="form-control"
                  cols="30"
                  rows="3"
                  placeholder="Message"
                />
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default ContactUs;
