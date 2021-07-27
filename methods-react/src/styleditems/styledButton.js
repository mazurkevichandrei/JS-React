import styled, {css} from "styled-components";

const StyledButton = styled.button`
    padding: 5px;
    width: 35px;
    border-radius: 5px;
    cursor: pointer;
    transition: all linear .3s;
    background-color: #e5e3e4;
    border: 2px solid #707070;
    color: #636263
    };
    ${props => props.isShow && css `
    display:none
    `};
    &:hover {
        background-color: white;
        border: 2px solid #c9c5c7;
        color: #828181;
        }
    &:active {
        background-color: #bab8b9;
        color: #949192};
    }
`;

export default StyledButton