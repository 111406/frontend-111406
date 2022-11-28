//測試個人

import React, { Component } from "react";
import { Line } from "react-chartjs-2";
import Chart from 'chart.js/auto';

import { Div0, DataDrawItem, Table0, Thead0, Th0 } from './sty';
import { getAuthSearchName } from "../apiUtil";
import DataDrawListTrainB from "../dataDrawListTrainB";
import { BACKEND_HOST } from "../../../global";

var a = [];
var stimes = [];
var bicepstimes = [];
let userNameSearch = getAuthSearchName();
if (!userNameSearch) {
    userNameSearch = "/admin";
}
var dataB = {
    labels: a,
    datasets: [
        {
            label: "二頭",
            data: [],
            fill: true,
            backgroundColor: "rgba(75,192,192,0.2)",
            borderColor: "rgba(75,192,192,1)",
            lineTension: 0.4
        },
        {
            label: "下肢",
            data: [],
            fill: true,
            backgroundColor: "rgba(75,192,192,0.2)",
            borderColor: "rgba(75,192,192,1)",
            lineTension: 0.4
        }
    ]
};
class DataDrawList extends Component {

    constructor(props) {
        super(props);
        // console.log(props);
        this.state = {
            "data": []
        };
    }
    componentDidMount() {
        this.getItems();
    }

    getItems() {
        fetch(`${BACKEND_HOST}/record/${userNameSearch}`, {
            method: "GET",
            credentials: 'include',
            headers: new Headers({
                'Content-Type': 'application/json',
                // 'token': getAuthToken(), /* 把token放在這 */
            })
        })
        .then(results => results.json())
        .then(results => { this.setState({ "data": results.data }) });
    }

    render() {
        userNameSearch = getAuthSearchName();
        // console.log('1'+userNameSearch);
        // userNameSearch =window.location.href;
        // userNameSearch=userNameSearch.replace("http://localhost:3000/personal","")
        fetch(`${BACKEND_HOST}/record/${userNameSearch}`, {
            method: "GET",
            credentials: 'include',
            headers: new Headers({
                'Content-Type': 'application/json',
                // 'token': getAuthToken(), /* 把token放在這 */
            })
        }).then(function (response) {
                return response.json();
            })
            .then(function (myJson) {
                // console.log(myJson.data);
                return myJson.data;
            })
            .then(function (myData) {
                bicepstimes = [];
                stimes = [];
                a = [];
                // console.log(myData);
                for (var i = 0; i < myData.length; i++) {
                    if (myData[i].part === '二頭肌') {
                        bicepstimes.push(myData[i].times);
                        let arr1 = myData[i].create_time.split(' ');
                        let arr = arr1[0].split('-');
                        a.push(arr[1] + '/' + arr[2]);
                    }
                    if (myData[i].part === '股四頭肌') {
                        stimes.push(myData[i].times);

                    }
                }
                //   console.log(bicepstimes);
                dataB = {

                    labels: a,
                    datasets: [
                        {
                            label: "二頭肌",
                            data: bicepstimes,
                            fill: true,
                            backgroundColor: "rgba(75,192,192,0.2)",
                            borderColor: "rgba(75,192,192,1)",
                            lineTension: 0.5
                        },
                        {
                            label: "下肢",
                            data: stimes,
                            fill: true,
                            backgroundColor: "rgba(255,0,0,0.2)",
                            borderColor: "rgba(255,0,0,1)",
                            lineTension: 0.5
                        }

                    ]



                };

            });
        return (
            <Div0>
                <DataDrawItem>

                    <Line data={dataB} />
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
                                this.state.data.map((item, index) => (
                                    <tr key={index}>
                                        <Th0>{item.create_time.split(" ")[0]}</Th0>
                                        <Th0 className="th1">{item.part}</Th0>
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
}
export default DataDrawList;