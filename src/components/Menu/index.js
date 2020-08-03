import React from "react";
import "./styles.css";
import logo from "../../assets/Logo.jpeg";
import { Link } from "react-router-dom";
const Menu = () => {
  return (
    <>
      <Link to="/">
        <img className="Logo" src={logo} alt="Logo Realoque" title="Home" />
      </Link>
    </>
  );
};
export default Menu;
