import React, { useState, useEffect } from "react";
import axios from 'axios';
import {
    Body,
    ContentBody,
    UpdateBox,
    UpdateTitle,
    UpdateTitleDiv,
    UpdateRow,
    UpdateColumn,
    UpdateSubTitle,
    UpdateSelect,
    Radio,
    UpdateText,
    UpdateRadioSection,
    UpdateInput,
    UpdateInputGroup,
    UpdateInputDiv,
    UpdateUnitTextDiv,
    UpdateUnitText,
    UpdateSubmit
} from "./style";
import Header from "../../common/header";

const UpdatePage = () => {
    return (
        <Body>
            <Header></Header>
            <ContentBody>
                <UpdateBox>
                    <UpdateTitleDiv>
                        <UpdateTitle>更改運動計畫</UpdateTitle>
                    </UpdateTitleDiv>

                    <UpdateRow>
                        <UpdateColumn flex={"50%"}>
                            <UpdateSubTitle>選擇使用者</UpdateSubTitle>
                            <UpdateSelect></UpdateSelect>
                        </UpdateColumn>
                        <UpdateColumn flex={"50%"}>
                            <UpdateSubTitle>選擇日期</UpdateSubTitle>
                            <UpdateSelect></UpdateSelect>
                        </UpdateColumn>
                    </UpdateRow>
                    <UpdateRow>
                        <UpdateColumn flex={"100%"}>
                            <UpdateSubTitle>欲調整訓練內容之時間範圍</UpdateSubTitle>
                            <UpdateRadioSection>
                                <Radio name="effectedTime" value="selected"></Radio>
                                <UpdateText>只調整該日期</UpdateText>
                            </UpdateRadioSection>
                            <UpdateRadioSection>
                                <Radio name="effectedTime" value="after" defaultChecked></Radio>
                                <UpdateText>選定日期之後(含選定日期)</UpdateText>
                            </UpdateRadioSection>
                        </UpdateColumn>
                    </UpdateRow>
                    <UpdateRow>
                        <UpdateColumn flex={"33.3333%"}>
                            <UpdateSubTitle>二頭肌</UpdateSubTitle>
                            <UpdateInputGroup>
                                <UpdateInputDiv>
                                    <UpdateInput></UpdateInput>
                                </UpdateInputDiv>
                                <UpdateUnitTextDiv>
                                    <UpdateUnitText>/ 次</UpdateUnitText>
                                </UpdateUnitTextDiv>
                            </UpdateInputGroup>
                            <UpdateInputGroup>
                                <UpdateInputDiv>
                                    <UpdateInput></UpdateInput>
                                </UpdateInputDiv>
                                <UpdateUnitTextDiv>
                                    <UpdateUnitText>/ 組</UpdateUnitText>
                                </UpdateUnitTextDiv>
                            </UpdateInputGroup>
                        </UpdateColumn>
                        <UpdateColumn flex={"33.3333%"}>
                            <UpdateSubTitle>三角肌</UpdateSubTitle>
                            <UpdateInputGroup>
                                <UpdateInputDiv>
                                    <UpdateInput></UpdateInput>
                                </UpdateInputDiv>
                                <UpdateUnitTextDiv>
                                    <UpdateUnitText>/ 次</UpdateUnitText>
                                </UpdateUnitTextDiv>
                            </UpdateInputGroup>
                            <UpdateInputGroup>
                                <UpdateInputDiv>
                                    <UpdateInput></UpdateInput>
                                </UpdateInputDiv>
                                <UpdateUnitTextDiv>
                                    <UpdateUnitText>/ 組</UpdateUnitText>
                                </UpdateUnitTextDiv>
                            </UpdateInputGroup>
                        </UpdateColumn>
                        <UpdateColumn flex={"33.3333%"}>
                            <UpdateSubTitle>滑牆運動</UpdateSubTitle>
                            <UpdateInputGroup>
                                <UpdateInputDiv>
                                    <UpdateInput></UpdateInput>
                                </UpdateInputDiv>
                                <UpdateUnitTextDiv>
                                    <UpdateUnitText>/ 次</UpdateUnitText>
                                </UpdateUnitTextDiv>
                            </UpdateInputGroup>
                            <UpdateInputGroup>
                                <UpdateInputDiv>
                                    <UpdateInput></UpdateInput>
                                </UpdateInputDiv>
                                <UpdateUnitTextDiv>
                                    <UpdateUnitText>/ 組</UpdateUnitText>
                                </UpdateUnitTextDiv>
                            </UpdateInputGroup>
                        </UpdateColumn>
                    </UpdateRow>

                    <div style={{ textAlign: "center" }}>
                        <UpdateSubmit>送出</UpdateSubmit>
                    </div>
                </UpdateBox>
            </ContentBody>
        </Body>
    );
}

export default UpdatePage;