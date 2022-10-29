import Profile from "../components/parkmade/myProfilepage/Profile";
import Selector from "../components/parkmade/myProfilepage/Selector";
import NavBar from "../components/parkmade/NavBar";

function MyProfile() {
  return (
    <div style={{height:"3000px"}}>
      <NavBar />
      <Profile />
      <Selector />
    </div>
  );
}

export default MyProfile;
