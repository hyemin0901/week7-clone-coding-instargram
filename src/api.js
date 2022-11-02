// axios 쓸 곳
import axios from "axios";

// 엑시오스 사용할 일 있으시면 아래의 axiosIns 를 import 해서 쓰시면 됩니다.
export const axiosIns = axios.create({
  baseURL: "http://43.201.48.23",
});

export const postSignUp = async (userData) => {
  const { data } = await axiosIns.post("/api/signup", userData);
  return data;
};

export const postLogin = async (userData) => {
  const data = await axiosIns.post("/api/login", userData);
  return data;
};
