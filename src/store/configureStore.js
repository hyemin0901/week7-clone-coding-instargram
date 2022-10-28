import { configureStore } from "@reduxjs/toolkit";




const store = configureStore({
  reducer: {
    // 예시 입니다.
    // comments: comments,
    // details: details,
  },
});

export default store;

// 만약 리덕스 사용하시면 module내부에 파일을 만드시고,
// 이곳에 연동해 주세요