import styled from "styled-components";

const StyledNaviItem = styled.li`
    padding: 5px 15px;
    background-color: ${(props) => props.theme.background};
    transition: all linear .3s;
`;

export default StyledNaviItem