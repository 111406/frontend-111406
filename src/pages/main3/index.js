import React,{Component} from "react";
import {Div0,Div1,DivBeside,DivDataView,DataTop, DataSearch, DataMid, DataBot, DivBesideTop} from'./style';
import BesideInner from "../../common/DivBeside";
import './sty.css'
import DataList3 from "../../common/DivData/index";
import DataDraw3 from "../../common/DivDraw/index";
import DataSheet from "../../common/main/DataSheet";
import SelectList from "../../common/main/ListTop/index.js"
class MainPage3 extends Component{
    render(){
        return (
            <Div0>
                <Div1>
                    <DivBeside className="container">
                        <BesideInner>

                        </BesideInner>
                    </DivBeside>
                    <DivDataView>
                        <DataSearch>
                            <SelectList/>
                        </DataSearch>
                        <DataTop>
                            <DataList3/>
                        </DataTop>
                        <DataMid>
                            <DataDraw3/>
                        </DataMid>
                        <DataBot>
                            <DataSheet/>
                        </DataBot>
                    </DivDataView>
                </Div1>
            </Div0>
        )}}
export default MainPage3;