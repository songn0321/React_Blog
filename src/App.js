/*eslint-disable */
import React, {useState} from 'react'; //리액트의 데이터 저장공간 state 만드는 법
import logo from './logo.svg';
import './App.css';


function App() {
  let [글제목,글제목변경] = useState(['남자 코트 추천','강남 우동 맛집','자바스크립트 독학']);
  let [따봉,따봉변경]=useState(0);
  function 제목변경(){
    var newArray = [...글제목];
    newArray[0] = '여자 코트 추천';
    글제목변경(newArray);
  }
  function 정렬하기(){
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
      <div className="list">
        <h3>{글제목[0]}<span onClick={()=>{
          {따봉변경(따봉+1)}
        }}>👍🏼</span>{따봉}</h3>
        <p>2월 17일 발행</p>
        <hr/>
      </div>
      <div className="list">
        <h3>{글제목[1]}</h3>
        <p>2월 17일 발행</p>
        <hr/>
      </div>
      <div className="list">
        <h3>{글제목[2]}</h3>
        <p>2월 17일 발행</p>
        <hr/>
      </div>
    </div>
  );
}

export default App;
