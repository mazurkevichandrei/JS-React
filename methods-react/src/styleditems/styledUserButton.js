import styled, {css} from "styled-components";
import icon from '../image/ok.png';

const StyledUserButton = styled.button`
    cursor: pointer;
    text-align: center;
    height: 30px;
    padding: 5px;
    border-radius: 3px;
    border: 0;
    outline: 0;
    max-width: 30px;
    width: 100%;
    margin-right: 5px;
    background: transparent;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url(${icon});
    transition: all linear .4s;
    &:hover {
        transform: scale(1.1);
      };
`

export default StyledUserButton