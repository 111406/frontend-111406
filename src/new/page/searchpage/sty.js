import styled from 'styled-components';
import 'typeface-quicksand';
export const Div0 = styled.div`
    position:absolute;
    top:0;
    left:0;
    width:100%;
    min-width:1000px;
    height:100%;
    margin: 0 auto;
    overflow: auto;
    z-index:4;
    &::-webkit-scrollbar {

      width: 7px;

    }

  &::-webkit-scrollbar-button {

      background: transparent;

      border-radius: 4px;

    }

  &::-webkit-scrollbar-track-piece {

      background: transparent;

    }

  &::-webkit-scrollbar-thumb {

      border-radius: 4px;

      background-color: rgba(0, 0, 0, 0.4);

      border: 1px solid slategrey;

    }

  &::-webkit-scrollbar-track {

      box-shadow: transparent;

    }

`


export const ContentDiv =styled.div`
    background-color:#F5F5F5;
    height:100%;
    overflow:auto;
    display: flex;
    justify-content: center; 
    align-items: center; 
    &::-webkit-scrollbar {

      width: 7px;

    }

  &::-webkit-scrollbar-button {

      background: transparent;

      border-radius: 4px;

    }

  &::-webkit-scrollbar-track-piece {

      background: transparent;

    }

  &::-webkit-scrollbar-thumb {

      border-radius: 4px;

      background-color: rgba(0, 0, 0, 0.4);

      border: 1px solid slategrey;

    }

  &::-webkit-scrollbar-track {

      box-shadow: transparent;

    }
    
`
export const SearchDiv =styled.div`
    width:300px;
    height:200px;
    border: 3px solid #7c9c99;
    margin: auto;
    border-radius:10px;
    display:grid;
    grid-template-rows:1fr 1fr 1fr;
    grid-gap:10px;
`
export const SearchTitle =styled.div`
    font-size:24px;
    color:#445553;
    font-family:arial;
    margin-top:20px;
    padding-left:30px;
`
export const DivLog = styled.div`
    height:45px;
    width:230px;
    font-size:14px;
    border-radius:4px;
    border: 1px solid #7c9c99;
    font-family:arial;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left:30px;

`
export const InPutL = styled.input`
    height:45px;
    width:230px;
    padding-left:30px;
    font-size:14px;
    border-radius:4px;
    border: 0;
    outline: none;
    background-color: rgba(0, 0, 0, 0);
    font-family:arial;

`
export const DivLogin = styled.input`
    height:45px;
    width:100px;
    font-size:16px;
    border-radius:4px;
    font-family:arial;
    display: flex;
    border-radius:4px;
    border: 0;
    outline: none;
    margin-left:165px;
    justify-content: center;
    align-items: center;
    background-color:#7c9c99;
    color:white;

`
export const Selectall=styled.select`
    height: 100%;
    width: 100%;
    border: 2px solid #8E8E8E;
    margin-left: 1%;
    border-radius: 5px;
    text-align: center;
    &.gender{
        width:8%;
    }
`