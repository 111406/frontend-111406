import React, { PureComponent ,useState } from 'react';
import { Div0,Div1 } from './style.js';
import { Line } from "react-chartjs-2";
import Chart from 'chart.js/auto';
import {data1234} from './a.js'





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