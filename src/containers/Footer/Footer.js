import React, { Component } from "react";
import styled from "styled-components";

const FooterStyled = styled.div`
  .footer {
    margin-top: 15px;
    padding-top: 3rem;
  }
  .footer-bottom {
    padding-top: 2rem;
    padding-bottom: 2rem;
  }
`;

class Footer extends Component {
  render() {
    return (
      <FooterStyled className="bg-dark">
        <div className="container color-primary">
          <div className="footer">
            <div className="row">
              <div className="col-md-3">
                <h4 className="text-light">Contact us</h4>
                <ul className="list-unstyled">
                  <li>Lorum ipsum</li>
                  <li>Lorum ipsum</li>
                  <li>Lorum ipsum</li>
                  <li>Lorum ipsum</li>
                </ul>
              </div>
              <div className="col-md-3">
                <h4 className="text-light">Contact us</h4>
                <ul className="list-unstyled">
                  <li>Lorum ipsum</li>
                  <li>Lorum ipsum</li>
                  <li>Lorum ipsum</li>
                  <li>Lorum ipsum</li>
                </ul>
              </div>
              <div className="col-md-3">
                <h4 className="text-light">Contact us</h4>
                <ul className="list-unstyled">
                  <li>Lorum ipsum</li>
                  <li>Lorum ipsum</li>
                  <li>Lorum ipsum</li>
                  <li>Lorum ipsum</li>
                </ul>
              </div>
              <div className="col-md-3">
                <h4 className="text-light">Contact us</h4>
                <ul className="list-unstyled">
                  <li>Lorum ipsum</li>
                  <li>Lorum ipsum</li>
                  <li>Lorum ipsum</li>
                  <li>Lorum ipsum</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p className="text-light text-xs-right">
              &copy;{new Date().getFullYear()} Dhaka Explore Guide-All Right
              Reserved
            </p>
          </div>
        </div>
      </FooterStyled>
    );
  }
}

export default Footer;
