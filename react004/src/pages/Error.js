import { Link } from "react-router-dom";

export default function Error(){
    return(
        <div className="mt-5">
        <h1 style={{color:"red"}}>Page Not Found</h1>
        <Link to='/'>BACK</Link>
        </div>
    )
}
