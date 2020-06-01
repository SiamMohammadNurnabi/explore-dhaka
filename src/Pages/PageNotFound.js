import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

class PageNotFound extends Component {
  render() {
    return (
      <StyledPageNotFound className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="error-template">
              <h1>Ooops!!</h1>
              <h1 className="text-capitalize">Error 404 not found</h1>
              <div className="error-details">
                Sorry, an error has occured, Requested page not found!
              </div>
              <div className="error-actions">
                <Link
                  to="/"
                  className="btn btn-outline-primary btn-center mr-2"
                >
                  <i className="fas fa-home" />
                  &nbsp;Back to main
                </Link>
                <Link
                  to="/contact-us"
                  className="btn btn-outline-secondary btn-center"
                >
                  <i className="fas fa-envelope" />
                  &nbsp;Support
                </Link>
              </div>
            </div>
          </div>
        </div>
      </StyledPageNotFound>
    );
  }
}

export default PageNotFound;

const StyledPageNotFound = styled.div`
  .error-template {
    padding: 25px 0px;
    text-align: center;
  }
  .error-details {
    margin: 15px 0px;
  }
`;
