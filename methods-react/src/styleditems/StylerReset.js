import styled from "styled-components";

const StyledResetButton = styled.button`
    margin: 5px 0;
    margin-top: 0;
    padding: 5px;
    border-radius: 0 0 3px 3px;
    cursor: pointer;
    font-weight: bold;
    transition: all linear .3s;
    background-color: #edebeb;
    border: 2px solid #c9c5c7;
    color: #4a4848;
    };
    &:hover {
        background-color: #d6d2d2;
        border: 2px solid #707070;
        color: #636263
        }
    &:active {
        background-color: #f2eeed;
        color: #949192;
        border: 2px solid #fff;
        };
      }
`;

export default StyledResetButton