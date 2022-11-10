import React from 'react'
import {Div0,Logo, LogoText,Personal,AllData,Exit,Whitediv} from './sty.js'
import { useNavigate } from "react-router-dom";
const  Header=()=> {
  const navigate = useNavigate();
    return (
      <Div0>
        <Logo>
          <img src='https://i.imgur.com/BJ21wvu.png'  height={56} width={87.5}></img>
        </Logo>
        <LogoText>管理系統</LogoText>
        <Whitediv></Whitediv>
        <Personal onClick={()=>navigate("/search")}>個人</Personal>
        <Exit onClick={()=>{
              fetch('https://web-backend-111406.onrender.com/api/user/logout', {
                method: "GET",
                credentials:'include',
                headers: new Headers({
                    'Content-Type': 'application/json',
                  //   'token': tok, /* 把token放在這 */
                })
              }
              )
              .then(function(response) {
                navigate("/")
              })
      }}>登出</Exit>
      </Div0>
    );
}
export default Header;