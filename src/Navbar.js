import React, { useEffect, useState } from "react";
import "./Nav.css";

function Navbar() {
  const [show, setscroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setscroll(true);
      } else {
        setscroll(false);
      }
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);
  return (
    <div className={`nav ${show && "navs"}`}>
      <h3 className="head">MARS</h3>
      <ul>
        <li>Home</li>
        <li>Info</li>
        <li>About</li>
        <li>Project</li>
        <li>Launch Schedule</li>
        <li>Contact</li>
      </ul>
    </div>
  );
}

export default Navbar;
