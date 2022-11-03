import styled from "styled-components";
import pepe from "../../../img/icons8-monkas-48.png"
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUserId } from "../../../store/modules/parkmade/getIds";
import { postComment, postLike } from "../../../api";

const UpperDiv = styled.div`
  width: 468px;
  border: 1px solid rgb(219, 219, 219);
  border-radius: 8px;
  margin-bottom: 15px;
`;
const UpperWriterDiv = styled.div`
  width: 445px;
  height: 40px;
  padding: 0px 12.5px 0px 12.5px;
  margin: 8px 0px 8px 5px;
  display: flex;
`;
const WriterDiv = styled.div`
  width: 405px;
  height: 40px;
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: 600;
  color: rgb(38, 38, 38);
  cursor: pointer;
`;
const WriterImgDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
`;
const WriterImg = styled.img`
  height: 32px;
  width: 32px;
  border-radius: 16px;
  background-color: #CCD0D5;
  margin-right: 10px;
`;
const ThreeDot = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
const UpperMedia = styled.div`
  width: 470px;
  min-height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* position: relative; */
`;
const NextBtn = styled.button`
 position: absolute;
 right: 10px;
`;
const PreviousBtn = styled.button`
  position: absolute;
  left: 10px;
`;
const BoardImg = styled.img`
  width: 100%;
`;
// UpperMedia하위내용 해야됌

const UpperContents = styled.div`
  width: 470px;
`;
const Clicks = styled.div`
  width: 445px;
  height: 40px;
  padding: 0px 12.5px 6px 12.5px;
  display: flex;
`;
const UpperIcon = styled.div`
  height: 24px;
  width: 24px;
  padding: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
const BookMark = styled.div`
  width: 40px;
  height: 40px;
  margin: 0px -10px 0px 302px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const LikeGuys = styled.div`
  height: 24px;
  width: 445px;
  padding: 0px 12.5px;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 8px;
`;
const WriterContent = styled.div`
  width: 445px;
  padding: 0px 12.5px;
  font-size: 14px;
  word-break: break-all;
  margin-bottom: 8px;
`;
const WriterSpan = styled.span`
  font-size: 14px;
  font-weight: 600;
  margin-right: 5px;
`;
const Comments = styled.div`
  width: 445px;
  padding: 0px 12.5px;
  margin-bottom: 8px;
  font-weight: 400;
  font-size: 14px;
  color: rgb(142, 142, 142);
  cursor: pointer;
`;
const Date = styled.div`
  width: 445px;
  height: 18px;
  padding: 0px 12.5px;
  margin-bottom: 12px;
  color: rgb(142, 142, 142);
  font-size: 10px;
`;
const WriteDiv = styled.div`
  width: 445px;
  height: 40px;
  padding: 4px 12.5px;
  border-top: 1px solid rgb(239, 239, 239);
  display: flex;
  align-items: center;
`;
const Smile = styled.div`
  width: 24px;
  height: 24px;
  padding: 8px 12px 8px 0px;
  cursor: pointer;
`;
const Form = styled.form`
  display: flex;
`;
const TextInput = styled.input`
  width: 377px;
  height: 18px;
  padding: 0px;
  border: transparent;
  resize: none;
  word-break: break-all;
  display: flex;
  color: rgb(38, 38, 38);
  font-size: 14px;
  :focus {
    outline: none;
  }
  ::-webkit-scrollbar {
    display: none;
  }
`;
const PostBtn = styled.button`
  width: 28px;
  height: 18px;
  border: 0px transparent;
  font-size: 14px;
  padding: 0px;
  color: rgb(142, 142, 142);
  // color 인풋창 클릭시 rgb(0, 149, 246)
  font-weight: 600;
  background-color: white;
  cursor: pointer;
`;

const Board = ({setIsDeleteModalOpen, setIsDetailOpen, data}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [toDelete, setToDelete] = useState(false);
  const [imgNumber, setImgNumber] = useState(0);
  const { setValue, getValues, handleSubmit, register } = useForm();
  const { mutate:hart } = useMutation(postLike, {
    onSuccess: (res) => {
      alert("좋아요")
    }
  });
  const { mutate:write } = useMutation(postComment, {
    onSuccess: (res) => {
      alert("작성완료")
    }
  });
  const nextClick = () => {
    // setImgNumber(prev=> prev === data.postImgUrl.length-1 ? data.postImgUrl.length-1 : prev +1 )
  };
  const prevClick = () => {
    // setImgNumber(prev=> prev === 0 ? 0 : prev - 1 )
  };
  const deleteModalOpen = () => {
    dispatch(getUserId(data.id));
    setIsDeleteModalOpen(true);
  }
  const writeComment = (data) => {
    write([data.id,{"comment":data.text}])
  }
  const postHart = () => {
    hart({"post_id":"like"})
  }
  const toDetail = () => {
    dispatch(getUserId(data.id))
    setIsDetailOpen(true)
  }
  const skip = () => {
    alert("이 기능은 생략합니다.")
  }
  const goToProfile = () => { navigate(`/my-profile/${data.username}`) }
  return (
    <UpperDiv>
      <UpperWriterDiv>
        <WriterDiv onClick={goToProfile}>
          <WriterImgDiv>
            <WriterImg src={pepe} style={{height:"32px",width:"32px"}}/>
          </WriterImgDiv>
          {data.username}
        </WriterDiv>
        <ThreeDot onClick={deleteModalOpen}>
          <svg aria-label="옵션 더 보기" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24">
            <circle cx="12" cy="12" r="1.5"></circle><circle cx="6" cy="12" r="1.5"></circle>
            <circle cx="18" cy="12" r="1.5"></circle>
          </svg>
        </ThreeDot>
      </UpperWriterDiv>
      <UpperMedia>
        {/* <PreviousBtn onClick={prevClick}>
          <div style={{ position: "relative" }}>
            {`<<`}
          </div>
        </PreviousBtn>
        <NextBtn onClick={nextClick}>
          <div style={{ position: "relative" }}>
            {`>>`}
          </div>
        </NextBtn> */}
        <BoardImg src={data.postImgUrl[imgNumber]}/>
      </UpperMedia>
      <UpperContents>
        <Clicks>
          <UpperIcon style={{marginLeft:"-8px"}} onClick={postHart}>
            <svg aria-label="활동 피드" color="#262626" fill="#262626" height="24" role="img"
              viewBox="0 0 24 24" width="24">
              <path d="M16.792 3.904A4.989 4.989 0 0121.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 014.708-5.218 4.21 4.21 0 013.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 013.679-1.938m0-2a6.04 6.04 0 00-4.797 2.127 6.052 6.052 0 00-4.787-2.127A6.985 6.985 0 00.5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 003.518 3.018 2 2 0 002.174 0 45.263 45.263 0 003.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 00-6.708-7.218z"></path>
            </svg>
          </UpperIcon>
          <UpperIcon onClick={toDetail}>
            <svg aria-label="댓글 달기" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24">
              <path d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="2"></path>
            </svg>
          </UpperIcon>
          <UpperIcon onClick={skip}>
            <svg aria-label="Direct" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24">
              <line fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="2" x1="22" x2="9.218" y1="3" y2="10.083"></line>
              <polygon fill="none" points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334" stroke="currentColor" strokeLinejoin="round" strokeWidth="2"></polygon>
            </svg>
          </UpperIcon>
          <BookMark>
            <UpperIcon onClick={skip}>
              <svg aria-label="저장" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24">
                <polygon fill="none" points="20 21 12 13.44 4 21 4 3 20 3 20 21" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></polygon>
              </svg>
            </UpperIcon>
          </BookMark>
        </Clicks>
        <LikeGuys>
          {data.commentCnt>1 ? "여러명이 좋아합니다" : data.commentCnt===1 ? "1명이 좋아합니다" : "아무도 좋아하지 않아용 ㅋ"}
        </LikeGuys>
        <WriterContent>
          <WriterSpan>
          {data.username}
          </WriterSpan>
          {data.content}
        </WriterContent>
        <Comments onClick={toDetail}>
          댓글 모두 보기
        </Comments>
        <Date>
          {/* 작성날짜 받아와서 표기 */}
          {`${data.createdAt.slice(5,7)}월 ${data.createdAt.slice(8,10)}일`}
        </Date>
      </UpperContents>
      <WriteDiv>
        <Smile onClick={skip}>
          <svg aria-label="이모티콘" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24">
            <path d="M15.83 10.997a1.167 1.167 0 1 0 1.167 1.167 1.167 1.167 0 0 0-1.167-1.167Zm-6.5 1.167a1.167 1.167 0 1 0-1.166 1.167 1.167 1.167 0 0 0 1.166-1.167Zm5.163 3.24a3.406 3.406 0 0 1-4.982.007 1 1 0 1 0-1.557 1.256 5.397 5.397 0 0 0 8.09 0 1 1 0 0 0-1.55-1.263ZM12 .503a11.5 11.5 0 1 0 11.5 11.5A11.513 11.513 0 0 0 12 .503Zm0 21a9.5 9.5 0 1 1 9.5-9.5 9.51 9.51 0 0 1-9.5 9.5Z"></path>
          </svg>
        </Smile>
        <Form onSubmit={handleSubmit(writeComment)}>
          <TextInput {...register("write")}
            type="textarea" placeholder="댓글 달기..." />
          <PostBtn>
            게시
          </PostBtn>
        </Form>
      </WriteDiv>
    </UpperDiv>
  )
}

export default Board;