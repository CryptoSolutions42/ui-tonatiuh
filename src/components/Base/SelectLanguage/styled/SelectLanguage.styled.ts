import styled from 'styled-components';

export const StyledSelectLanguage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding-left: 20px;
  padding-right: 20px;
`;

export const StyledLanguageList = styled.div<{ backgroundColor?: string }>`
  position: absolute;
  margin-top: 20px;
  background-color: ${({ backgroundColor }) => backgroundColor ?? 'white'};
  padding: 10px;
  border-radius: 10px;

  @media screen and (max-width: 1200px) {
    margin-left: -50px;
  }
`;

export const LanguageItem = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;
