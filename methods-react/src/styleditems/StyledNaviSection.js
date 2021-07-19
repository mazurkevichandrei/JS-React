import styled from "styled-components";

const StyledNaviSection = styled.div`
display: flex;
flex-direction: row;
align-items: center;
width: 100%;
background-color: ${(props) => props.theme.background};
//padding: 0 260px;
margin-bottom: 5px;
box-sizing: border-box;
transition: all linear .3s;
`
export default StyledNaviSection;