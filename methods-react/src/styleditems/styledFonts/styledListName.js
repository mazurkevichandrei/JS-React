import styled, {css} from "styled-components";

const StyledListName = styled.h2`
color: ${(props) => props.theme.listNameFontColor};
transition: all linear .3s;
`;

export default StyledListName;