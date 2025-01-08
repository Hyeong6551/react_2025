import { useEffect, useState } from "react"
import axios from "axios"
import { Link, useParams, useNavigate } from "react-router-dom"

export default function BUpdate(){

    let {id} = useParams()
    const [detail, setDetail] = useState({name:'', title:'', content:'', createDate:''})
    
    let getDetail = () => {
        axios.get(`/board/${id}`)
            .then( (response)=>{setDetail(response.data)} )
            .catch( (error)=>{ console.error(error)} )
    }

    useEffect(()=>{getDetail()},[])


    // 글 수정하기
    const btnUpdate = () => {
        const {name, title, content, createDate } = detail
        if ( !title || !content ){
            alert('빈칸입니다.');
            return
        }
        axios.put(`/board/${id}`, detail)
            .then( (response)=>{ alert('글 수정 완료'); navigate(`/board/detail/${id}`) })
            .catch( (error)=>{console.error(error)} )
        setDetail({name:'', title:'', content:'', createDate:''})
    }

    // 취소 - 뒤로 돌아가기   
    const navigate = useNavigate();  
    const btnCancel = () => {       // window.history.go(-1)
        navigate(-1)
    }

    function detailUpdate (e) {
        setDetail({...detail, [e.target.name] : e.target.value})
    }

    return(
        <>  
        <h3 className="mt-5" style={{fontWeight:"bold"}}>Update</h3>
        <div className='alert alert-secondary'>
            <div className='my-3'>
                <label htmlFor='bname'  className='form-label'>Writer</label>
                <input type='text' className='form-control'  id="bname"  name="name"   
                    value={detail.name}
                    onChange={detailUpdate}
                />
            </div>
            <div className='my-3'>
                <label htmlFor='btitle'  className='form-label'>Title</label>
                <input type='text' className='form-control'  id="btitle"  name="title"   
                    value={detail.title}
                    onChange={detailUpdate}
                />
            </div>
            <div className='my-3'>
                <label htmlFor='bcontent'  className='form-label'>Content</label>
                <textarea className='form-control'  id="bcontent"  name="content"
                    value={detail.content}
                    onChange={detailUpdate}
                ></textarea>
            </div>
            <div className='my-3'>
                <button type="button"  className='btn btn-primary me-2' onClick={btnUpdate}>Update</button>
                <button type="button"  className='btn btn-primary me-2' onClick={btnCancel}>Cancel</button>
            </div>
        </div>
        </>
    )
}