import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { postSignUp, postLogin } from "../api";
import img1 from "../img/image1.png"
import img2 from "../img/image2.png"
import img3 from "../img/image3.png"
import img4 from "../img/image4.png"
import CrossfadeImage from "react-crossfade-image"; 

const LogInOut = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, setValue, getValues } = useForm();
  const { mutate: toSign } = useMutation(postSignUp, {
    onSuccess: () => {
      alert("회원가입이 완료되었습니다.");
      setLogIn(true);
    },
    onError: () => {
      alert("회원가입에 실패했습니다. 다시 시도해주세요.");
    },
  });
  //아래 form 태그 부분에 submitLoginSignUp로 제출이 되면 아래 submitLoginSignUp 변수가 실행되어 postLogin 서버로 data가 송신되고
  const { mutate: toLogIn } = useMutation(postLogin, {
    onSuccess: (res) => {
      localStorage.setItem("access_token", res.headers.access_token);
      //매번 인가를 받을 때 쓰는 수명 짧은 토큰
      localStorage.setItem("refresh_token", res.headers.refresh_token);
      //엑세스 토큰을 재발급 받을 때 쓰는 리프레시 토큰
      // axiosIns.defaults.headers.common[
      //   "Access_Token"
      // ] = `${res.headers.access_token}`;
      //디폴트값으로 헤더에 공통 엑세스토큰을 저장해두겠다.
      navigate("/main");
    },
    onError: (err) => {
      alert("로그인에 실패했습니다.");
    },
  });
  const [logIn, setLogIn] = useState(true);
  const toSignUp = () => {
    setValue("username", "");
    //빈공백으로 설정해둔것
    setValue("password", "");
    setLogIn(false);
  };

  const toLogin = () => {
    setValue("username", "");
    //빈공백으로 설정해둔것
    setValue("password", "");
    setLogIn(true);
  }
  
  const submitLoginSignUp = (data) => {
    if (logIn) {
      toLogIn({ "username": data.username, "password": data.password });
      setValue("username", "");
      setValue("password", "");
    } else {
      toSign({
        "username": data.username,
        "password": data.password1,
        "passwordConfirm": data.password2,
      });
      setValue("username", "");
      setValue("password1", "");
      setValue("password2", "");
    }
  };
//디펜던스에 ID value, password value
//버튼 스테이트 false 흐릿 onclick 함수 실행 안 되게, true 일때만 버튼

  const imgs = [
        img1,img2,img3,img4
  ];
  const [image, setImage] = useState(imgs[0]);
  const [counter, setCounter] = useState(0);

    useEffect(
      () => { 
        if (counter === 4) {setCounter(0)}
        const interval = setInterval(() => {
          setImage(imgs[counter + 1]);
          setCounter(counter + 1);
        }, 3000);
        return () => clearInterval(interval); 
      },
      [counter]
    )

  return (
    <UpperDiv>
      {logIn ? (
        <Wrap>
          <PhoneImg>
            <FadeImg>
            <CrossfadeImage style={{ width : "250px", height: "539x"}}
                            src= {image || imgs[0]}
            /></FadeImg>
          </PhoneImg>
          <RightWrap>
          <LoginBox>
            <Logo/>
            <form onSubmit={handleSubmit(submitLoginSignUp)}>
              {/* 작동시킬 함수를 써넣는것.  */}
              <FormBox>
                <InputBox>
                  <Input
                    {...register("username")}
                    placeholder="  아이디"
                  />{" "}
                  <br />
                  
                  <Input
                    type="password"
                    {...register("password")}
                    placeholder="  비밀번호"
                  />
                  <BtnLogin>로그인</BtnLogin>
                </InputBox>
                </FormBox>
            </form>
                <OrLine>또는</OrLine>
                <BtnFace>Facebook으로 로그인</BtnFace>
                <BtnForgotPW>비밀번호를 잊으셨나요?</BtnForgotPW>
          </LoginBox>
          <JoinBox>
              계정이없으신가요?
              <BtnJoin onClick={toSignUp}>가입하기</BtnJoin>
            </JoinBox>
            </RightWrap>
        </Wrap>
      ) : (
        <StWrap>
          <JoinWrap>
           <BigJoinBox>
          <UpperBox>
            <JoinLogo/>
            <TopTextBox>친구들의 사진과 동영상을 보려면 가입하세요.</TopTextBox>
            <BtnFace2>Facebook으로 로그인</BtnFace2>
            <OrLine>또는</OrLine>
          </UpperBox>
          <form onSubmit={handleSubmit(submitLoginSignUp)}>
            <FormBox>
              <InputBox>
                <Input
                  {...register("username", {
                    required: true,
                    pattern: {
                      value: /^(?=.*[a-zA-Z])[-a-zA-Z0-9]{4,12}$/,
                      message: "조건에 맞게 이름을 입력해주세요.",
                    },
                  })}
                  placeholder="4~12글자, 대소문자 및 숫자"
                />
                <br />
                <Input
                  type="password"
                  {...register("password1", {
                    required: true,
                    pattern: {
                      value:
                        /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z!@#$%^&*]{8,16}$/,
                      message: "비밀번호 조건을 확인해주세요.",
                    },
                  })}
                  placeholder="8~16자 대소문자 및 특수문자 사용(!@#$%^&*)"
                />
                <br />
                <Input
                  type="password"
                  {...register("password2", {
                    required: true,
                    validate: {
                      areSame: (value) =>
                        value === getValues("password1")
                          ? true
                          : "비밀번호가 일치하지 않습니다.",
                    },
                  })}
                  placeholder="비밀번호를 다시 입력해주세요."
                />
              </InputBox>
              <BottomTextBox>
                저희 서비스를 이용하는 사람이 회원님의 연락처 정보를 Instagram에
                업로드했을 수도 있습니다. 더 알아보기
              </BottomTextBox>
              <BtnJoin2>가입</BtnJoin2>
            </FormBox>
          </form>
            </BigJoinBox>
          <LoginBox2>
              <BtnBottomLogin>
                계정이 있으신가요? <BtnLogin2 onClick={toLogin}>로그인</BtnLogin2>
              </BtnBottomLogin>
            </LoginBox2>
        </JoinWrap>
        </StWrap>
      )}
    </UpperDiv>
  );
};
export default LogInOut;

const UpperDiv = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  /* align-items: center; */
  background-color: #fafafa;
  margin: 0;
  padding: 0;
`;

const Wrap = styled.div`
  width: 100vw;
  align-items: stretch;
  box-sizing: border-box;
  display: flex;
  margin: 70px 0 405px;
  padding: 0;
  justify-content: center;
  /* border: 1px solid blue; */
`;

const RightWrap = styled.div`
  flex-wrap: wrap;
  /* border:1px solid rgb(219,219,219); */
  /* border: 2px solid red; */
  justify-content: center;
  height: 538px;
  box-sizing: border-box;
  /* row-gap: 15px; */
  `

const PhoneImg = styled.div`
  height: 581.15px;
  background-size: 468.32px 634.15px;
  flex-basis: 380.32px;
  background-position: -46px 0;
  margin-bottom: 12px;
  /* border: 1px solid black; */
  margin-right: 32px;
  background-image: url(https://static.cdninstagram.com/rsrc.php/v3/y4/r/ItTndlZM2n2.png);
  position: relative;

`

const FadeImg = styled.div`
  /* border: 2px solid red; */
  height: 538.84px;
  width: 251px;
  right:17px;
  top:25px;
  margin: 0;
  padding: 0;
  position: absolute;
  vertical-align: baseline;
  /* margin-left: 150px; */
`

const LoginBox = styled(motion.div)`
  display: flex;
  flex-direction: column;
  font-size: 100%;
  max-width: 400px;
  height: 450px;
  align-items: center;
  background-color: rgb(255,255,255);
  border:1px solid rgb(219,219,219);
  /* border: 2px solid blue; */
  border-radius: 1px;
  box-sizing: border-box;
  position: relative;
  `;

const Logo = styled.div`
  margin: 30px 0 15px;
  height: 51px;
  width: 175px;
  background-position: 0px -502px;
  background-size: 347px 606px;
  background-repeat: no-repeat;
  display: inline-block;
  background-image: url(https://static.cdninstagram.com/rsrc.php/v3/y1/r/XgiuS2Esj4y.png)
`;

const FormBox = styled.div`
  margin-bottom: 10px;
  /* border: 1px solid red; */
  padding: 15px 0 0;
  /* height: 200px; */
  width: 350px;
  box-sizing: border-box;
  gap: 20px;
  margin-top: 10px;
`;

const InputBox = styled.div`
  max-width: 350px;
  width: 100%;
  height: 153px;
  box-sizing: border-box;
  /* border: 1px solid black; */
`;

const Input = styled.input`
  display: block;  
  height: 35px;
  width: 268px;
  margin-top: 0 auto;
  border: 1px solid #dbdbdb;
  border-radius: 3px;
  /* text-indent: 5px; */
  outline-color: gray;
  margin-left: auto;
  margin-right: auto;
  background-color: #fafafa;
  
`;

const BtnLogin = styled.button`
  height: 32px;
  width: 275px;
  margin-top: 15px;
  margin-left: 37px;
  background-color: #0099FF;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 650;  
  color: white;
  border: none;
`;

/* const Line = styled.hr` 
  color: #fafafa;
  margin-left:px;
` */

const OrLine = styled.div`
  height: 18px;
  width: 100%;
  margin: 15px 0 0 0;
  text-align: center;
  border: none;
  padding: 0;
  
`;

const BtnFace = styled.button`
  height: 30px;
  width: 180px;
  margin-top: 20px;
  cursor: pointer;
  background-color: white;
  border: none;
  font-size: 16px;
  color: #385185;
  font-weight: 600;
`;

const BtnForgotPW = styled.button`
  height: 30px;
  width: 100%;
  margin-top: 15px;
  border: none;
  background-color: white;
  cursor: pointer;
  color: #385185;
  font-weight: 600;
`;

const JoinBox = styled.div`
  margin: 15px 0 10px;
  border: 1px solid blue;
  padding: 25px;
  height: 80px;
  box-sizing: border-box;
  text-align: center;
  border: 1px solid #dbdbdb;
  box-sizing: border-box;
  height: 70px;
  background-color: rgb(255,255,255);
`;

const BtnJoin = styled.button`
  cursor: pointer;
  background-color: white;
  border: none;
  color: #0099FF;
  font-weight: bold;
  font-size: 15px;
`;

//////////////////////////////////////회원가입

const StWrap = styled.div`
  /* align-items: center; */
  /* box-sizing: border-box; */
  display: flex;
  margin: 250px auto 405px;
  padding: 0;
  justify-content: center;
  /* border: 1px solid red; */
  width: 100%;  
`;

const JoinWrap = styled.div`
  color: #262626;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: center;
  margin-top: 12px;
  max-width: 350px;
 
`

const BigJoinBox = styled.div`
  height: 560px;
  width: 350px;
  border: 1px solid #dbdbdb;
  background-color: #ffffff;
  border-radius: 1px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  font:inherit;
  font-size: 100%;
  margin: 0 0 10px;
  padding: 10px 0;
  vertical-align: baseline;
`

const UpperBox = styled.div`
  justify-content: center;
  align-items: center;
  /* border: 1px solid red; */
`

 const JoinLogo = styled.div`
  margin: 30px 0 15px 84px;
  height: 51px;
  width: 175px;
  background-position: 0px -502px;
  background-size: 347px 606px;
  background-repeat: no-repeat;
  display: inline-block;
  background-image: url(https://static.cdninstagram.com/rsrc.php/v3/y1/r/XgiuS2Esj4y.png);
  `

const TopTextBox = styled.div`
  justify-content: center;
  width:268px;
  height: 40px;
  text-align: center;
  /* border: 1px solid green; */
  color: #8e8e8e;
  font-size: 17px;
  font-weight: 500 ; 
  margin-left: 40px;
`

const BtnFace2 = styled.button`
  border: none;
  height: 32.1px ;
  width: 275px;
  background-color: #0099FF;
  border-radius: 4px;
  cursor: pointer;
  font-size: 15px;
  font-weight: 500;  
  color: white;
  margin-top: 13px;
  margin-left: 37px;
`

  const BottomTextBox = styled.div`
    color : #8e8e8e;
    line-height: 16px;
    font-size: 12px;
    margin: 25px 40px;
  `

  const BtnJoin2 = styled.button`
  cursor: pointer;
  font-weight: bold;
  font-size: 15px;
  width: 268px;
  height: 30px;
  border: none;
  background-color: #0099FF;
  border-radius: 4px;
  font-weight: 500;  
  color: white;
  margin-left: 40px;
`;  

  const LoginBox2 = styled.div`
  margin: 15px 0 10px;
  padding: 25px;
  height: 80px;
  box-sizing: border-box;
  text-align: center;
  border: 1px solid #dbdbdb;
  box-sizing: border-box;
  height: 70px;
  background-color: rgb(255,255,255);
`

  const BtnBottomLogin = styled.div`
  align-items:center ;
  `

  const BtnLogin2 = styled.button`
  background-color: #ffffff;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;  
  color: #0099FF;
  border: none;
`;


