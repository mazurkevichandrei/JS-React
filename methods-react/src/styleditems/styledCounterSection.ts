import styled, {css} from "styled-components";
// type TStyledView  = {
//     isPositionFixed: boolean
// }

const StyledCounterSection = styled.div`
    display: flex;
    justify-content: space-between;
    alignItems: flex-end;
    padding: 10px 0;
    padding-bottom: 0;
    display: flex;
    //background: ${(props) => props.theme.backgroundDivMain};
    max-width: 978px;
    width: 100%;
    color: #fff;
    box-sizing: border-box;
    margin: 0 auto;
    border-bottom: 3px solid #748187;
    color: ${(props) => props.theme.color};
    transition: all linear .3s;
`;

export default StyledCounterSection;