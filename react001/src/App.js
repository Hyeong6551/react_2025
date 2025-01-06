/* eslint-disable */
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    // class가 아닌 className 사용
    <div className='App'>
      {/* 최상단 묶음(div) */}
      <div className='container alert alert-success'>
        <h1>hello</h1>
        <p style={{color:"gold", fontWeight:"bolder", fontSize:"40px"}}>내용</p>
      </div>
    </div>
  );
}

// #1. 컴포넌트 내보내기 (export)
export default App;
