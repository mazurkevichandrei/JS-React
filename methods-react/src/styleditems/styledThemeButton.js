  import styled, {css} from "styled-components";
  import day from '../image/Day.png';
  import night from '../image/Night.png';

  const StyledThemeButton = styled.button`
  // display: flex;
  // align-self: flex-end;
  // max-width: 220px;
  // width: 100%;
  // padding: 10px 0;
  //color: ${(props) => props.theme.color};
  // background-color: ${(props) => props.theme.background};
  cursor: pointer;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  transition: all linear .4s;
  color: #4d4d63;
  outline: none;
  border: none;
  background-color: #fff;
  background-image: url(${day});
  ${props => props.isDayTheme && css`
  background-image: url(${night});
`};
  background-size: cover;
  background-repeat: no-repeat;
  &:hover {
    transform: scale(1.05);
  };
  &:active {
    transform: scale(0.5);
  };
`;

export default StyledThemeButton