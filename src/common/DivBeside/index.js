import React, { Component, useState, useEffect } from 'react'
import { Div0,Logo,HeaderList,LogoText,BesideTop,BesideMid,BesideBot, LogoAll } from "./style";
import './sty.css'
import {useNavigate} from "react-router-dom";
const data = [
    { title: '二頭肌', c1: '全體二頭測試', c2: '全體二頭訓練', c3: '個人二頭訓練', c4: '個人二頭測試' ,aa:'/main2'},
    { title: '三角肌',c1: '全體三角測試', c2: '全體三角訓練', c3: '個人三角訓練', c4: '個人三角測試' ,aa:'/main'},
    { title: '下肢',c1: '全體下肢測試', c2: '全體下肢訓練', c3: '個人下肢訓練', c4: '個人下肢測試' ,aa:'/'},
]

const AccordionItem = (props) => {
    const navigate = useNavigate();
    const [heightItem, setHeightItem] = useState(0)
    useEffect(() => {
    setHeightItem(props.visable ?
    document.getElementById(`item_${props.index}`).scrollHeight
    : 0)
    })
    const { item, index, setVisable } = props
    return (
    <div className='accordion-item' onClick={() => setVisable(index)} >
    <div className='title'>{item.title}</div>
    <div className='content-box' style={{ height: heightItem }}
    id={`item_${index}`}>
    <div className='choose' onClick={()=>navigate(item.aa)}>{item.c1}</div>
    <div className='choose'>{item.c2}</div>
    <div className='choose'>{item.c3}</div>
    <div className='choose'>{item.c4}</div>
    </div>
    </div>
    );
    }
const BesideInner = () => {
    const [visable, setVisable] = useState([false, false, false])
    const setVisableChild = (key) => {
        setVisable(visable.map((one, index) => key === index ? true:false))
    }
    return(
        <Div0>

            <BesideTop>
                <LogoAll>
                    <Logo>
                        <img src='https://i.imgur.com/BJ21wvu.png'  height={56} width={87.5}></img>
                    </Logo>
                    <HeaderList>
                        <LogoText>
                            管理系統
                        </LogoText>
                    </HeaderList>
                </LogoAll>
            </BesideTop>
            <BesideMid>
            <div className='accordion'>
                {data.map((item, index) => {
            return <AccordionItem item={item} key={index} index={index}visable={visable[index]} setVisable={setVisableChild}/>
                })}
            </div>
            </BesideMid>
            <BesideBot>

            </BesideBot>
        </Div0>
    )
}
export default BesideInner;