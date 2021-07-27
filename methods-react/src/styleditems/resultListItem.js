import styled, {css} from "styled-components";
import correct from '../image/Correct.png';
import incorrect from '../image/Fail.png';


const StyledResultListItem = styled.li`
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    height: 30px;
    width: 32px;
    justify-content: space-between;
    text-align: center;
    padding: 5px;
    margin: 2px 5px;
    margin-left: 8px;
    margin-right: 2px;
    color: black;
    background-size: auto;
    background-repeat: no-repeat;
    background-position: center;
    border-radius: 5px;
    cursor: pointer;
    background-image: url(${incorrect});
    ${props => props.isCorrect && css`
    background-image: url(${correct});
  `};
  ${props => props.isHidden && css`
  //visibility: hidden;
  display: none
  `};
  ${props => props.isRender && css`
  display: none;
  `};
`;

export default StyledResultListItem;