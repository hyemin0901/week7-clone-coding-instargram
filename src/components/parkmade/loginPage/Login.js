import { motion } from "framer-motion";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { axiosIns, postSignUp, postLogIn } from "../../../api";


const UpperDiv = styled(motion.div)`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #a4b0be;
`;
const Wrap = styled(motion.div)`
  width: 400px;
  height: 500px;
  border: 2px solid;
  border-radius: 15px;
  margin: auto;
  background-color: #57606f;
`;
const TitleName = styled(motion.div)`
  width: 380px;
  height: 120px;
  margin: auto;
  margin-top: 10px;
  border: 2px solid;
  border-radius: 15px;
  text-align: center;
  display : flex;
  justify-content : center;
  align-items : center;
  background-color: #2f3542;
`;
const Dumbbell = styled.img`
  width: 120px;
  height: 120px;
`;
const More = styled.div`
  color: #f1f2f6;
  position: relative;
  font-weight: 800;
  font-size: 25px;
  bottom: 25px;
`;
const IdPassword = styled(motion.div)`
  width: 360px;
  height: 40px;
  margin: 20px auto 10px auto;
  text-align: center;
  display : flex;
  justify-content : center;
  align-items : center;
  color : #f1f2f6;
  font-size: 22px;
  font-weight: 900;
`;
const InputDiv =styled(motion.div)`
  width: 360px;
  height: 40px;
  margin: auto;
  display: flex;
`;
const Input = styled(motion.input)`
  width: 356px;
  height: 40px;
  margin: auto;
  border: 2px solid;
  border-radius: 15px;
  text-align: center;
`;
const InputId = styled.input`
  width: 260px;
  height: 40px;
  margin: auto;
  border: 2px solid;
  border-radius: 15px;
  text-align: center;
`;
const IdCheck = styled.div`
  width: 80px;
  height: 40px;
  margin: auto;
  border: 2px solid;
  border-radius: 15px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: buttonface;
`;
const UpperLoginSign = styled(motion.div)`
  width: 360px;
  height: 80px;
  margin: auto;
  margin-top: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap:20px;
`;
const LoginSign = styled(motion.button)`
  width: 150px;
  height: 40px;
  border-radius: 15px;
  font-weight: 800;
`;
const Sign = styled.div`
  width: 134px;
  height: 34px;
  border: 2px solid;
  padding: 1px 6px;
  border-radius: 15px;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  background-color: buttonface;
  font-weight: 800;
`;
const AssignIdPassword = styled(motion.div)`
  width: 360px;
  height: 40px;
  margin: 20px auto 10px auto;
  text-align: center;
  display : flex;
  justify-content : space-around;
  align-items : center;
  color: #f1f2f6;
  font-size: 22px;
  font-weight: 900;
`;
const UpperAssignBtn = styled(motion.div)`
  width: 360px;
  height: 80px;
  margin: auto;
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Login = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, setValue, getValues } = useForm();
  const { mutate:toSign } = useMutation(postSignUp, {
    onSuccess: () => {
      alert("회원가입이 완료되었습니다.");
      setLogIn(true);
    },
    onError: () => {
      alert("실패! 다시 시도해주세요.");
    },
  });
  const { mutate:toLogIn } = useMutation(postLogIn, {
    onSuccess: (res) => {
      localStorage.setItem("access_token", res.headers.access_token);
      localStorage.setItem("refresh_token", res.headers.refresh_token);
      navigate("/main");
    },
    onError: (err) => {
      alert("로그인 실패!")
    }
  });
  const [logIn, setLogIn] = useState(true);
  const toSignUp = () => {
    setValue("LogInId", "");
    setValue("LogInPassword", "");
    setLogIn(false) 
  };
  const submitLoginSignUp = (data) => {
    if (logIn) {
      toLogIn({"username":data.LogInId, "password":data.LogInPassword});
      setValue("LogInId", "");
      setValue("LogInPassword", "");
    } else {
      toSign({"username":data.Id, "password":data.Password1, "passwordConfirm":data.Password2});
      setValue("Id", "");
      setValue("Password1", "");
      setValue("Password2", "");
    };
  }
  return (
    <UpperDiv>
      {logIn ? (
        <Wrap>
          <TitleName>
            <div>
              <Dumbbell src={null}/>
              <More>
                테스트용
              </More>
            </div>
          </TitleName>
          <form onSubmit={handleSubmit(submitLoginSignUp)}>
            <IdPassword>
              ID
            </IdPassword>
            <InputDiv>
              <Input {...register("LogInId")} placeholder="아이디를 적어주세요"/>
            </InputDiv>
            <IdPassword>
              Password
            </IdPassword>
            <InputDiv>
              <Input type="password" {...register("LogInPassword")} placeholder="비밀번호를 적어주세요"/>
            </InputDiv>
            <UpperLoginSign>
            <LoginSign>
              Log In
            </LoginSign>
            <Sign onClick={toSignUp}>
              Sign Up
            </Sign>
            </UpperLoginSign>
          </form>
        </Wrap>) 
        : 
        (
          <Wrap>
            <form onSubmit={handleSubmit(submitLoginSignUp)}>
              <AssignIdPassword>
                Id
              </AssignIdPassword>
              <InputDiv>
                <InputId {...register("Id", { required: true, pattern : { value : /^(?=.*[a-zA-Z])[-a-zA-Z0-9]{4,12}$/, message:"조건을 확인하라 인간"} })} placeholder="2~10글자, 대소문자및 숫자가능" />
                {/* <IdCheck onClick={checkId}>
                  중복확인
                </IdCheck> */}
              </InputDiv>
              <AssignIdPassword>
                Password
              </AssignIdPassword>
              <InputDiv>
                <Input type="password" {...register("Password1")} placeholder="8~16글자, 영대소문자,숫자 입력 필" />
              </InputDiv>
              <InputDiv style={{marginTop:"15px"}}>
                <Input type="password" {...register("Password2", { required: true, validate : { areSame : (value) => value === getValues("Password1") ? true : "틀렸씁니다." } })} placeholder="비밀번호를 다시 입력해주세요. " />
              </InputDiv>
              <UpperAssignBtn>
                <LoginSign>
                  Sign Up
                </LoginSign>
              </UpperAssignBtn>
            </form>
          </Wrap>
        )}
    </UpperDiv>
  );
}

export default Login;
