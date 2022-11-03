import { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { getDetailBoard } from "../../../api";
import pepe from "../../../img/icons8-monkas-48.png"

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
  width: 1370px;
  height: 920px;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  background-color: white;
  display: flex;
`
const UpperImgDiv = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Img = styled.img`
  width: 100%;
  height: 100%;
  border-right: 1px solid rgb(219, 219, 219);
`;
const UpperCommentsDiv = styled.div`
  width: 30%;
  height: 100%;
`;
const WriterDiv = styled.div`
  width: 100%;
  height: 7%;
  border-bottom: 1px solid rgb(219, 219, 219);
  display: flex;
  justify-content: center;
  align-items: center;
`;
const WriterImgNmeDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  color: rgb(38,38,38);
  font-size: 14px;
`;
const WriterName = styled.span`
  height: 18px;
  color: rgb(38,38,38);
  font-size: 14px;
  font-weight: 600;
  margin-right: 7px;
`;
const WriterImg = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 16px;
  background-color: gray;
  margin: 0px 15px;
`;
const WriterFollow = styled.span`
  color: rgb(0, 149, 246);
  font-size: 14px;
  font-weight: 600;
`;
const ThreeDot = styled.div`
  width: 10%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 165px;
`;
const CommentDiv = styled.div`
  width: 100%;
  height: 75%;
  border-bottom: 1px solid rgb(219, 219, 219);
  overflow: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;
const WriteComment = styled.div`
  width: 100%;
  height: 18%;
`;
const FirWriteComment = styled.div`
  width: 100%;
  height: 68%;
`;
const Clicks = styled.div`
  width: 100%;
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
  margin: 0px -10px 0px 240px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
const LikeGuys = styled.div`
  height: 24px;
  width: 100%;
  padding: 0px 12.5px;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 8px;
`;
const Date = styled.div`
  width: 100%;
  height: 18px;
  padding: 0px 12.5px;
  margin-bottom: 12px;
  color: rgb(142, 142, 142);
  font-size: 10px;
`;
const SecWriteComment = styled.div`
  width: 100%;
  height: 32%;
  display: flex;
  align-items: center;
`;
const SmileDiv = styled.div`
  height: 100%;
  width: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
const Smile = styled.div`
  width: 24px;
  height: 24px;
  padding: 8px 12px 8px 12px;
  cursor: pointer;
`;
const Form = styled.form`
  width: 90%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const TextInput = styled.input`
  height: 90%;
  width: 80%;
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
  margin-right: 15px;
  font-weight: 600;
  background-color: white;
  cursor: pointer;
`;

const DetailBoardModal = ({isDetailOpen, setIsDetailOpen}) => {
  const modalRef = useRef();
  const postId = useSelector(state=>state.getIds.userId);
  const { register, handleSubmit, getValues, setValue } = useForm();
  const { isLoading, data } = useQuery(["getDetail"], getDetailBoard(postId));
  const skip = () => { alert("이 기능은 스킵합니다.") }
  const submit = () => {
    // 폼데이터 가져와서 mutate로 통신.
  }
  const postHart = () => {
    // hart()
  }
  useEffect(() => {
    document.addEventListener('mousedown', clickModalOutside);
    return () => {document.removeEventListener('mousedown', clickModalOutside)};
  });
  const clickModalOutside = ev => {
    if (isDetailOpen && !modalRef.current.contains(ev.target)) {
      setIsDetailOpen(false);
    }
  };
  return (
    <div>
      {!isLoading ?
        <Wrap>
          <h1>now Loading</h1>
        </Wrap> :
        <Wrap>
          <UpperDiv ref={modalRef}>
            <UpperImgDiv>
              <Img src={pepe} />
            </UpperImgDiv>
            <UpperCommentsDiv>
              <WriterDiv>
                <WriterImgNmeDiv>
                  <WriterImg src={pepe} />
                  <WriterName>
                    {`작성자 아이디`}
                  </WriterName>
                  <WriterFollow>
                    팔로우
                  </WriterFollow>
                  <ThreeDot>
                    <svg aria-label="옵션 더 보기" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24">
                      <circle cx="12" cy="12" r="1.5"></circle><circle cx="6" cy="12" r="1.5"></circle>
                      <circle cx="18" cy="12" r="1.5"></circle>
                    </svg>
                  </ThreeDot>
                </WriterImgNmeDiv>
              </WriterDiv>
              <CommentDiv>
                {`커멘트들 데이터받아와서 .map돌려야함. 각각의 prop감쌀 div 그떄 만들자.`}
              </CommentDiv>
              <WriteComment>
                <FirWriteComment>
                  <Clicks>
                    <UpperIcon style={{ marginLeft: "-8px" }} onClick={postHart}>
                      <svg aria-label="활동 피드" color="#262626" fill="#262626" height="24" role="img"
                        viewBox="0 0 24 24" width="24">
                        <path d="M16.792 3.904A4.989 4.989 0 0121.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 014.708-5.218 4.21 4.21 0 013.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 013.679-1.938m0-2a6.04 6.04 0 00-4.797 2.127 6.052 6.052 0 00-4.787-2.127A6.985 6.985 0 00.5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 003.518 3.018 2 2 0 002.174 0 45.263 45.263 0 003.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 00-6.708-7.218z"></path>
                      </svg>
                    </UpperIcon>
                    <UpperIcon onClick={null}>
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
                    {/* 만약 좋아요가 2이상이면 => 여러명이 좋아합니다. 아니면 => 한명이 좋아합니다.  */}
                    {`여러명이 좋아합니까..?`}
                  </LikeGuys>
                  <Date>
                    {/* 작성날짜 받아와서 표기 */}
                    {`10월 28일`}
                  </Date>
                </FirWriteComment>
                <SecWriteComment>
                  <SmileDiv>
                    <Smile onClick={skip}>
                      <svg aria-label="이모티콘" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24">
                        <path d="M15.83 10.997a1.167 1.167 0 1 0 1.167 1.167 1.167 1.167 0 0 0-1.167-1.167Zm-6.5 1.167a1.167 1.167 0 1 0-1.166 1.167 1.167 1.167 0 0 0 1.166-1.167Zm5.163 3.24a3.406 3.406 0 0 1-4.982.007 1 1 0 1 0-1.557 1.256 5.397 5.397 0 0 0 8.09 0 1 1 0 0 0-1.55-1.263ZM12 .503a11.5 11.5 0 1 0 11.5 11.5A11.513 11.513 0 0 0 12 .503Zm0 21a9.5 9.5 0 1 1 9.5-9.5 9.51 9.51 0 0 1-9.5 9.5Z"></path>
                      </svg>
                    </Smile>
                  </SmileDiv>
                  <Form onSubmit={handleSubmit(submit)}>
                    <TextInput {...register("texting")}
                      type="textarea" placeholder="댓글 달기..." />
                    <PostBtn>
                      게시
                    </PostBtn>
                  </Form>
                </SecWriteComment>
              </WriteComment>
            </UpperCommentsDiv>
          </UpperDiv>
        </Wrap>
      }
    </div>
  );
}

export default DetailBoardModal;