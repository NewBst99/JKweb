import Header from "../../component/Header/Header";
function Board() {
  return (
    <div id="main">
      <div>
        <Header />
      </div>
      <div>게시판</div>
      <div>이름</div>
      <div>
        <input
        className="board-input"
        type="text"
        placeholder="이름"
        name="customerName"
        onChange={null}/>
      </div>
      <div>후리가나?</div>
      <div>
        <input
        className="board-input"
        type="text"
        placeholder="후리가나"
        name="hurigana"
        onChange={null}/>
      </div>
      <div>
        email
      </div>
      <div>
        <input
        className="board-input"
        type="text"
        placeholder="email"
        name="email"
        onChange={null}/>
      </div>
      <div>
        전화번호
      </div>
      <div>
        <input
        className="board-input"
        type="text"
        placeholder="전화번호"
        name="phoneNumber"
        onChange={null}/>
      </div>
    </div>
  );
}

export default Board;
