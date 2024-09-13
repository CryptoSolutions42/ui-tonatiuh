import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { RootState } from '../../../redux/store';
import { appStoreActions } from '../../../redux/reducer/app-reducer/reducer';

const ModalWrapper = styled.div`
  z-index: 1;
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Background = styled.div`
  position: absolute;
  opacity: 0.6;
  background-color: black;
  z-index: 1;
  width: 100%;
  height: 100%;
`;

const ModalTag = styled.div`
  position: absolute;
  background-image: linear-gradient(to bottom right, #207873, #072b2a);
  width: max-content;
  height: max-content;
  padding: 60px;
  border-radius: 10px;
  z-index: 2;
  -webkit-box-shadow: -1px 1px 13px 14px rgba(232, 95, 46, 0.22);
  -moz-box-shadow: -1px 1px 13px 14px rgba(232, 95, 46, 0.22);
  box-shadow: -1px 1px 13px 14px rgba(232, 95, 46, 0.22);
`;

const Image = styled.img`
  width: 55px;
  place-self: baseline;
  margin: 20px 20px 20px auto;
  opacity: 0.6;
  cursor: pointer;
  z-index: 2;
`;

export const ModalWindow = ({ children }: { children: JSX.Element }) => {
  const dispatch = useDispatch();
  const { AppReducer } = useSelector((state: RootState) => state);
  const { isOpenModal } = AppReducer;

  return (
    <ModalWrapper>
      <Image onClick={() => dispatch(appStoreActions.toggleModal(!isOpenModal))} src="./images/icons/close.png" />
      <Background onClick={() => dispatch(appStoreActions.toggleModal(!isOpenModal))} />
      <ModalTag>{children}</ModalTag>
    </ModalWrapper>
  );
};
