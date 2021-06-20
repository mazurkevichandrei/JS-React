  import styled from "styled-components";

  const StyledThemeButton = styled.button`
  max-width: 200px;
  width: 100%;
  margin-bottom: 8px;
  color: ${(props) => props.theme.color};
  background-color: ${(props) => props.theme.background};
`;

export default StyledThemeButton