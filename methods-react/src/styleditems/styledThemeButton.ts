  import styled, {css} from "styled-components";
  import day from '../image/Day.png';
  import night from '../image/Night.png';
  type TStyledView  = {
    isDayTheme: boolean
}

  const StyledThemeButton = styled.button<TStyledView>`
  cursor: pointer;
  width: 35px;
  height: 35px;
  margin-right:15px;
  border-radius: 50%;
  transition: all linear .4s;
  color: #4d4d63;
  outline: none;
  border: none;
  background-color: #fff;
  background-image: url(${night});
  ${props => props.isDayTheme && css`
  background-image: url(${day});
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