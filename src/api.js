// axios 쓸 곳
import axios from "axios";

// 엑시오스 사용할 일 있으시면 아래의 axiosIns 를 import 해서 쓰시면 됩니다.
export const axiosIns = axios.create({
  baseURL: "http://43.201.48.23"
});
// 인터셉터로 토큰 담기
axiosIns.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem("access_token");
    if (accessToken) {
      config.headers["Access_Token"] = accessToken;
    }
    return config;
  }
)

export const postSignUp = async (userData) => {
  const { data } = await axiosIns.post("/api/signup", userData);
  return data;
};
export const postLogin = async (userData) => {
  const data = await axiosIns.post("/api/login", userData);
  return data;
};
export const postBoard = async (BoardData) => {
  const data  = await axiosIns.post("/post", BoardData);
  return data;
}
export const getBoards = async () => {
  const {data}  = await axiosIns.get("/post");
  return data;
}
export const getDetailBoard = async (postId) => {
  const {data} = await axiosIns.get(`/post/${postId}`);
  return data;
}
export const putDetailData = async (postIdWithData) => {
  const data = await axiosIns.put(`/post/${postIdWithData[0]}`, postIdWithData[1]);
  return data;
}
export const deleteBoard = async (postId) => {
  const {data} = await axiosIns.delete(`/post/${postId}`);
  return data;
}
export const postLike = async (postId) => {
  const data = await axiosIns.post(`/post/like`, postId);
  return data;
}
export const getMyBoards = async () => {
  const data = await axiosIns.get(`/mypost`);
  return data;
}
export const postComment = async (postIdWithComment) => {
  const data = await axiosIns.post(`/post/${postIdWithComment[0]}/comment`, postIdWithComment[1]);
  return data;
}
export const deleteComment = async (Ids) => {
  const data = await axiosIns.delete(`/post/${Ids[0]}/comment/${Ids[1]}`);
  return data;
}
export const postCommentLike = async (commentId) => {
  const data = await axiosIns.post(`/comment/like`, commentId);
  return data;
}
