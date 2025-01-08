import  {useState , useEffect}  from 'react'
import  {Link, useNavigate , useParams}  from   'react-router-dom'; 
import  axios  from 'axios'

export default function BDetail(){
    // 해당 글번호 가져오기
    const { id } = useParams()
    const [detail, setDetail] = useState({ })
    function getDetail(){
        axios.get(`/board/${id}`)
             .then(  (response)=>{ setDetail(response.data) } )
             .catch( (error)=> console.error(error))
        console.log(detail)     
    }

    useEffect( ()=>{ getDetail() },[] )

    // 글 삭제하기 - 삭제하고나서 /board/list로 돌아감
    const navigate = useNavigate()
    const btnDelete = () => { 
        if( window.confirm('게시글을 삭제하시겠습니까?') ){
            axios.delete( `/board/${id}`)
                 .then(   (response)=> console.log('삭제완료') )
                 .catch(  (error) => console.error(error))
            navigate('/board/list')     
        }
    }

    return(
    <>
        <h3 className="mt-5" style={{fontWeight:"bold"}}>Detail</h3>
        <table className="table table-striped table-bordered table-hover">
            <caption>상세보기</caption>
            <tbody>
                <tr>
                    <th scope="row" style={{width:"15%"}}>Name</th><td>{detail.name}</td>
                    <th scope="row" style={{width:"20%"}}>Date</th><td>{detail.createDate}</td>
                </tr>
                <tr>
                    <th scope="row">TITLE</th>
                    <td colSpan={3}>{detail.title}</td>
                </tr>
                <tr>
                    <th scope="row" style={{height:"250px", whiteSpace:'pre-wrap'}}>CONTENT</th>
                    <td colSpan={3}>{detail.content}</td>
                </tr>
            </tbody>
        </table>
        <div className="text-end">
            <Link to={'/board/update/'+detail.id} className="btn btn-primary me-2">Edit</Link>
            <Link to={'/board/list/'} className="btn btn-primary me-2">List</Link>
            <Link to={'/board/list/'} className="btn btn-primary" onClick={btnDelete}>Delete</Link>
        </div>
    </>

    )
}