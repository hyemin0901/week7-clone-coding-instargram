import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import MyBoards from "./components/parkmade/myProfilepage/MyBoards";
import Saved from "./components/parkmade/myProfilepage/Saved";
import Tagged from "./components/parkmade/myProfilepage/Tagged";
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
        path: "my-profile/:id",
        element: <MyProfile />,
        children: [
          {
            path: "",
            element: <MyBoards />
          },
          {
            path: "saved",
            element: <Saved />
          },
          {
            path: "tagged",
            element: <Tagged />
          }
        ]
      }
    ]
  }
]);

export default router;