//訓練個人二頭

import React,{Component} from "react";
import {Div0,DataDrawItem} from'./sty';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { Token } from "../token";
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

class DataDrawListTrainB extends Component{
    static demoUrl = 'https://codesandbox.io/s/pie-chart-with-customized-active-shape-y93si';

  state = {
    activeIndex: 0,
  };

  onPieEnter = (_, index) => {
    this.setState({
      activeIndex: index,
    });
  };


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
    fetch('https://backend-111406.onrender.com/api/target/admin', {
                method: "GET",
                headers: new Headers({
                    'Content-Type': 'application/json',
                    'token': Token, /* 把token放在這 */
                })
    }
    )
    .then(results=>results.json())
    .then(results=>{this.setState({"data":results.data})});
    }
    render(){
      fetch('https://backend-111406.onrender.com/api/target/admin', {
                method: "GET",
                headers: new Headers({
                    'Content-Type': 'application/json',
                    'token': Token, /* 把token放在這 */
                })
}
    )
    .then(function(response) {
        return response.json();
      })
      .then(function(myJson) {
        
        // console.log(myJson.data[0].actual_times[0]);
        return myJson.data[0];
      })
      .then(function(a) {
        
        // console.log(a);
        // console.log(a.actual_times);
        return a.actual_times;
      })
        return (
                <Div0>
                    <DataDrawItem>
                      {/* {console.log(this.state.data[0])} */}
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
                </Div0>
        )}}
export default DataDrawListTrainB;