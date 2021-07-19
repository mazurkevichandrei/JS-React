import styled from "styled-components";

const PopUpButton = styled.button`
    position: absolute;
    bottom: -40px;
    cursor: pointer;
    font-size: 30px;
    //width: 100%;
    width:80px;
    height: 80px;
    padding-bottom: 5px;
    margin-top: 45px;
    outline: none;
    border: 0;
    color: #fff;
    background-color: #f75a36;
    font-weight: bold;
    border-radius: 50%;
    transition: all linear .3s;
    opacity: 1;
    &:hover {
        transform: scale(1.1);
      };
`;

export default PopUpButton;