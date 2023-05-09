import { Route, Routes, NavLink } from "react-router-dom";
import "./style.css";
import React from "react";

// import Home from "../src/pages/Home";
import UseState from "../src/pages/UseState";
import UseEffect from "../src/pages/UseEffect";
import UseContext from "../src/pages/UseContext";
// import ContextApp from "./pages/context/ContextApp";
import UseMemo from "../src/pages/UseMemo";
import UseReducer from "../src/pages/UseReducer";
import UseRef from "../src/pages/UseRef";
import CostomHook from "../src/pages/CostomHook";

import Filter from "../src/pages/ES6/Filter";
import Map from "../src/pages/ES6/Map";
import Reduce from "../src/pages/ES6/Reduce";
import ESSix from "./pages/ES6/ESSix";
import Spread from "./pages/SpreadAndRest2";
import HataYonetimi from "./pages/HataYonetimi";


import TemplateLiterals from "./pages/JSozellikleri/TemplateLiterals"
import ArrayMethod from "./pages/JSozellikleri/ArrayMethod"

function App() {
  return (
    <div>
      <>
        <nav>
          {/* aşşagıfa navlink in 3 farkli kullanımını gördük
a etiketi kullanmadık çünkü sayfayı yeniliyor */}
          <div className="container bg-dark  justify-content-center">
            <NavLink to="/useState" className="btn btn-primary  m-1">
              UseState
            </NavLink>
            <NavLink to="/useEffect" className="btn btn-primary m-1">
              UseEffect
            </NavLink>
            <NavLink to="/useContext" className="btn btn-primary m-1">
              useContext
            </NavLink>
            <NavLink to="/useReducer" className="btn btn-primary m-1">
              useReducer
            </NavLink>
            <NavLink to="/useRef" className="btn btn-primary m-1">
              useRef
            </NavLink>
            <NavLink to="/useMemo" className="btn btn-primary m-1">
              useMemo
            </NavLink>
            <NavLink to="/costomHook" className="btn btn-primary m-1">
              costomHook
            </NavLink>

            <br />
            <NavLink to="/filter" className="btn btn-danger m-1">
              filter
            </NavLink>
            <NavLink to="/map" className="btn btn-danger m-1">
              map
            </NavLink>
            <NavLink to="/reduce" className="btn btn-danger m-1">
              reduce
            </NavLink>
            <NavLink to="/eSSix" className="btn btn-danger m-1">
              eSSix
            </NavLink>
            <br />
            <NavLink to="/Spread" className="btn btn-success m-1">
              spread
            </NavLink>
          
            <NavLink to="/HataYonetimi" className="btn btn-success m-1">
            HataYonetimi
            </NavLink>

            <br />
            <NavLink to="/TemplateLiterals" className="btn btn-warning m-1">
            TemplateLiterals
            </NavLink>
            <NavLink to="/ArrayMethod" className="btn btn-warning m-1">
            ArrayMethod
            </NavLink>

          </div>
        </nav>

        <Routes>
          {/* <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} /> */}
          <Route path="/useState" element={<UseState />} />
          <Route path="/useEffect" element={<UseEffect />} />
          <Route path="/useContext" element={<UseContext />} />
          <Route path="/useReducer" element={<UseReducer />} />
          <Route path="/useRef" element={<UseRef />} />
          <Route path="/useMemo" element={<UseMemo />} />
          <Route path="/costomHook" element={<CostomHook />} />

          <Route path="/filter" element={<Filter />} />
          <Route path="/map" element={<Map />} />
          <Route path="/reduce" element={<Reduce />} />
          <Route path="/eSSix" element={<ESSix />} />
          <Route path="/HataYonetimi" element={<HataYonetimi />} />

          <Route path="/Spread" element={<Spread />} />


          <Route path="/TemplateLiterals" element={<TemplateLiterals />} />
          <Route path="/ArrayMethod" element={<ArrayMethod />} />
    
          {/* "/Spread2"  bu ifadeden sonra boşıuk koyma
          yani böyle yapma "/Spread2 "  */}
          {/* <Route path="/spreadAndRest" element={<SpreadAndRest />} /> */}
        </Routes>
      </>
    </div>
  );
}

export default App;
