//訓練個人二頭

import React, { useState } from "react";
import { Div0 } from './sty';
import { CommonTable, CommonThead, CommonTh, CommonTd } from '../tableStyle';
import { useNavigate } from "react-router-dom";
import { getAuthSearchName } from "../apiUtil";
import { BACKEND_HOST } from "../../../global";
var com = [];
var userNameSearch = "";


const hc = { 'left': "左", "right": "右", undefined: "" }
const pn = { 0: "二頭肌", 1: "三頭肌", 2: "股四頭肌" }

const DataDrawListTrainB = () => {
  const [data123, setData123] = useState([]);
  const navigate = useNavigate();
  userNameSearch = getAuthSearchName();
  com = []
  // var userNameSearch =window.location.href;
  // userNameSearch=userNameSearch.replace("http://localhost:3000/personal","")
  if (data123.length < 2) {

    fetch(`${BACKEND_HOST}/target/${userNameSearch}`, {
      method: "GET",
      credentials: 'include',
      headers: new Headers({
        'Content-Type': 'application/json',
        // 'token': getAuthToken(), /* 把token放在這 */
      })
    }
    )
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        return myJson.data;
      })
      .then(function (a) {
        for (var i = 0; i < a.length; i++) {
          for (var j = 0; j < a[i].user_todos.length; j++) {

            for (var k = 0; k < 5; k++) {
              if (a[i].user_todos[j].actual_times[0].hand) {
                if (a[i].user_todos[j].actual_times[0].times === 0) {
                  com.push({ "time": a[i].user_todos[j].target_date, "part": pn[a[i].user_todos[j].actual_times[k].part], "complete": "未完成", "h": hc[a[i].user_todos[j].actual_times[k].hand] })
                }
                else {
                  com.push({ "time": a[i].user_todos[j].target_date, "part": pn[a[i].user_todos[j].actual_times[k].part], "complete": "完成", "h": hc[a[i].user_todos[j].actual_times[k].hand] })
                }
              }
            }
          }
        }
        // console.log(com);
        setData123(com);
      }).catch((err) => navigate("/"));
  }
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