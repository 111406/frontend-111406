import React,{Component} from "react";
import{Div0,Div1,Div1Center,Div2,Div2Detail}from'./style';
class DataTop extends Component{
    render(){
        return (
            <Div0>
                <Div1>
                    <Div1Center className="Div1Center2">
                        <Div2>
                            <Div2Detail className="D2Text">
                                總人數(人)
                            </Div2Detail>
                            <Div2Detail className="D2Data">
                                5000
                            </Div2Detail>
                        </Div2>
                        <Div2>
                            <Div2Detail className="D2Text">
                                分析資料數(筆)
                            </Div2Detail>
                            <Div2Detail className="D2Data">
                                12
                            </Div2Detail>
                        </Div2>
                    </Div1Center>
                </Div1>
                <Div1 className="cr">
                    <Div1Center className="Div1Center2">
                        <Div2>
                            <Div2Detail className="D2Text">
                                頂標
                            </Div2Detail>
                            <Div2Detail className="D2Data">
                                50
                            </Div2Detail>
                        </Div2>
                        <Div2>
                            <Div2Detail className="D2Text">
                                底標
                            </Div2Detail>
                            <Div2Detail className="D2Data">
                                10
                            </Div2Detail>
                        </Div2>
                    </Div1Center>
                </Div1>
                <Div1 className="cr">
                    <Div1Center className="Div1Center3">
                        <Div2>
                            <Div2Detail className="D2Text">
                                中位數
                            </Div2Detail>
                            <Div2Detail className="D2Data">
                                30
                            </Div2Detail>
                        </Div2>
                        <Div2>
                            <Div2Detail className="D2Text">
                                平均數
                            </Div2Detail>
                            <Div2Detail className="D2Data">
                                30
                            </Div2Detail>
                        </Div2>
                        <Div2>
                            <Div2Detail className="D2Text">
                                標準差
                            </Div2Detail>
                            <Div2Detail className="D2Data">
                                8
                            </Div2Detail>
                        </Div2>
                    </Div1Center>
                </Div1>
            </Div0>
        )}}
export default DataTop;