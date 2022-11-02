// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import axios from "axios";

// const __validateName = createAsyncThunk(
//   "VALIDATE_NAME",
//   async (arg, thunkAPI) => {
//     try {
//       const { result } = await axios
//         .post("http://43.201.48.23:8080/api/signup", arg)
//         .then((res) => res.date);

//       if (!result) throw result;
//       return thunkAPI.fulfillWithValue(result);
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e);
//     }
//   }
// );

// export const __addUser = createAsyncThunk("ADD_USER", async (arg, thunkAPI) => {
//   try {
//     const res = await axios.post("http://43.200.182.245:8080/api/signup", arg);
//     if (!res.data.result) {
//       alert("회원가입에 실패하였습니다.");
//     }
//     console.log(res);
//     return thunkAPI.fulfillWithValue(arg);
//   } catch (e) {
//     return thunkAPI.rejectWithValue(e);
//   }
// });

// export const __loginUser = createAsyncThunk(
//   "LOGIN_USER",
//   async (arg, thunkAPI) => {
//     try {
//       const res = await axios.post("http://43.200.182.245:8080/api/login", arg);
//       if (!res.data.result) throw res;
//       return thunkAPI.fulfillWithValue(res);
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e);
//     }
//   }
// );
// //전역에서 관리하는 것
// const initialState = {
//   user: { name: "" },
//   isLoading: false,
//   message: "",
//   isLogin: false,
//   validateName: false,
// };

// const userSlice = createSlice({
//   name: "username",
//   initialState,
//   reducers: {
//     loginState: (state) => {
//       state.isLogin = true;
//     },
//     logoutState: (state) => {
//       state.isLogin = false;
//     },
//     validateNameChange: (state) => {
//       state.validateName = false;
//     },
//   },
//   extraReducers: {
//     [__validateName.pending]: (state, action) => {
//       state.isLoading = true;
//     },
//     [__validateName.fulfilled]: (state, action) => {
//       state.isLoading = false;
//       state.validateName = true;
//       alert("사용 가능한 닉네임입니다.");
//     },
//     [__validateName.rejected]: (state, action) => {
//       state.isLoading = false;
//       state.validateName = false;
//       alert("사용 불가능한 닉네임입니다.");
//     },
//     [__addUser.pending]: (state, action) => {
//       state.isLoading = true;
//     },
//     [__addUser.fulfilled]: (state, action) => {
//       state.isLoading = false;
//       alert(`${action.payload.name}님 회원가입을 축하합니다. 로그인 해주세요.`);
//     },
//     [__addUser.rejected]: (state, action) => {
//       state.isLoading = false;
//       state.message = "데이터를 불러오지 못했습니다.";
//     },

//     [__loginUser.pending]: (state, action) => {
//       state.isLoading = true;
//     },
//     [__loginUser.fulfilled]: (state, action) => {
//       state.isLoading = false;
//       state.isLogin = true;
//       sessionStorage.setItem("token", action.payload.headers.accesstoken);
//       sessionStorage.setItem(
//         "refreshtoken",
//         action.payload.headers.refreshtoken
//       );
//       sessionStorage.setItem("name", action.payload.data.check.data.name);
//       //좋아요를 계속 유지시켜야하기 때문에. 토큰은 사용자에 대한 정보. 서버로 요청을 보낼때 토큰을 같이 싣어 보내서 사용자가 누구인지 확인하기 위해서.
//       alert(`${action.payload.data.check.data.name}님 환영합니다.`);
//     },
//     [__loginUser.rejected]: (state, action) => {
//       state.isLoading = false;
//       state.isLogin = false;
//       alert("아이디와 비밀번호를 확인해주세요.");
//     },
//   },
// });

// export default userSlice.reducer;
