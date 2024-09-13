import { H1 } from '../../components/Base';
import { HelloStyled } from './styled/hello.styled';

export const Hello = () => {
  return (
    <HelloStyled>
      <img style={{ width: '90%' }} src="../images/logo/big-logo.png" />
      <H1 fontSize="0" position="absolute" color="white">
        Tonatiuh
      </H1>
    </HelloStyled>
  );
};
