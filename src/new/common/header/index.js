import React from 'react'
import axios from 'axios';
import { Div0, Logo, LogoText, Personal, AllData, Exit, Whitediv } from './sty.js'
import { useNavigate } from "react-router-dom";
import { BACKEND_HOST } from "../../../global";
const Header = () => {
  const navigate = useNavigate();
  return (
    <Div0>
      <Logo>
        <img src='https://i.imgur.com/BJ21wvu.png' alt='logo' height={56} width={87.5}></img>
      </Logo>
      <LogoText>管理系統</LogoText>
      <Whitediv></Whitediv>
      <Personal onClick={() => navigate("/search")}>搜尋</Personal>
      <AllData onClick={() => navigate("/allpage")}>全部</AllData>
      <Exit onClick={() => {
        axios.get(`${BACKEND_HOST}/user/logout`, {
          withCredentials: true,
        }).then(() => navigate("/"))
      }}>登出</Exit>
    </Div0>
  );
}
export default Header;