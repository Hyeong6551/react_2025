import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { imgChange } from "../store/store";

export default function Header(){
    let user = useSelector( ({user})=>{return user} )
    
    let profileAction = useDispatch()

    

    return(
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
            <div className="container-fluid">
                <ul className="navbar-nav">
                <li className="nav-item">
                    <Link className="nav-link active" to="/">REACT</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="#">Link</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="#">Link</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link disabled" to="#">Disabled</Link>
                </li>
                </ul>
                {/* [login] Action(클릭) => Dispatcher(데이터 흐름 관리) => Store(저장소) */}
                {/* profileAction : Dispatcher / imgChanger : store */}
                <div className="d-flex text-white">
                    <img src={user.profile} alt={user.nickname} 
                        style={{width:"50px"}} onClick={ ()=>profileAction(imgChange()) }/>
                    <span className="mx-3 pt-3">{user.nickname}</span>
                    <span className="me-3 pt-3">{user.email}</span>
                    <button className="btn btn-danger">로그아웃</button>
                </div>
            </div>
         </nav>
    )
}