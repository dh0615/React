import React from "react";
/* import Router from "./Router"; */
import { Outlet } from "react-router-dom";
import Header from "./Header";

function App() {
  return (
    <div>
      <Header />
      <Outlet context={{ darkMode: true }} />
    </div>
  );
  {
    /* <Router />; */
  }
  /*  <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div> */
}

export default App;
