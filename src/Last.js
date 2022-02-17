import React from "react";
import "./Last.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import Botmars from "./mars-18108.png";
import AOS from "aos";
import "aos/dist/aos.css";

function Last() {
  return (
    <div className="last">
      <h3 data-aos="fade-up" className="head5">
        MARS
      </h3>
      <ul data-aos="fade-up" className="footerul">
        <li className="footerli">Home</li>
        <li className="footerli">Info</li>
        <li className="footerli">About</li>
        <li className="footerli">Project</li>
        <li className="footerli">Launch Schedule</li>
        <li className="footerli">Contact</li>
      </ul>
      <div className="iconitem">
        <div data-aos="fade-up" className="iconl">
          <InstagramIcon fontSize="large" />
        </div>
        <div data-aos="fade-up" className="iconl">
          <FacebookOutlinedIcon fontSize="large" />
        </div>
        <div data-aos="fade-up" className="iconl">
          <TwitterIcon fontSize="large" />
        </div>
        <div data-aos="fade-up" className="iconl">
          <EmailOutlinedIcon fontSize="large" />
        </div>
      </div>
      <div data-aos="fade-up">
        <h4 className="copy">
          © Copyright Web developer Aswinth Feb 16 in 2022
        </h4>
      </div>

      <div className="lastbot">
        <img data-aos="fade-up" className="photopng" src={Botmars} />
      </div>
    </div>
  );
}

export default Last;
