import styled from 'styled-components';
export const Div0 = styled.div`
    width: 95%;
    margin-left:0;
    height: 30%;
    margin-top: 3%;
    float: left;

`
export const Div1 = styled.div`
    width: 30%;
    height: 70%;
    &.cr{
        margin-left: 2.5%;
    }
    margin-top: 2.5%;
    border: 2px solid #8E8E8E;
    border-radius: 10px;
    float: left;
    display: flex;
    justify-content: center;
    align-items: center;

`
export const Div1Center = styled.div`
    &.Div1Center2{
        width: 100%;
        height: 80%;
        margin-top: 20%;
    }
    &.Div1Center3{
        width: 100%;
        height: 80%;
        margin-top: 10%;
    }

`
export const Div2 = styled.div`
    width: 90%;
    height: 25%;
    display: flex;
    align-items: center;
`
export const Div2Detail = styled.div`
    font-size:14px;
    &.D2Text{
        float: left;
        margin-left: 5%;
        width: 70%;
    }
    &.D2Data{
        float: right;
        width: 20%;
        margin-left: 5%;
        text-align: right;
    }
`