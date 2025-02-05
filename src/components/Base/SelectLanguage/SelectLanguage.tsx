import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const StyledSelectLanguage = styled.div`
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px;
`;

const LanguageSelect = styled.select`
  border: 1px solid #ccc;
  border-radius: 5px;
  background-image: linear-gradient(to bottom right, rgba(7, 20, 23, 0.94), rgb(13, 43, 76));
  color: white;
  cursor: pointer;
  font-size: 15px;
  font-weight: 700;

  :focus {
    outline: none;
    border: 3px solid #add6dd;
    -webkit-box-shadow: 0px 0px 15px 2px rgba(21, 170, 178, 0.7);
    -moz-box-shadow: 0px 0px 15px 2px rgba(21, 171, 178, 0.7);
    box-shadow: 0px 0px 15px 2px rgba(21, 171, 178, 0.7);
  }
`;

const LanguageOption = styled.option`
  padding: 10px;
  font-size: 16px;
`;

export const SelectLanguageContainer = () => {
  const { i18n } = useTranslation();

  useEffect(() => {
    const language = window.localStorage.getItem('Tonatiuh_i18nextLng');
    if (language) {
      i18n.changeLanguage(language);
    }
  });

  const changeLanguage = (event: React.ChangeEvent<HTMLSelectElement>) => {
    window.localStorage.setItem('Tonatiuh_i18nextLng', event.target.value);
    i18n.changeLanguage(event.target.value);
  };

  return (
    <StyledSelectLanguage>
      <LanguageSelect onChange={changeLanguage} defaultValue={i18n.language}>
        <LanguageOption value="en">English</LanguageOption>
        <LanguageOption value="ru">Русский</LanguageOption>
        <LanguageOption value="sp">Español</LanguageOption>
      </LanguageSelect>
    </StyledSelectLanguage>
  );
};
