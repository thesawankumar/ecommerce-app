import { Fragment, useEffect } from "react";
import { useSelector } from "react-redux";
import MetaData from "../layout/MetaData";
import Loader from "../../component/layout/Loader/Loader";
import { Link, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import "./Profile.css";

const Profile = () => {
  const navigate = useNavigate();
  const { user, loading, isAuthenticated } = useSelector((state) => state.user);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [navigate, isAuthenticated]);
  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title={`${user.name}'s Profile`} />
          <div className="profileContainer">
            <div className="profileCard">
              <h1>My Profile</h1>
              <img src={user.avatar.url} alt={user.name} />
              <Link to="/me/update">
                <Button color="secondary" variant="contained">
                  Edit Profile
                </Button>
              </Link>
            </div>
            <div className="profileInfo">
              <div>
                <h4>Full Name</h4>
                <p>{user.name}</p>
              </div>
              <div>
                <h4>Email</h4>
                <p>{user.email}</p>
              </div>
              <div>
                <h4>Joined On</h4>
                <p>{String(user.createdAt).substr(0, 10)}</p>
              </div>

              <div className="profileLinks">
                <Link to="/orders">
                  <Button variant="contained" color="primary">
                    My Orders
                  </Button>
                </Link>
                <Link to="/password/update">
                  <Button variant="contained" color="primary">
                    Change Password
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Profile;
