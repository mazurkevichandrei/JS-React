import styled from "styled-components";

const StyledTable = styled.table`
    border-collapse: collapse;
    margin: 15px;
    background-color: ${(props) => props.theme.backgroundDivMain};
    color: ${(props) => props.theme.listNameFontColor};
    transition: all linear .3s;
`;

export default StyledTable;