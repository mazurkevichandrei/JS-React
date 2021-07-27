import styled, {css} from "styled-components";

const StyledRestart = styled.button`
    padding: 5px 15px;
    //margin-right: 5px;
    margin-bottom: -.2px;
    cursor: pointer;
    border-radius: 5px 5px 0px 0px;
    border: 2px solid #83d6b8;
    border-bottom: 0;
    color: #fff;
    background-color: #56cca1;
    ${props => props.disabled && css`
    border: 2px solid #f5f7f7;
    background-color: #f5f7f7;
    color: #bdbfbf;
    `};
    font-weight: bold;
    transition: all linear .3s;
    &:hover {
        background-color: #19bf82;
        border: 2px solid #19bf82;
        border-bottom: 0;
        ${props => props.disabled && css`
        border: 2px solid #f5f7f7;
        background-color: #f5f7f7;
        color: #bdbfbf;
    `};
    }

`
export default StyledRestart;