import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Div0 } from './sty';
import { CommonTable, CommonThead, CommonTh, CommonTd } from '../tableStyle';
import { getAuthSearchName } from "../apiUtil";
import { BACKEND_HOST } from "../../../global";
import { useNavigate } from "react-router-dom";

const LogList = () => {
    const [logs, setLogs] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            var userNameSearch = getAuthSearchName();
            if (!userNameSearch) {
                userNameSearch = "/admin";
            }

            var result = await axios.get(
                `${BACKEND_HOST}/log?userId=${userNameSearch}`,
                {
                    withCredentials: true,
                    headers: {
                        'Content-Type': 'application/json',
                    }
                },
            ).catch((e) => navigate(`/${e.response.status}`));

            if (result) {
                setLogs(result.data['data']);
            }
        }

        fetchData();
    }, [])

    return (
        <Div0>
            <CommonTable>
                <CommonThead>
                    <tr>
                        <CommonTh>時間</CommonTh>
                        <CommonTh>來源IP</CommonTh>
                        <CommonTh>目標網址</CommonTh>
                        <CommonTh>操作訊息</CommonTh>
                    </tr>
                </CommonThead>
                <tbody>
                    {
                        logs.map((item, index) => (
                            <tr key={index}>
                                <CommonTd>{item.action_time}</CommonTd>
                                <CommonTd>{String(item.ip)}</CommonTd>
                                <CommonTd>{String(item.request_url)}</CommonTd>
                                <CommonTd>{String(item.message)}</CommonTd>
                            </tr>
                        ))
                    }
                </tbody>
            </CommonTable>
        </Div0>
    )
}
export default LogList;