import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductsBySlug } from "../../../actions";
import { Link } from "react-router-dom";
import Card from "../../../components/UI/Card";
import Footer from "../../Footer";
import { MaterialButton } from "../../../components/MaterialUI";
import Rating from "../../../components/UI/Rating";
import Price from "../../../components/UI/Price";
import { generatePublicUrl } from "../../../urlConfig";

// import img1 from "../images/samsung-s23ultra11.jpg";

const ProductStore = (props) => {
  const product = useSelector((state) => state.product);
  const priceRange = product.priceRange;
  const dispatch = useDispatch();

  useEffect(() => {
    const { match } = props;
    dispatch(getProductsBySlug(match.params.slug));
  }, []);

  return (
    <>
      {Object.keys(product.productsByPrice).map((key, index) => {
        return (
          <Card
            headerleft=  <h4 style={{fontSize:"18px", fontWeight: "bolder"}}> {`Under ${priceRange[key]}`} </h4>
            headerright={
              <MaterialButton
                title={"VIEW ALL"}
                style={{ width: "96px" }}
                bgColor="#2874f0"
                fontSize="12px"
              />
            }
            style={{
              width: "calc(100% - 40px)",
              margin: "20px",
            }}
          >
            <div style={{ display: "flex" }}>
              {product.productsByPrice[key].map((product) => (
                <Link
                  to={`/${product.slug}/${product._id}/p`}
                  // target="_blank"
                  style={{
                    display: "block",
                    textDecoration: "none",
                    color: "#000",
                  }}
                  className="productContainer"
                >
                  <div className="productImgContainer">
                    {/* <img src={img1} alt="image" /> */}

                    {/* NEW-ADDED */}
                    <img
                      src={generatePublicUrl(product.productPictures[0].img)}
                      alt="image"
                    />
                    {/* acc. to video img is taken from database. video-19, time-46:50. this line implies for the above line. i.e. generatePublicUrl  */}
                    {/* <img src={product.productPictures[0].img} alt="" /> */}
                    {/* <img src="http://localhost:2000/public/-L6_Uj4MV-img-1.jpg" alt="" /> */}
                    {/* NEW-ADDED */}
                  </div>
                  <div className="productInfo">
                    <div style={{ margin: "10px 0" }}>{product.name}</div>
                    <div>
                      <Rating value="4.3" />
                      &nbsp;&nbsp;
                      <span
                        style={{
                          color: "#777",
                          fontWeight: "500",
                          fontSize: "12px",
                        }}
                      >
                        (3353)
                      </span>
                    </div>
                    <Price value={product.price} />
                  </div>
                </Link>
              ))}
            </div>
          </Card>
        );
      })}

      <Footer />
    </>
  );
};

export default ProductStore;
