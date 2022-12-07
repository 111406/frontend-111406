import styled from 'styled-components';
import { spin } from '../common/animation'

const LoaderDiv = styled.div`
    position:absolute;
    padding:0;
    margin:0;

    top:0;
    left:0;

    width: 100%;
    height: 100%;
    display: ${props => props.checkLoding ? "flex" : "none"};
    align-items: center;
    justify-content: center;
    background-color: #000000;
    opacity: .6;
    z-index: 1;
`

const LoaderContent = styled.div`
    border: 16px solid #f3f3f3;
    border-radius: 50%;
    border-top: 16px solid #808080;
    width: 120px;
    height: 120px;
    -webkit-animation: ${spin} 2s linear infinite;
    animation: ${spin} 2s linear infinite;
    margin: 0;
`

export {
    LoaderContent,
    LoaderDiv,
}