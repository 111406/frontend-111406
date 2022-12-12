import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Div0, DataInfoItem, Div3, DivDetail1, DivDetail2 } from './sty';
import { getAuthSearchName } from "../apiUtil";
import { BACKEND_HOST } from "../../../global";
import { useNavigate } from "react-router-dom";

const DataInfoList = () => {
    const navigate = useNavigate();
    const [userInfo, setUserInfo] = useState({});
    const [detail, setDetail] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            var userNameSearch = getAuthSearchName();
            if (!userNameSearch) {
                userNameSearch = "/admin";
            }

            var result = await axios.get(
                `${BACKEND_HOST}/user/${userNameSearch}`,
                {
                    withCredentials: true,
                    headers: {
                        'Content-Type': 'application/json',
                    }
                },
            ).catch((e) => navigate(`/${e.response.status}`));

            if (result) {
                let _userInfo = result.data['data'];
                setUserInfo(_userInfo);
                setDetail(_userInfo.other_detail);
            }
        };

        fetchData();
    }, []);
    return (
        <Div0>
            <DataInfoItem>
                <Div3>
                    <DivDetail1>暱稱</DivDetail1>
                    <DivDetail2>{userInfo.user_id}</DivDetail2>
                </Div3>
                <Div3>
                    <DivDetail1>性別</DivDetail1>
                    <DivDetail2>{userInfo.gender}</DivDetail2>
                </Div3>
                <Div3>
                    <DivDetail1>生日
                    </DivDetail1>
                    <DivDetail2>{userInfo.birthday}</DivDetail2>
                </Div3>
            </DataInfoItem>
            <DataInfoItem>
                <Div3>
                    <DivDetail1>身高</DivDetail1>
                    <DivDetail2>{userInfo.height}</DivDetail2>
                </Div3>
                <Div3>
                    <DivDetail1>體重</DivDetail1>
                    <DivDetail2>{userInfo.weight}</DivDetail2>
                </Div3>
                <Div3>
                    <DivDetail1>BMI</DivDetail1>
                    <DivDetail2>{(userInfo.weight / ((userInfo.height / 100) * (userInfo.height / 100))).toFixed(2)}</DivDetail2>
                </Div3>
            </DataInfoItem>
            <DataInfoItem>
                <Div3>
                    <DivDetail1>高血壓</DivDetail1>
                    <DivDetail2>{detail.hasHypertension}</DivDetail2>
                </Div3>
                <Div3>
                    <DivDetail1>高血脂</DivDetail1>
                    <DivDetail2>{detail.hasHyperglycemia}</DivDetail2>
                </Div3>
                <Div3>
                    <DivDetail1>高血醣</DivDetail1>
                    <DivDetail2>{detail.hasHyperlipidemia}</DivDetail2>
                </Div3>
            </DataInfoItem>
            <DataInfoItem>
                <Div3>
                    <DivDetail1>運動習慣</DivDetail1>
                    <DivDetail2>{detail.hasExerciseHabits}</DivDetail2>
                </Div3>
                <Div3>
                    <DivDetail1>權限</DivDetail1>
                    <DivDetail2>{userInfo.role}</DivDetail2>
                </Div3>
                <Div3>
                    <DivDetail1>代幣數量</DivDetail1>
                    <DivDetail2>{userInfo.eth_sum}</DivDetail2>
                </Div3>
            </DataInfoItem>
        </Div0>
    )
}
export default DataInfoList;