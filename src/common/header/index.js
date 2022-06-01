import React from "react";
import{Logo,HeaderWrapper,HeaderList,LogoText,PeoLogo,PeoLogo2}from'./style';
import {useNavigate} from "react-router-dom";
import styledComponents from "styled-components";
import "./sty.css"
const Header = () => {
    const navigate = useNavigate();
        return(
            <HeaderWrapper>
                <Logo>
                    <img src='https://i.imgur.com/BJ21wvu.png'  height={56} width={87.5}></img>
                </Logo>
                <HeaderList>
                    <LogoText>
                        管理系統
                    </LogoText>
                </HeaderList>
                <PeoLogo2 onClick={()=>navigate("/")} className="ho">
                    修改計畫
                </PeoLogo2>
                <PeoLogo onClick={()=>navigate("/")}>
                    <img src='https://i.imgur.com/hBWPJVc.png' height={32} width={40}></img>
                </PeoLogo>

            </HeaderWrapper>
        )
    }

export default Header;