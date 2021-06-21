  import styled from "styled-components";

  const StyledThemeButton = styled.button`
  cursor: pointer;
  max-width: 220px;
  width: 100%;
  margin-bottom: 8px;
  padding: 10px 0;
  border-radius: 4px;
  color: ${(props) => props.theme.color};
  background-color: ${(props) => props.theme.background};
`;

export default StyledThemeButton