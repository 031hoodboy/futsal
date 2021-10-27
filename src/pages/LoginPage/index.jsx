import React, { useEffect } from 'react';
import GoogleSignUp from '../../components/google';
import KakaoSignUp from '../../components/kakao';
import NaverSignUp from '../../components/naver';
import ReactGa from 'react-ga'
import styled from "styled-components";

const LoginPage = () => {

    useEffect(() => {
        ReactGa.initialize("G-MQPQ38BGHY");
        ReactGa.pageview(window.location.pathname);
    }, []);

    return (
        <LoginWrapper>
            <LoginBox>
                <LoginBoxTitle>로그인</LoginBoxTitle>
                <KakaoSignUp />
                <NaverSignUp />
                <GoogleSignUp />
            </LoginBox>
        </LoginWrapper>
    );
};


const LoginWrapper = styled.div`
width:100%;
height: 80vh;
display:flex;
justify-content: center;
align-items: center;
`;

const LoginBox = styled.div`
    width:400px;
    padding:40px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const LoginBoxTitle = styled.div`
    margin-bottom: 50px;
    font-size: 20px;
    font-family: Arial, Helvetica, sans-serif;
`;

export default LoginPage;