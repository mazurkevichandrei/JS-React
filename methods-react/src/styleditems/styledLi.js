import styled, {css} from "styled-components";

const StyledLi = styled.li`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    text-align: center;
    padding: 5px;
    margin: 5px 0;
    color: white;
    // max-width: 100%;
    // width: 100%;
    background: #ebac4d;
    border-radius: 3px;
    cursor: pointer;
    ${props => props.ismutable && css`
    background: #65ab74;
  `};
  ${props => props.ismain && css`
    background: #6579ab;
  `};
`;

export default StyledLi