import styled from 'styled-components';
export const Div0 = styled.div`
    width:100%;
    height:100%;

`
export const Buttona=styled.a`

    text-decoration:none;
    display:flex;
    float:left;
    background:#7c9c99;
    color:white;
    justify-content: center;
    align-items: center;
    height: 28px;
    width: 6%;
    margin-top:1px;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    border: 2px solid #8E8E8E;
    text-align: center;
    margin-left: 2%;
`
export const Selectcenter=styled.select`
    height: 32px;
    width: 6%;
    border: 0;
    outline: none;
    border-top: 2px solid #8E8E8E;
    border-bottom: 2px solid #8E8E8E;
    text-align: center;
`
export const Selectright=styled.select`
    height: 32px;
    width: 6%;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    border: 2px solid #8E8E8E;
    text-align: center;
`
export const Selectall=styled.select`
    height: 100%;
    width: 30%;
    border: 2px solid #8E8E8E;
    margin-left: 1%;
    border-radius: 5px;
    text-align: center;
    &.gender{
        width:8%;
    }
`
export const Search=styled.button`
    height: 100%;
    width: 6%;
    margin-left: 1%;
    border-radius: 5px;
    background: #81BFB9;
    border: 2px solid #8E8E8E;
    text-align: center;
`