import React,{Component} from "react";
import {Div0,ContentDiv} from'./sty';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import Header from "../../common/header";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: '測試統計圖(次數/年齡)',
    },
  },
};


class AllPage  extends Component {
    render(){
        const labels = ['60~64歲', '65~69歲', '70~74歲', '75~79歲', '80~84歲', '85~89歲', '90~94歲','95~99歲'];
        var bicepTime = [1, 2, 3, 4, 5, 6, 7,8];//二頭放這
        var chairTime = [1, 2, 3, 4, 5, 6, 7,8];//下肢次數
            const data = {
            labels,
            datasets: [
                {
                label: '二頭肌測試平均次數',
                data: bicepTime,
                backgroundColor: 'rgba(255, 99, 132, 0.5)',//長條顏色
                },
                {
                label: '座椅深蹲測試平均次數',
                data: chairTime,
                backgroundColor: 'rgba(53, 162, 235, 0.5)',//長條顏色
                },
            ],
            };
        return (
                <Div0>
                    <Header></Header>
                    <ContentDiv>
                    <Bar options={options} data={data} />
                    </ContentDiv>
                </Div0>
        )}
    }
export default AllPage;