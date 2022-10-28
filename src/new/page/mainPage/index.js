import React,{Component} from "react";
import {Div0,SideBarDiv,ContentDiv,Line1,DataInfoDiv,DataDrawDiv,DataListDiv} from'./sty';
import DataInfoList from "../../common/dataInfoList/index";
import DataDrawList from "../../common/dataDrawList/index";
import ChooseList from '../../common/chooseList/index'
import DataDrawListTrainB from "../../common/dataDrawListTrainB";
import DataDrawListTrainD from "../../common/dataDrawListTrainD";
import DataDrawListTrainS from "../../common/dataDrawListTrainS";
import Header from "../../common/header";
import Chart from 'chart.js/auto';
class PersonalPage  extends Component {
    render(){
        
    
        return (
                <Div0>
                    <Header></Header>
                    <ContentDiv>
                        <DataInfoDiv><DataInfoList></DataInfoList></DataInfoDiv>
                        <Line1>測試資料</Line1>
                        <DataDrawDiv><DataDrawList></DataDrawList></DataDrawDiv>
                        <Line1>訓練資料─二頭肌</Line1>
                        <DataDrawDiv><DataDrawListTrainB></DataDrawListTrainB></DataDrawDiv>
                        <Line1>訓練資料─三角肌</Line1>
                        <DataDrawDiv><DataDrawListTrainD></DataDrawListTrainD></DataDrawDiv>
                        <Line1>訓練資料─下肢</Line1>
                        <DataDrawDiv><DataDrawListTrainS></DataDrawListTrainS></DataDrawDiv>
                    </ContentDiv>
                </Div0>
        )}
    }
export default PersonalPage;