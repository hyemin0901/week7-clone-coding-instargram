import { useEffect, useRef } from "react";
import { useMutation } from "react-query";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { deleteBoard } from "../../../api";

const Wrap = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
`;
const UpperDiv = styled.div`
  width: 400px;
  height: 290px;
  border-radius: 8px;
  position: absolute;
  background-color: white;
`;
const InnerDiv = styled.div`
  height: 48.3px;
  width: 100%;
  border-bottom: 1px solid rgb(219, 219, 219);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: rgb(38,38,38);
  font-size: 14px;
`;

const DeleteModal = ({isDeleteModalOpen, setIsDeleteModalOpen}) => {
  // 삭제하기 버튼을 누르면 mutate 작동시키고 onSuccess시 alert하나뛰우고 모달창 끔
  // 취소 버튼 누르면 모달창 끔
  const getUserId = useSelector(state=>state.getIds.userId);
  const modalRef = useRef();
  const { mutate } = useMutation(deleteBoard, {
    onSuccess: (res) => {
      alert("삭제 완료");
      setIsDeleteModalOpen(false);
    },
    onError: () => {
      alert("삭제 권한이 없습니다.")
    }
  });
  const skip = () => {alert("이 기능은 스킵합니다.")}
  const close = () => {setIsDeleteModalOpen(false)}
  useEffect(() => {
    document.addEventListener('mousedown', clickModalOutside);
    return () => {document.removeEventListener('mousedown', clickModalOutside)};
  });
  const clickModalOutside = ev => {
    if (isDeleteModalOpen && !modalRef.current.contains(ev.target)) {
      setIsDeleteModalOpen(false);
    }
  };
  const postDelete = () => {
    mutate(getUserId)
  }
  return (
    <Wrap>
      <UpperDiv ref={modalRef}>
        <InnerDiv onClick={skip} style={{color:"rgb(237, 73, 86)", fontWeight:"700", fontSize:"14px"}}>
          신고
        </InnerDiv>
        <InnerDiv onClick={skip}>
          게시물로 이동
        </InnerDiv>
        <InnerDiv onClick={skip}>
          공유 대상...
        </InnerDiv>
        <InnerDiv onClick={skip}>
          링크 복사
        </InnerDiv>
        <InnerDiv onClick={postDelete}>
          삭제하기
        </InnerDiv>
        <InnerDiv onClick={close} style={{border:"none"}}>
          취소
        </InnerDiv>
      </UpperDiv>
    </Wrap>
  );
}

export default DeleteModal;