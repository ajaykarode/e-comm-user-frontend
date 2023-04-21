import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Switch } from "react-router-dom";
import HomePage from "./containers/HomePage";
import ProductListPage from "./containers/ProductListPage";
import { useDispatch, useSelector } from "react-redux";
import { isUserLoggedIn, updateCart } from "./actions";
import ProductDetailsPage from "./containers/ProductDetailsPage";
import CartPage from "./containers/CartPage";
import CheckoutPage from "./containers/CheckoutPage";
import OrderPage from "./containers/OrderPage";
import OrderDetailsPage from "./containers/OrderDetailsPage";
import Contact from "./containers/Contact";
import Payment from "./containers/Payment";



function App() {

  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);

  useEffect(() => {
    if(!auth.authenticate){
      dispatch(isUserLoggedIn());
    }
  }, [auth.authenticate]);
  

useEffect(() => {
  console.log('App.js - updateCart')
  dispatch(updateCart())
}, [auth.authenticate]);


  return (
    <div className="App">
      <Router>
        <Switch>
          {/* <Route path="/" exact element={<HomePage />} /> */}
          
          <Route exact path="/"  component={HomePage} />
          <Route exact path="/cart" component={CartPage} />
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route exact path="/payment" component={Payment} />
          <Route  path="/contact"  component={Contact} />
          <Route path="/account/orders" component={OrderPage} />
          <Route path="/order_details/:orderId" component={OrderDetailsPage} />
          <Route  path="/:productSlug/:productId/p"  component={ProductDetailsPage} />
          <Route  path="/:slug"  component={ProductListPage} />


        </Switch>
      </Router>
    </div>
  );
}

export default App;
