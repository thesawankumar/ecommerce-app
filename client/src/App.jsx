/* eslint-disable no-unused-vars */

import "./App.css";
import axios from "axios";
import { store } from "./store";
import { loadUser } from "./actions/user";
import { useEffect, useState } from "react";
import Header from "./component/layout/Header/Header";
import Footer from "./component/layout/Footer/Footer";
import ProtectedRoute from "./component/Route/ProtectedRoute";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./component/Home/Home";
import ProductDetails from "./component/Product/ProductDetails";
import Products from "./component/Product/Products";
import Search from "./component/Product/Search";
import LoginSignUp from "./component/User/LoginSignUp";
import Profile from "./component/User/Profile";
import UpdateProfile from "./component/User/UpdateProfile";
import UpdatePassword from "./component/User/UpdatePassword";
import ForgotPassword from "./component/User/ForgotPassword";
import ResetPassword from "./component/User/ResetPassword";
import Cart from "./component/Cart/Cart";
import Shipping from "./component/Cart/Shipping";
import ConfirmOrder from "./component/Cart/ConfirmOrder";
import Payment from "./component/Cart/Payment";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import OrderSuccess from "./component/Cart/OrderSuccess";
import MyOrders from "./component/Order/MyOrders";
import OrderDetails from "./component/Order/OrderDetails";
import Dashboard from "./component/Admin/Dashboard";
import ProductList from "./component/Admin/ProductList";
import NewProduct from "./component/Admin/NewProduct";
import UpdateProduct from "./component/Admin/UpdateProduct";
import OrderList from "./component/Admin/OrderList";
import ProcessOrder from "./component/Admin/ProcessOrder";
import UserList from "./component/Admin/UserList";
import UpdateUser from "./component/Admin/UpdateUser";
import ProductReview from "./component/Admin/ProductReview";
import About from "./component/layout/About/About";
import Contact from "./component/layout/Contact/Contact";
import NotFound from "./component/layout/NotFound/NotFound";
function App() {
  const [stripeApiKey, setStripeApiKey] = useState("");

  async function getStripeApiKey() {
    const { data } = await axios.get(`/api/v1/stripeapikey`);

    setStripeApiKey(data.stripeApiKey);
  }

  useEffect(() => {
    store.dispatch(loadUser());
    getStripeApiKey();
  }, []);
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          element={
            window.location.pathname === "/process/payment" ? null : (
              <NotFound />
            )
          }
        />
        <Route exact path="/product/:id" element={<ProductDetails />} />
        <Route exact path="/products" element={<Products />} />
        <Route path="/products/:keyword" element={<Products />} />
        <Route exact path="/search" element={<Search />} />
        <Route exact path="/login" element={<LoginSignUp />} />
        <Route
          exact
          path="/account"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route
          exact
          path="/me/update"
          element={
            <ProtectedRoute>
              <UpdateProfile />
            </ProtectedRoute>
          }
        />
        <Route
          exact
          path="/password/update"
          element={
            <ProtectedRoute>
              <UpdatePassword />
            </ProtectedRoute>
          }
        />
        <Route exact path="/password/forgot" element={<ForgotPassword />} />
        <Route
          exact
          path="/password/reset/:token"
          element={<ResetPassword />}
        />
        <Route exact path="/cart" element={<Cart />} />
        <Route
          exact
          path="/shipping"
          element={
            <ProtectedRoute>
              <Shipping />
            </ProtectedRoute>
          }
        />
        <Route
          exact
          path="/order/confirm"
          element={
            <ProtectedRoute>
              <ConfirmOrder />
            </ProtectedRoute>
          }
        />
        <Route
          exact
          path="/process/payment"
          element={
            stripeApiKey && (
              <Elements stripe={loadStripe(stripeApiKey)}>
                <ProtectedRoute>
                  <Payment />
                </ProtectedRoute>
              </Elements>
            )
          }
        />
        <Route
          exact
          path="/success"
          element={
            <ProtectedRoute>
              <OrderSuccess />
            </ProtectedRoute>
          }
        />
        <Route
          exact
          path="/orders"
          element={
            <ProtectedRoute>
              <MyOrders />
            </ProtectedRoute>
          }
        />
        <Route
          path="/order/:id"
          element={
            <ProtectedRoute>
              <OrderDetails />
            </ProtectedRoute>
          }
        />
        <Route
          isAdmin={true}
          path="/admin/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          isAdmin={true}
          path="/admin/products"
          element={
            <ProtectedRoute>
              <ProductList />
            </ProtectedRoute>
          }
        />
        <Route
          isAdmin={true}
          path="/admin/product"
          element={
            <ProtectedRoute>
              <NewProduct />
            </ProtectedRoute>
          }
        />
        <Route
          isAdmin={true}
          path="/admin/product/:id"
          element={
            <ProtectedRoute>
              <UpdateProduct />
            </ProtectedRoute>
          }
        />
        <Route
          isAdmin={true}
          path="/admin/orders"
          element={
            <ProtectedRoute>
              <OrderList />
            </ProtectedRoute>
          }
        />
        <Route
          isAdmin={true}
          path="/admin/order/:id"
          element={
            <ProtectedRoute>
              <ProcessOrder />
            </ProtectedRoute>
          }
        />
        <Route
          isAdmin={true}
          path="/admin/users"
          element={
            <ProtectedRoute>
              <UserList />
            </ProtectedRoute>
          }
        />
        <Route
          isAdmin={true}
          path="/admin/user/:id"
          element={
            <ProtectedRoute>
              <UpdateUser />
            </ProtectedRoute>
          }
        />
        <Route
          isAdmin={true}
          path="/admin/reviews"
          element={
            <ProtectedRoute>
              <ProductReview />
            </ProtectedRoute>
          }
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
