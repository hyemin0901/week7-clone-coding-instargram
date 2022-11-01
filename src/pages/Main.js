import NavBar from "../components/parkmade/NavBar";
import Boards from "../components/parkmade/mainPage/Boards";
import { useState } from "react";
import PostingModal from "../components/parkmade/PostingModal";
import DeleteModal from "../components/parkmade/DeleteModal";
import DetailBoardModal from "../components/parkmade/DetailBoardModal";

function Main() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  return (
    <div>
      <NavBar setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen}/>
      {isModalOpen && <PostingModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />}
      {isDeleteModalOpen && <DeleteModal isDeleteModalOpen={isDeleteModalOpen} setIsDeleteModalOpen={setIsDeleteModalOpen} />}
      {isDetailOpen && <DetailBoardModal isDetailOpen={isDetailOpen} setIsDetailOpen={setIsDetailOpen}/>}
      <Boards setIsDeleteModalOpen={setIsDeleteModalOpen} setIsDetailOpen={setIsDetailOpen} />
    </div>
  );
}

export default Main;
