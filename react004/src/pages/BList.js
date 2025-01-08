import { useEffect, useState } from "react"
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

export default function BList(){

    // 전체글 가져오기
    let [board, setBoard] = useState();
    function getBoard(){
        axios.get("/board")
            .then( (response)=> {setBoard(response.data)} )
            .catch( (error)=> {console.error(error)} )
        console.log(board)
    }
    useEffect( ()=>{ getBoard() } , [] )

    // 클릭 시 해당글 보기
    const navigate  = useNavigate();
    const goDetail = (no)=> navigate('/board/detail/' + no) 

    return(
        <>
            <h3 className="mt-5" style={{fontWeight:"bold"}}>Board</h3>
            <table className="table table-bordered table-striped table-hover">
                <caption>REACT Board</caption>
                <thead className="table table-dark">
                    <tr>
                        <th scope="col" style={{width:"15%"}}>No</th>
                        <th scope="col" style={{width:"40%"}}>TITLE</th>
                        <th scope="col" style={{width:"25%"}}>WRITER</th>
                        <th scope="col" style={{width:"20%"}}>DATE</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        board != null && board.map((li, index)=>(
                        <tr key={li.id} onClick={()=>{goDetail(li.id)}}>
                            <td>{index+1}</td>
                            <td>{li.title}</td>
                            <td>{li.name}</td>
                            <td>{li.createDate}</td>
                        </tr>
                        ))
                    }
                </tbody>
            </table>
            <div className="text-end">
                <Link to={'/board/write'} className="btn btn-primary">Write</Link>
            </div>
        </>
    )
}