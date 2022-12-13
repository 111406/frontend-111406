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
import { BACKEND_HOST } from "../../../global";
import { useNavigate } from "react-router-dom";

const TrainingPart = {
    BICEPS: 0,
    DELTOID: 1,
    QUADRICEPS: 2
}

const UpdatePage = () => {
    const navigate = useNavigate();
    const [userId, setUserId] = useState("");
    const [selectedDate, setSelectedDate] = useState("");
    const [mode, setMode] = useState("after");
    const [bicepsTimes, setBicepsTimes] = useState("");
    const [deltoidTimes, setDeltoidTimes] = useState("");
    const [quadricepsTimes, setQuadricepsTimes] = useState("");
    const [bicepsSets, setBicepsSets] = useState("");
    const [deltoidSets, setDeltoidSets] = useState("");
    const [quadricepsSets, setQuadricepsSets] = useState("");

    const [isLoading, setIsLoading] = useState(false);
    const [userOptions, setUserOptions] = useState([]);
    const [dateOptions, setDateOptions] = useState([]);
    const [userTodos, setUserTodos] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            var result = await axios.get(
                `${BACKEND_HOST}/target/search/user_ids`,
                {
                    withCredentials: true,
                    headers: {
                        'Content-Type': 'application/json',
                    }
                },
            ).catch((e) => navigate(`/${e.response.status}`));

            if (result) {
                setUserOptions(result.data['data']);
            }
        };

        fetchData();
    }, []);

    const submit = async () => {
        setIsLoading(true);

        if (userId && bicepsTimes && bicepsSets && deltoidTimes && deltoidSets && quadricepsTimes && quadricepsSets) {

            let _bicepsTimes = parseInt(bicepsTimes);
            let _bicepsSets = parseInt(bicepsSets);
            let _deltoidTimes = parseInt(deltoidTimes);
            let _deltoidSets = parseInt(deltoidSets);
            let _quadricepsTimes = parseInt(quadricepsTimes);
            let _quadricepsSets = parseInt(quadricepsSets);
            var requestData = {
                "mode": mode,
                "target_times": [{
                    "part": 0,
                    "times": _bicepsTimes,
                    "set": _bicepsSets,
                    "total": _bicepsTimes * _bicepsSets

                }, {
                    "part": 1,
                    "times": _deltoidTimes,
                    "set": _deltoidSets,
                    "total": _deltoidTimes * _deltoidSets
                }, {
                    "part": 2,
                    "times": _quadricepsTimes,
                    "set": _quadricepsSets,
                    "total": _quadricepsTimes * _quadricepsSets
                }]
            }


            var response = await axios.post(
                `${BACKEND_HOST}/target/update/${userId}/${selectedDate}`,
                requestData,
                {
                    withCredentials: true,
                    "Content-Type": "x-www-form-urlencoded"
                }
            ).catch((e) => navigate(`/${e.response.status}`));

            if (response) {
                alert(response.data['message']);
                window.location.reload();
            }
        } else {
            alert("尚有資料未完成");
        }
        setIsLoading(false);
    }

    const changeUserId = async (e) => {
        let _userId = e.target.value;
        if (_userId) {
            setUserId(_userId);

            let _userTodos = await getUserTodos(_userId);
            setUserTodos(_userTodos);
            let targetDates = _userTodos.map(userTodo => userTodo['target_date']);
            setDateOptions(targetDates);
        } else {
            setDateOptions([]);
        }
    }

    const getUserTodos = async (_userId) => {
        var response = await axios.get(
            `${BACKEND_HOST}/target/${_userId}?mode=current`,
            {
                withCredentials: true,
                headers: {
                    'Content-Type': 'application/json',
                }
            },
        ).catch((e) => navigate(`/${e.response.status}`));

        if (response) {
            return response.data['data'];
        }
    }

    const changeDate = async (e) => {
        let _selectedDate = e.target.value;
        setSelectedDate(_selectedDate);

        let selectedTodo = userTodos.filter(userTodo => userTodo['target_date'] === _selectedDate);
        let targetTimes = selectedTodo[0]['target_times'];
        for (var i = 0; i < targetTimes.length; i++) {
            let _targetTimes = targetTimes[i];
            switch (_targetTimes['part']) {
                case TrainingPart.BICEPS:
                    setBicepsTimes(_targetTimes['times']);
                    setBicepsSets(_targetTimes['set']);
                    break;
                case TrainingPart.DELTOID:
                    setDeltoidTimes(_targetTimes['times']);
                    setDeltoidSets(_targetTimes['set']);
                    break;
                default:
                    setQuadricepsTimes(_targetTimes['times']);
                    setQuadricepsSets(_targetTimes['set']);
                    break;
            }
        }
    }

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
                            <UpdateSelect onChange={changeUserId}>
                                <option key={999} value="">請選則欲查詢使用者</option>
                                {
                                    userOptions.map((option, index) => (
                                        <option key={index} value={option}>{option}</option>
                                    ))
                                }
                            </UpdateSelect>
                        </UpdateColumn>
                        <UpdateColumn flex={"50%"}>
                            <UpdateSubTitle>選擇日期</UpdateSubTitle>
                            <UpdateSelect onChange={changeDate}>
                                <option key={999} value="">請選則欲修改之日期</option>
                                {
                                    dateOptions.map((option, index) => (
                                        <option key={index} value={option}>{option}</option>
                                    ))
                                }
                            </UpdateSelect>
                        </UpdateColumn>
                    </UpdateRow>
                    <UpdateRow>
                        <UpdateColumn flex={"100%"}>
                            <UpdateSubTitle>欲調整訓練內容之時間範圍</UpdateSubTitle>
                            <UpdateRadioSection onChange={e => setMode(e.target.value)}>
                                <Radio name="effectedTime" value="selected"></Radio>
                                <UpdateText>只調整該日期</UpdateText>
                            </UpdateRadioSection>
                            <UpdateRadioSection>
                                <Radio name="effectedTime" value="after" onChange={e => setMode(e.target.value)} defaultChecked></Radio>
                                <UpdateText>選定日期之後(含選定日期)</UpdateText>
                            </UpdateRadioSection>
                        </UpdateColumn>
                    </UpdateRow>
                    <UpdateRow>
                        <UpdateColumn flex={"33.3333%"}>
                            <UpdateSubTitle>二頭肌</UpdateSubTitle>
                            <UpdateInputGroup>
                                <UpdateInputDiv>
                                    <UpdateInput
                                        onChange={e => setBicepsTimes(e.target.value)}
                                        value={bicepsTimes}
                                    />
                                </UpdateInputDiv>
                                <UpdateUnitTextDiv>
                                    <UpdateUnitText>/ 次</UpdateUnitText>
                                </UpdateUnitTextDiv>
                            </UpdateInputGroup>
                            <UpdateInputGroup>
                                <UpdateInputDiv>
                                    <UpdateInput
                                        onChange={e => setBicepsSets(e.target.value)}
                                        value={bicepsSets}
                                    />
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
                                    <UpdateInput
                                        onChange={e => setDeltoidTimes(e.target.value)}
                                        value={deltoidTimes}
                                    />
                                </UpdateInputDiv>
                                <UpdateUnitTextDiv>
                                    <UpdateUnitText>/ 次</UpdateUnitText>
                                </UpdateUnitTextDiv>
                            </UpdateInputGroup>
                            <UpdateInputGroup>
                                <UpdateInputDiv>
                                    <UpdateInput
                                        onChange={e => setDeltoidSets(e.target.value)}
                                        value={deltoidSets}
                                    />
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
                                    <UpdateInput
                                        onChange={e => setQuadricepsTimes(e.target.value)}
                                        value={quadricepsTimes}
                                    />
                                </UpdateInputDiv>
                                <UpdateUnitTextDiv>
                                    <UpdateUnitText>/ 次</UpdateUnitText>
                                </UpdateUnitTextDiv>
                            </UpdateInputGroup>
                            <UpdateInputGroup>
                                <UpdateInputDiv>
                                    <UpdateInput
                                        onChange={e => setQuadricepsSets(e.target.value)}
                                        value={quadricepsSets}
                                    />
                                </UpdateInputDiv>
                                <UpdateUnitTextDiv>
                                    <UpdateUnitText>/ 組</UpdateUnitText>
                                </UpdateUnitTextDiv>
                            </UpdateInputGroup>
                        </UpdateColumn>
                    </UpdateRow>

                    <div style={{ textAlign: "center" }}>
                        {
                            isLoading
                                ? <UpdateSubmit disabled={false}>載入中...</UpdateSubmit>
                                : <UpdateSubmit onClick={() => submit()}>送出</UpdateSubmit>
                        }
                    </div>
                </UpdateBox>
            </ContentBody>
        </Body>
    );
}

export default UpdatePage;