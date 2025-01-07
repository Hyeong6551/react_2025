import {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function BWrite(){
    ///// code
    let [inputs, setInputs] = useState( {title:'', content:'', name:''} );
    
    const navi = useNavigate();

    /// Write btn
    const btnWrite = () => {
        /////////// 순서 ///////////
        // 1. 사용자가 입력한 값 확인 - useState에 있는 값이 3개이기 때문에 const도 3개
        const {title, content, name} = inputs

        // 2. 게시글 생성 - 빈칸이면 true / 아니면 false
        // console.log(!title)   // false
        // console.log(typeof(!title))   //boolen
        if( !title || !content || !name){   //빈칸
            alert("빈칸입니다. \n데이터를 확인해주세요");
            return;
        }
        let userInput = {
            ...inputs,
            createDate : new Date().toLocaleDateString()
        }
        // 3. 글쓰기 axios - post localhost:4000/baord {'':'','':''} <= userInput
        axios.post('/board/',userInput)
            .then( (response)=>{ alert("글쓰기에 성공했습니다."); navi('/board/list')})
            .catch( (error)=>{console.log(error)} )

        // 4. 빈칸으로
        setInputs({title:'', content:'', name:''})
    }

    /// List btn
    const btnList = () => { navi('/board/list'); }

    ///// view
    return(
        <>
        <h3 className='mt-5' style={{fontWeight:"bold"}}>Write</h3>
        <div className='alert alert-secondary'>
            {/* --- Writer --- */}
            <div className='my-3'>
                <label htmlFor='bname' className='form-label'>Writer</label>
                <input type='text' className='form-control' id='bname' name='name'
                    value={ inputs.name }
                    onChange={function(e) { 
                        setInputs({ ...inputs , [e.target.name]: e.target.value })
                    }} />
            </div>

            {/* --- Title --- */}
            <div className='my-3'>
                <label htmlFor='btitle' className='form-label'>Title</label>
                <input type='text' className='form-control' id='btitle' name='title'
                    value={ inputs.title }
                    onChange={function(e) { 
                        setInputs({ ...inputs , [e.target.name]: e.target.value })
                    }} />
            </div>

            {/* --- Content --- */}
            <div className='my-3'>
                <label htmlFor='bcontent' className='form-label'>Content</label>
                <textarea className='form-control' id='bcontent' name='content'
                    value={ inputs.content }
                    onChange={function(e) { 
                        setInputs({ ...inputs , [e.target.name]: e.target.value })
                    }} ></textarea>
            </div>

        </div>
        <div className='my-3'>
            <button type="button" className='btn btn-primary me-2' onClick={btnWrite}>Write</button>
            <button type="button" className='btn btn-primary me-2' onClick={btnList}>List</button>
        </div>
        </>
    )
}