import React, { useEffect, useLayoutEffect, useState } from 'react';
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import { StyledSelectLanguage } from './styled';
import { Body2, Body3 } from '../Text';
import { LanguageItem, StyledLanguageList } from './styled/SelectLanguage.styled';

const langHardcode = {
  en: {
    short: 'Eng',
    full: 'English',
    img: '/images/language/english-languages-icon.png',
  },
  ru: {
    short: 'Rus',
    full: 'Russian',
    img: '/images/language/russian-languages-icon.png',
  },
  sp: {
    short: 'Spn',
    full: 'Spanish',
    img: '/images/language/spanish-languages-icon.png',
  },
};

const getLanguage = () => i18next.language || window.localStorage.i18nextLng;

export const SelectLanguageContainer = () => {
  const [langIsActive, setLangIsActive] = useState(false);
  const userLang = 'en';
  const [currentLang, setCurrentLang] = useState(userLang);
  // const loggedStatus = useSelector((state) => state.auth.app);

  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
    setLangIsActive(false);
    setCurrentLang(getLanguage());

    // if (loggedStatus.loggedIn && loggedStatus.userData?.id && userLang !== language) {
    //   dispatch({
    //     type: types.PUT_UPDATE_USER_DATA_START,
    //     payload: {
    //       language,
    //     },
    //     id: loggedStatus.userData?.id,
    //   });
    // }
  };

  // useEffect(() => {
  //   if (loggedStatus.loggedIn) {
  //     changeLanguage(userLang);
  //   } else {
  //     changeLanguage(getLanguage());
  //   }
  // }, [userLang, loggedStatus.loggedIn]);

  return (
    <SelectLanguage
      currentLang={langHardcode[currentLang]?.short}
      langIsActive={langIsActive}
      setLangIsActive={setLangIsActive}
      changeLanguage={changeLanguage}
    />
  );
};

const LanguageList = ({ setLangIsActive, langIsActive, changeLanguage }) => {
  const delegateAction = (e) => {
    const { target } = e;

    // eslint-disable-next-line no-extra-boolean-cast
    if (!target.closest('.header__languages')) setLangIsActive(false);
  };

  useLayoutEffect(() => {
    document.addEventListener('click', delegateAction, true);
    return () => document.removeEventListener('click', delegateAction, true);
  }, []);

  return (
    <StyledLanguageList backgroundColor="#4aa0ca">
      {Object.keys(langHardcode).map((k, i) => {
        return (
          <LanguageItem key={i} onClick={() => changeLanguage(k)}>
            <img src={langHardcode[k].img} alt="" />
            <Body3 color="white">{langHardcode[k].full}</Body3>
          </LanguageItem>
        );
      })}
    </StyledLanguageList>
  );
};

const SelectLanguage = ({ currentLang, langIsActive, setLangIsActive, changeLanguage }) => {
  return (
    <StyledSelectLanguage>
      <div className={`${langIsActive ? 'active' : ''}`} onClick={() => setLangIsActive(!langIsActive)}>
        <Body2 color="white">{currentLang || 'Eng'}</Body2>
        {langIsActive && (
          <LanguageList setLangIsActive={setLangIsActive} langIsActive={langIsActive} changeLanguage={changeLanguage} />
        )}
      </div>
    </StyledSelectLanguage>
  );
};

export default React.memo(SelectLanguageContainer);
