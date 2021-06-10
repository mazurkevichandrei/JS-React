import styled, {css} from "styled-components";

const StyledLi = styled.li`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    text-align: center;
    padding: 5px;
    margin: 5px 0;
    // max-width: 100%;
    // width: 100%;
    background: khaki;
    border-radius: 3px;
    cursor: pointer;
    ${props => props.isMutable && css`
    background: green;
    color: white;
  `};
  ${props => props.isMain && css`
    background: orange;
    color: white;
  `};
`;

export default StyledLi