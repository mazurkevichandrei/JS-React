import styled from "styled-components";

const StyledNaviSection = styled.div`
display: flex;
flex-direction: row;
align-items: center;
padding: 5px 0;
width: 100%;
background-color: ${(props) => props.theme.background};
//padding: 0 260px;
//margin-bottom: 5px;
box-sizing: border-box;
transition: all linear .3s;
webkit-box-shadow: 0px 0px 15px 14px rgba(0, 0, 0, 0.2);
moz-box-shadow: 0px 0px 15px 14px rgba(0, 0, 0, 0.2);
box-shadow: 0px 0px 15px 14px rgba(0, 0, 0, 0.2);
// background: rgb(49,49,49);
background: ${(props) => props.theme.gradient};
z-index: 1;
transition: all linear .3s;
`
export default StyledNaviSection;