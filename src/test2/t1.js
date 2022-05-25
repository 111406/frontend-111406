import React,{Component} from "react";
import{Selectcenter,Div0,Buttona,Selectright,Selectall,Search,InputName}from'./sty.js';
import {options,options2,options3} from './a.js';
var body="Biceps";
var dataType="TestData";
var date='AllDate'
var name='NoName';
function onChangeInputBody(value) {
    body=value;
    console.log(body);
}
function onChangeInputDataType(value) {
    dataType=value;
    console.log(dataType);
}
function onChangeInputDate(value) {
    date=value;
    console.log(date);
}
function onChangeInputName(value){
    name=value;
    console.log(name);
}
function onClickSerch(){
    var c=[
        {
            body,
            dataType,
            date,
            name
        }
    ]
    console.log(c);
}

class T2 extends Component{

    render(){
        return (
            <Div0>
                <Buttona href="./main2">
                    個人
                </Buttona>
                <Selectcenter onChange={(e)=>onChangeInputBody(e.target.value)}>
                    {
                        options.map((a)=>(
                        <option key={a.key} value={a.value}>{a.label}</option>
                        )
                    )}
                </Selectcenter>
                <Selectright onChange={(e)=>onChangeInputDataType(e.target.value)}>
                    {
                        options2.map((a)=>(
                        <option key={a.key} value={a.value}>{a.label}</option>
                        )
                    )}
                </Selectright>
                <Selectall onChange={(e)=>onChangeInputDate(e.target.value)}>
                    {
                        options3.map((a)=>(
                        <option key={a.key} value={a.value}>{a.label}</option>
                        )
                    )}
                </Selectall>
                <InputName placeholder="username" onChange={(e)=>onChangeInputName(e.target.value)}/>
                <Search onClick={()=>onClickSerch()}>
                    搜尋
                </Search>
            </Div0>
        )}}
export default T2;