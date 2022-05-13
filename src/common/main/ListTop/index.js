import React,{Component} from "react";
import{Div0,Selectleft,Selectcenter,Selectright,Selectall,Search}from'./style';
class SelectList extends Component{
    render(){
        return (
            <Div0>
                <Selectleft>
                    <option>全體</option>
                    <option>個人</option>
                </Selectleft>
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
                    <option>全年齡</option>
                    <option>65~70歲</option>
                    <option>70~75歲</option>
                    <option>75~80歲</option>
                    <option>80~85歲</option>
                    <option>85~90歲</option>
                    <option>90~95歲</option>
                    <option>95~100歲</option>
                </Selectall>
                <Selectall>
                    <option>全</option>
                    <option>2022/04/04~2022/04/10</option>
                    <option>2022/04/11~2022/04/17</option>
                    <option>2022/04/18~2022/04/24</option>
                    <option>2022/04/25~2022/05/01</option>
                </Selectall>
                <Selectall className="gender">
                    <option>全</option>
                    <option>男</option>
                    <option>女</option>
                </Selectall>
                <Search>
                    search
                </Search>
            </Div0>
        )}}
export default SelectList;