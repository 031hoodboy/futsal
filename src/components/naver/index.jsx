import React, { useEffect, useState } from 'react';
import NaverLogin from 'react-naver-login';
import styled from 'styled-components';

const NaverSignUp = () => {
    const [userInfo, setUserInfo] = useState(null);

    useEffect(() => {
        if (userInfo) {
            const token = localStorage.getItem('com.naver.nid.access_token');
            console.log("access_token", token.slice(7));
            console.log("email", userInfo.data.email);
            console.log("nickname", userInfo.data.nickname);
        }
    }, [userInfo]);

    const responseNaver = (res) => {
        setUserInfo({ data: res });
    }

    return (
        <NaverLoginStyle>
            <NaverLogin
                clientId="yg7K60lMnvbQ1QYvOXrQ"
                callbackUrl="http://localhost:3000"
                onSuccess={responseNaver}
                render={(props) => <div onClick={props.onClick}>NAVER로 로그인</div>}
            />
        </NaverLoginStyle>
    );
};

const NaverLoginStyle = styled.div`
    padding: 0;
    width: 222px;
    height: 49px;
    line-height: 49px;
    color: #fff;
    background-color: #2acb3c;
    border: 1px solid transparent;
    border-radius: 3px;
    font-size: 16px;
    font-weight: bold;
    text-align: center;
    cursor: pointer;
    margin: 20px 0;
`;

export default NaverSignUp;

