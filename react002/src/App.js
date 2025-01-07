//import logo from './logo.svg';
import React,{useState} from "react";

function App() {
  // --------------- code --------------- //
  // 1. 변수 let
  let logo = "React Project";
  
  // 2. useState
  // let title = "React Member Table";
  //  변수명, 변수변경함수
  let [title, setTitle] = useState("React Member Table");
  
  // 3. onClick={ ()=> console.log('.....') }
  // 4. onClick={ changeTitle }
  const changeTitle = () => { 
    // 4-1. 단순대입시 state값의 변경점을 reactDom이 알지 못함 => 비구조화할당문법 사용
    // title="※SH Portfolio";
    // 4-2. useState 2번째 매개변수로 전달받은 함수를 통해 재 랜더링됨 
    setTitle("※JSH Portfolio");
  };

  // 게시판 기존 추가
  // 5. board list
  let [list, setList] = useState([
    { no : 1,
   name: 'Adeel Solangi',
   title: 'Sindhi',
   content: 'Donec lobortis eleifend co ndimentum. Cras dictum dolor lacinia lectus vehicula rutrum. Maecenas quis nisi nunc. Nam tristique feugiat est vitae mollis. Maecenas quis nisi nunc.',
   date: '2025.01.01'
 },
 { no : 2,
   name: 'Afzal Ghaffar',
   title: 'Sindhi',
   id: 'ENTOCR13RSCLZ6KU',
   content: 'Aliquam sollicitudin ante ligula, eget malesuada nibh efficitur et. Pellentesque massa sem, scelerisque sit amet odio id, cursus tempor urna. Etiam congue dignissim volutpat. Vestibulum pharetra libero et velit gravida euismod.',
   date: '2025.01.01'
 },
 ]);

  // 게시판 삭제
  // 6. listDel(li.no)  (1)
  // const listDel = (no) => {
  //   // 6-1. 삭제할 번호
  //   // 6-2. 전체 리스트
  //   console.log(no);
  //   console.log(list);

  //   // 6-3. Array.splice(인덱스 위치, 삭제할 갯수)
  //   for(let i=0; i<list.length; i++){
  //     if (list[i].no == no ){
  //       list.splice(i,1);
  //       break;
  //     }
  //   }
  //   console.log(list);      // 리스트값 변경 확인
  //   //setList(list);        // 리스트 반영 안됨 - 값이 제거되어도 렌더링이 이뤄지지 않음
  //   setList([...list]);     // 실제 반영된 전체값
  // };
  
  // 6. listDel(li.no)  (2)
  const listDel = (no) => {
    let filterList = list.filter(li => li.no != no);   // 게시판에서 글번호가 일치하지 않음
    setList(filterList)
  };

  // 게시판 추가
  // 7. listWrite
  let [bname, setBname] = useState('');        // 초기값 빈 문자열 ''
  let [btitle, setBtitle] = useState('');      // 
  let [bcontent, setBcontent] = useState('');  //

  const listWrite = () => {
  // 1. 입력값  js : document.querySelector('선택자').value / react : useState
  // 2. 입력값 게시글 생성
  let userInput = {
    no : Math.max(...list.map(li => li.no) ) + 1,  // 제일 큰 숫자를 불러와서 + 1
    name : bname,
    title : btitle,
    content : bcontent,
    date : new Date().toLocaleDateString()
  }

  // 3. list에 넣고 화면에 반영
  list.push(userInput)    // 추가는 push 제거는 filter
  setList([...list])
  };

// --------------- view --------------- //

  return (
    <div className="App">
      {/* ----- NAVBAR ----- */}
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#" onClick={ ()=>console.log('...') }>{logo}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
              </li>  
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">Dropdown</a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Link</a></li>
                  <li><a className="dropdown-item" href="#">Another link</a></li>
                  <li><a className="dropdown-item" href="#">A third link</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* ----- TABLE ----- */}
      <div className='container my-5'>
        <div className='row'>
          <div className='col-sm-12'>
            <h3 style={{fontWeight:'bold'}} onClick={changeTitle}>{title}</h3>
            <table className="table table-striped table-bordered table-hover">
              <caption>REACT BOARD</caption>
              <thead className="table-dark">
                <tr>
                  <th scope="col" style={{width:"10%"}}>NO</th>
                  <th scope="col" style={{width:"40%"}}>TITLE</th>
                  <th scope="col" style={{width:"30%"}}>WRITE</th>
                  <th scope="col" style={{width:"10%"}}>DATE</th>
                  <th scope="col" style={{width:"10%"}}>DEL</th>
                </tr>
              </thead>
              {/*
                [].map( ()=>() )

                [1,2,3].map( (i)=>(i*10))  // [10, 20, 30]

                let user = [ {a:"one", b:"first"}, {a:"two", b:"second"} ];
                user.map( (u,i)=>(console.log(i, u.a, u.b) ));
                0 'one' 'first'
                1 'two' 'second'


                Q1. 삭제버튼 클릭 시 listDel 호출 - console.log()
              */}
              <tbody>
                {
                  list.map( (li, index)=>(
                  <tr key={index}>
                    <td>{li.no}</td>
                    <td>{li.title}</td>
                    <td>{li.name}</td>
                    <td>{li.date}</td>
                    {/* ※중요) 버튼 클릭 시 ()=>listDel()*/}
                    <td><button className='btn btn-danger' onClick={()=>listDel(li.no)}>삭제</button></td>
                  </tr>
                  ) )
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* ----- WRITE ----- */}
      <div className="container"> 
        <h3 style={{fontWeight:'bold'}}>React Write</h3>
        
        {/* --- Name --- */}
        <div className="row my-3">
          
          <div className="col-sm-3">
            <label htmlFor="name" className="form-label">Name</label>  
          </div>
          <div className="col-sm-9">
            <input type="text" 
            value={bname}
            onChange={function(e){ setBname( e.target.value ) }}
            className="form-control" id="name" placeholder="Enter Your Name" name="name" />
          </div>
        
        </div>

        {/* --- Title ---*/}
        <div className="row my-3">
          
          <div className="col-sm-3">
            <label htmlFor="title" className="form-label">Title:</label>  
          </div>
          <div className="col-sm-9">
            <input type="text" 
            value={btitle}
            onChange={function(e){ setBtitle( e.target.value ) }}
            className="form-control" id="title" placeholder="Enter Your Title" name="title" />
          </div>
        
        </div>

        {/* --- Write --- */}
        <div className="row my-3">
          
          <div className="col-sm-3">
            <label htmlFor="content" className="form-label">Content:</label>  
          </div>
          <div className="col-sm-9">
            <textarea className="form-control" 
            value={bcontent}
            onChange={function(e){ console.log(e.target.value); setBcontent(e.target.value) }}
            id="content" placeholder="Content" name="content" ></textarea>
          </div>
        
        </div>

        {/* --- Button --- */}
        <div className="row my-3">
            <button className="btn btn-primary form-control" onClick={listWrite}>추가</button>
        </div>
      </div>

    </div>
  );
}

export default App;
