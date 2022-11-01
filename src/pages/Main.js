import NavBar from "../components/parkmade/common/NavBar";
import Boards from "../components/parkmade/mainPage/Boards";
import { useState } from "react";
import PostingModal from "../components/parkmade/common/PostingModal";
import DeleteModal from "../components/parkmade/common/DeleteModal";
import DetailBoardModal from "../components/parkmade/common/DetailBoardModal";

function Main() {
  // 전역으로 관리해주고 싶지만, 내 파트가 많았고 아니였던 파트도 갑작스레 맡게되어 시간적 여유가없어 나중으로 미룸.
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
