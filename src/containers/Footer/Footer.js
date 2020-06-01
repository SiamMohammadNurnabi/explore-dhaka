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
  a {
    color: var(--gray);
  }
  a:hover {
    color: var(--secondary);
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
                <h4 className="text-white">Contact us</h4>
                <ul className="list-unstyled text-light">
                  <li>Shimla Bazar</li>
                  <li>Sarishabari</li>
                  <li>Jamalpur</li>
                  <li>Phone:01624592908</li>
                </ul>
              </div>
              <div className="col-md-3">
                <h4 className="text-light">Contact us</h4>
                <ul className="list-unstyled">
                  <li>
                    <a href="#">Lorum ipsum</a>
                  </li>
                  <li>
                    <a href="#">Lorum ipsum</a>
                  </li>
                  <li>
                    <a href="#">Lorum ipsum</a>
                  </li>
                  <li>
                    <a href="#">Lorum ipsum</a>
                  </li>
                </ul>
              </div>
              <div className="col-md-3">
                <h4 className="text-light">Contact us</h4>
                <ul className="list-unstyled">
                  <li>
                    <a href="#">Lorum ipsum</a>
                  </li>
                  <li>
                    <a href="#">Lorum ipsum</a>
                  </li>
                  <li>
                    <a href="#">Lorum ipsum</a>
                  </li>
                  <li>
                    <a href="#">Lorum ipsum</a>
                  </li>
                </ul>
              </div>
              <div className="col-md-3">
                <h4 className="text-light">Contact us</h4>
                <ul className="list-unstyled">
                  <li>
                    <a href="#">Lorum ipsum</a>
                  </li>
                  <li>
                    <a href="#">Lorum ipsum</a>
                  </li>
                  <li>
                    <a href="#">Lorum ipsum</a>
                  </li>
                  <li>
                    <a href="#">Lorum ipsum</a>
                  </li>
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
