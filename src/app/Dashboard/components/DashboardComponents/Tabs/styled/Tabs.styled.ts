import styled, { css } from 'styled-components';

export const TabWrapper = styled.div<{ isCurrent?: boolean }>`
  background-image: linear-gradient(to right bottom, rgb(56 125 116), rgb(56 125 116));
  width: 70px;
  min-width: max-content;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 11px;
  border-start-end-radius: 20px;
  border-start-start-radius: 20px;
  color: white;
  cursor: pointer;
  transition: box-shadow 0.1s ease;
  font-size: 15px;

  -webkit-box-shadow: 0px 0px 15px 2px rgba(21, 170, 178, 0.7);
  -moz-box-shadow: 0px 0px 15px 2px rgba(21, 171, 178, 0.7);
  box-shadow: 0px 0px 15px 2px rgba(21, 171, 178, 0.7);

  ${({ isCurrent }: { isCurrent?: boolean }) =>
    isCurrent
      ? css`
          background-image: linear-gradient(to right bottom, rgb(146 0 82), rgb(11 160 158 / 94%));
          -webkit-box-shadow: 0px 0px 15px 2px rgba(219, 54, 139, 0.92);
          -moz-box-shadow: 0px 0px 15px 2px rgba(219, 54, 139, 0.92);
          box-shadow: 0px 0px 15px 2px rgba(219, 54, 139, 0.92);
          font-weight: 700;
        `
      : css`
          &::before {
            background-image: linear-gradient(to right bottom, rgb(146, 0, 82), rgb(11, 160, 158, 0.94));
          }
          :hover {
            background-image: linear-gradient(to right bottom, rgb(146 0 82), rgb(11 160 158 / 94%));
            -webkit-box-shadow: 0px 0px 15px 2px rgba(219, 54, 139, 0.92);
            -moz-box-shadow: 0px 0px 15px 2px rgba(219, 54, 139, 0.92);
            box-shadow: 0px 0px 15px 2px rgba(219, 54, 139, 0.92);
          }
        `}
`;
