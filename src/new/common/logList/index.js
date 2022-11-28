import React,{Component} from "react";
import {Div0,Table0,Thead0,Th0} from'./sty';
// import Header from '../header/index'
import { getAuthSearchName} from "../apiUtil";
// import { Token } from "../token";
import { BACKEND_HOST } from "../../../global";

var userNameSearch;
var data;
class LogList extends Component{
    
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
    fetch('https://web-backend-111406.onrender.com/api/log?userId='+userNameSearch, {
                method: "GET",
                credentials:'include',
                headers: new Headers({
                    'Content-Type': 'application/json',
                    // 'token': getAuthToken(), /* 把token放在這 */
                })
}
    )
    .then(results=>results.json())
    .then(results=>{this.setState({"data":results.data})})
   
    }
    render(){
        userNameSearch=getAuthSearchName();
        // userNameSearch =window.location.href;
        // userNameSearch=userNameSearch.replace("http://localhost:3000/personal/","")
        return (
                <Div0>
                    <Table0 className="table">
                    <Thead0>
                        <tr>
                            <Th0 scope="col">時間</Th0>
                            <Th0 className="th1" scope="col">登入IP</Th0>
                            <Th0 className="th1" scope="col">URL來源</Th0>
                            <Th0 className="th1" scope="col">訊息</Th0>
                        </tr>
                </Thead0>
                    <tbody>
                        {
                            this.state.data.map((item,index) =>(
                                <tr key={index}>
                                    <Th0>{item.action_time}</Th0>
                                    <Th0 className="th1">{String(item.ip)}</Th0>
                                    <Th0 className="th1">{String(item.request_url)}</Th0>
                                    <Th0 className="th1">{String(item.message)}</Th0>
                                </tr>
                            ))
                        }
                    </tbody>
                </Table0>
                </Div0>
        )}}
export default LogList;