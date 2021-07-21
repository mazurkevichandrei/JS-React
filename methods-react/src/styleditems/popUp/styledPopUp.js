import styled from "styled-components";

const StyledPopUp = styled.div`
    display: flex;
    flex-direction: column;
    position: fixed;
    justify-content: space-between;
    align-items: center;
    top: ${(props)=> props.top};
    right: 50%;
    margin-right: -250px;
    max-width: 500px;
    width: 100%;
    background-color: #fff;
    border-top: 10px solid ${(props) => props.theme.background};
    border-bottom: 10px solid ${(props) => props.theme.background};
    color: #000;
    transition: all linear .3s;
    padding-top: 38px;
    padding-bottom: 78px;
    // border-radius: 0 0 5px 5px;
    opacity: .97;
    z-index: 100;
    box-sizing: border-box;
    text-transform: uppercase;
`;

export default StyledPopUp