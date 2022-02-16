import React from "react";
import "./Photo.css";
import M1 from "./mars1 photo.jpg";
import M2 from "./mars2 photo.jpg";
import M3 from "./mars3 photo.jpg";

function Photo() {
  return (
    <div className="photo">
      <div className="photonote">
        <button data-aos="fade-up" className="btn2 photob">
          Galery
        </button>
        <h2 data-aos="fade-right" className="photoli">
          Mars Photo
        </h2>

        <div className="image1">
          <div className="mars1">
            <h4 className="question">0.1</h4>
            <img data-aos="fade-left" className="marspl" src={M1} />
          </div>

          <div>
            <h4 className="question">0.2</h4>

            <img data-aos="fade-left" className="marspl" src={M2} />
          </div>
          <div>
            <h4 className="question">0.3</h4>

            <img data-aos="fade-left" className="marspl" src={M3} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Photo;
