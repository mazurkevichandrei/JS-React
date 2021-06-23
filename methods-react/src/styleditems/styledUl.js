import styled, {css} from "styled-components";

const StyledUl = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  list-style: none;
  margin: 5px;
  padding: 0 5px;
  border: 2px solid ${(props) => props.theme.borderUlUnmutable};
  max-width: 400px;
  width: 100%;
    ${props => props.ismutable && css`
    border: 2px solid ${(props) => props.theme.borderUlMutable};
  `};
    ${props => props.ismain && css`
    border: 2px solid ${(props) => props.theme.borderUlSource};
`};
`;

export default StyledUl