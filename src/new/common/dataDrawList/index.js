//測試個人

import React,{Component,useState} from "react";
// import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from"recharts";
import { Line } from "react-chartjs-2";
import {Div0,DataDrawItem,Div1,Table0,Thead0,Th0} from'./sty';
// import {Dataq} from './data.js'
import { getAuthToken } from "../apiUtil";
import { useNavigate,useParams } from "react-router-dom";
var dataa=[];
var a=[];
var stimes=[];
var bicepstimes=[];
let userNameSearch ="/admin";
userNameSearch =window.location.href;
userNameSearch=userNameSearch.replace("http://localhost:3000/personal","")
if(!userNameSearch){
    userNameSearch ="/admin";
}
var dataB={
    
    labels:a,
    datasets:[
        {
            label: "biceps",
            data: [],
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
            data:[],
            fill: true,
            backgroundColor: "rgba(75,192,192,0.2)",
            borderColor: "rgba(75,192,192,1)",
            lineTension: 0.4
        }
    ]
};


      
class DataDrawList extends Component{
    
    constructor(props){
        super(props);
        // console.log(props);
        this.state={
        "data":[]
    };
    }
    componentDidMount(){
    this.getItems();
    }
    
    getItems(){
    fetch('https://backend-111406.onrender.com/api/record'+userNameSearch, {
                method: "GET",
                headers: new Headers({
                    'Content-Type': 'application/json',
                    'token': getAuthToken(), /* 把token放在這 */
                })
}
    )
    .then(results=>results.json())
    .then(results=>{this.setState({"data":results.data})});
    }
    
    render(){
        userNameSearch =window.location.href;
        userNameSearch=userNameSearch.replace("http://localhost:3000/personal","")
        fetch('https://backend-111406.onrender.com/api/record'+userNameSearch, {
                method: "GET",
                headers: new Headers({
                    'Content-Type': 'application/json',
                    'token': getAuthToken(), /* 把token放在這 */
                })
}
    )
    .then(function(response) {
        return response.json();
      })
      .then(function(myJson) {
        // console.log(myJson.data);
        return myJson.data;
      })
      .then(function(myData) {
        bicepstimes=[];
        stimes=[];
        a=[];
        for (var i = 0; i < myData.length; i++) {
            if(myData[i].part=='二頭肌'){
                bicepstimes.push(myData[i].times);
                let arr1 = myData[i].create_time.split(' ');
                let arr = arr1[0].split('-');
                a.push(arr[1]+'/'+arr[2]);
            }
            if(myData[i].part=='股四頭肌'){
                stimes.push(myData[i].times);
                
            }
          }
          console.log(bicepstimes);
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
                
            ]

            
        };
        dataS={
    
            labels:a,
            datasets:[

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