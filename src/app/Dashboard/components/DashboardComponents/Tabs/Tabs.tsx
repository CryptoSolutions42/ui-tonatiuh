import { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { TabWrapper } from './styled/Tabs.styled';
import { ConfigType } from '../../../../../redux/types';
import { AppSagaAction } from '../../../../../redux/saga/app-saga/saga-actions';
import { RootState } from '../../../../../redux/store';
import { appStoreActions } from '../../../../../redux/reducer/app-reducer/reducer';

export const Tabs: FC<{ currentTab?: number }> = ({ currentTab }) => {
  const dispatch = useDispatch();
  const { configs, modalWindow } = useSelector((state: RootState) => state.AppReducer);
  const [currentConfigId, setCurrentConfigId] = useState<number>(0);

  useEffect(() => {
    dispatch(AppSagaAction.getConfigs());
    setCurrentConfigId(+(window.localStorage.getItem('tabCurrentConfigId')! ?? currentTab));
  }, [currentTab]);

  function tabConfigHandler(configIndex: number) {
    dispatch(appStoreActions.getCurrentConfig(configs[configIndex]));
    window.localStorage.setItem('tabCurrentConfigId', configs[configIndex].id.toString());
  }

  function toogleCreateConfigWindow() {
    dispatch(
      appStoreActions.toggleModal({
        modalType: 'create-config',
        isOpenModal: !modalWindow.isOpenModal,
      }),
    );
    console.log('createConfig');
  }

  return (
    <div
      style={{
        width: '100%',
        padding: '0 15px',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
      }}
    >
      {configs.length !== 0 &&
        configs.flatMap((item: ConfigType, index) => (
          <TabWrapper
            isCurrent={item.id === currentConfigId}
            key={`tab-${item.id}`}
            onClick={() => tabConfigHandler(index)}
          >
            {item.symbol}
          </TabWrapper>
        ))}
      <TabWrapper onClick={toogleCreateConfigWindow}>
        <img style={{ width: '18px' }} src="/images/icons/plus.svg" />
      </TabWrapper>
    </div>
  );
};
