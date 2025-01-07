/* 2025.01.07 */
import { Route, Routes, Link } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Outer from './components/Outer';
import BList from './pages/BList';
import BDetail from './pages/BDetail';
import BUpdate from './pages/BUpdate';
import BWrite from './pages/BWrite';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* ------- Header ------- */}
      <Header/>
      
      {/* ------- Router ------- */}
      <div className='container my-5'>
        <Routes>
          <Route path='/' element={<BList/>} />
          {/* 하위요소는 /board/list */}
          <Route path='/board' element={<Outer/>} >
            <Route path='list' element={<BList/>} />
            <Route path='write' element={<BWrite/>} />
            <Route path='detail/:id' element={<BDetail/>} />
            <Route path='update/:id' element={<BUpdate/>} />
          </Route>
          
          {/* 사용자가 잘못된 URL을 입력했을 때, 에러 페이지 - 모든경로는 항상 맨마지막에 */}
          <Route path='/' element={
            <div>
              <h1 style={{color:"red"}}>존재하지 않는 페이지잆니다.</h1>
              <Link to="/">BACK</Link>
            </div>
          } />
          <Route>

          </Route>
        </Routes>
      </div>


      {/* ------- Footer ------- */}
      <Footer/>
      
    </div>
  );
}

export default App;
