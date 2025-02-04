import styled, { css } from 'styled-components';
import { TypeButton } from '../../../../app/Landing/types';

const primaryL = css`
  background-color: #999eca;

  :hover {
    background-color: #b7bce4;
  }

  :active {
    background-color: #5b619b;
    p {
      color: #b7bce4;
    }
  }
`;

const primaryB = css`
  background-image: linear-gradient(to bottom right, rgba(32, 124, 145, 0.94), rgb(12, 126, 123));
  border-radius: 10px;
  :hover {
    background-image: linear-gradient(to bottom right, rgba(47, 201, 186, 0.94), rgb(12, 126, 109));

    box-shadow: 0px 5px 10px rgba(11, 144, 111, 0.68);
  }

  :active {
    background-color: #4634c6;
  }
`;

const secondaryL = css`
  background-color: transparent;
  border: 1px solid rgba(255, 255, 255, 0.5);

  :hover {
    background-color: rgba(255, 255, 255, 0.2);
  }

  :active {
    border: 1px solid rgba(255, 255, 255);
  }
`;

const disabledPrimaryL = css`
  background-color: #b7bce4;
  color: #eaedfe;
`;
const disabledPrimaryB = css`
  background-color: #b1a5ff;
  color: #e0e3ff;
`;
const disabledSecondaryL = css`
  background-color: #eaedfe;
  border: 1px solid #b7bce4;
  color: #b7bce4;
`;

export const StyledButton = styled.div<{ type: TypeButton; disabled?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 17px 16px 14px;

  font-family: 'Mazzard';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.035em;
  text-transform: uppercase;

  color: white;
  border: none;
  cursor: pointer;

  ${({ type, disabled }: { type: TypeButton; disabled?: boolean }) =>
    type === 'primary-l'
      ? disabled
        ? disabledPrimaryL
        : primaryL
      : type === 'primary-b'
      ? disabled
        ? disabledPrimaryB
        : primaryB
      : disabled
      ? disabledSecondaryL
      : secondaryL};

  @media screen and (max-width: 720px) {
    width: inherit;
  }
`;
