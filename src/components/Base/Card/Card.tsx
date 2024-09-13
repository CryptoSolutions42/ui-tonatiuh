import styled from 'styled-components';

const StyledCard = styled.div`
  border-radius: 10px;
  background-image: linear-gradient(to bottom right, #1d4898, #137976);
  height: max-content;
  padding: 50px;
  color: white;

  :hover {
    background-image: linear-gradient(to bottom right, #986411, #791d0b);
    -webkit-box-shadow: -1px 3px 26px -1px rgba(232, 100, 12, 0.62);
    -moz-box-shadow: -1px 3px 26px -1px rgba(232, 100, 12, 0.62);
    box-shadow: -1px 3px 26px -1px rgba(232, 100, 12, 0.62);
  }
`;

export const Card = ({ children }: { children: JSX.Element }) => {
  return <StyledCard>{children}</StyledCard>;
};
