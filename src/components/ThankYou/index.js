// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { getOrder } from "../../actions";
// import Layout from "../../components/Layout";
// import Card from "../../components/UI/Card";
// import Price from "../../components/UI/Price";
// import img1 from "../ProductListPage/images/img-1.jpg";
// import "./style.css";
// import { generatePublicUrl } from "../../urlConfig";
// import Footer from "../Footer";



const ThankYou = (props) => {

  // const dispatch = useDispatch();
  // const orderDetails = useSelector((state) => state.user.orderDetails);

  // useEffect(() => {
  //   console.log({ props });
  //   const payload = {
  //     orderId: props.match.params.orderId,
  //   };
  //   dispatch(getOrder(payload));
  // }, []);

  // if (!(orderDetails && orderDetails.address)) {
  //   return null;
  // }

  return (
    <>
      <div>
        <div>
          <h1>Order Placed, Thank You</h1>
          <p>Confirmation will be sent to your mail</p>
          <p>
            <span>shipping to ajay karode</span>,address.{" "}
          </p>

          {/* <Card
          style={{
            margin: "10px 0",
          }}
        >
          <div className="delAdrContainer">
            <div className="delAdrDetails">
              <div className="delTitle">Delivery Address</div>
              <div className="delName">{orderDetails.address.name}</div>
              <div className="delAddress">{orderDetails.address.address}</div>
              <div className="delPhoneNumber">
                Phone number {orderDetails.address.mobileNumber}
              </div>
            </div>
            <div className="delMoreActionContainer">
              <div className="delTitle">More Actions</div>
              <div className="delName">Download Invoice</div>
            </div>
          </div>
        </Card> */}


        </div>
      </div>
    </>
  );
};

export default ThankYou;
