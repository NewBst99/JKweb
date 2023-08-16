import Header from "../../component/Header/Header";
import { useNavigate } from "react-router-dom";
import "./Main.css"


function Main() {
  const nav = useNavigate();
  return (
    <div id="main">
      <div>
        <Header />
      </div>
      <div className="logo">회사상징 사진</div>
      <div className="main-intro">간단한 회사소개</div>
      <div className="main-policy"
        onClick={() => {
          nav(`/Policy`);
        }}
      >
        개인정보 보호 정책
      </div>

    </div>
  );
}

export default Main;
