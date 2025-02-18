import styled, { css } from 'styled-components';

export const StyledConfig = styled.div<{ width?: string }>`
  ${({ width }: { width?: string }) =>
    css`
      width: ${width ?? '150px'};
    `};
  background: rgb(26, 28, 31);

  border-radius: 10px;
  transition: width 0.05s ease;
`;

export const ConfigForm = styled.form<{ isVisible: boolean }>`
  padding: 20px;
  width: 100%;
  height: 100%;
  max-height: 536px;
  overflow-y: auto;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  transition: opacity 0.05s ease;

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    -webkit-box-shadow: 5px 5px 5px -5px rgba(34, 60, 80, 0.2) inset;
    background-color: #f9f9fd;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-image: linear-gradient(to bottom right, rgba(32, 124, 145, 0.94), rgb(12, 126, 123));
  }
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: row;
  -webkit-box-pack: center;
  margin-bottom: 15px;
  align-items: center;
  align-content: flex-start;
  justify-content: space-between;
`;

export const LabelForm = styled.label`
  color: #add6dd;
  margin-right: 10px;
  align-content: flex-start;
`;

export const InputForm = styled.input<{ type: string }>`
  border-radius: 10px;
  height: 30px;
  width: ${({ type }) => (type === 'checkbox' ? 30 : 150)}px;
  display: block;
  padding-left: 10px;
  :focus {
    outline: none;
  }
`;

export const HiddenButtonWrapper = styled.div`
  margin: 0 0 25px;
  display: flex;
  justify-content: space-between;
`;
