import React,{useState} from "react";
import * as XLSX from 'xlsx';
import{Div0,Table0,Thead0,Th0}from'./style';

function DrawSheet2(){

        const readExcel=(file)=>{
            const promise=new Promise((resolve,reject)=>{
                const fileReader=new FileReader();
                fileReader.readAsArrayBuffer(file)
                fileReader.onload=(e)=>{
                    const bufferArray=e.target.result;
                    const wb=XLSX.read(bufferArray,{type:'buffer'});
                    const wsname= wb.SheetNames[0];
                    const ws=wb.Sheets[wsname];
                    const data=XLSX.utils.sheet_to_json(ws);
                    resolve(data)
                };
                fileReader.onerror=(error)=>{
                    reject(error);
                };
            });
            promise.then((d)=>{
                setItems(d);
            });
        };
        const [items,setItems]=useState([]);
        return (
            <Div0>
                <input type='file' onChange={(e)=>{
                    const file=e.target.files[0];
                    readExcel(file);
                }}>
                </input>
                <Table0 className="table">
                    <Thead0>
                        <tr>
                        <Th0 scope="col">username</Th0>
                        <Th0 className="th1" scope="col">性別</Th0>
                        <Th0 className="th1" scope="col">次數</Th0>
                        <Th0 className="th1" scope="col">年紀</Th0>
                        </tr>
                    </Thead0>
                    <tbody>
                        {
                            items.map((d)=>(
                                <tr key={d.ID}>
                                    <Th0>{d.username}</Th0>
                                    <Th0 className="th1">{d.gender}</Th0>
                                    <Th0 className="th1">{d.number}</Th0>
                                    <Th0 className="th1">{d.old}</Th0>
                                </tr>
                            ))
                        }
                    </tbody>
            </Table0>
            </Div0>
        );}
export default DrawSheet2;