import styled, {css} from "styled-components";
type TStyledView  = {
    isPositionFixed: boolean
}

const StyledSection = styled.div<TStyledView>`
    ${props => props.isPositionFixed && css`
    position: fixed;
    top: 0;
    `};
    display: flex;
    display: flex;
    background: ${(props) => props.theme.backgroundDivMain};
    width: 100%;
    color: #fff;
    box-sizing: border-box;
    margin: 0 auto;
    transition: all linear .3s;
`;

export default StyledSection;