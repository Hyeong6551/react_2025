import { useState }  from "react";
import { login } from "../store/store";
import { useDispatch } from "react-redux";

//export default function LoginForm() { return }
export default function LoginForm(  { loginFormClose }   ) {
    //// code
    let [user, setUser] = useState({email:'',nickname:'',profile:'/images/user2.png'})
    const submit = useDispatch()

    function login_form(e){
        setUser({...user,[e.target.name]:e.target.value})
    }

    //// view
    return (
        <div className="container my-5 alert alert-secondary">
            <div className="row">
                <div className="col">
                    <input type="text" name="email" className="form-control"
                        title="email" placeholder="email"
                        value={user.email}
                        onChange={login_form}
                    />
                </div>
                <div className="col">
                    <input type="text" name="nickname" className="form-control"
                        title="nickname" placeholder="nickname"
                        value={user.nickname}
                        onChange={login_form}
                    />
                </div>
                <div className="col">
                    <button className="btn btn-dark"   
                        onClick={()=>{submit(login(user)); loginFormClose(); }}
                    >LOGIN</button>     {/*  로그인 정보를 store에 전달 후 로그인 폼 닫기 */}

                    <span className="btn btn-light  mx-3" onClick={loginFormClose}> CLOSE </span>
                </div>

            </div>
        </div>
    )
}

