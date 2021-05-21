import styled from 'styled-components';
import { theme } from '../../styles/theme';

type Props = React.ButtonHTMLAttributes<HTMLButtonElement>;

const StyledButton = styled.button`
  border: none;
  border-radius: 12px;
  padding: 10px;
  cursor: pointer;

  &:disabled {
    color: ${theme.colors.text};
    background-color: ${theme.colors.inputFieldsBackground};
    border: 1px solid ${theme.colors.inputBorder};
  }
`;

const Button: React.FC<Props> = ({ children, ...props }) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};

export default Button;
