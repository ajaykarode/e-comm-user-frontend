import React from "react";
import Layout from "../../components/Layout";

import img1 from "../HomePage/images/samsung-s23ultra11.jpg";
import "./style.css";

const Contact = () => {
  return (
<Layout>
    <section className="contact-form">
      <div className="container">
        <div className="form-wrapper">
          <div className="company-address">
            <div className="gap">
              <i className="fas fa-map-marker-alt fa-3x text-red"></i>
              <h2 className="text-grey md-heading">LOCATION</h2>
              <p>#243, Silicon City,Indore,M.P.</p>
            </div>
            <div className="gap">
              <i className="far fa-envelope fa-3x text-red"></i>
              <h2 className="text-grey md-heading">E-MAIL</h2>
              <p>ajay.karode1212@gmail.com</p>
            </div>
            <div className="gap">
              <i className="fas fa-phone-square-alt fa-3x text-red"></i>
              <h2 className="text-grey md-heading">CALL</h2>
              <p>+917948519843</p>
            </div>
            <div className="img">
              <img src={img1} alt="company image" />
            </div>
          </div>

          <form action="" className="form">
            <div className="initial">
              <h1 className="lg-heading ">Contact Us</h1>
              <p className="text-grey element">
                Let Us Know Your Questions, Suggestions and Concerns By Filling
                Out The Form Below.
              </p>

              <div className="element">
                <div className="new">
                  <label for="username">Username</label>
                  <input type="text" id="username" required />
                </div>
                <div className="new">
                  <label for="email">Email</label>
                  <input type="email" id="email" required />
                </div>
                <div className="new">
                  <label for="phone">Contact Number</label>
                  <input
                    type="text"
                    id="phone"
                    placeholder="enter country code also"
                    required
                  />
                </div>
                <div className="new">
                  <label for="message">Message</label>
                  <textarea
                    name=""
                    id="message"
                    placeholder="enter text"
                  ></textarea>
                </div>

                <div className="middle new">
                  <button type="submit" className="mid">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
    </Layout>
  );
};

export default Contact;
