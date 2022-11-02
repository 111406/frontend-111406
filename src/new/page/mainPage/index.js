import React,{Component} from "react";
import {Div0,ContentDiv,Line1,DataInfoDiv,DataDrawDiv} from'./sty';
import DataInfoList from "../../common/dataInfoList/index";
import DataDrawList from "../../common/dataDrawList/index";
// import ChooseList from '../../common/chooseList/index'
// import DataDrawListTrainB from "../../common/dataDrawListTrainB";
// import DataDrawListTrainD from "../../common/dataDrawListTrainD";
// import DataDrawListTrainS from "../../common/dataDrawListTrainS";
import Header from "../../common/header";
class PersonalPage  extends Component {
    render(){
    
        return (
                <Div0>
                    <Header></Header>
                    <ContentDiv>
                        <DataInfoDiv><DataInfoList></DataInfoList></DataInfoDiv>
                        <Line1>測試資料</Line1>
                        <DataDrawDiv><DataDrawList></DataDrawList></DataDrawDiv>
                    </ContentDiv>
                </Div0>
        )}
    }
export default PersonalPage;