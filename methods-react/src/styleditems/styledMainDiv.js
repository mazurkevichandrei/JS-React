import styled from "styled-components";

const StyledDivMain = styled.div`
    display: flex;
    flex-direction: column;
    //min-height: 100vh;
    background: ${(props) => props.theme.backgroundDivMain};
    transition: all linear .3s;
`;

export default StyledDivMain