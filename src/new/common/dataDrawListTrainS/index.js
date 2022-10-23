//訓練下肢個人
import React,{Component} from "react";
import {Div0,DataDrawItem} from'./sty';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);
const data = {
  labels: ['完成次數', '未完成次數'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
      ],
      borderWidth: 0.5,
    },
  ],
};


class DataDrawListTrainS extends Component{
    
    render(){
        return (
                <Div0>
                    <DataDrawItem>
                      <Doughnut options={{
                    padding:"0px",
                    defaultFontSize:"14px",
                    responsive: true,
                  maintainAspectRatio: false,
                    legend:{
                        display:false,
                    },
                    plugins:{
                        datalabels: {
                            color:'#000000',
                            anchor: "start",
                            align:"end",
                            formatter: function(value, context) {
                                    return context.chart.data.labels[context.dataIndex];
            }
                        }
                    } 
                }} data={data} />
                    </DataDrawItem>
                    <DataDrawItem></DataDrawItem>
                    <DataDrawItem></DataDrawItem>
                </Div0>
        )}}
export default DataDrawListTrainS;