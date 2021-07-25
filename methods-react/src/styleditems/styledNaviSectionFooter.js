import styled from "styled-components";

const StyledNaviSectionFooter = styled.div`
    position: fixed;
    bottom: 0;
    font-size: 12px;
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
    -webkit-box-shadow: 0px 0px 15px 14px rgba(0, 0, 0, 0.2);
    -moz-box-shadow: 0px 0px 15px 14px rgba(0, 0, 0, 0.2);
    box-shadow: 0px 0px 15px 14px rgba(0, 0, 0, 0.2);
    // background: rgb(49,49,49);
    background: linear-gradient(180deg, rgba(49,49,49,1) 0%, rgba(13,13,13,1) 100%);
`;

export default StyledNaviSectionFooter