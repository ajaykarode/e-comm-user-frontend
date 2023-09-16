import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
// import Contact from "../Contact";

const Footer = () => {
  return (
    <div
      style={{
        marginLeft: "10px",
        marginRight: "10px",
      }}
    >
      <footer>
        <div className="content">
          <div className="top">
            <div className="logo-details">
              <span className="logo_name">
                <span style={{ color: "#fff200" }}>Agri</span>Comm
              </span>
            </div>
          </div>
          <div className="link-boxes">
            <ul className="box">
              <li className="link_name">ABOUT</li>

              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
              <li>
                <Link to="/">About Us </Link>
              </li>
              <li>
                <Link to="/">B2B Business </Link>
              </li>
              <li>
                <Link to="/">Iffco Wholesale </Link>
              </li>
              <li>
                <Link to="/">Corporate Information</Link>
              </li>
            </ul>
            <ul className="box">
              <li className="link_name">HELP</li>
              <li>
                <Link to="/payment">Payments</Link>
              </li>
              <li>
                <Link to="/login">Shipping</Link>
              </li>
              <li>
                <Link to="/about"> Cancellation & Returns</Link>
              </li>
              <li>
                <Link to="/"> FAQ</Link>
              </li>
              <li>
                <Link to="/"> Report Infringement</Link>
              </li>
            </ul>
            <ul className="box">
              <li className="link_name">CONSUMER POLICY</li>
              <li>
                <Link to="/">Return Policy</Link>
              </li>
              <li>
                <Link to="/login">Terms Of Use</Link>
              </li>
              <li>
                <Link to="/login">Security</Link>
              </li>
              <li>
                <Link to="/login">Privacy</Link>
              </li>
              <li>
                <Link to="/login">Grievance Redressal</Link>
              </li>
              <li>
                <Link to="/login">EPR Compliance</Link>
              </li>
            </ul>
            <ul className="box">
              <li className="link_name">Toll-Free Helpline Number</li>
              <li style={{ color: "#B6B6B6" }}>1800 101 1943(Toll Free)</li>
              <li style={{ color: "#B6B6B6" }}>Monday to Saturday: 9 AM - 6 PM</li>
            </ul>
          </div>
        </div>

        <div className="bottom-details">
          <div className="bottom_text">
            {/* <span className="copyright_text">
              Copyright © 2022 <Link to="/">eNote</Link>All rights reserved
            </span> */}
            {/* <span className="policy_terms">
              <Link to="/">Privacy policy</Link>
              <Link to="/">Terms & condition</Link>
            </span> */}
          </div>
        </div>
      </footer>

      <footer>
        <div className="social-media-links">
          <a href="https://github.com/ajaykarode" target="_blank" rel="noreferrer">
            <i className="fab fab fa-github fa-2x text-white social"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/ajay-karode-63743621a"
            target="_blank" rel="noreferrer"
          >
            <i className="fab fab fa-linkedin fa-2x text-white social"></i>
          </a>
          <a
            href="https://instagram.com/ajay.karode13?igshid=YmMyMTA2M2Y="
            target="_blank" rel="noreferrer"
          >
            <i className="fab fab fa-instagram fa-2x text-white social"></i>
          </a>
          <a href="https://www.facebook.com/ajay.karode.10" target="_blank" rel="noreferrer">
            <i className="fab fab fa-facebook fa-2x text-white social"></i>
          </a>
        </div>
        <span>
          Created By <a  href="/">AJAY KARODE</a> |
          <span className="far fa-copyright"></span> Copyright 2023 eCommerce
          All rights reserved.
        </span>

        <div className="bottom-details">
          <div className="bottom_text">
            <div>
              <span className="policy_terms">
                <Link to="/">Privacy policy</Link>
                <Link to="/">Terms & condition</Link>
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
