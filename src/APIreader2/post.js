import React from 'react';

import{Div0,Table0,Thead0,Th0}from'./style';
class ContentFeed2 extends React.Component{
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
    fetch('https://backend-111406.herokuapp.com/api/record/zsda5858sda')
    .then(results=>results.json())
    .then(results=>this.setState({"data":results.data}));
    console.log(this.state.data);
}
    
    render(){
        return (
            <Div0>
                <Table0 className="table">
                    <Thead0>
                        <tr>
                            <Th0 className="th1" scope="col">日期</Th0>
                            <Th0 className="th1" scope="col">部位</Th0>
                            <Th0 className="th1" scope="col">模式</Th0>
                            <Th0 className="th1" scope="col">次數</Th0>
                        </tr>
                </Thead0>
                    <tbody>
                        {
                            this.state.data.map((item,index) =>(
                                <tr key={item._id}>
                                    <Th0 className="th1">{item.create_time}</Th0>
                                    <Th0 className="th1">{item.part}</Th0>
                                    <Th0 className="th1">{item.type}</Th0>
                                    <Th0 className="th1">{item.times}</Th0>
                                </tr>
                            ))
                        }
                    </tbody>
                </Table0>
            </Div0>
    );
}
}
export default ContentFeed2;
