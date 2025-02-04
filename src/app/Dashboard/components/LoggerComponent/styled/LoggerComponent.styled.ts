import styled from 'styled-components';

export const StyledLoggerComponent = styled.div`
  margin: 0 auto;
  width: 100%;
  height: 290px;
  border-radius: 10px;
  background-image: linear-gradient(to bottom right, rgba(7, 20, 23, 0.94), rgb(13, 43, 76));
  border: 3px solid #add6dd;
  -webkit-box-shadow: 0px 0px 15px 2px rgba(21, 170, 178, 0.7);
  -moz-box-shadow: 0px 0px 15px 2px rgba(21, 171, 178, 0.7);
  box-shadow: 0px 0px 15px 2px rgba(21, 171, 178, 0.7);
  /* scroll-behavior: auto; */
`;

export const LoggerWrapper = styled.div`
  position: inherit;
  padding: 20px;
  width: 100%;
  height: 100%;
  -webkit-box-shadow: 0px 1px 17px 0px rgba(21, 171, 178, 0.7) inset;
  -moz-box-shadow: 0px 1px 17px 0px rgba(21, 171, 178, 0.7) inset;
  box-shadow: 0px 1px 17px 0px rgba(21, 171, 178, 0.7) inset;
`;
