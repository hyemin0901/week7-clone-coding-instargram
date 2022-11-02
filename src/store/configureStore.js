import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import user from "./modules/userSlice";

const store = configureStore({
  reducer: {},
});

export default store;

// 만약 리덕스 사용하시면 module내부에 파일을 만드시고,
// 이곳에 연동해 주세요
