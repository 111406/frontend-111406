import React, { PureComponent ,useState } from 'react';
import { Div0 } from './style.js';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
{
    name: '-3s',
    time: 12,
    num: 0,
    amt: 2400,
},
{
    name: '-2s',
    time: 16,
    num: 107.5,
    amt: 2210,
},
{
    name: '-1s',
    time: 19,
    num: 787,
    amt: 2290,
},
{
    name: '0s',
    time: 20,
    num: 2500,
    amt: 2000,
},
{
    name: '1s',
    time: 23,
    num: 787,
    amt: 2181,
},
{
    name: '2s',
    time: 26,
    num: 107.5,
    amt: 2500,
},
{
    name: '3s',
    time: 32,
    num: 0,
    amt: 2100,
},
];

const DataDraw = () => {
    const[ttype,setTType]=useState('num');
    function onChangeDraw(value) {
        setTType(value);
        console.log(ttype);
    }
    return (
    <Div0>
        <select onChange={(e)=>onChangeDraw(e.target.value)}>
            <option value='num'>常模</option>
            <option value='time'>次數</option>
        </select>
        <ResponsiveContainer width="100%" height="70%">
        <AreaChart
        width={700}
        height={400}
        data={data}
        margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
        }}
        >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Area type="monotone" dataKey={ttype} stroke="#8884d8" fill="#01814A" />
        </AreaChart>
    </ResponsiveContainer>
    </Div0>
    );
}
export default DataDraw;