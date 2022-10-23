import React,{Component} from "react";
import{Selectcenter,Div0,Buttona,Selectright,Selectall,Search}from'./style.js';
import {options,options2,options3,options4,options5} from './a.js';
var body="Biceps";
var dataType="TestData";
var age='AllAge';
var date='AllDate'
var gender='NoGender';
function onChangeInputBody(value) {
    body=value;
}
function onChangeInputDataType(value) {
    dataType=value;
}
function onChangeInputAge(value) {
    age=value;
}
function onChangeInputDate(value) {
    date=value;
}
function onChangeInputGender(value) {
    gender=value;
}
function onClickSerch(){
    var c=[
        {
            body,
            dataType,
            age,
            date,
            gender
        }
    ]
}
class SelectList extends Component{

    render(){
        return (
            <Div0>
                <Buttona href="./main2">
                    全體
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
                <Selectall onChange={(e)=>onChangeInputAge(e.target.value)}>
                    {
                        options3.map((a)=>(
                        <option key={a.key} value={a.value}>{a.label}</option>
                        )
                    )}
                </Selectall>
                <Selectall onChange={(e)=>onChangeInputDate(e.target.value)}>
                    {
                        options4.map((a)=>(
                        <option key={a.key} value={a.value}>{a.label}</option>
                        )
                    )}
                </Selectall>
                <Selectall className="gender" onChange={(e)=>onChangeInputGender(e.target.value)}>
                    {
                        options5.map((a)=>(
                        <option key={a.key} value={a.value}>{a.label}</option>
                        )
                    )}
                </Selectall>
                <Search onClick={()=>onClickSerch()}>
                    搜尋
                </Search>
            </Div0>
        )}}
export default SelectList;