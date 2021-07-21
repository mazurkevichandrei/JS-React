import styled, {css} from "styled-components";
type TStyledView  = {
    isPositionFixed: boolean
}

const StyledSection = styled.div<TStyledView>`
    display: flex;
    display: flex;
    background: ${(props) => props.theme.backgroundDivMain};
    width: 100%;
    color: #fff;
    box-sizing: border-box;
    margin: 0 auto;
    transition: all linear .3s;
    opacity: 0.95;
    z-index: 0;
    ${props => props.isPositionFixed && css`
    position: fixed;
    top: 0;
    z-index: 2;
    opacity: .98;
    `};
`;

export default StyledSection;