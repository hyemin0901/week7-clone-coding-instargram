import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import styled from "styled-components";
import { postBoard } from "../../../api";
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
const FirUpperDiv = styled(motion.div)`
  position: absolute;
  width: 750px;
  height: 790px;
  border-radius: 8px;
  background-color: white;
`;
const SecUpperDiv = styled(motion.div)`
  position: absolute;
  width: 1090px;
  height: 790px;
  border-radius: 8px;
  background-color: white;
`;
const TopText = styled.div`
  width: 100%;
  height: 42px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-weight: 600;
  color: rgb(38,38,38);
  border-bottom: 1px solid rgb(219, 219, 219);
`;
const NextBtn = styled(motion.div)`
  position: absolute;
  right: 0;
  width: 28px;
  height: 18px;
  padding: 16px;
  font-size: 14px;
  font-weight: 600;
  color: rgb(0, 149, 246);
  cursor: pointer;
`;
const GetImgDiv = styled.div`
  width: 100%;
  height: 748px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;
const OverlapDiv = styled.div`
  text-align: center;
  height: 142px;
  width: 100%;
`;
const ChoiceImgBtn = styled.button`
  border: none;
  border-radius: 5px;
  width: 122px;
  background-color: #0095f6;
  color: white;
  font-size: 14px;
`;
const CountFiles = styled.div`
  margin-top: 10px;
`;
const DropInput = styled.input`
  width: 100%;
  height: 100%;
  cursor: pointer;
  position: absolute;
  opacity: 0;
`;
const DropImg = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  border-bottom-left-radius: 8px;
`;
const PostingImgDiv = styled.div`
  width: 69%;
  height: 748px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 1px solid rgb(219, 219, 219);
`;
const PostContentDiv = styled.div`
  width: 31%;
  height: 748px;
  display: flex;
  justify-content: center;
`;
const PostingBtn = styled.button`
  position: absolute;
  right: 0;
  height: 18px;
  border: none;
  margin-right: 16px;
  background-color: white;
  padding: 0px;
  font-size: 14px;
  font-weight: 600;
  color: rgb(0, 149, 246);
  cursor: pointer;
`;
const TextingArea = styled.div`
  width: 100%;
  height: 438px;
`;
const WriterInfo = styled.div`
  width: 90%;
  height: 60px;
  margin: 0 auto;
  display: flex;
  align-items: center;
`;
const MyImgDiv = styled.div`
  width: 28px;
  height: 28px;
  margin-right: 12px;
  display: flex;
`;
const MyImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: gray;
`;
const MyId = styled.div`
  height: 60px;
  font-size: 16px;
  font-weight: 600;
  color: rgb(38,38,38);
  display: flex;
  align-items: center;
`;
const TextArea = styled.div`
  width: 90%;
  height: 168px;
  margin: 3px auto;
`;
const TextInput = styled.textarea`
  width: 100%;
  height: 100%;
  border: none;
  background-color: white;
  resize: none;
`;
const WriteCountDiv = styled.div`
  width: 100%;
  height: 44px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgb(219, 219, 219);
`;
const EmoDiv = styled.div`
  height: 36px;
  width: 78%;
  padding: 4px 5px;
  display: flex;
  align-items: center;
`;
const CounterDiv = styled.div`
  width: 20%;
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Counter = styled.div`
  height: 16px;
  color: rgb(199,199,199);
  font-size: 12px;
  font-weight: 400;
`;
const LocationDiv = styled.div`
  width: 100%;
  height: 44px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgb(219, 219, 219);
`;
const Location = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  height: 36px;
  padding: 4px 13px;
  color: #8e8e8e;
`;
const LocationIcon = styled.div`
  width: 16px;
  height: 16px;
  margin-left: 8px;
`;
const AccessDiv = styled.div`
  width: 100%;
  height: 44px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgb(219, 219, 219);
`;
const Access = styled.div`
  display: flex;
  align-items: center;
  height: 44px;
  padding-left: 15px;
`;
const FancyDiv = styled.div`
  width: 100%;
  height: 44px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgb(219, 219, 219);
`;
const Fancy = styled.div`
  display: flex;
  align-items: center;
  height: 44px;
  padding-left: 15px;
`;
const VIcon = styled.div`
  display: flex;
  align-items: center;
  height: 44px;
  padding-left: 18px;
  transform: rotate(180deg);
`;


const PostingModal = ({isModalOpen, setIsModalOpen}) => {
  const modalRef = useRef();
  const [firStep, setFirStep] = useState(true);
  const [secStep, setSecStep] = useState(true);
  const [fileList, setFileList] = useState([]);
  const [fileUrlList, setFileUrlList] = useState([]);
  const { register, handleSubmit, setValue, getValues } = useForm();
  const { mutate } = useMutation(postBoard, {
    onSuccess: (res) => {
      alert("게시글 등록 완료!");
      setIsModalOpen(false)
      setFileList([]);
      setFileUrlList([]);
      setValue("text", "")
    }
  });
  const nextStepOne = () => { 
    if (fileList.length) {
      setFirStep(false)
    } else {
      alert("사진을 올려주세요.")
    }
  }
  const nextStepTwo = () => { setSecStep(false) }
  const onFileDrop = (ev) => {
    const newFile = ev.target.files[0];
    if (newFile) {
      const url = URL.createObjectURL(newFile);
      const updatedList = [...fileList, newFile];
      const updatedUrl = [...fileUrlList, url];
      setFileList(updatedList);
      setFileUrlList(updatedUrl);
    }
  }
  const submit = (data) => {
    // 벡엔드 줄때 블랍을 디폴트로생각해야 할듯.
    const blob = new Blob([JSON.stringify({"content":data.text})], {type: "application/json" })
    const formData = new FormData();
    fileList.map((prop)=> formData.append("file", prop));
    formData.append("post", blob);
    mutate(formData);
  }
  useEffect(() => {
    document.addEventListener('mousedown', clickModalOutside);
    return () => {document.removeEventListener('mousedown', clickModalOutside)};
  });
  const clickModalOutside = ev => {
    if (isModalOpen && !modalRef.current.contains(ev.target)) {
      setIsModalOpen(false);
    }
  };
  return (
    <Wrap>
      {firStep ?
        <FirUpperDiv ref={modalRef}>
          <TopText>
            새 게시물 만들기
            <NextBtn onClick={nextStepOne}>
                다음
            </NextBtn>
          </TopText>
          <GetImgDiv>
            <OverlapDiv>
              <div style={{height:"77px", display:"flex", justifyContent:"center", marginBottom:"10px"}}>
                <svg aria-label="이미지나 동영상과 같은 미디어를 나타내는 아이콘" color="#262626" fill="#262626" height="77" role="img" viewBox="0 0 97.6 77.3" width="96">
                  <path d="M16.3 24h.3c2.8-.2 4.9-2.6 4.8-5.4-.2-2.8-2.6-4.9-5.4-4.8s-4.9 2.6-4.8 5.4c.1 2.7 2.4 4.8 5.1 4.8zm-2.4-7.2c.5-.6 1.3-1 2.1-1h.2c1.7 0 3.1 1.4 3.1 3.1 0 1.7-1.4 3.1-3.1 3.1-1.7 0-3.1-1.4-3.1-3.1 0-.8.3-1.5.8-2.1z" fill="currentColor"></path>
                  <path d="M84.7 18.4 58 16.9l-.2-3c-.3-5.7-5.2-10.1-11-9.8L12.9 6c-5.7.3-10.1 5.3-9.8 11L5 51v.8c.7 5.2 5.1 9.1 10.3 9.1h.6l21.7-1.2v.6c-.3 5.7 4 10.7 9.8 11l34 2h.6c5.5 0 10.1-4.3 10.4-9.8l2-34c.4-5.8-4-10.7-9.7-11.1zM7.2 10.8C8.7 9.1 10.8 8.1 13 8l34-1.9c4.6-.3 8.6 3.3 8.9 7.9l.2 2.8-5.3-.3c-5.7-.3-10.7 4-11 9.8l-.6 9.5-9.5 10.7c-.2.3-.6.4-1 .5-.4 0-.7-.1-1-.4l-7.8-7c-1.4-1.3-3.5-1.1-4.8.3L7 49 5.2 17c-.2-2.3.6-4.5 2-6.2zm8.7 48c-4.3.2-8.1-2.8-8.8-7.1l9.4-10.5c.2-.3.6-.4 1-.5.4 0 .7.1 1 .4l7.8 7c.7.6 1.6.9 2.5.9.9 0 1.7-.5 2.3-1.1l7.8-8.8-1.1 18.6-21.9 1.1zm76.5-29.5-2 34c-.3 4.6-4.3 8.2-8.9 7.9l-34-2c-4.6-.3-8.2-4.3-7.9-8.9l2-34c.3-4.4 3.9-7.9 8.4-7.9h.5l34 2c4.7.3 8.2 4.3 7.9 8.9z" fill="currentColor"></path><path d="M78.2 41.6 61.3 30.5c-2.1-1.4-4.9-.8-6.2 1.3-.4.7-.7 1.4-.7 2.2l-1.2 20.1c-.1 2.5 1.7 4.6 4.2 4.8h.3c.7 0 1.4-.2 2-.5l18-9c2.2-1.1 3.1-3.8 2-6-.4-.7-.9-1.3-1.5-1.8zm-1.4 6-18 9c-.4.2-.8.3-1.3.3-.4 0-.9-.2-1.2-.4-.7-.5-1.2-1.3-1.1-2.2l1.2-20.1c.1-.9.6-1.7 1.4-2.1.8-.4 1.7-.3 2.5.1L77 43.3c1.2.8 1.5 2.3.7 3.4-.2.4-.5.7-.9.9z" fill="currentColor"></path>
                </svg>
              </div>
              <div style={{height:"26px", fontSize:"22px", color:"rgb(38,38,38)", textAlign:"center"}}>
                사진과 동영상을 여기에 끌어다 놓으세요
              </div>
              <div style={{display:"flex", justifyContent:"center", height:"30px", marginTop:"15px"}}>
              <ChoiceImgBtn>
                컴퓨터에서 선택
              </ChoiceImgBtn>
              </div>
              <CountFiles>
                {`등록한 사진 수 : ${fileList.length}`}
              </CountFiles>
            </OverlapDiv>
            <DropInput type="file" onChange={onFileDrop} />
          </GetImgDiv>
        </FirUpperDiv>
        :
        secStep ?
          <FirUpperDiv layoutId="1" ref={modalRef}>
            <TopText>
              새 게시물 만들기
              <NextBtn onClick={nextStepTwo}>
                다음
              </NextBtn>
            </TopText>
            <GetImgDiv>
              <DropImg src={fileUrlList[0]} style={{borderBottomRightRadius:"8px"}}/>
            </GetImgDiv>
          </FirUpperDiv>
          :
          <SecUpperDiv layoutId="1" ref={modalRef}>
            <form onSubmit={handleSubmit(submit)}>
              <TopText>
                새 게시물 만들기
                <PostingBtn>
                  공유하기
                </PostingBtn>
              </TopText>
              <div style={{ display: "flex" }}>
                <PostingImgDiv>
                  <DropImg src={fileUrlList[0]} style={{height:"94.5%", width:"68.8%"}}/>
                </PostingImgDiv>
                <PostContentDiv>
                  <TextingArea>
                    <WriterInfo>
                      <MyImgDiv>
                        <MyImg src={pepe}/>
                      </MyImgDiv>
                      <MyId>
                        {`PEPE`}
                      </MyId>
                    </WriterInfo>
                    <TextArea>
                      <TextInput {...register("text")} placeholder="문구 입력"/> 
                    </TextArea>
                    <WriteCountDiv>
                      <EmoDiv>
                        <div style={{width:"20px", height:"20px", padding:"8px"}}>
                          <svg aria-label="이모티콘" color="#8e8e8e" fill="#8e8e8e" height="20" role="img" viewBox="0 0 24 24" width="20">
                            <path d="M15.83 10.997a1.167 1.167 0 1 0 1.167 1.167 1.167 1.167 0 0 0-1.167-1.167Zm-6.5 1.167a1.167 1.167 0 1 0-1.166 1.167 1.167 1.167 0 0 0 1.166-1.167Zm5.163 3.24a3.406 3.406 0 0 1-4.982.007 1 1 0 1 0-1.557 1.256 5.397 5.397 0 0 0 8.09 0 1 1 0 0 0-1.55-1.263ZM12 .503a11.5 11.5 0 1 0 11.5 11.5A11.513 11.513 0 0 0 12 .503Zm0 21a9.5 9.5 0 1 1 9.5-9.5 9.51 9.51 0 0 1-9.5 9.5Z"></path>
                          </svg>
                        </div>
                      </EmoDiv>
                      <CounterDiv>
                        <Counter>
                          {`0/2,200`}
                        </Counter>
                      </CounterDiv>
                    </WriteCountDiv>
                    <LocationDiv>
                      <Location>
                        위치 추가
                      </Location>
                      <LocationIcon>
                        <svg aria-label="위치 추가" color="#262626" fill="#262626" height="16" role="img" viewBox="0 0 24 24" width="16">
                          <path d="M12.053 8.105a1.604 1.604 0 1 0 1.604 1.604 1.604 1.604 0 0 0-1.604-1.604Zm0-7.105a8.684 8.684 0 0 0-8.708 8.66c0 5.699 6.14 11.495 8.108 13.123a.939.939 0 0 0 1.2 0c1.969-1.628 8.109-7.424 8.109-13.123A8.684 8.684 0 0 0 12.053 1Zm0 19.662C9.29 18.198 5.345 13.645 5.345 9.66a6.709 6.709 0 0 1 13.417 0c0 3.985-3.944 8.538-6.709 11.002Z"></path>
                        </svg>
                      </LocationIcon>
                    </LocationDiv>
                    <AccessDiv>
                      <Access>
                        접근성
                      </Access>
                      <VIcon>
                        <svg aria-label="아래쪽 V자형 아이콘" color="#262626" fill="#262626" height="16" role="img" viewBox="0 0 24 24" width="16">
                            <path d="M21 17.502a.997.997 0 0 1-.707-.293L12 8.913l-8.293 8.296a1 1 0 1 1-1.414-1.414l9-9.004a1.03 1.03 0 0 1 1.414 0l9 9.004A1 1 0 0 1 21 17.502Z"></path>
                        </svg>
                      </VIcon>
                    </AccessDiv>
                    <FancyDiv>
                      <Fancy>
                        고급 설정
                      </Fancy>
                      <VIcon>
                        <svg aria-label="아래쪽 V자형 아이콘" color="#262626" fill="#262626" height="16" role="img" viewBox="0 0 24 24" width="16">
                          <path d="M21 17.502a.997.997 0 0 1-.707-.293L12 8.913l-8.293 8.296a1 1 0 1 1-1.414-1.414l9-9.004a1.03 1.03 0 0 1 1.414 0l9 9.004A1 1 0 0 1 21 17.502Z"></path>
                        </svg>
                      </VIcon>
                    </FancyDiv>
                  </TextingArea>
                </PostContentDiv>
              </div>
            </form>
          </SecUpperDiv>
      }
    </Wrap>
  );
}

export default PostingModal;