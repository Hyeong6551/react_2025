/* 2025.01.08 */
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Footer from './components/Footer';
import Outer from './components/Outer';
import Header from './components/Header';
import BList from './pages/BList';
import BWrite from './pages/BWrite';
import BUpdate from './pages/BUpdate';
import BDetail from './pages/BDetail';
import Error from './pages/Error';

function App() {
  return (
    <div className="App">
      <Header />

      <div className='container my5'>
        <Routes>
          <Route path='/' element={<BList/>}/>
          <Route path='/board' element={<Outer/>} >
            <Route path='list' element={<BList/>} />
            <Route path='write' element={<BWrite/>} />
            <Route path='detail/:id' element={<BDetail/>} />
            <Route path='update/:id' element={<BUpdate/>} />
          </Route>
          <Route path='*' element={<Error/>} />
        </Routes>
      </div>
      
      <Footer />
    </div>
  );
}

export default App