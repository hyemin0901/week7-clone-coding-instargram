import NavBar from "../components/parkmade/NavBar";
import Boards from "../components/parkmade/mainPage/Boards";
import { useState } from "react";
import PostingModal from "../components/parkmade/PostingModal";

function Main() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div>
      <NavBar setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen}/>
      {isModalOpen && <PostingModal setIsModalOpen={setIsModalOpen} />}
      <Boards />
    </div>
  );
}

export default Main;
