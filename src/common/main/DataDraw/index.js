import React, { PureComponent ,useState } from 'react';
import { Div0,Div1 } from './style.js';
import { Line } from "react-chartjs-2";
import Chart from 'chart.js/auto';
import {data1234} from './a.js'


let dataT=[];
let da=[];
const label1=[]
fetch( 'https://backend-111406.herokuapp.com/api/record/zsda5858sda', {
method: "GET",
headers: new Headers({
    'Content-Type': 'application/json',
})
})
.then(res => res.json())
.then(data => {
    dataT=data;
})
.catch(e => {
})



const DataDraw = () => {
   
    return (
    <Div0>
        <Div1>
            <Line data={data1234} />
        </Div1>
    </Div0>
    );
}
export default DataDraw;


