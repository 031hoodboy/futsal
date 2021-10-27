import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import KakaoLogin from 'react-kakao-login';

const KakaoSignUp = () => {
    const [userInfo, setUserInfo] = useState(null);

    const responseKaKao = (res) => {
        setUserInfo({ data: res });
    }

    useEffect(() => {
        if (userInfo) {
            let user = userInfo.data.profile.kakao_account;
            console.log("access_token", userInfo.data.response.access_token);
            console.log("email", user.email)
            console.log("nickname", user.profile.nickname);
        }
    }, [userInfo]);



    return (
        <KaKaoBtn
            token={'d5e3449e0ee9a72a2ce39fa7438a270e'}
            onSuccess={responseKaKao}
            getProfile={true}
        />
    )
}

const KaKaoBtn = styled(KakaoLogin)`
    padding: 0 20px;
    height: 44px;
    line-height: 44px;
    color: #783c00;
    background-color: #FFEB00;
    border: 1px solid transparent;
    border-radius: 3px;
    font-size: 16px;
    font-weight: bold;
    text-align: center;
    cursor: pointer;
`

export default KakaoSignUp;