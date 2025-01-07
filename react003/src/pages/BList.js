import {useEffect, useState} from 'react';
import axios from 'axios';
import {useNavigate, Link} from 'react-router-dom';

export default function BList(){
    ///// code

    /// data/data.json 불러오기
    let [board, setBoard] = useState();         // useState('') 으로 설정하면 읽히지 않음
    function getBoard() {
        axios//.get("http://localhost:4000/board")
            .get('/board')
            .then( (response)=>{ setBoard(response.data) })     // 성공하면 setBoard() 실행
            .catch( (error)=>{ console.error(error) })          // 아니면 console.error()
        console.log(board)
    }
    useEffect( ()=>{ getBoard()  } , [] )

    const navi = useNavigate();
    const goDetail = (no) => navi('/board/detail/' + no)

    ///// view
    return(
        <>
            <h3 className='mt-5' style={{fontWeight:"bold"}}>BOARD</h3>
            <table className="table table-striped table-bordered table-hover">
                <caption>REACT BOARD</caption>
                <thead className='table table-dark'>
                    <tr>
                        {/* scope : 어느방향으로 읽히는지  */}
                        <th scope="col" style={{width:"15%"}}>No</th>
                        <th scope="col" style={{width:"35%"}}>Title</th>
                        <th scope="col" style={{width:"25%"}}>Name</th>
                        <th scope="col" style={{width:"25%"}}>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        board != null && board.map((li, index)=>(
                            <tr key={li.id} onClick={ ()=> goDetail(li.id) }>
                                <td>{index+1}</td>  
                                <td>{li.title}</td>
                                <td>{li.name}</td>
                                <td>{li.createDate}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <div className='text-end'>
                <Link to={'/board/write'} className="btn btn-primary">Write</Link>
            </div>
        </>
    )
}