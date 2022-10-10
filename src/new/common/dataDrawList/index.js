//測試個人

import React,{Component} from "react";
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from"recharts";
import {Div0,DataDrawItem,Div1} from'./sty';


const data = [
    {name: 'Page A', deltoid: 4000, biceps: 2400, squat: 2400},
    {name: 'Page B', deltoid: 3000, biceps: 1398, squat: 2210},
    {name: 'Page C', deltoid: 2000, biceps: 9800, squat: 2290},
    {name: 'Page D', deltoid: 2780, biceps: 3908, squat: 2000},
    {name: 'Page E', deltoid: 1890, biceps: 4800, squat: 2181},
    {name: 'Page F', deltoid: 2390, biceps: 3800, squat: 2500},
    {name: 'Page G', deltoid: 3490, biceps: 4300, squat: 2100},
];
class DataDrawList extends Component{
    render(){
        return (
                <Div0>
                    <DataDrawItem>
                    {/* <Div1>最近五次</Div1> */}
                    <LineChart width={400} height={250} data={data}
                    margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                <XAxis dataKey="name"/>
                <YAxis/>
                <CartesianGrid strokeDasharray="3 3"/>
                <Tooltip/>
                <Legend />
                <Line type="monotone" dataKey="biceps" stroke="#8884d8" activeDot={{r: 8}}/>
                <Line type="monotone" dataKey="deltoid" stroke="#82ca9d" />
                <Line type="monotone" dataKey="squat" stroke="#7C9C99" />
            </LineChart>
                    </DataDrawItem>
                    <DataDrawItem>
                    <LineChart width={400} height={250} data={data}
                    margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                <XAxis dataKey="name"/>
                <YAxis/>
                <CartesianGrid strokeDasharray="3 3"/>
                <Tooltip/>
                <Legend />
                <Line type="monotone" dataKey="biceps" stroke="#8884d8" activeDot={{r: 8}}/>
                <Line type="monotone" dataKey="deltoid" stroke="#82ca9d" />
                <Line type="monotone" dataKey="squat" stroke="#7C9C99" />
            </LineChart>
                    </DataDrawItem>
                    <DataDrawItem></DataDrawItem>
                </Div0>
        )}}
export default DataDrawList;