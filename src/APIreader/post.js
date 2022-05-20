import React from 'react';
import ReactDOM from 'react-dom/client';
import{Div0,Table0,Thead0,Th0}from'./style';
import {Col} from 'react-bootstrap'
class ContentFeed extends React.Component{
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
    fetch('')
    .then(results=>results.json())
    .then(results=>this.setState({"data":results.data}));
    }
    render(){
        return (
            <Div0>
                <Table0 className="table">
                    <Thead0>
                        <tr>
                            <Th0 scope="col">user_id</Th0>
                            <Th0 className="th1" scope="col">birthday</Th0>
                            <Th0 className="th1" scope="col">height</Th0>
                            <Th0 className="th1" scope="col">weight</Th0>
                        </tr>
                </Thead0>
                    <tbody>
                        {
                            this.state.data.map((item,index) =>(
                                <tr key={item._id}>
                                    <Th0>{item.user_id}</Th0>
                                    <Th0 className="th1">{item.birthday}</Th0>
                                    <Th0 className="th1">{item.height}</Th0>
                                    <Th0 className="th1">{item.weight}</Th0>
                                </tr>
                            ))
                        }
                    </tbody>
                </Table0>
            </Div0>
    );
  }
}
export default ContentFeed;
