import React,{Component} from "react";
import{Div0,Buttona,Selectcenter,Selectright,Selectall,InputName,Search}from'./style';
class SelectList extends Component{
    render(){
        const Aaa='./main'
        return (
            <Div0>
                <Buttona href="./main">
                    個人
                </Buttona>
                <Selectcenter>
                    <option>二頭肌</option>
                    <option>三角肌</option>
                    <option>下肢</option>
                </Selectcenter>
                <Selectright>
                    <option>測試資料</option>
                    <option>運動資料</option>
                </Selectright>
                <Selectall>
                    <option>不限年齡</option>
                    <option>65~70歲</option>
                    <option>70~75歲</option>
                    <option>75~80歲</option>
                    <option>80~85歲</option>
                    <option>85~90歲</option>
                    <option>90~95歲</option>
                    <option>95~100歲</option>
                </Selectall>
                <InputName placeholder="username"/>
                <Search>
                    search
                </Search>
            </Div0>
        )}}
export default SelectList;