import styled, {css} from "styled-components";
import reset from '../image/Clean.png';
import found from '../image/Search.png';

const StyledResetButton = styled.button`
    width: 40px;
    height: 35px;
    outline: none;
    border: none;
    cursor: pointer;
    font-weight: bold;
    background: transparent;
    ${props => props.isShow ?
        `background-image: url(${found});`
    : 
        `background-image: url(${reset})`
    };
    background-size: cover;
    background-repeat: no-repeat;
    transition: all linear .4s;
    margin-left: 5px;
    &:hover {
        ${props => props.isShow ?
            `transform: scale(1));`
        : 
            `transform: scale(1.1)`
        };
        }
    &:active {
        ${props => props.isShow ?
            `transform: scale(1));`
        : 
            `transform: scale(1.5)`
        };
    };
`;

export default StyledResetButton