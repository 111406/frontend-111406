//測試個人

import React,{Component,useState} from "react";
// import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from"recharts";
import { Line } from "react-chartjs-2";
import {Div0,DataDrawItem,Div1,Table0,Thead0,Th0} from'./sty';
// import {Dataq} from './data.js'
const token ='eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiYWRtaW4iLCJfaWQiOiI2MzRhNDg5OTJkNzAyY2EzYWRlNTlmMzYiLCJlbWFpbCI6InpzZGE1ODU4c2RhQGdtYWlsLmNvbSIsInJvbGUiOjkwMCwiZXhwIjoxNjY2MDAzNzA4fQ.cKregBo_KYYQPEzSabe27u2iN6mLKzQbqrQ4upddAEY';
var dataa=[];



var a=[];
var stimes=[];
var bicepstimes=[];
var dataB={
    
    labels:a,
    datasets:[
        {
            label: "biceps",
            data: bicepstimes,
            fill: true,
            backgroundColor: "rgba(75,192,192,0.2)",
            borderColor: "rgba(75,192,192,1)",
            lineTension: 0.4
        }
    ]
};
var dataS={
    
    labels:a,
    datasets:[
        {
            label: "biceps",
            data: bicepstimes,
            fill: true,
            backgroundColor: "rgba(75,192,192,0.2)",
            borderColor: "rgba(75,192,192,1)",
            lineTension: 0.4
        }
    ]
};
fetch('https://backend-111406.onrender.com/api/record/admin', {
                method: "GET",
                headers: new Headers({
                    'Content-Type': 'application/json',
                    'token': `eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiYWRtaW4iLCJfaWQiOiI2MzRhNDg5OTJkNzAyY2EzYWRlNTlmMzYiLCJlbWFpbCI6InpzZGE1ODU4c2RhQGdtYWlsLmNvbSIsInJvbGUiOjkwMCwiZXhwIjoxNjY2MDAzNzA4fQ.cKregBo_KYYQPEzSabe27u2iN6mLKzQbqrQ4upddAEY`, /* 把token放在這 */
                })
}
    )
    .then(function(response) {
        return response.json();
      })
      .then(function(myJson) {
        console.log(myJson.data);
        return myJson.data;
      })
      .then(function(myData) {
        for (var i = 0; i < myData.length; i++) {
            if(myData[i].part=='二頭肌'){
                bicepstimes.push(myData[i].times);
                a.push(myData[i].create_time);
            }
            if(myData[i].part=='股四頭肌'){
                stimes.push(myData[i].times);
                
            }
          }
          dataB={
    
            labels:a,
            datasets:[
                {
                    label: "二頭肌",
                    data: bicepstimes,
                    fill: true,
                    backgroundColor: "rgba(75,192,192,0.2)",
                    borderColor: "rgba(75,192,192,1)",
                    lineTension: 0.4
                },
                // {
                //     label: "下肢",
                //     data: stimes,
                //     fill: true,
                //     backgroundColor: "rgba(75,192,192,0.2)",
                //     borderColor: "rgba(75,192,192,1)",
                //     lineTension: 0.4
                // }
                
            ]

            
        };
        dataS={
    
            labels:a,
            datasets:[
                // {
                //     label: "二頭肌",
                //     data: bicepstimes,
                //     fill: true,
                //     backgroundColor: "rgba(75,192,192,0.2)",
                //     borderColor: "rgba(75,192,192,1)",
                //     lineTension: 0.4
                // },
                {
                    label: "下肢",
                    data: stimes,
                    fill: true,
                    backgroundColor: "rgba(75,192,192,0.2)",
                    borderColor: "rgba(75,192,192,1)",
                    lineTension: 0.4
                }
                
            ]

            
        };
      });
      console.log("bicepstimes");
      console.log(bicepstimes);

class DataDrawList extends Component{
    constructor(props){
        super(props);
        this.state={
        "data":[]
    };
    }
    componentDidMount(){
    this.getItems();
    }
    getItems(){
    fetch('https://backend-111406.onrender.com/api/record/admin', {
                method: "GET",
                headers: new Headers({
                    'Content-Type': 'application/json',
                    'token': `eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiYWRtaW4iLCJfaWQiOiI2MzRhNDg5OTJkNzAyY2EzYWRlNTlmMzYiLCJlbWFpbCI6InpzZGE1ODU4c2RhQGdtYWlsLmNvbSIsInJvbGUiOjkwMCwiZXhwIjoxNjY2MDAzNzA4fQ.cKregBo_KYYQPEzSabe27u2iN6mLKzQbqrQ4upddAEY`, /* 把token放在這 */
                })
}
    )
    .then(results=>results.json())
    .then(results=>{this.setState({"data":results.data})});
    }
    render(){
        return (
                <Div0>
                    <DataDrawItem>
                        
                        <Line data={dataB} />
                    </DataDrawItem>
                    <DataDrawItem>
                        <Line data={dataS} />
                    {/* <LineChart width={400} height={250} data={data}
                    margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                <XAxis dataKey="name"/>
                <YAxis/>
                <CartesianGrid strokeDasharray="3 3"/>
                <Tooltip/>
                <Legend />
                <Line type="monotone" dataKey="biceps" stroke="#8884d8" activeDot={{r: 8}}/>
                <Line type="monotone" dataKey="deltoid" stroke="#82ca9d" />
                <Line type="monotone" dataKey="squat" stroke="#7C9C99" />
            </LineChart> */}
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
                            this.state.data.map((item,index) =>(
                                <tr key={item._id}>
                                    <Th0>{item.create_time}</Th0>
                                    <Th0 className="th1">{item.part}</Th0>
                                    <Th0 className="th1">{item.times}</Th0>
                                </tr>
                            ))
                        }
                    </tbody>
                </Table0>
                    </DataDrawItem>
                </Div0>
        )}}
export default DataDrawList;