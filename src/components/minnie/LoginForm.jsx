import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import {
  loginState,
  logoutState,
  __loginUser,
} from "../../store/modules/userSlice";
import { useNavigate } from "react-router-dom";
import logo from "../../img/instagram-new-logo.png";

const LoginForm = () => {
  return (
    <Container>
      <Box>
        <Logo src={logo} />
      </Box>
    </Container>
  );
};
export default LoginForm;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: center;
  margin-top: 12px;
  max-width: 350px;
  border: 1px solid gray;
  height: 600px;
`;

const Box = styled.div`
  width: 100%;
  height: 100%;
  margin: auto;
`;

const Logo = styled.img`
  width: 100px;
  height: 130px;
`;
