import styled from "styled-components";

const StyledInput = styled.input`
    padding: 5px;
    border-radius: 3px 3px 0 0;
    outline: 0;
    transition: all linear .3s;
    // background-color: #edebeb;
    border: 2px solid #c9c5c7;
    border-bottom: 0;
    color: #787777;
    font-weight: bold;
};
    &:focus {
        // border: 2px solid #707070;
        color: #4a4848;
        padding-left: 7px;
        }
`;

export default StyledInput