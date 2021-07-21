import styled from "styled-components";

const StyledTh = styled.th`
    border: 1px solid grey;
    padding: 5px 25px;
    background-color: ${(props) => props.theme.backgroundDivMain};
    transition: all linear .3s;
`;

export default StyledTh;