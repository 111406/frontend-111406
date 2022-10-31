import styled from 'styled-components';

export const Div0 = styled.div`
    width: 100%;
    margin: 0 auto;
    height:100vh;
    overflow: auto;
    min-width: 1250px;
    max-width: 1920px;
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
export const Ces = styled.div`
    border: 3px solid #7c9c99;
    margin: auto;
    border-radius:10px;
    height:500px;
    width:400px;
`;
export const Cent = styled.div`
    display: flex;
    padding-top:20PX;
    margin:auto;
    border-radius:10px;
    margin:AUTO;
    justify-content: center;
    font_size:50px;
`;
export const Cent2 = styled.div`
    display: grid;
    padding-top:13%;
    margin:auto;
    border-radius:10px;
    margin:AUTO;
    grid-template-rows:1fr,1fr;
    justify-content: center;
    font_size:50px;
`;
export const LogoT = styled.p`
    font-size:24px;
    color:#7c9c99;
    font-family:arial;

`
export const InPutL = styled.input`
    height:45px;
    width:250px;
    font-size:14px;
    border-radius:4px;
    border: 0;
    outline: none;
    background-color: rgba(0, 0, 0, 0);
    font-family:arial;

`
export const DivLog = styled.div`
    height:45px;
    width:300px;
    font-size:14px;
    border-radius:4px;
    border: 1px solid #7c9c99;
    font-family:arial;
    display: flex;
    justify-content: center;
    align-items: center;

`
export const DivLogin = styled.input`
    height:45px;
    width:300px;
    font-size:16px;
    border-radius:4px;
    font-family:arial;
    display: flex;
    border-radius:4px;
    border: 0;
    outline: none;
    justify-content: center;
    align-items: center;
    background-color:#7c9c99;
    color:white;

`
export const DivError=styled.div`
  font-size:12px;
  padding-left:210px;
  height:12px;
  display: flex;
  color:red;
`