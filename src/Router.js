import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import LogInOut from "./pages/LogInOut";
import Main from "./pages/Main";
import MyProfile from "./pages/MyProfile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        // "/" 에 <LogInOut /> 이 렌더된다는 뜻 
        path: "",
        element: <LogInOut />
      },
      {
        // "/main" 에 <Main /> 이 렌더된다는 뜻
        path: "main",
        element: <Main />
      },
      {
        // "/myProfile/:id" 에 <MyProfile /> 이 렌더된다는 뜻
        path: "myProfile/:id",
        element: <MyProfile />
      }
    ]
  }
]);

export default router;