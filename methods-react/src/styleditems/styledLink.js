import {
    Link,
    NavLink
  } from 'react-router-dom';

  import styled from "styled-components";

  const SlyledLink = styled(NavLink)`
  color: ${(props) => props.theme.linkColor};
  text-decoration: none;
  opacity: .7;
  transition: all linear .3s;
  &:hover {
    opacity: 1;
    }
  &.active {
    opacity: 1;
  }
`;

export default SlyledLink