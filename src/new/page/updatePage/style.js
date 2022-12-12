import styled from "styled-components"

const Body = styled.div`
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

const ContentBody = styled.div`
    background-color: #F5F5F5;
    height:92%;
    overflow:auto;
    display: flex;
    justify-content: center;
`

const UpdateBox = styled.div`
    margin-top: 5%;
    width: 45%;
`

const UpdateTitle = styled.h1`
    color: #445553;
    font-family: 'Noto Sans TC', sans-serif;
`

const UpdateTitleDiv = styled.div`
    text-align: center;
    margin-bottom: 5%;
`

const UpdateRow = styled.div`
    display: flex;
    margin-bottom: 40px;
`

const UpdateColumn = styled.div`
    flex: ${props => props.flex};
    padding: 0 10px;
`

const UpdateSubTitle = styled.label`
    font-size: 24px;
    display: block;
    margin-bottom: 10px;
`

const UpdateSelect = styled.select`
    display: block;
    width: 100%;
    height: calc(1.5em + 0.75rem + 2px);
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: rgb(73, 80, 87);
    padding: 0.375rem 0.75rem;
    border-width: 1px;
    border-style: solid;
    border-color: rgb(206, 212, 218);
    border-radius: 0.25rem;
`

const UpdateRadioSection = styled.div`
    display: block;
    padding: 10px;
`

const Radio = styled.input.attrs({ type: "radio" })`
    width: 16px;
    height: 16px;
`;

const UpdateInputGroup = styled.div`
    display: flex;
    margin-bottom: 10px;
    align-items: center;
`

const UpdateInputDiv = styled.div`
    width: 80%;
`

const UpdateUnitTextDiv = styled.div`
    width: 68px;
`

const UpdateText = styled.span`
    margin-left: 20px;
    font-size: "18px";
`

const UpdateUnitText = styled(UpdateText)`
    font-size: 24px;
    float: right;
`

const UpdateInput = styled.input`
    width: 100%;
    height: calc(1.5em + 0.75rem + 2px);
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: rgb(73, 80, 87);
    padding: 0.375rem 0.75rem;
    border-width: 1px;
    border-style: solid;
    border-color: rgb(206, 212, 218);
    border-radius: 0.25rem;
`

const UpdateSubmit = styled.button`
    display: inline-block;
    width: 40%;
    height: 50px;
    text-align: center;
    vertical-align: middle;
    user-select: none;
    background-color: #eb4141;
    border: 1px solid transparent;
    padding: .375rem .75rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: .25rem;    
`


export {
    Body,
    ContentBody,
    UpdateBox,
    UpdateTitle,
    UpdateTitleDiv,
    UpdateRow,
    UpdateColumn,
    UpdateSubTitle,
    UpdateSelect,
    Radio,
    UpdateText,
    UpdateRadioSection,
    UpdateInput,
    UpdateInputGroup,
    UpdateInputDiv,
    UpdateUnitTextDiv,
    UpdateUnitText,
    UpdateSubmit
}