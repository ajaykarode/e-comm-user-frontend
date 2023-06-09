import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getOrders } from "../../actions";
import Layout from "../../components/Layout";
import Card from "../../components/UI/Card";
import Footer from "../Footer";
import { generatePublicUrl } from "../../urlConfig";
import { BiRupee } from "react-icons/bi";
import { IoIosArrowForward } from "react-icons/io";
import img1 from "../ProductListPage/images/img-5.jpg";

import "./style.css";
import { Breed } from "../../components/MaterialUI";

const OrderPage = (props) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const orderDetails = useSelector((state) => state.user.orderDetails);

  useEffect(() => {
    dispatch(getOrders());
  }, []);

  return (
    <Layout>
      <div style={{ maxWidth: "1160px", margin: "5px auto" }}>
        <Breed
          breed={[
            { name: "Home", href: "/" },
            { name: "My Account", href: "/account" },
            { name: "My Orders", href: "/account/orders" },
          ]}
          breedIcon={<IoIosArrowForward />}
        />
        {user.orders.map((order) => {
          return order.items.map((item) => (
            <Card style={{ display: "block", margin: "5px 0" }}>
              <Link
                to={`/order_details/${order._id}`}
                className="orderItemContainer"
              >
                <div className="orderImgContainer">
                  <img
                    className="orderImg"
                    // NEW-ADDED
                    src={generatePublicUrl(
                      item.productId.productPictures[0].img
                    )}
                    // NEW-ADDED

                    // src={img1}
                  />
                </div>
                <div className="orderRow">
                  <div className="orderName">{item.productId.name}</div>
                  <div className="orderPrice">
                    <BiRupee />
                    {item.payablePrice}
                  </div>
                  <div>{order.paymentStatus}</div>
                </div>
              </Link>
            </Card>
          ));
        })}
      </div>

      <Footer />
    </Layout>
  );
};

export default OrderPage;
