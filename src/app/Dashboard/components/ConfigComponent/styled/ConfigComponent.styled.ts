import styled, { css } from 'styled-components';

export const StyledConfig = styled.div<{ width?: string }>`
  ${({ width }: { width?: string }) =>
    css`
      width: ${width ?? '100px'};
    `};
  background-image: linear-gradient(to bottom right, rgba(7, 20, 23, 0.94), rgb(13, 43, 76));
  /* background-color: red; */
  transition: width 0.2s ease;
  border-radius: 10px;
  border: 3px solid #add6dd;
  -webkit-box-shadow: 0px 0px 15px 2px rgba(21, 170, 178, 0.7);
  -moz-box-shadow: 0px 0px 15px 2px rgba(21, 171, 178, 0.7);
  box-shadow: 0px 0px 15px 2px rgba(21, 171, 178, 0.7);
  overflow: scroll;
`;

export const ConfigForm = styled.form<{ isVisible: boolean }>`
  padding: 20px;
  width: 100%;
  height: 100%;
  max-height: 536px;
  overflow-y: auto;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  transition: opacity 0.2s ease;

  -webkit-box-shadow: 0px 1px 17px 0px rgba(21, 171, 178, 0.7) inset;
  -moz-box-shadow: 0px 1px 17px 0px rgba(21, 171, 178, 0.7) inset;
  box-shadow: 0px 1px 17px 0px rgba(21, 171, 178, 0.7) inset;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 15px;
`;

export const LabelForm = styled.label`
  color: #add6dd;
  margin-right: 10px;
  align-content: flex-start;
`;

export const InputForm = styled.input<{ type: string }>`
  border-radius: 10px;
  height: 30px;
  width: ${({ type }) => (type === 'checkbox' ? 30 : 300)}px;
  display: block;
  margin-bottom: 15px;
  padding-left: 10px;
  :focus {
    outline: none;
    border: 3px solid #add6dd;
    -webkit-box-shadow: 0px 0px 15px 2px rgba(21, 170, 178, 0.7);
    -moz-box-shadow: 0px 0px 15px 2px rgba(21, 171, 178, 0.7);
    box-shadow: 0px 0px 15px 2px rgba(21, 171, 178, 0.7);
  }
`;

export const HiddenButtonWrapper = styled.div`
  margin: 0 0 25px;
  display: flex;
  justify-content: space-around;
`;
