import React, { useEffect, useState } from "react";
import "./Front.css";
import { Canvas } from "react-three-fiber";
import { OrbitControls } from "@react-three/drei/OrbitControls";
import Mars from "./Scene.js";
import { Suspense } from "react";
import * as Scroll from "react-scroll";
import { SmoothProvider } from "react-smooth-scrolling";
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";
import { ZoomOut } from "react-scroll-motion";
import {} from "react-scroll-motion";
import {
  Zoom,
  Animator,
  ScrollContainer,
  ScrollPage,
  batch,
  Fade,
  FadeIn,
  Move,
  MoveIn,
  MoveOut,
  Sticky,
  StickyIn,
  ZoomIn,
} from "react-scroll-motion";

// let Links = Scroll.Link;
// let Buttons = Scroll.Button;
// let Element = Scroll.Element;
// let Events = Scroll.Events;
// let scroll = Scroll.animateScroll;
// let scrollSpy = Scroll.scrollSpy;

function Front() {
  let values = window.scrollY;
  console.log(values);

  const [change, setchange] = useState(false);

  window.addEventListener("scroll", () => {
    if (window.scrollY > 600) {
      setchange(true);
      console.log("working state");
    } else {
      setchange(false);
    }
    return () => {
      window.removeEventListener("scroll");
    };
  });
  var paralle = document.getElementsByClassName("marscover");

  window.addEventListener("scroll", function () {
    let value = window.scrollY;
    if (value < 600) {
      paralle[0].style.marginRight = value * 1.5 + "px";
    } else if (value >= 600) {
      paralle[0].style.marginLeft = value * 0.9 + "px";
    } else {
      console.log("not reached2");
    }

    return () => {
      window.removeEventListener("scroll");
    };
  });

  return (
    <div>
      <div className="z">
        {/* <ScrollContainer>
          <Animator> */}
        <div
          className={`marscover ${change && "newset"}`}
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
        </div>

        {/* </Animator>
        </ScrollContainer> */}
      </div>
    </div>
  );
}

export default Front;
// paralle[0].style.height = value * -100 + "px";
// if (value >= 600) {
//   paralle[0].style.marginLeft = value * 1 + "px";
// paralle[0].style.marginLeft = value * 2 + "px";

// paralle[0].style.opacity = 0;
// paralle[0].style.height = value - 1000 + "px";
// paralle[0].style.width = value - 1000 + "px";
// }
// const custom1 = batch(Move(-1000, 0), Zoom(0.9, 1), Sticky(80, 60));
// const custom2 = batch(Move(1000, 0), Sticky(20, 60));
// var [custom, translate] = useState(custom1);

// window.addEventListener("scroll", function () {
//   let value = window.scrollY;
//   console.log(value);
//   if (value > 700 && value < 750) {
//     console.log("animation2");

//     translate(custom2);
//   }

//   return () => {
//     window.removeEventListener("scroll");
//   };
// paralle[0].style.marginLeft = value * 1 + "px";
// paralle[0].style.marginRight = value * 1 + "px";
// Move(-800, 0),
// Zoom(0.9, 1),
// Sticky(80, 60)
// MoveIn(100, 800)
// const right1 = batch(Sticky(30, 60), MoveIn(0, 800));
// useEffect(() => {
//   window.addEventListener("scroll", () => {
//     if (window.scrollY < 800) {
//       setrigth(left);
//       console.log("work1");
//     } else {
//       console.log("condition fail1");
//     }
// if ((window.scrollY = 700)) {
//   setrigth(right1);
//   console.log("work2");
// } else {
//   setrigth(false);
//   console.log("condition fail2");
// }
// });
// return () => {
//   window.removeEventListener("scroll");
// };
// }, []);
