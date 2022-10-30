import { useState } from "react";
import Profile from "../components/parkmade/myProfilepage/Profile";
import Selector from "../components/parkmade/myProfilepage/Selector";
import NavBar from "../components/parkmade/NavBar";
import PostingModal from "../components/parkmade/PostingModal";

function MyProfile() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div>
      <NavBar setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen}/>
      {isModalOpen && <PostingModal setIsModalOpen={setIsModalOpen} />}
      <Profile />
      <Selector/>
    </div>
  );
}

export default MyProfile;
