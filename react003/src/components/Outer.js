// 공통으로 들어가는 구조
import { Outlet } from "react-router-dom";

export default function Outer(){
    return(
        <div className="container my-5">
            <Outlet></Outlet>
        </div>
    )
}