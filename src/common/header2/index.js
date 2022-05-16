import React,{Component} from "react";
import{HeaderWrapper,HeaderList,LogoText,PeoLogo}from'./style';
class Header extends Component{
    render(){
        return(
            <HeaderWrapper>
                <img src="https://i.imgur.com/SOaMg6w.png" height={64} width={100}></img>
                <HeaderList>
                    <LogoText>
                        管理系統
                    </LogoText>
                </HeaderList>
                <PeoLogo>
                    <img src="https://i.imgur.com/H7a6zp6.jpg" height={50} width={50}></img>
                </PeoLogo>
            </HeaderWrapper>
        )
    }
}
export default Header;