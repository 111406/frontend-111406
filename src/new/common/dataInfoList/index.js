import React, { Component } from "react";
import { Div0, DataInfoItem, Div3, DivDetail1, DivDetail2 } from './sty';
// import Header from '../header/index'
import { getAuthSearchName } from "../apiUtil";
import { BACKEND_HOST } from "../../../global";
// import { Token } from "../token";

var userNameSearch;

class DataInfoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            "data": []
        };
    }
    componentDidMount() {
        this.getItems();
    }
    getItems() {
        fetch(`${BACKEND_HOST}/user/${userNameSearch}`, {
            method: "GET",
            credentials: 'include',
            headers: new Headers({
                'Content-Type': 'application/json',
                // 'token': getAuthToken(), /* 把token放在這 */
            })
        }
        )
            .then(results => results.json())
            .then(results => {
                this.setState({ "data": results.data })
                // console.log(results.data);
                var a = "";
                a = results.data.other_detail;
                // console.log("12"+results.data.other_detail);
                a = a.replace('}', '');
                const b = a.split(",");
                const b0 = b[0].split(':');
                const b1 = b[1].split(':');
                const b2 = b[2].split(':');
                const b3 = b[3].split(':');
                // console.log(b3[1]);
                this.setState({ "b0": b0[1] });
                this.setState({ "b1": b1[1] });
                this.setState({ "b2": b2[1] });
                this.setState({ "b3": b3[1] });


            });
    }
    render() {
        userNameSearch = getAuthSearchName();
        // userNameSearch =window.location.href;
        // userNameSearch=userNameSearch.replace("http://localhost:3000/personal/","")
        return (
            <Div0>
                <DataInfoItem>
                    <Div3>
                        <DivDetail1>暱稱</DivDetail1>
                        <DivDetail2>{this.state.data.user_id}</DivDetail2>
                        {/* {console.log(this.state.data)} */}
                    </Div3>
                    <Div3>
                        <DivDetail1>性別</DivDetail1>
                        <DivDetail2>{this.state.data.gender}</DivDetail2>
                    </Div3>
                    <Div3>
                        <DivDetail1>生日
                        </DivDetail1>
                        <DivDetail2>{this.state.data.birthday}</DivDetail2>
                    </Div3>
                </DataInfoItem>
                <DataInfoItem>
                    <Div3>
                        <DivDetail1>身高</DivDetail1>
                        <DivDetail2>{this.state.data.height}</DivDetail2>
                    </Div3>
                    <Div3>
                        <DivDetail1>體重</DivDetail1>
                        <DivDetail2>{this.state.data.weight}</DivDetail2>
                    </Div3>
                    <Div3>
                        <DivDetail1>BMI</DivDetail1>
                        <DivDetail2>{(this.state.data.weight / ((this.state.data.height / 100) * (this.state.data.height / 100))).toFixed(2)}</DivDetail2>
                    </Div3>
                </DataInfoItem>
                <DataInfoItem>
                    <Div3>
                        <DivDetail1>高血壓</DivDetail1>
                        <DivDetail2>{this.state.b0}</DivDetail2>
                    </Div3>
                    <Div3>
                        <DivDetail1>高血脂</DivDetail1>
                        <DivDetail2>{this.state.b1}</DivDetail2>
                    </Div3>
                    <Div3>
                        <DivDetail1>高血醣</DivDetail1>
                        <DivDetail2>{this.state.b2}</DivDetail2>
                    </Div3>
                </DataInfoItem>
                <DataInfoItem>
                    <Div3>
                        <DivDetail1>運動習慣</DivDetail1>
                        <DivDetail2>{this.state.b3}</DivDetail2>
                    </Div3>
                    <Div3>
                        <DivDetail1>權限</DivDetail1>
                        <DivDetail2>{this.state.data.role}</DivDetail2>
                    </Div3>
                    <Div3>
                        <DivDetail1>代幣數量</DivDetail1>
                        <DivDetail2>{this.state.data.eth_sum}</DivDetail2>
                    </Div3>
                </DataInfoItem>
            </Div0>
        )
    }
}
export default DataInfoList;