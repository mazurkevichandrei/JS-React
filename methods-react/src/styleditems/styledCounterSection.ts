import styled, {css} from "styled-components";
type TStyledView  = {
    isPositionFixed: boolean
}

const StyledCounterSection = styled.div<TStyledView>`
    ${props => props.isPositionFixed && css`
    position: fixed;
    top: 0;
    `};
    display: flex;
    justify-content: flex-start;
    alignItems: center;
    padding: 10px 150px;
    //padding-bottom: 10px;
    display: flex;
    margin: 0 auto;
    background-color: #4d4d63;
    width: 100%;
    color: #fff;
    box-sizing: border-box;
`;

export default StyledCounterSection;