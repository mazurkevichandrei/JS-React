import styled from "styled-components";

const StyledUserInput = styled.input`
    padding: 5px;
    border-radius: 3px;
    outline: 0;
    max-width: 150px;
    width: 100%;
    margin: 0 10px;
    color: grey;
    &:focus {
        color: #000;
        }
`

export default StyledUserInput