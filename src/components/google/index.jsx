import React, { useEffect, useState } from 'react';
import GoogleLogin from 'react-google-login';

const GoogleSignUp = () => {
    const [userInfo, setUserInfo] = useState(null);

    const clientId = "733742587554-lsfla7b5fgep6cgppdrpfnmutfmof5s0.apps.googleusercontent.com";

    useEffect(() => {
        if (userInfo) {
            console.log("access_token", userInfo.data.Zb.access_token);
            console.log("email", userInfo.data.profileObj.email);
            console.log("name", userInfo.data.profileObj.name);
        }
    }, [userInfo]);

    const onSuccess = (res) => {
        setUserInfo({ data: res });
    }

    return (
        <GoogleLogin
            clientId={clientId}
            responseType={"id_token"}
            onSuccess={onSuccess}
        />
    );
};

export default GoogleSignUp;