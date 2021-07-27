import LIST_TYPES from '../const/indexConst';
import styled, {css} from "styled-components";
import StyledButton from './styledButton';

const StyledButtonBackToSource = styled(StyledButton) `
width: 35px;
border-radius: 50%;
color: red;
${(props) => props.type === LIST_TYPES.MAIN && css`
display: none`};
`;

export default StyledButtonBackToSource