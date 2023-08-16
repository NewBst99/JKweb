import Header from "../../component/Header/Header";
import "./Policy.css"

function Policy() {
  return (
    <div id="main">
      <div>
        <Header />
      </div>
      <div className="policy-title">개인정보 보호정책</div>
      <div className="policy-wrap">
        <div className="policy-list">
          (개인정보의 정의) 개인정보란 개인에 관한 정보이며, 이름, 생년월일,
          성별, 전화번호, 이메일 주소, 직업, 근무처 등 특정 개인을 식별할 수
          있는 정보를 말합니다. .
        </div>
        <div className="policy-list">
          (개인정보의 수집·이용) 당사는, 이하의 목적을 위해, 그 범위내에서만,
          개인정보를 수집·이용합니다. 당사에 의한 개인정보의 수집·이용은 고객의
          자발적인 제공에 의한 것이며, 고객이 개인정보를 제공받은 경우에는
          당사가 본방침에 따라 개인정보를 이용할 것을 고객이 허락했다. 해야
          합니다. ?업무 수행상 필요로 하는 당사로부터의 문의, 확인, 및 서비스
          향상을 위한 의견 수집 ?각종의 문의 대응
        </div>
        <div className="policy-list">
          (개인정보의 제3자 제공) 당사는, 법령에 근거하는 경우 등 정당한 이유에
          의하지 않는 한, 사전에 본인의 동의를 얻지 않고, 개인정보를 제3자에게
          공개·제공하는 것은 없습니다.
        </div>
        <div className="policy-list">
          (위탁처의 감독) 당사는, 고객에게 상품이나 서비스를 제공하는 등의 업무
          수행상, 개인정보의 일부를 외부의 위탁처에 제공하는 경우가 있습니다. 그
          경우 업무 위탁처가 적절하게 개인정보를 취급하도록 관리하겠습니다.
        </div>
        <div className="policy-list">
          (위탁처의 감독) 당사는, 고객에게 상품이나 서비스를 제공하는 등의 업무
          수행상, 개인정보의 일부를 외부의 위탁처에 제공하는 경우가 있습니다. 그
          경우 업무 위탁처가 적절하게 개인정보를 취급하도록 관리하겠습니다.
        </div>
        <div className="policy-list">
          (개인정보의 관리) 당사는 개인정보의 누설, 멸실, 훼손 등을 방지하기
          위해 개인정보보호관리책임자를 설치하여 충분한 안전보호에 노력하며,
          개인정보를 정확하게, 또한 최신으로 유지하도록 보관한 개인정보의 적절한
          관리를 실시합니다.
        </div>
        <div className="policy-list">
          (정보 내용의 조회, 수정 또는 삭제) 당사는, 고객이 당사에 제공받은
          개인정보의 조회, 수정 또는 삭제를 희망되는 경우는, 본인임을 확인하신
          후에, 합리적인 범위입니다 선명하게 대응하겠습니다.
        </div>
      </div>
    </div>
  );
}

export default Policy;
