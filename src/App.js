/* eslint-disable */

import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';


function App() {
  
  // let txtTitle = "타이틀1";
  // let txtTitle2 = "타이틀2";
  // let txtTitle3 = "타이틀3";

  let [txtTitle,b] = useState(['타이틀1','타이틀2','타이틀3']);

  // var txtContent1 = "내용1";
  // var txtContent2 = "내용2";
  
  let [txtContent1,b1] = useState('내용111'); // state에 담아두면 새로고침하지 않아도 재랜더링됨. (smooth한효과)
  let [txtContent2,b2] = useState('내용222');
  let [txtContent3,b3] = useState('내용333');
  let [cnt, b4] = useState(0);

  function fnTest(){
    // alert("call fnTest");
     document.getElementById("t").value = "222";
  }

  function fnChange(){
    // var arrNewTitle = txtTitle; // 이렇게 사용하면 값을 공유한다. 그래서 이렇게 사용하면 안됨
    var arrNewTitle = [...txtTitle]; // '타이틀1','타이틀2','타이틀3' 를 array에서 뽑아서 다시 넣는거임. txtTitle 와 별개로 움직임.
    arrNewTitle[0] = "타이틀1-1";

    b(arrNewTitle); // 제목을 바꿔주는 기능
  }

  function fnLike(){
    b4(cnt+1);
  }


  
  return (
    
    <div>
      {/* 헤더 start */}
      <div className="Nav-header">김민정의 블로그</div>
      {/* 헤더 end */}
      {/* 컨텐츠 start */}

      <div>
        {/* <h3 clsssName="content-title">{ txtTitle[0] } <span onClick={()=>b(cnt+1)}>👍</span><span>{ cnt}</span> </h3> */}
        <h3 clsssName="content-title">{ txtTitle[0] } <span onClick={fnLike}>👍</span><span>{ cnt}</span> </h3>
        <p className="content-spec">{ txtContent1 }</p>
      </div>

      <button onClick={fnChange}>누르면바뀜</button>
      <hr/>

      <div>
        <h3 clsssName="content-title">{ txtTitle[1] }</h3>
        <p className="content-spec">{ txtContent2 }</p>      
      </div>
      <hr/>

      <div>
        <h3 clsssName="content-title">{ txtTitle[2] }</h3>
        <p className="content-spec">{ txtContent3 }</p>      
      </div>

      <input type="text" id="t" name="t" value="111"/>
      <input type="button" id="btnSend" name="btnSend" value="등록" onClick= {()=>fnTest}/>
      {/* 컨텐츠 end */}

      {/* footer start */}
      {/* footer end */}

      <Modal></Modal>

    </div>

  );
}

// 컴포넌트만들기 (컴포넌트명은 필수적으로 대문자로 시작해야한다.)
function Modal(){
  return(
    <div className="modal">
        <h2>제목</h2>
        <p>날짜</p>
        <p>상세내용</p>
    </div>
  )
}

export default App;
