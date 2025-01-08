import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { imgChange, logout, login } from "../store/store";
import { useState } from "react";
import LoginForm from "./LoginForm";

export default function Header(){
    let user = useSelector( ({user})=>{return user} )
    let profileAction = useDispatch()

    let [loginForm,setLoginForm] = useState(false)

    function loginFormOpen (){ setLoginForm(true) }
    function loginFormClose (){ setLoginForm(false) }
 
    return(
        <div>
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
                    {/* user가 있으면 ? 로그아웃 : 로그인 */}
                        <div className="d-flex text-white">
                        {   
                        user?   (<span>
                                <img src={user.profile} alt={user.nickname} 
                                    style={{width:"50px"}} onClick={ ()=>profileAction(imgChange()) }/>
                                <span className="mx-3 pt-3">{user.nickname}</span>
                                <span className="me-3 pt-3">{user.email}</span>
                                <button className="btn btn-danger" onClick={()=>profileAction(logout())}>로그아웃</button>
                            </span>)
                            :
                            <button className="btn btn-danger" onClick={()=>loginFormOpen()}>로그인</button>
                        }
                        </div>
                </div>
            </nav>
            { loginForm && <LoginForm loginFormClose={loginFormClose} />}
        </div>
    )
}