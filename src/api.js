// axios 쓸 곳
import axios from "axios";

// 엑시오스 사용할 일 있으시면 아래의 axiosIns 를 import 해서 쓰시면 됩니다.
export const axiosIns = axios.create({
  baseURL: "URL이 아직 정해지지 않았습니다."
});