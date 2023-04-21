import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductsBySlug } from "../../../actions";
import Card from "../../../components/UI/Card";
import { generatePublicUrl } from "../../../urlConfig";
import { BiRupee } from "react-icons/bi";
import { Link } from "react-router-dom";
import imgwomenjeans from "../images/women-jeans.jpg";
import "./style.css";

const ClothingAndAccessories = (props) => {
  const product = useSelector((state) => state.product);
  const dispatch = useDispatch();

  useEffect(() => {
    const { match } = props;
    dispatch(getProductsBySlug(match.params.slug));
  }, []);

  return (
    <div style={{ padding: "10px" }}>
      <Card
        style={{
          boxSizing: "border-box",
          padding: "10px",
          display: "flex",
        }}
      >
        {product.products.map((product) => (
          <div className="caContainer">
            <Link
              className="caImgContainer"
              to={`/${product.slug}/${product._id}/p`}
            >
              {/* NEW-ADDED */}
              <img
                src={generatePublicUrl(product.productPictures[0].img)}
                alt="image"
              />
              {/* NEW-ADDED */}

              {/* <img src={imgwomenjeans} alt="women jeans img" /> */}
            </Link>
            <div>
              <div className="caProductName">{product.name}</div>
              <div className="caProductPrice">
                <BiRupee />
                {product.price}
              </div>
            </div>
          </div>
        ))}
      </Card>
    </div>
  );
};

export default ClothingAndAccessories;
