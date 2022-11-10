import styled from 'styled-components';
export const Div0 = styled.div`
    width: 100%;
    margin: 0 auto;
    height:100%;
    min-width: 1200px;
    display:grid;
    grid-template-columns:1fr 1fr 1fr;
    grid-gap:15px;

`
export const DataDrawItem = styled.div`
    border:gray 2px solid;
    border-radius:20px;
    display: flex;
    background-color:white;
    height:100%;
    overflow:auto;
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
      background-color:#F5F5F5;
      overflow:auto;
      min-height:900px;
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
export const Div1 =styled.div`
    font-size:100px;
    font-family: 'Noto Sans TC', sans-serif;
    padding-top: 20%;
    padding-right: 20px;
`
export const Table0=styled.table`
    margin-top:0%;
    font-size:10px;
    width:100%;
`
export const Thead0=styled.thead`
    border-bottom:2px solid #8E8E8E;
`
export const Th0=styled.th`
    width:130px;
    border-bottom:1px solid #E0E0E0;
    padding-bottom:9px;
    padding-top:9px;
    &.th1{
        border-left:1px solid #8E8E8E;
    }
`