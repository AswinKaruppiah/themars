import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import "./Page1.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Button from "@mui/material/Button";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { Zoom } from "@mui/material";
import { Canvas } from "react-three-fiber";
import Mars from "./Scene.js";
import { Suspense } from "react";

import { OrbitControls } from "@react-three/drei/OrbitControls";

function Page() {
  window.addEventListener("scroll", function () {
    if (window.scrollY < 700) {
      var project2 = setInterval(projectdone2);
      let count2 = 62069170;
      function projectdone2() {
        count2 = count2 + 10;
        document.querySelector("#number2").innerHTML = count2;
        if (count2 == 62069570) {
          clearInterval(project2);
        }
      }
    }
    return () => {
      window.removeEventListener("scroll");
    };
  });

  const [show2, setscroll2] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 1250) {
        setscroll2(true);
      } else {
        setscroll2(false);
      }
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  });
  return (
    <>
      <div className="page1">
        <div className="note1">
          <h1 className="star">Humans Live on mars, is it possible?</h1>
          <div className="pagenote">
            <p>
              Humans Live on the planet Mars,is it possible? To see the
              possibility of humans living on the planet Mars,it is important to
              knows the facts of the planet Mars first.
            </p>
          </div>

          <Button variant="none">
            <div className="btnc">
              <ArrowForwardIcon
                data-aos="zoom-in"
                fontSize="large"
                className="play"
              />
            </div>
            <div className="btnn">EXPLORE MARS</div>
          </Button>
          <Button variant="none">
            <div className="btnc">
              <PlayArrowIcon
                data-aos="zoom-in"
                fontSize="medium"
                className="play2"
              />
            </div>
            <div className="btnn">WATCH VIDEO</div>
          </Button>
        </div>
        <div className="note2">
          <div className="subnote">
            <div>
              <button data-aos="fade-up" className="btn2">
                Info
              </button>
            </div>

            <h3 className="page2title">Learn mars</h3>
            <p data-aos="fade-up" className="pagenote1">
              Mars is the fourth planet from the Sun-a dusty,cold,desert world a
              very thin atmosphere.Mars is also a dynamic planet with seasons,
            </p>
            <div className="pagenote2">
              <p data-aos="fade-up" className="page2title2">
                Moon<span data-aos="fade-up"> distance from earth</span>
              </p>
              <p data-aos="fade-up" className="page2title3">
                <span id="number1" className="counter">
                  2
                </span>
                <span
                  className="counter1"
                  data-aos="fade-up"
                  id="number2"
                  // datatype="62.o69.570"
                >
                  62.069.570
                </span>
                <span data-aos="fade-up" className="span3">
                  km
                </span>
              </p>
            </div>
            <div className="page2itemc">
              <li data-aos="fade-up" className="page2item1">
                Size and Distance
              </li>
              <li data-aos="fade-up" className="page2item1">
                Orbit and Rotation
              </li>
              <li data-aos="fade-up" className="page2item1">
                Potential for life
              </li>
              <li data-aos="fade-up" className="page2item2">
                With a radius of 2,106 mile
              </li>
              <li data-aos="fade-up" className="page2item2">
                As Mars orbbits the sun,
              </li>
              <li data-aos="fade-up" className="page2item2">
                scientists don't expect
              </li>
              <li data-aos="fade-up" className="page2item2">
                <a>Read more</a>
              </li>
              <li data-aos="fade-up" className="page2item2">
                <a>Read more</a>
              </li>
              <li data-aos="fade-up" className="page2item2">
                <a>Read more</a>
              </li>
            </div>
          </div>
        </div>
        <div className="note3">
          <div className="note3sub">
            <button data-aos="fade-up" className="btn2">
              Project
            </button>

            <h2 data-aos="fade-up" className="note3t">
              mars exploration Program
            </h2>
            <div data-aos="fade-left" className="arrowd">
              {/* className={`arrow ${show2 && "arrowani"}`} */}
              <svg
                className={`arrow ${show2 && "arrowani"}`}
                width="463"
                height="495"
                viewBox="0 0 463 75"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M330.302 72.9926C330.328 72.995 330.324 72.9975 330.288 73L330.302 72.9926Z"
                  fill="white"
                />
                <path
                  d="M2 73C2 73 333.986 72.7404 330.288 73L461 2"
                  stroke="white"
                  stroke-width="3"
                  stroke-linecap="round"
                />
              </svg>
            </div>
            <p data-aos="fade-up" className="note3p">
              The goal of the Mars Exploration Program is to explore mars and to
              provide a continous flow of scientific information and discovery
              through a carefully selected series of robotic orbiters,landers
              and mobile laboratories interconnect by a high-bandwidth
              Mars/Earth communiation network.
            </p>

            <h4 data-aos="fade-up">China started the exploration of mars</h4>

            <p data-aos="fade-up" className="note3p2">
              The remotely controlled chinese cruiser Zhurong drove the copsule
              line
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Page;
//<div className={`nav ${show && "nav_black"}`}>
// const counters = document.querySelector(".counter");
// counters.forEach((counter) => {
//   counter.innerText = "0";

//   const updateCounter = () => {
//     const target = counter.getAttribute(" datatype");
//     console.log(target);
//     // const c = +counter.innerText;
//     // const increment = target / 100;
//     // if (c < target) {
//     //   counter.innerText = `${Math.ceil(c + increment)}`;
//     //   setTimeout(updateCounter, 1);
//     // }
//   };
//   updateCounter();
// });
// </script>

// const [show, setscroll] = useState(false);
// const [show1, setscroll1] = useState(false);
// useEffect(() => {
//   window.addEventListener("scroll", () => {
//     if (window.scrollY > 500) {
//       setscroll(true);
//       console.log("reach 400px");
//     } else {
//       setscroll(false);
//     }
//   });
//   window.addEventListener("scroll", () => {
//     if (window.scrollY > 600) {
//       setscroll1(true);
//       console.log("reach 600px");
//     } else {
//       setscroll1(false);
//       console.log("not reach");
//     }
//   });
//   return () => {
//     window.removeEventListener("scroll");
//   };
// }, []);
{
  /* <div className="grid-container">
          <div className="grid-item">
            <h6>01</h6>
            <h5>China started the exploration of mars</h5>
            <p className="aboutm">
              The remotely controlled Chinese cruiser Zhurong drove the capsule
              line
            </p>
          </div>
          <div className="grid-item2">
            <h6>02</h6>
            <h5>7 facts of mars</h5>
            <p className="aboutm">
              Mars is the fourth plants from the sun.Apart from that,Mars is
              also the second
            </p>
          </div>
        </div> */
}
// const [offsetY, setoffsetY] = useState(0);
// const handleScroll = () => setoffsetY(window.pageYOffset);
// useEffect(() => {
//   window.addEventListener("scroll", handleScroll);
//   return () => window.removeEventListener("scroll", handleScroll);
// }, []);
// const parallax = document.getElementsByClassName("mars");
// console.log(parallax);
// window.addEventListener("scroll", function () {
//   let value = window.scrollY;
//   console.log(value);
//   parallax.style.top = value + "px";
// });
// var paralle = document.getElementsByClassName("star");
// console.log(paralle);
// window.addEventListener("scroll", function () {
// let value = window.scrollY;
// paralle.style.color = "red";
// });
// var project = setInterval(projectdone);
// let count1 = 1;

// function projectdone() {
//   count1++;
//   document.querySelector("#number1").innerHTML = count1;
//   if (count1 == 2) {
//     clearInterval(project);
//   }
// }
{
  /* className={`nav ${show && "nav_black"}`} */
}
{
  /* <div
          className="marscover"
          // className={`marscover ${show1 && "class2"}`}
        >
          <Canvas className="mars">
            <OrbitControls
              autoRotate
              autoRotateSpeed={-0.9}
              enableZoom={false}
            />

            <ambientLight intensity={0.4} />
            <directionalLight intensity={0.9} />
            <Suspense fallback={null}>
              <Mars />
            </Suspense>
          </Canvas>
        </div> */
}
