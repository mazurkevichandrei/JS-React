import styled from "styled-components";

const StyledTr = styled.tr`
    background-color: ${(props) => props.theme.tableBackground};
    transition: all linear .3s;
`;

export default StyledTr;