import React from "react";
import Nav from "./Nav";
import Home from "./Home"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UseStateHook from "./UseStateHook";
import CustomHook from "./CustomHook";
import LifecycleMethods from "./LifecycleMethods";
import UseEffectHook from "./UseEffectHook";  
import Test1 from "./Promises/Test1";
import UseContextHook from "./useContextHook"; 
import PROMISE from "./Promises/Promises1"; 
import PROMISE2 from "./Promises/Promise2"; 
import GetStarted from "./GetStarted";
const App = () => {
  return (
    <Router>
    <Nav />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/usestate" element={<UseStateHook />} />
      <Route  exact path="/useeffect" element={<UseEffectHook />} />
      <Route  exact path="/CustomHook" element={<CustomHook />} />
      <Route  exact path="/UseContextHook" element={<UseContextHook />} />
      <Route  exact path="/EventLoop" element={<Test1 />} />
      <Route  exact path="/Promies" element={<PROMISE />} />
      <Route  exact path="/LifecycleMethods" element={<LifecycleMethods />} />
      <Route  exact path="/pro2" element={<PROMISE2 />} />
      <Route  exact path="/get-started" element={<GetStarted />} />
    </Routes>
  </Router>


// promises example
 


  );
};

export default App;
 