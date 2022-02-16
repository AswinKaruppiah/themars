import React from "react";
import "./App.css";
import Front from "./Front";
import Last from "./Last";
import Navbar from "./Navbar";
import Page from "./Page1";
import Photos from "./Photo";

function App() {
  return (
    <div className="App">
      <Front />

      <Navbar />
      <Page />
      <Photos />
      <Last />
    </div>
  );
}

export default App;

// import React, { Suspense } from "react";
// import { Canvas } from "react-three-fiber";
// import Kick from "./Scene.js";

// import { OrbitControls } from "@react-three/drei/OrbitControls";
// import "./styles.css";

// export default function App() {
//   return (
//     <div className="marscover">
//       <Canvas id="mars">
//         <OrbitControls />
//         <ambientLight intensity={0.4} />
//         <directionalLight intensity={0.5} />
//         <Suspense fallback={null}>
//           <Kick />
//         </Suspense>
//       </Canvas>
//     </div>
//   );
// }
