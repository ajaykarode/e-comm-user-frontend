import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductDetailsById } from "../../actions";
import Layout from "../../components/Layout";
import { IoIosArrowForward, IoIosStar, IoMdCart } from "react-icons/io";
import { BiRupee } from "react-icons/bi";
import { AiFillThunderbolt } from "react-icons/ai";
import { MaterialButton } from "../../components/MaterialUI";
import "./style.css";
import { addToCart } from "../../actions";
import Footer from "../Footer";
import { generatePublicUrl } from "../../urlConfig";

// import img1 from "../images/samsung-s23ultra11.jpg";
import img5 from "../ProductListPage/images/samsung-s23ultra13.jpg";

import img6 from "../ProductListPage/images/img-1.jpg";
import img7 from "../ProductListPage/images/img-2.jpg";
import img8 from "../ProductListPage/images/img-3.jpg";
import img9 from "../ProductListPage/images/img-4.jpg";
import img10 from "../ProductListPage/images/img-5.jpg";
import img11 from "../ProductListPage/images/img-6.jpg";
import img12 from "../ProductListPage/images/img-7.jpg";
import img13 from "../ProductListPage/images/img-8.jpg";

const ProductDetailsPage = (props) => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product);

  useEffect(() => {
    const { productId } = props.match.params;
    console.log(props);

    const payload = {
      params: {
        productId,
      },
    };
    dispatch(getProductDetailsById(payload));
  }, []);

  if (Object.keys(product.productdetails).length === 0) {
    return null;
  }

  return (
    <Layout>
      <div className="productDescriptionContainer">
        <div className="flexRow">
          <div className="verticalImageStack">
            {product.productdetails.productPictures.map((thumb, index) => (
              <div className="thumbnail">
                <img src={generatePublicUrl(thumb.img)} alt={thumb.img} />
              </div>
            ))}
            {/* <img className="marg" src={img6} alt="img6" />
             <img className="marg" src={img8} alt="img8" />
             <img className="marg" src={img11} alt="img11" />
             <img className="marg" src={img12} alt="img12" />
             <img className="marg" src={img13} alt="img13" /> */}
          </div>
          <div className="productDescContainer">
            <div className="productDescImgContainer">
              {/* NEW-ADDED */}
              <img
                src={generatePublicUrl(
                  product.productdetails.productPictures[0].img
                )}
                alt={`${product.productdetails.productPictures[0].img}`}
              />
              {/* NEW-ADDED */}

              {/* <img src={img5} alt="img5" /> */}
            </div>

            {/* action buttons */}
            <div className="flexRow">
              <MaterialButton
                title="ADD TO CART"
                bgColor="#ff9f00"
                textColor="#ffffff"
                style={{
                  marginRight: "5px",
                }}
                icon={<IoMdCart />}
                onClick={() => {
                  const { _id, name, price } = product.productdetails;

                  /* NEW-ADDED */

                  const img = product.productdetails.productPictures[0].img;

                  /* NEW-ADDED */

                  // const img = img5;
                  dispatch(addToCart({ _id, name, price, img }));
                  props.history.push(`/cart`);
                }}
              />
              <MaterialButton
                title="BUY NOW"
                bgColor="#fb641b"
                textColor="#ffffff"
                style={{
                  marginLeft: "5px",
                }}
                icon={<AiFillThunderbolt />}
              />
            </div>
          </div>
        </div>
        <div>
          {/* home > category > subCategory > productName */}
          <div className="breed">
            <ul>
              <li>
                <a href="#">Home</a>
                <IoIosArrowForward />
              </li>
              <li>
                <a href="#">Mobiles</a>
                <IoIosArrowForward />
              </li>
              <li>
                <a href="#">Samsung</a>
                <IoIosArrowForward />
              </li>
              <li>
                <a href="#">{product.productdetails.name}</a>
              </li>
            </ul>
          </div>
          {/* product description */}
          <div className="productDetails">
            <p className="productTitle">{product.productdetails.name}</p>
            <div>
              <span className="ratingCount">
                4.3 <IoIosStar />
              </span>
              <span className="ratingNumbersReviews">
                72,234 Ratings & 8,140 Reviews
              </span>
            </div>
            <div className="extraOffer">
              Extra <BiRupee />
              4500 off{" "}
            </div>
            <div className="flexRow priceContainer">
              <span className="price">
                <BiRupee />
                {product.productdetails.price}
              </span>
              <span className="discount" style={{ margin: "0 10px" }}>
                22% off
              </span>
              {/* <span>i</span> */}
            </div>
            <div>
              <p
                style={{
                  color: "#212121",
                  fontSize: "14px",
                  fontWeight: "600",
                }}
              >
                Available Offers
              </p>

              <p style={{ display: "flex" }}>
                <span
                  style={{
                    width: "100px",
                    fontSize: "12px",
                    color: "#878787",
                    fontWeight: "600",
                    marginRight: "20px",
                  }}
                >
                  Description
                </span>
                <span
                  style={{
                    fontSize: "14px",
                    color: "#212121",
                  }}
                >
                  {product.productdetails.description}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </Layout>
  );
};

export default ProductDetailsPage;