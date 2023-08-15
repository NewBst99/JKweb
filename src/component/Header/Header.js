import React from "react";
import { useNavigate } from "react-router-dom";
import "./header.css";
import  logo from "../../dummy/logo.png";
function Header() {
  const nav = useNavigate();
  return (
    <div id="main">
      <div className="hd">
        <div className="d"
         onClick={() => {
            nav(`/`);
          }}><img alt="logo" src={logo} width="100px" /></div>
        <div
          className="d"
          onClick={() => {
            nav(`/CompanyIntro`);
          }}
        >
          회사안내
        </div>
        <div
          className="d"
          onClick={() => {
            nav(`/BusinessIntro`);
          }}
        >
          사업안내
        </div>
        <div
          className="d"
          onClick={() => {
            nav(`/Board`);
          }}
        >
          게시판
        </div>
        <div
          className="d"
          onClick={() => {
            nav(`/Qa`);
          }}
        >
          문의
        </div>
        <div
          className="d"
          onClick={() => {
            nav(`/Faq`);
          }}
        >
          FAQ
        </div>
      </div>
    </div>
  );
}

export default Header;
