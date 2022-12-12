//測試個人

import React, { useEffect, useState } from "react";
import axios from 'axios';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
} from 'chart.js';
import { Line } from "react-chartjs-2";
import { Div0, DataDrawItem } from './sty';
import { CommonTable, CommonThead, CommonTh, CommonTd } from '../tableStyle';
import { getAuthSearchName } from "../apiUtil";
import DataDrawListTrainB from "../dataDrawListTrainB";
import { BACKEND_HOST } from "../../../global";
import { useNavigate } from "react-router-dom";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
);

const DataDrawList = ({ loadingFinish }) => {

    const navigate = useNavigate();
    const [records, setRecords] = useState([]);
    const [bicepsRecords, setBicepsRecords] = useState([]);
    const [quadricepsRecords, setQuadricepsRecords] = useState([]);
    const [chartLabels, setChartLabels] = useState([]);
    var isChartLoadFinish = false;
    var isTableLoadFinish = false;

    useEffect(() => {
        var userNameSearch = getAuthSearchName();
        if (!userNameSearch) {
            userNameSearch = "/admin";
        }

        const checkLoad = () => {
            if (isChartLoadFinish && isTableLoadFinish) {
                loadingFinish();
            }
        }

        const getRecords = async () => {
            var result = await axios.get(
                `${BACKEND_HOST}/record/${userNameSearch}`,
                {
                    withCredentials: true,
                    headers: {
                        'Content-Type': 'application/json',
                    }
                },
            ).catch((e) => navigate(`/${e.response.status}`));

            if (result) {
                setRecords(result.data['data']);
                isTableLoadFinish = true;
                checkLoad();
            }
        };

        const getChartData = async () => {
            var result = await axios.get(
                `${BACKEND_HOST}/record/chart/${userNameSearch}`,
                {
                    withCredentials: true,
                    headers: {
                        'Content-Type': 'application/json',
                    }
                },
            ).catch((e) => navigate(`/${e.response.status}`));

            if (result) {
                var _records = result.data['data'];

                var _bicepsRecords = [],
                    _quadricepsRecords = [],
                    _chartLabels = [];

                for (var i = 0; i < _records.length; i++) {
                    switch (_records[i].part) {
                        case 0:
                            _bicepsRecords.push(_records[i].times);
                            let recordCreateTime = new Date(_records[i].create_time);
                            _chartLabels.push(`${recordCreateTime.getMonth() + 1}/${recordCreateTime.getDate()}`);
                            break;
                        case 2:
                            _quadricepsRecords.push(_records[i].times);
                            break;
                        default:
                            break;
                    }
                }
                setBicepsRecords(_bicepsRecords);
                setQuadricepsRecords(_quadricepsRecords);
                setChartLabels(_chartLabels);
                isChartLoadFinish = true;
                checkLoad(isChartLoadFinish);
            }
        }
        getRecords();
        getChartData();
    }, []);

    const chartData = {
        labels: chartLabels,
        datasets: [
            {
                label: "二頭肌",
                data: bicepsRecords,
                fill: true,
                backgroundColor: "rgba(75,192,192,0.2)",
                borderColor: "rgba(75,192,192,1)",
                lineTension: 0.5
            },
            {
                label: "下肢",
                data: quadricepsRecords,
                fill: true,
                backgroundColor: "rgba(255,0,0,0.2)",
                borderColor: "rgba(255,0,0,1)",
                lineTension: 0.5
            }
        ]
    };

    return (
        <Div0>
            <DataDrawItem>
                <Line data={chartData} />
            </DataDrawItem>

            <DataDrawItem>
                <CommonTable className="table">
                    <CommonThead>
                        <tr>
                            <CommonTh>日期</CommonTh>
                            <CommonTh>部位</CommonTh>
                            <CommonTh>次數</CommonTh>
                        </tr>
                    </CommonThead>
                    <tbody>
                        {
                            records.map((item, index) => (
                                <tr key={index}>
                                    <CommonTd>{item.create_time.split(" ")[0]}</CommonTd>
                                    <CommonTd>{item.part_name}</CommonTd>
                                    <CommonTd>{item.times}</CommonTd>
                                </tr>
                            ))
                        }
                    </tbody>
                </CommonTable>
            </DataDrawItem>
            <DataDrawItem><DataDrawListTrainB></DataDrawListTrainB></DataDrawItem>
        </Div0>
    )
}
export default DataDrawList;