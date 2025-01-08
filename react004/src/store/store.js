import { configureStore, createSlice } from '@reduxjs/toolkit'

// 저장할 변수 지정
let user = createSlice({
  name: 'user',     // state이름
  initialState: {   //초기값
    email: 'tpgud3331@gmail.com',
    nickname: 'hyeong6551',
    profile: '/images/user2.png'
  },
  // 1. state초기값
  // 2. let [user, ?] = useState({email : ..., nickname:...})
  // 3. reducers : state의 값을 변경해주는 함수들을 정의, 첫번째 매개변수는 현재 state값이 들어가있음
  reducers: {
    imgChange(state){
      let random = Math.floor(Math.random()*5) + 1
      state.profile = `/images/user${random}.png`
      return state
    }
  },
})

export default configureStore({
  reducer: {
    user: user.reducer, // 변수명.reducer (state이름.reducer)
  },
})

export let {imgChange} = user.actions