import styled from 'styled-components';
import 'typeface-quicksand';
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
export const Line1 =styled.div`
  border-top:gray 2px solid;
  margin:20px 10px 0 10px;
  font-size:20px;
  padding:20px 10px 0 10px;
  font-family: 'Noto Sans TC', sans-serif;

`

export const ContentDiv =styled.div`
    background-color: #FFFFFF;
    overflow:auto;
    width:1000px;
    height:1000px;
    margin: 5% auto;
    
`
export const DataInfoChooseDiv =styled.div`
    height:85px;
    display: flex;
    justify-content: center; 
    align-items: center;
`
export const DataInfoDiv =styled.div`

    height:190px;
    padding:20px 10px 10px 10px;
`
export const DataDrawDiv =styled.div`
    height:250px;
    padding:20px 10px 10px 10px;
    min-height:250px;
    
`
export const DataListDiv =styled.div`
    background-color:green;
    height:400px;
`
