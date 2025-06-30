import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { RootState } from '../../../redux/store';
import { appStoreActions } from '../../../redux/reducer/app-reducer/reducer';

const ModalWrapper = styled.div`
  z-index: 10000;
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
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
  background: #131414;
  width: max-content;
  height: 85%;
  padding: 60px;
  border-radius: 5px;
  z-index: 2;
  overflow-y: auto;

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
  const { modalWindow } = useSelector((state: RootState) => state.AppReducer);

  return (
    <ModalWrapper>
      <Image
        onClick={() => dispatch(appStoreActions.toggleModal({ ...modalWindow, isOpenModal: !modalWindow.isOpenModal }))}
        src="/images/icons/close.svg"
      />
      <Background />
      <ModalTag>{children}</ModalTag>
    </ModalWrapper>
  );
};
