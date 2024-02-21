/* eslint-disable react/prop-types */

import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Loader from "../layout/Loader/Loader";

const ProtectedRoute = ({ isAdmin, children }) => {
  const navigate = useNavigate();
  const { loading, isAuthenticated, user } = useSelector((state) => state.user);

  if (loading === true) {
    return <Loader />;
  } else {
    if (isAuthenticated) {
      return children;
    } else if (isAdmin === true && user && user.role !== "admin") {
      navigate("/login");
      return null;
    } else {
      navigate("/login");
      return null;
    }
  }
};

export default ProtectedRoute;
