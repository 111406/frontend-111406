import React, { useState, useEffect } from "react";
import { Div0, ContentDiv } from './sty';
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
import axios from 'axios';
import { BACKEND_HOST } from "../../../global";
import { LoaderDiv, LoaderContent } from "../loader";
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
      font: {
        size: 28
      }
    },
  },
};

const AllPage = () => {
  var [bicepMeans, setBicepMeans] = useState([]);
  var [quadricepsMeans, setQuadricepsMeans] = useState([]);
  var [checkLoding, setCheckLoding] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      var result = await axios.get(
        `${BACKEND_HOST}/record/biceps/means`,
        { withCredentials: true },
      );
      setBicepMeans(result.data['means']);

      result = await axios.get(
        `${BACKEND_HOST}/record/quadriceps/means`,
        { withCredentials: true },
      )
      setQuadricepsMeans(result.data['means']);
      setCheckLoding(false);
    };

    fetchData();
  }, []);

  const labels = ['60~64歲', '65~69歲', '70~74歲', '75~79歲', '80~84歲', '85~89歲', '90~94歲', '95~99歲'];
  const data = {
    labels,
    datasets: [
      {
        label: '二頭肌測試平均次數',
        data: bicepMeans,
        backgroundColor: 'rgba(255, 99, 132, 0.5)',//長條顏色
      },
      {
        label: '座椅深蹲測試平均次數',
        data: quadricepsMeans,
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
      <LoaderDiv checkLoding={checkLoding}>
        <LoaderContent></LoaderContent>
      </LoaderDiv>
    </Div0>
  )
}

export default AllPage;