import { useState } from "react";
import DeleteModal from "../components/parkmade/common/DeleteModal";
import DetailBoardModal from "../components/parkmade/common/DetailBoardModal";
import Profile from "../components/parkmade/myProfilepage/Profile";
import Selector from "../components/parkmade/myProfilepage/Selector";
import NavBar from "../components/parkmade/common/NavBar";
import PostingModal from "../components/parkmade/common/PostingModal";
import { useQuery } from "react-query";
import { getBoards, getMyBoards } from "../api";

function MyProfile() {
  // 전역으로 관리해주고 싶지만, 내 파트가 많았고 아니였던 파트도 갑작스레 맡게되어 시간적 여유가없어 나중으로 미룸.
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const { isLoading, data } = useQuery(["getAllMyBoard"], getMyBoards);
  return (
    <div>
      {isLoading?
        <h1>now Loading...</h1> :
        <div>
          <NavBar setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen}/>
          {isModalOpen && <PostingModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />}
          {isDeleteModalOpen && <DeleteModal isDeleteModalOpen={isDeleteModalOpen} setIsDeleteModalOpen={setIsDeleteModalOpen} />}
          {isDetailOpen && <DetailBoardModal isDetailOpen={isDetailOpen} setIsDetailOpen={setIsDetailOpen}/>}
          <Profile />
          <Selector data={data.data.data}/>
        </div>
      }
    </div>
  );
}

export default MyProfile;
