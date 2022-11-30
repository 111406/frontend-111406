//訓練個人二頭

import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Div0 } from './sty';
import { CommonTable, CommonThead, CommonTh, CommonTd } from '../tableStyle';
import { useNavigate } from "react-router-dom";
import { getAuthSearchName } from "../apiUtil";
import { BACKEND_HOST } from "../../../global";


const hc = { 'left': "左", "right": "右", "undefined": "" }
const pn = { 0: "二頭肌", 1: "三頭肌", 2: "股四頭肌" }

const DataDrawListTrainB = () => {
  const [tableData, setTableData] = useState([]);
  const navigate = useNavigate();


  useEffect(() => {
    const fetchData = async () => {
      var userNameSearch = getAuthSearchName();
      if (!userNameSearch) {
        userNameSearch = "/admin";
      }

      var result = await axios.get(
        `${BACKEND_HOST}/target/${userNameSearch}`,
        {
          withCredentials: true,
          headers: {
            'Content-Type': 'application/json',
          }
        },
      ).catch(() => navigate('/', { replace: true }));

      if (result) {
        let _targets = result.data['data'];
        var _tableData = [];

        for (var i = 0; i < _targets.length; i++) {
          for (var j = 0; j < _targets[i].user_todos.length; j++) {
            const _userTodos = _targets[i].user_todos[j];
            for (var k = 0; k < _userTodos.actual_times.length; k++) {
              const _actualTimes = _userTodos.actual_times[k];

              if (_actualTimes.times === 0) {
                _tableData.push({ "time": _userTodos.target_date, "part": pn[_actualTimes.part], "complete": "未完成", "hand": hc[_actualTimes.hand || 'undefined'] })
              }
              else {
                _tableData.push({ "time": _userTodos.target_date, "part": pn[_actualTimes.part], "complete": "完成", "hand": hc[_actualTimes.hand || 'undefined'] })
              }
            }
          }
        }
        setTableData(_tableData);
      }
    };

    fetchData();
  }, []);
  return (
    <Div0>
      <CommonTable className="table">
        <CommonThead>
          <tr>
            <CommonTh>日期</CommonTh>
            <CommonTh>部位</CommonTh>
            <CommonTh>是否完成</CommonTh>
          </tr>
        </CommonThead>
        <tbody>
          {
            tableData.map((item, index) => (

              <tr key={index}>
                <CommonTd>{item.time}</CommonTd>
                <CommonTd>{String(item.hand) + String(item.part)}</CommonTd>
                <CommonTd>{String(item.complete)}</CommonTd>
              </tr>
            ))
          }
        </tbody>
      </CommonTable>
    </Div0>
  );
}
export default DataDrawListTrainB;