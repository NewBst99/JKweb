import Header from "../../component/Header/Header";
import "./Intro.css";
function CompanyIntro() {
  return (
    <div id="main">
      <div>
        <Header />
      </div>
      <div className="intro-wrap-content">
        <div className="cia">회사 안내</div>
        <div className="cia">회사 실적 및 회사 자랑거리</div>
        <div className="cia">수출입 관련안내</div>
        <div className="cia">구매 대행 관련 안내</div>
        <div className="cia">통역/번역 관련 안내</div>
        <div className="cia">문의 바로가기</div>
        <div className="cia">회사 정보</div>
      </div>
    </div>
  );
}

export default CompanyIntro;
