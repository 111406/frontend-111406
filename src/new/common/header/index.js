import React, { Component } from 'react'
import {Div0,Logo, LogoText,Personal,AllData,Exit,Whitediv} from './sty.js'
export default class index extends Component {
  render() {
    return (
      <Div0>
        <Logo>
          <img src='https://i.imgur.com/BJ21wvu.png'  height={56} width={87.5}></img>
        </Logo>
        <LogoText>管理系統</LogoText>
        <Whitediv></Whitediv>
        <Personal>個人</Personal>
        <AllData>全部</AllData>
        <Exit>登出</Exit>
      </Div0>
    )
  }
}
