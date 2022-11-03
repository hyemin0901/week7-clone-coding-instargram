import pepe from "../../../img/icons8-monkas-48.png"
import styled from "styled-components";
import { useNavigate } from "react-router-dom";


const Wrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: 87px;
`;
const UpperDiv = styled.div`
  width: 935px;
  height: 150px;
  margin-bottom: 44px;
  display: flex;

  @media screen and (max-width: 935px) {
    align-items:flex-end;
  }
`;
const UpperImgDiv = styled.div`
  width: 292px;
  height: 150px;
  margin-right: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const MyImg = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 75px;
  background-color: #CCD0D5;
`;
const UpperProfilesDiv = styled.div`
  width: 643px;
  height: 150px;
`;
const ProfileFir = styled.div`
  width: 643px;
  height: 40px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;
const IdSpan = styled.span`
  height: 40px;
  font-size: 28px;
  font-weight: 300;
`;
const EditBtn = styled.button`
  width: 94px;
  height: 30px;
  padding: 0px;
  background-color: transparent;
  border: 1px solid rgb(219, 219, 219);
  border-radius: 4px;
  color: rgb(38, 38, 38);
  font-size: 14px;
  font-weight: 600;
  margin-left: 20px;
  cursor: pointer;
`;
const EditImgDiv = styled.div`
  width: 40px;
  height: 40px;
  margin-left: 5px;
`;
const EditImgBtn = styled.button`
  width: 24px;
  height: 24px;
  padding: 8px;
  border: none;
  background-color: transparent;
`;
const ProfileSec = styled.div`
  width: 643px;
  height: 24px;
  margin-bottom: 20px;
  font-size: 16px;
  font-weight: 400;
  display: flex;
  align-items: center;
`;
const InnerSec = styled.div`
  height: 24px;
  margin-right: 40px;
  font-weight: 400;
  color: rgb(38, 38, 38);
`;
const Span = styled.span`
  font-size: 16px;
  font-weight: 600;
`;
const ProfileThird = styled.div`
  width: 643px;
  height: 24px;
  font-weight: 600;
  font-size: 16px;
`;

const Profile = () => {
  const navigate = useNavigate();
  const editProfile = () => { alert("이 기능은 생략합니다.") }
  const logOut = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    navigate("/")
  };
  return (
    <Wrap>
      <div>
        <UpperDiv>
          <UpperImgDiv>
            <MyImg src={pepe} onClick={editProfile}/>
          </UpperImgDiv>
          <UpperProfilesDiv>
            <ProfileFir>
              <IdSpan>
                {`나의 아이디`}
              </IdSpan>
              <EditBtn onClick={logOut}>
                로그 아웃
              </EditBtn>
              <EditImgDiv>
                <EditImgBtn onClick={editProfile}>
                  <svg aria-label="옵션" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24">
                    <circle cx="12" cy="12" fill="none" r="8.635" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></circle>
                    <path d="M14.232 3.656a1.269 1.269 0 0 1-.796-.66L12.93 2h-1.86l-.505.996a1.269 1.269 0 0 1-.796.66m-.001 16.688a1.269 1.269 0 0 1 .796.66l.505.996h1.862l.505-.996a1.269 1.269 0 0 1 .796-.66M3.656 9.768a1.269 1.269 0 0 1-.66.796L2 11.07v1.862l.996.505a1.269 1.269 0 0 1 .66.796m16.688-.001a1.269 1.269 0 0 1 .66-.796L22 12.93v-1.86l-.996-.505a1.269 1.269 0 0 1-.66-.796M7.678 4.522a1.269 1.269 0 0 1-1.03.096l-1.06-.348L4.27 5.587l.348 1.062a1.269 1.269 0 0 1-.096 1.03m11.8 11.799a1.269 1.269 0 0 1 1.03-.096l1.06.348 1.318-1.317-.348-1.062a1.269 1.269 0 0 1 .096-1.03m-14.956.001a1.269 1.269 0 0 1 .096 1.03l-.348 1.06 1.317 1.318 1.062-.348a1.269 1.269 0 0 1 1.03.096m11.799-11.8a1.269 1.269 0 0 1-.096-1.03l.348-1.06-1.317-1.318-1.062.348a1.269 1.269 0 0 1-1.03-.096" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="2"></path>
                  </svg>
                </EditImgBtn>
              </EditImgDiv>
            </ProfileFir>
            <ProfileSec>
              <InnerSec>
                게시물 <Span>{`70억`}</Span>
              </InnerSec>
              <InnerSec>
                팔로워 <Span>{`70억`}</Span>
              </InnerSec>
              <InnerSec>
                팔로우 <Span>{`70억`}</Span>
              </InnerSec>
            </ProfileSec>
            <ProfileThird>
              {`나의 아이디`}
            </ProfileThird>
          </UpperProfilesDiv>
        </UpperDiv>
      </div>
    </Wrap>
  );
}

export default Profile;