import { useDispatch } from 'react-redux';
import { appStoreActions } from '../../../redux/reducer/app-reducer/reducer';

export const CopyToClipboard = ({ content }) => {
  const dispatch = useDispatch();
  const handleCopyToClipboard = () => {
    navigator.clipboard
      .writeText(content)
      .then(() => {
        dispatch(
          appStoreActions.notification({
            isActive: true,
            mode: 'success',
            message: 'Платежный адрес успешно скопирован.',
          }),
        );
      })
      .catch((error) => {
        dispatch(
          appStoreActions.notification({
            isActive: true,
            mode: 'error',
            message: `Неудалось скопировать адрес. Ошибка: ${error}`,
          }),
        );
      });
  };

  return (
    <div>
      <p>{content}</p>
      <button onClick={handleCopyToClipboard}>Copy to Clipboard</button>
    </div>
  );
};
