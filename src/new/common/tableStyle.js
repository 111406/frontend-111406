import styled from 'styled-components';

const CommonTable = styled.table`
    margin-top:0%;
    font-size:10px;
    width:100%;
    text-align:center;
`

const CommonThead = styled.thead`
    background-color: white;
    position: sticky;
    top: 0;
`

const CommonTh = styled.th`
    padding-bottom:9px;
    padding-top:9px;
    &:not(:first-child) {
      border-left:1px solid #8E8E8E;
    }
    &:after,
    &:before {
      content: '';
      position: absolute;
      left: 0;
      width: 100%;
    }

    &:after {
      bottom: -1px;
      border-bottom: 2px solid #8E8E8E;
    }
`

const CommonTd = styled.td`
    width: 140px;
    padding-bottom:9px;
    padding-top:9px;
    border-bottom:1px solid #E0E0E0;
    &:not(:first-child) {
      border-left:1px solid #8E8E8E;
    }
`

export {
    CommonTable,
    CommonTd,
    CommonTh,
    CommonThead,
};