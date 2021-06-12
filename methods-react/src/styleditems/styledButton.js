import styled from "styled-components";

const StyledButton = styled.button`
    padding: 5px;
    border-radius: 3px;
    cursor: pointer;
    transition: all linear .3s;
    background-color: #e5e3e4;
    border: 2px solid #707070;
    color: #636263
    };
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