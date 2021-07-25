import { NavLink } from 'react-router-dom';
import styled from "styled-components";

const activeClassName = "nav-item-active";

  const SlyledLink = styled(NavLink).attrs({ activeClassName })`
  color: ${(props) => props.theme.linkColor};
  text-decoration: none;
  opacity: .7;
  transition: all linear .3s;
  &:hover {
    opacity: 1;
    }
  &.${activeClassName}  {
    opacity: 1;
  }
`;

export default SlyledLink