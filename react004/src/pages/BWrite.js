import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"

export default function BWrite(){
    // title, content, name
    const navigate = useNavigate();
    let [inputs, setInputs] = useState({title:'', content:'',name:''})

    // write 버튼을 클릭했을 때 ★
    const btnWrite = () => {
        const {title, content, name} = inputs
        if (!title || !content || !name ){
            alert('빈칸입니다. \n데이터를 확인해주세요')
            return;
        }

        let userInput = { ...inputs , createDate : new Date().toLocaleDateString() }
        axios.post('/board', userInput)
            .then( (response)=>{alert("글쓰기에 성공하셨습니다."); navigate('/board/list')} )
            .catch( (error)=>{console.log(error)} )
        setInputs({title:'', content:'', name:'' })
    }

    // list 버튼을 클릭했을 때
    const btnList = () => { navigate('/board/list') }

    function inputWrite (e) {
        setInputs({...inputs, [e.target.name] : e.target.value})
    }
    //
    
    return(
        <>
        <h3 className="mt-5" style={{fontWeight:"bold"}}>WRITE</h3>
        <div className='alert alert-secondary'>
            <div className="mb-3 mt-3">
                <label htmlFor="btitle" className="form-label">Title</label>
                <input type="text" className="form-control" id="btitle" name="title"
                    value={inputs.title}
                    onChange={inputWrite}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="bname" className="form-label">Writer</label>
                <input type="text" className="form-control" id="bname" name="name"
                    value={inputs.name}
                    onChange={inputWrite}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="bcontent" className="form-label">Content</label>
                <textarea className="form-control" id="bcontent" name="content"
                    value={inputs.content}
                    onChange={inputWrite}
                ></textarea>
            </div>
            <div className="mt-5">
                <button type="button" className="btn btn-primary me-2" onClick={btnWrite}>Write</button>
                <button type="button" className="btn btn-primary me-2" onClick={btnList}>List</button>
            </div>
        </div>
        </>
    )
}