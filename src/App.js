import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import Main from "./page/Main/Main";
import Qa from "./page/Qa/Qa";
import CompanyIntro from "./page/Intro/CompanyIntro";
import Faq from "./page/Faq/Faq";
import Board from "./page/Board/Board";
import BusinessIntro from "./page/Intro/BusinessIntro";
import Policy from "./page/Policy/Policy";

function App() {
  let RouteWrap = BrowserRouter;
  return (
    <div className="App">
      <RouteWrap>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/Qa" element={<Qa />} />
          <Route path="/CompanyIntro" element={<CompanyIntro />} />
          <Route path="/Faq" element={<Faq />} />
          <Route path="/Board" element={<Board />} />
          <Route path="/BusinessIntro" element={<BusinessIntro />} />
          <Route path="/Policy" element={<Policy />} />
        </Routes>
      </RouteWrap>
    </div>
  );
}

export default App;
