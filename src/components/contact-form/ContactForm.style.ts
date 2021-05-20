import { theme } from '../../styles/theme';
import styled from 'styled-components';

export const Form = styled.form`
  width: 100%;
  max-width: 540px;
  display: flex;
  flex-direction: column;
`;

export const TextInput = styled.input<{ isValid: boolean }>`
  margin-bottom: 32px;
  margin-top: 8px;
  padding: 12px;
  border-radius: 12px;
  border: none;
  border: 1px solid
    ${({ isValid }) =>
      isValid ? 'transparent' : theme.colors.errorInputBorder};
  resize: none;
  color: ${theme.colors.text};
  background-color: ${({ isValid }) =>
    isValid
      ? theme.colors.inputFieldsBackground
      : theme.colors.errorInputFieldsBackground};
`;

export const Label = styled.label<{ isValid: boolean }>`
  font-size: 0.875rem;
  color: ${({ isValid }) =>
    isValid ? theme.colors.text : theme.colors.errorText};
`;

export const Error = styled.span`
  color: ${theme.colors.errorText};
  font-size: 0.875rem;
`;

export const ErrorContainer = styled.div`
  margin: 0 auto;
  margin-top: 16px;
`;

export const LabelContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ThanksContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ThanksMessage = styled.div`
  margin-bottom: 32px;
`;
