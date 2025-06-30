import styled from 'styled-components';

export const StyledLoggerComponent = styled.div`
  width: 60%;
  height: 100%;
  min-height: 315px;
  background: rgb(24, 24, 24);
  border-radius: 10px;
  color: rgb(21, 178, 63);
  font-family: 'Courier New', Courier, 'Lucida Console', monospace;
  padding: 20px;
  margin: 10px 50px;
  overflow-y: auto;
  
  ::-webkit-scrollbar {
    opacity: 0;
  }

  ::-webkit-scrollbar-thumb {
    opacity: 0;
  }
  ::-webkit-scrollbar-track {
    opacity: 0;
  }
`;
