import React, { useState } from "react";
import axios from 'axios';
import { HeaderWrapper, Div0, Ces, Cent, Cent2, LogoT, InPutL, DivLog, DivLogin, DivError } from './style';
import { useNavigate } from "react-router-dom";
import { BACKEND_HOST } from "../../global";
const Login1 = () => {
  const [loading, setLoading] = React.useState(false);
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const handleLogin = () => {
    setLoading(true)
    const data = {
      "user_id": username,
      "password": password
    };
    axios.post(`${BACKEND_HOST}/user/login`, data, {
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((response) => {
      if (response.status === 200) {
        navigate("/search");
      }
      else {
        setErrorMessage('帳號或密碼錯誤')
      }
      setLoading(false);
    });
  };
  const handleUsername = (e) => {
    setUsername(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  return (
    <Div0>
      <HeaderWrapper> </HeaderWrapper>
      <Ces>
        <Cent2>
          <img src="https://i.imgur.com/SOaMg6w.png" alt="logo" height={94} width={148}></img>
        </Cent2>
        <Cent>
          <LogoT>管理系統</LogoT>
        </Cent>
        <Cent2>
          <DivLog>
            <img src="https://i.imgur.com/H7a6zp6.jpg" alt="account-icon" height={30} width={30}></img>
            <InPutL id="email" type="text" placeholder="USERNAME" size="30" value={username} onChange={handleUsername}></InPutL>
          </DivLog>
        </Cent2>
        <Cent>
          <DivLog>
            <img src="https://i.imgur.com/qlc1u8C.jpg" alt="pwd-icon" height={30} width={30}></img>
            <InPutL id="passw" type="password" placeholder="PASSWORD" size="30" value={password} onChange={handlePassword}></InPutL>
          </DivLog>
        </Cent>
        <Cent2>
          <DivError>{errorMessage}</DivError>
          <DivLogin type="button" className="btn btn-primary" value={loading ? '登入中...' : '登入'} onClick={handleLogin} disabled={loading} >
          </DivLogin>
        </Cent2>
      </Ces>
    </Div0>
  );
}
export default Login1;