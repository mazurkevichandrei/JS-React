import styled from "styled-components";

const StyledPopUp = styled.div`
    display: flex;
    position: fixed;
    justify-content: space-between;
    align-items: center;
    top: ${(props)=> props.top};
    right: 50%;
    margin-right: -250px;
    max-width: 500px;
    width: 100%;
    background-color: grey;
    color: #fff;
    transition: all linear .3s;
    padding: 50px 20px;
    border-radius: 0 0 5px 5px;
    opacity: .95;
    z-index: 100;
`;

export default StyledPopUp