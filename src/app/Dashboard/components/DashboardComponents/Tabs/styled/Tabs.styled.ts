import styled, { css } from 'styled-components';

export const TabWrapper = styled.div<{ isCurrent?: boolean }>`
  background: rgba(50, 52, 53, 0.94);
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

  -webkit-box-shadow: 0px 0px 15px 2px rgba(145, 145, 145, 0.7);
  -moz-box-shadow: 0px 0px 15px 2px rgba(145, 145, 145, 0.7);
  box-shadow: 0px 0px 15px 2px rgba(145, 145, 145, 0.7);

  ${({ isCurrent }: { isCurrent?: boolean }) =>
    isCurrent
      ? css`
          background: rgba(132, 139, 142, 0.94);
          -webkit-box-shadow: 0px 0px 15px 2px rgba(37, 82, 112, 0.7);
          -moz-box-shadow: 0px 0px 15px 2px rgba(37, 82, 112, 0.7);
          box-shadow: 0px 0px 15px 2px rgba(37, 82, 112, 0.7);
          font-weight: 700;
        `
      : css`
          &::before {
            background: rgba(132, 139, 142, 0.94);
          }
          :hover {
            background: rgba(132, 139, 142, 0.94);
            -webkit-box-shadow: 0px 0px 15px 2px rgba(37, 82, 112, 0.7);
            -moz-box-shadow: 0px 0px 15px 2px rgba(37, 82, 112, 0.7);
            box-shadow: 0px 0px 15px 2px rgba(37, 82, 112, 0.7);
          }
        `}
`;
