/* eslint-disable no-unused-vars */
import "./Header.css";
import logo from "../../images/Logo.svg";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then((result) => {})
      .catch((error) => console.log(error.message));
  };

  console.log(user);
  return (
    <nav className="header">
      <img src={logo} alt="" />
      <div>
        <Link to="/">shop</Link>
        <Link to="/orders">order</Link>
        <Link to="/inventory">inventory</Link>
        <Link to="/login">login</Link>
        <Link to="/signup">Sign Up</Link>
        {user && (
          <span>
            Welcome! {user.email}!!{" "}
            <button onClick={handleLogOut}>Log Out</button>
          </span>
        )}
      </div>
    </nav>
  );
};

export default Header;
