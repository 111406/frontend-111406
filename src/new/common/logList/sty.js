import styled from 'styled-components';
export const Div0 = styled.div`
    width: 95%;
    margin: 0 auto;
    height:250px;
    margin:2.45%;
    border:gray 2px solid;
    border-radius:25px;
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