import {
    Link
  } from 'react-router-dom';

  import styled from "styled-components";

  const SlyledLink = styled(Link)`
  color: ${(props) => props.theme.linkColor};
`;

export default SlyledLink