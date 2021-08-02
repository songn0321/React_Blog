/*eslint-disable */
import React, { useState } from 'react'; //리액트의 데이터 저장공간 state 만드는 법
import logo from './logo.svg';
import './App.css';


function App() {
  let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동 맛집', '자바스크립트 독학']);
  let [따봉, 따봉변경] = useState([0, 0, 0]);
  let [modal, modal변경] = useState(false);
  let [타이틀, 타이틀변경] = useState(0);

  function 제목변경() {
    var newArray = [...글제목];
    newArray[0] = '여자 코트 추천';
    글제목변경(newArray);
  }
  function 정렬하기() {
    var newArray = [...글제목];
    글제목변경(newArray.sort());
  }
  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      <button onClick={제목변경}>제목변경</button>
      <button onClick={정렬하기}>정렬하기</button>
      {
        // JSX내에서 for반복문은 사용할 수 없다
        글제목.map(function (i, k) {
          return (<div className="list">
            <h3 onClick={() => {
              타이틀변경(k);
            }}>{i}
              <span onClick={() => {
                let copy = [...따봉];
                copy[k]++;
                따봉변경(copy)
              }}
              >👍🏼</span>{따봉[k]}</h3>
            <p>2월 17일 발행</p>
            <hr />
          </div>)
        })
      }
      {/* <button onClick={() => { 타이틀변경(0) }}>버튼1</button>
      <button onClick={() => { 타이틀변경(1) }}>버튼2</button>
      <button onClick={() => { 타이틀변경(2) }}>버튼3</button> */}

      <button onClick={() => { modal === false ? modal변경(true) : modal변경(false) }}>모달창열기</button>
      {
        modal === true ? <Modal 글제목={글제목} 타이틀={타이틀}></Modal> : null
      }
    </div>
  );
}
//component 만들기
function Modal(props) {
  return (
    <div>
      <div className="modal">
        <h2>{props.글제목[props.타이틀]}</h2>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
    </div>
  )
}

export default App;
