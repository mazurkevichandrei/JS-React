import styled from "styled-components";

const StyledTable = styled.table`
    //border: 1px solid grey;
    border-collapse: collapse;
    margin: 15px;
    background-color: ${(props) => props.theme.tableBackground};
    color: ${(props) => props.theme.listNameFontColor};
    transition: all linear .3s;
`;

export default StyledTable;