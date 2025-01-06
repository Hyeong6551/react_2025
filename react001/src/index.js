import React from 'react';    // #1. 컴포넌트와 정적리소스 로드
import ReactDOM from 'react-dom/client';  // #2. react-dom
import './index.css';   
import App from './App';    // #3. src 안 App.js
import reportWebVitals from './reportWebVitals';    
import 'bootstrap/dist/css/bootstrap.css';

// #4. root 생성 (index.html)
const root = ReactDOM.createRoot(document.getElementById('root'));
// #5. react-컴포넌트 DOM으로 렌더링 => render() 메서드 사용
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
