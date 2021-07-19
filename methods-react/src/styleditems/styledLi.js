import styled, {css} from "styled-components";

const StyledLi = styled.li`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    text-align: center;
    padding: 5px;
    margin: 2px 0;
    color: white;
    // max-width: 100%;
    width: 100%;
    background: ${(props) => props.theme.backgroundLiUnmutable};
    border-radius: 5px;
    cursor: pointer;
    transition: all linear .3s;
    ${props => props.ismutable && css`
    background: ${(props) => props.theme.backgroundLiMutable};
  `};
  ${props => props.ismain && css`
    background: ${(props) => props.theme.backgroundLiSource};
  `};
`;

export default StyledLi