import { useNavigate } from "react-router-dom";
import Dropdown from "./Dropdown";
import "./Navbar.css";

import { useState } from "react";

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);

  const showDropdown = () => {
    setDropdown(true);
  };

  const hideDropdown = () => {
    setDropdown(false);
  };

  const navigate = useNavigate();

  return (
    <>
      <div className="navbar">
        <div
          onClick={() => {
            navigate("");
          }}
        >
          <div className="navbar-home" style={{ padding: "20px" }}>
            Home
          </div>
        </div>

        <div className="logged-in-options">
          <div
            onClick={() => {
              navigate("books-in-library");
            }}
          >
            <div>Library</div>
          </div>

          <div
            onPointerEnter={showDropdown}
            onPointerLeave={hideDropdown}
            style={{
              position: "relative",
              padding: "0px",
            }}
          >
            <div style={{ padding: "20px" }}>Options</div>
            <div className={`dropdownshow ${dropdown ? "show" : ""}`}>
              <Dropdown />
            </div>
          </div>
          <div
            onClick={() => {
              navigate("profile");
            }}
          >
            <div>Profile</div>
          </div>
          <div
            onClick={() => {
              navigate("/");
            }}
          >
            <div>Log Out</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
