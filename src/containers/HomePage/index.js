// import React, { useRef, useState } from "react";
import React from "react";
import Layout from "../../components/Layout";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./style.css";

// import { Link } from "react-router-dom";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

import axis from "./images/axis.png";

import img1 from "./images/a1.jpg";
import img2 from "./images/a2.png";
import img3 from "./images/a3.png";
import img4 from "./images/a4.png";
import img5 from "./images/a5.png";
import img6 from "./images/npk.jpg";
import img7 from "./images/seed.png";
import img8 from "./images/insecticide.webp";
import offer from "./images/offer.png";
import brand from "./images/brand.png";

import Footer from "../Footer";

const HomePage = () => {
  return (
    <Layout >
      <div
        style={{
          marginLeft: "10px",
          marginRight: "10px",
          marginBottom: "10px",
        
        }}
      >
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >


          <SwiperSlide>
            <img src={img1} alt="img1" />
          </SwiperSlide>
          <SwiperSlide>
          {/* <a href="http://localhost:3000/Nano-Fertilisers-nyprX2vgj?cid=6439088c1c393e4bec9b711f&type=undefined"><img src={img2} alt="img2" /></a> */}
          <a href="https://agricomm-backend.onrender.com/Nano-Fertilisers-nyprX2vgj?cid=6439088c1c393e4bec9b711f&type=undefined"><img src={img2} alt="img2" /></a>

            {/* <img src={img2} alt="img2" /> */}
          </SwiperSlide>
          <SwiperSlide>
            <img src={img3} alt="img3" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img4} alt="img4" />
          </SwiperSlide>
          <SwiperSlide>
          {/* <a href="http://localhost:3000/Supplements-Gxtm7lJ66?cid=64390df71c393e4bec9b714f&type=undefined"><img src={img5} alt="img5" /></a> */}
          <a href="https://agricomm-backend.onrender.com/Supplements-Gxtm7lJ66?cid=64390df71c393e4bec9b714f&type=undefined"><img src={img5} alt="img5" /></a>
            {/* <img src={img5} alt="img5" /> */}
          </SwiperSlide>
        </Swiper>
      </div>

      {/* axis bank offer image  */}
      <div
        style={{
          marginLeft: "10px",
          marginRight: "10px",
          marginBottom: "10px",
        }}
      >
        <img
          style={{
            width: "80%",
            margin: "20px 124px",
          }}
          src={axis}
          alt="axis"
        />
      </div>

      {/* axis bank offer image end  */}

      <div
        style={{
          marginLeft: "10px",
          marginRight: "10px",
          marginBottom: "10px",
        }}
      >
        <img
          style={{
            width: "80%",
            margin: "20px 124px",
          }}
          src={offer}
          alt="axis"
        />
      </div>

      <div
        style={{
          marginLeft: "10px",
          marginRight: "10px",
        }}
      >
        <section id="food">
          <h2>BEST SELLER</h2>
          <div className="food-container container">
            <div className="food-type fruit">
              <div className="img-container">
                <img src={img6} alt="" />
                <div className="img-content">
                  <h3>NPK BASED</h3>
                  <a
                    // href="http://localhost:3000/Insecticides-OE5F2GnbB?cid=643908f31c393e4bec9b7123&type=store"
                    href="https://agricomm-backend.onrender.com/Insecticides-OE5F2GnbB?cid=643908f31c393e4bec9b7123&type=store"
                    className="btn btn-primary"
                  >
                    Visit
                  </a>
                </div>
              </div>
            </div>

            <div className="food-type vegetable">
              <div className="img-container">
                <img src={img7} alt="" />
                <div className="img-content">
                  <h3>SEEDS</h3>
                  <a
                    // href="http://localhost:3000/Field-Crops-3mme9xKnQ?cid=643907f01c393e4bec9b711a&type=undefined"
                    href="https://agricomm-backend.onrender.com/Field-Crops-3mme9xKnQ?cid=643907f01c393e4bec9b711a&type=undefined"
                    className="btn btn-primary"
                  >
                    Visit
                  </a>
                </div>
              </div>
            </div>

            <div className="food-type grain">
              <div className="img-container">
                <img src={img8} alt="" />
                <div className="img-content">
                  <h3>INSECTICIDES</h3>
                  <a
                    // href="http://localhost:3000/Insecticides-OE5F2GnbB?cid=643908f31c393e4bec9b7123&type=store"
                    href="https://agricomm-backend.onrender.com/Insecticides-OE5F2GnbB?cid=643908f31c393e4bec9b7123&type=store"
                    className="btn btn-primary"
                  >
                    Visit
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* <div
        className="dis-row"
        style={{
          marginLeft: "10px",
          marginRight: "10px",
          marginBottom: "1px",
        }}
      >
        <div
          style={{
            marginLeft: "10px",
            marginRight: "10px",
            marginBottom: "10px",
          }}
        >
          <img
            style={{
              width: "80%",
              margin: "20px 124px",
            }}
            src={brand}
            alt="axis"
          />
        </div>

        <div className="center-item">
          <a
            href="http://localhost:3000/Insecticides-OE5F2GnbB?cid=643908f31c393e4bec9b7123&type=store"
            className="btn btn-primary"
          >
            Visit
          </a>
        </div>
      </div> */}














      <div className="flex-container">
        <div className="flex-items"><img
            style={{
              width: "80%",
              margin: "20px 124px",
            }}
            src={brand}
            alt="axis"
          />
          </div>


        <div className="flex-items">
        <a
            // href="http://localhost:3000/Insecticides-OE5F2GnbB?cid=643908f31c393e4bec9b7123&type=store"
            href="https://agricomm-backend.onrender.com/Insecticides-OE5F2GnbB?cid=643908f31c393e4bec9b7123&type=store"
            className="btni btni-primary"
          >
            Visit
          </a>


        </div>
      </div>




















      <Footer />
    </Layout>
  );
};

export default HomePage;

