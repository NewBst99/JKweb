import React from "react";
import { useNavigate } from "react-router-dom";
import "./Bottom.css";

function Bottom() {
  const nav = useNavigate();
  return (
    <div id="main">
      <div className="bt">
        <div
          className="b"
          onClick={() => {
            nav(`/CompanyIntro`);
          }}
        >
          홈
        </div>
        <div
          className="b"
          onClick={() => {
            nav(`/CompanyIntro`);
          }}
        >
          회사안내
        </div>
        <div
          className="b"
          onClick={() => {
            nav(`/BusinessIntro`);
          }}
        >
          사업안내
        </div>
        <div
          className="b"
          onClick={() => {
            nav(`/Board`);
          }}
        >
          게시판
        </div>
        <div
          className="b"
          onClick={() => {
            nav(`/Qa`);
          }}
        >
          문의
        </div>
        <div
          className="b"
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

export default Bottom;
