import React, { useEffect } from 'react';
import GoogleSignUp from '../../components/google';
import KakaoSignUp from '../../components/kakao';
import NaverSignUp from '../../components/naver';
import { LoginBox, LoginWrapper } from './styled';
import ReactGa from 'react-ga'

const LoginPage = () => {

    useEffect(() => {
        ReactGa.initialize("G-MQPQ38BGHY");
        ReactGa.pageview(window.location.pathname);
    }, []);

    return (
        <LoginWrapper>
            <LoginBox>
                <h2>소셜 로그인</h2>
                <ul>
                    <li>
                        <KakaoSignUp />
                    </li>
                    <li>
                        <GoogleSignUp />
                    </li>
                    <li>
                        <NaverSignUp />
                    </li>
                </ul>
            </LoginBox>
        </LoginWrapper>
    );
};

export default LoginPage;