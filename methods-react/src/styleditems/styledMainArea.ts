import styled, {css} from "styled-components";

type TStyledView  = {
    isPositionFixed: boolean
}
const StyledMainArea = styled.div<TStyledView>`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    max-width: 1000px;
    width: 100%;
    margin: 0 auto;
    //border: 1px solid black;
    border-top: 0;
    box-sizing: border-box;
    height: 100%;
    padding: 0;
    padding-bottom: 50px;
    ${props => props.isPositionFixed && css`
    margin-top: 30px;
    `};
 `;

 export default StyledMainArea