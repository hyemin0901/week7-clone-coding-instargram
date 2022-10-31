import NavBar from "../components/parkmade/NavBar";
import Boards from "../components/parkmade/mainPage/Boards";
import { useState } from "react";
import PostingModal from "../components/parkmade/PostingModal";
import DeleteModal from "../components/parkmade/DeleteModal";

function Main() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  return (
    <div>
      <NavBar setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen}/>
      {isModalOpen && <PostingModal setIsModalOpen={setIsModalOpen} />}
      {isDeleteModalOpen && <DeleteModal setIsDeleteModalOpen={setIsDeleteModalOpen} />}
      <Boards setIsDeleteModalOpen={setIsDeleteModalOpen} />
    </div>
  );
}

export default Main;
