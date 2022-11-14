import React,{Component} from "react";
import {Div0,ContentDiv,Line1,DataInfoDiv,DataDrawDiv} from'./sty';
import DataInfoList from "../../common/dataInfoList/index";
import DataDrawList from "../../common/dataDrawList/index";
import LogList from "../../common/logList";
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
                        <Line1>測試/訓練資料</Line1>
                        <DataDrawDiv><DataDrawList></DataDrawList></DataDrawDiv>
                        <Line1>Log資訊</Line1>
                        <LogList>123345</LogList>
                    </ContentDiv>
                </Div0>
        )}
    }
export default PersonalPage;