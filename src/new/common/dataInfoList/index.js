import React,{Component,setState} from "react";
import {Div0,DataInfoItem,Div3,DivDetail1,DivDetail2} from'./sty';
import Header from '../header/index'
import { Token } from "../token";

var userNameSearch;

class DataInfoList extends Component{
    constructor(props){
        super(props);
        this.state={
        "data":[]
    };
    }
    componentDidMount(){
    this.getItems();
    }
    getItems(){
    fetch('https://backend-111406.onrender.com/api/user/'+userNameSearch, {
                method: "GET",
                headers: new Headers({
                    'Content-Type': 'application/json',
                    'token': Token, /* 把token放在這 */
                })
}
    )
    .then(results=>results.json())
    .then(results=>{this.setState({"data":results.data})});
    }
    render(){
        userNameSearch =window.location.href;
        userNameSearch=userNameSearch.replace("http://localhost:3000/personal/","")
        return (
                <Div0>
                    <DataInfoItem>
                        <Div3>
                            <DivDetail1>暱稱</DivDetail1>
                            <DivDetail2>{this.state.data.user_id}</DivDetail2>
                            {console.log(this.state.data.other_detail)}
                        </Div3>
                        <Div3>
                            <DivDetail1>性別</DivDetail1>
                            <DivDetail2>{this.state.data.gender}</DivDetail2>
                        </Div3>
                        <Div3>
                            <DivDetail1>生日
                            </DivDetail1>
                            <DivDetail2>{this.state.data.birthday}</DivDetail2>
                            </Div3>
                    </DataInfoItem>
                    <DataInfoItem>
                    <Div3>
                            <DivDetail1>身高</DivDetail1>
                            <DivDetail2>{this.state.data.height}</DivDetail2>
                        </Div3>
                        <Div3>
                            <DivDetail1>體重</DivDetail1>
                            <DivDetail2>{this.state.data.weight}</DivDetail2>
                        </Div3>
                        <Div3>
                            <DivDetail1>BMI</DivDetail1>
                            <DivDetail2>{(this.state.data.weight/((this.state.data.height/100)*(this.state.data.height/100))).toFixed(2)}</DivDetail2>
                            </Div3>
                    </DataInfoItem>
                    <DataInfoItem>
                    <Div3>
                            <DivDetail1>高血壓</DivDetail1>
                            <DivDetail2>{'true'}</DivDetail2>
                        </Div3>
                        <Div3>
                            <DivDetail1>高血脂</DivDetail1>
                            <DivDetail2>{'true'}</DivDetail2>
                        </Div3>
                        <Div3>
                            <DivDetail1>高血醣</DivDetail1>
                            <DivDetail2>{'true'}</DivDetail2>
                            </Div3>
                    </DataInfoItem>
                    <DataInfoItem>
                    <Div3>
                            <DivDetail1>運動習慣</DivDetail1>
                            <DivDetail2>{'true'}</DivDetail2>
                        </Div3>
                        <Div3>
                            <DivDetail1>訓練次數</DivDetail1>
                            <DivDetail2>{'4'}</DivDetail2>
                        </Div3>
                        <Div3>
                            <DivDetail1>運動次數</DivDetail1>
                            <DivDetail2>{'3'}</DivDetail2>
                            </Div3>
                    </DataInfoItem>
                </Div0>
        )}}
export default DataInfoList;