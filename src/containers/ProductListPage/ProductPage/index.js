import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductPage } from "../../../actions";
import getParams from "../../../utils/getParams";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Card from "../../../components/UI/Card";
import { generatePublicUrl } from "../../../urlConfig";

// import img1 from "../images/samsung-s23ultra11.jpg";
import img2 from "../images/samsung-s23ultra11.jpg";
import img3 from "../images/samsung-s23ultra12.jpg";

const ProductPage = (props) => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product);
  const { page } = product;

  useEffect(() => {
    const params = getParams(props.location.search);
    const payload = {
      params,
    };
    dispatch(getProductPage(payload));
  }, []);

  return (
    <div style={{ margin: "0 10px" }}>
      <h3>{page.title}</h3>
      <Carousel renderThumbs={() => {}}>
        {page.banners &&
          page.banners.map((banner, index) => (
            <a
              key={index}
              style={{ display: "block" }}
              href={banner.navigateTo}
            >
              {/* NEW-ADDED */}
              <img src={banner.img} alt="" />
              {/* NEW-ADDED */}

              {/* <img className="edt" src={img2} alt="" /> */}
            </a>
          ))}
      </Carousel>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          margin: "10px 0",
        }}
      >
        {page.products &&
          page.products.map((product, index) => (
            <Card
              key={index}
              style={{
                width: "400px",
                height: "200px",
                margin: "5px",
              }}
            >
              <img
                style={{ width: "100%", height: "100%" }}
                // src={img2}

                // NEW-ADDED
                src={product.img}
                // NEW-ADDED

                alt=""
              />
            </Card>
          ))}
      </div>
    </div>

  );
};

export default ProductPage;
