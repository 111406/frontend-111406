import React,{Component} from "react";
// import './style.css'
import{HeaderWrapper}from'./style';
import{Ces,Cent,Cent2,LogoT,InPutL,DivLog,DivLogin}from'./cen';

class Login1 extends Component{
    render(){
        return (
            <div>
                <HeaderWrapper> </HeaderWrapper>
                <Ces>
                    <Cent2>
                        <img src="https://img.onl/sB5yqA" height={94} width={148}></img>
                    </Cent2>
                    <Cent>
                        <LogoT>管理系統</LogoT>
                    </Cent>
                    <Cent2>
                        <DivLog>
                            <img src="https://i.imgur.com/H7a6zp6.jpg" height={30} width={30}></img>
                            <InPutL id="email" type="text" placeholder="USERNAME" size="30" ></InPutL>
                        </DivLog>
                    </Cent2>
                    <Cent>
                        <DivLog>
                                <img src="https://i.imgur.com/qlc1u8C.jpg" height={30} width={30}></img>
                                <InPutL id="passw" type="text" placeholder="PASSWORD" size="30" ></InPutL>
                        </DivLog>
                    </Cent>
                    <Cent2>
                        <DivLogin href="./main">
                                Login
                        </DivLogin>
                    </Cent2>
                </Ces>
            </div>
            );
    }
}
export default Login1;