import styled from "styled-components";
import camera from "../../../img/camera.png";

const EmptyDataDiv = styled.div`
  width: 300px;
  height: 185px;
  margin: 60px 44px;
  display: flex;
  justify-content: center;
`;
const UpperCameraImgDiv = styled.div`
  height: 62px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const CameraImgBtn= styled.button`
  width: 62px;
  height: 62px;
  border-radius: 31px;
  border: 2px solid;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
`;
const CameraImg = styled.img`
  width: 45px;
  height: 45px;
`;
const TextShare = styled.div`
  height: 21px;
  margin: 24px 0px;
  font-size: 28px;
  font-weight: 300;
  color: rgb(38, 38, 38);
  display: flex;
  justify-content: center;
  align-items: center;
`;
const TextTwo = styled.div`
  height: 18px;
  margin-bottom: 17px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 13px;
  font-weight: 400;
  color: rgb(38, 38, 38);
`;
const ShareBtn = styled.button`
  height: 18px;
  display: flex;
  justify-content: center;
  background-color: transparent;
  border: none;
  color: rgb(0, 149, 246);
  font-weight: 600;
  font-size: 14ox;
  margin: auto;
`;

const EmptyBoards = () => {
  return (
    <EmptyDataDiv>
      <div>
        <UpperCameraImgDiv>
          <CameraImgBtn>
            <CameraImg src={camera} />
          </CameraImgBtn>
        </UpperCameraImgDiv>
        <TextShare>
          사진 공유
        </TextShare>
        <TextTwo>
          사진을 공유하면 회원님의 프로필에 표시됩니다.
        </TextTwo>
        <ShareBtn>
          첫 사진 공유하기
        </ShareBtn>
      </div>
    </EmptyDataDiv>
  );
}

export default EmptyBoards;