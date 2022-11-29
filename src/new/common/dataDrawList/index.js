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
import { Div0, DataDrawItem, Table0, Thead0, Th0 } from './sty';
import { getAuthSearchName } from "../apiUtil";
import DataDrawListTrainB from "../dataDrawListTrainB";
import { BACKEND_HOST } from "../../../global";

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

const DataDrawList = () => {

    const [records, setRecords] = useState([]);
    const [bicepsRecords, setBicepsRecords] = useState([]);
    const [quadricepsRecords, setQuadricepsRecords] = useState([]);
    const [chartLabels, setChartLabels] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            var userNameSearch = getAuthSearchName();
            if (!userNameSearch) {
                userNameSearch = "/admin";
            }

            var result = await axios.get(
                `${BACKEND_HOST}/record/${userNameSearch}`,
                {
                    withCredentials: true,
                    headers: {
                        'Content-Type': 'application/json',
                    }
                },
            );         
            let _records = result.data['data'];
            setRecords(_records);

            var _bicepsRecords = [],
                _quadricepsRecords = [],
                _chartLabels = [];
            
            for (var i = 0; i < _records.length; i++) {
                switch (_records[i].part) {
                    case 0:
                        _bicepsRecords.push(_records[i].times);
                        let recordCreateTime = new Date(_records[i].create_time);
                        _chartLabels.push(`${recordCreateTime.getMonth()+1}/${recordCreateTime.getDate()}`);
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
        };
        fetchData();
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
                <Table0 className="table">
                    <Thead0>
                        <tr>
                            <Th0 scope="col">日期</Th0>
                            <Th0 className="th1" scope="col">部位</Th0>
                            <Th0 className="th1" scope="col">次數</Th0>
                        </tr>
                    </Thead0>
                    <tbody>
                        {
                            records.map((item, index) => (
                                <tr key={index}>
                                    <Th0>{item.create_time.split(" ")[0]}</Th0>
                                    <Th0 className="th1">{item.part_name}</Th0>
                                    <Th0 className="th1">{item.times}</Th0>
                                </tr>
                            ))
                        }
                    </tbody>
                </Table0>
            </DataDrawItem>
            <DataDrawItem><DataDrawListTrainB></DataDrawListTrainB></DataDrawItem>
        </Div0>
    )
}
export default DataDrawList;