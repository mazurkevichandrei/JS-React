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
    color: black;
    // max-width: 100%;
    // width: 100%;
    background-color: #fff;
    background-size: auto;
    background-repeat: no-repeat;
    background-position: center;
    border-radius: 5px;
    cursor: pointer;
    background-color: transparent;
    background-image: url(${incorrect});
    ${props => props.isCorrect && css`
    background-image: url(${correct});
  `};
  ${props => props.isHidden && css`
  visibility: hidden;
  `};
  ${props => props.isRender && css`
  display: none;
  `};
`;

export default StyledResultListItem;