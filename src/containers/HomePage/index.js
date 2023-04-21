import React, { useRef, useState } from "react";
import Layout from "../../components/Layout";
import { Swiper, SwiperSlide } from "swiper/react";


// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./style.css";

import { Link } from "react-router-dom";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

import axis from "./images/axis.png";

import img1 from "./images/a1.jpg";
import img2 from "./images/a2.png";
import img3 from "./images/a3.png";
import img4 from "./images/a4.png";
import img5 from "./images/a5.png";

import Footer from "../Footer";

const HomePage = () => {
  return (
    <Layout>
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
            <img src={img2} alt="img2" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img3} alt="img3" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img4} alt="img4" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img5} alt="img5" />
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

    

      <Footer />
    </Layout>
  );
};

export default HomePage;

{
  /* <a rel="noreferrer" href={newsUrl} target="_blank" className='btn btn-sm bd-navbar black'>Read More</a> */
}
